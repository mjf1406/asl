"use client";

import React, { useState, useEffect, Suspense } from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { signs } from "@/lib/constants";
import { getSignIcon } from "@/app/asl-icons/getSignIcon";
import Link from "next/link";

/**
 * Sign type from your snippet:
 * type Sign = {
 *   id: number;
 *   sign: string;
 *   meaning: string;
 *   category: Category;
 *   author: string;
 *   author_links: string[]; // changed to array
 * };
 */

/**
 * 1) Filter out signs that have an author.
 * 2) Group the signs by author so each author only appears once.
 * 3) Merge all author_links for that author (removing duplicates).
 */
function groupByAuthor() {
    const authoredSigns = signs.filter((sign) => sign.author.trim() !== "");

    const authorMap: Record<
        string,
        { author_links: string[]; signs: typeof authoredSigns }
    > = {};

    for (const sign of authoredSigns) {
        // If we haven't seen this author, initialize
        if (!authorMap[sign.author]) {
            authorMap[sign.author] = {
                author_links: [...(sign.author_links || [])],
                signs: [sign],
            };
        } else {
            // Merge sign's links with existing ones, remove duplicates via Set
            const combinedLinks = new Set([
                ...authorMap[sign.author].author_links,
                ...(sign.author_links || []),
            ]);
            authorMap[sign.author].author_links = Array.from(combinedLinks);
            authorMap[sign.author].signs.push(sign);
        }
    }

    // Convert the map into an array of objects: { author, author_links, signs }
    return Object.entries(authorMap).map(
        ([author, { author_links, signs }]) => ({
            author,
            author_links,
            signs,
        })
    );
}

type SVGComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export default function AuthorsPage() {
    const authorGroups = groupByAuthor();

    // We'll store each sign's lazily loaded component here
    const [signComponents, setSignComponents] = useState<
        Record<number, React.LazyExoticComponent<SVGComponent> | null>
    >({});

    // Load only the sign icons for those that have an author (slim optimization).
    // Alternatively, you could load them all or load them on-demand.
    useEffect(() => {
        async function loadAuthoredIcons() {
            const tasks: Array<
                Promise<{
                    id: number;
                    component: React.LazyExoticComponent<SVGComponent>;
                }>
            > = [];
            const authoredSignIds: number[] = [];

            // Collect all sign IDs from the grouped authors
            authorGroups.forEach((group) => {
                group.signs.forEach((sign) => authoredSignIds.push(sign.id));
            });

            // For each authored sign, fetch its icon
            for (const id of authoredSignIds) {
                const foundSign = signs.find((s) => s.id === id);
                if (foundSign) {
                    tasks.push(
                        getSignIcon(foundSign.sign)
                            .then(
                                (
                                    component: React.LazyExoticComponent<SVGComponent> | null
                                ) =>
                                    component && {
                                        id: foundSign.id,
                                        component,
                                    }
                            )
                            .then((result) => {
                                if (result) return result;
                                throw new Error(
                                    `Failed to load icon for sign ${foundSign.sign}`
                                );
                            })
                    );
                }
            }

            const results = await Promise.all(tasks);
            const iconsMap: Record<
                number,
                React.LazyExoticComponent<SVGComponent>
            > = {};
            for (const { id, component } of results) {
                iconsMap[id] = component;
            }
            setSignComponents(iconsMap);
        }

        loadAuthoredIcons();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // run once on mount

    return (
        <section className="p-4 md:p-8">
            <div className="grid gap-4 grid-cols-2">
                {authorGroups.map(({ author, author_links, signs }, index) => (
                    <Card
                        key={index}
                        className="pb-2"
                    >
                        <CardHeader>
                            <CardTitle>{author}</CardTitle>
                            <CardDescription>
                                {signs.length} icon{signs.length > 1 ? "s" : ""}
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="px-4">
                            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                                {signs.map((sign) => {
                                    const SignSVG = signComponents[sign.id];
                                    return (
                                        <div
                                            key={sign.id}
                                            className="flex flex-col items-center justify-center rounded-md border p-2"
                                        >
                                            <Suspense
                                                fallback={<div>Loading...</div>}
                                            >
                                                {SignSVG ? (
                                                    <SignSVG
                                                        width="30"
                                                        height="30"
                                                        style={{
                                                            fill: "#000000",
                                                        }}
                                                        aria-label={`ASL sign for ${sign.meaning}`}
                                                    />
                                                ) : (
                                                    <div className="text-xs italic text-muted-foreground">
                                                        Loading...
                                                    </div>
                                                )}
                                            </Suspense>
                                            <span className="text-sm font-medium">
                                                {sign.meaning}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </CardContent>

                        <CardFooter className="flex flex-col">
                            <div className="text-sm -mb-1">Meet the Artist</div>
                            {author_links.length > 0 && (
                                <div className="-space-y-2">
                                    {author_links.map((link, linkIndex) => (
                                        <div key={linkIndex}>
                                            <Link
                                                href={link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-xs hover:underline"
                                            >
                                                {link}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
}
