/** @format */

import { ExternalLink, TriangleAlert } from "lucide-react";
import ASLGrid from "../components/ASLGrid";
import Footer from "../components/Footer";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import ArtistsGrid from "@/components/ArtistsGrid";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center p-5 bg-background">
            <h1 className="flex gap-5 justify-center items-center text-4xl font-[family-name:var(--font-fredoka)]">
                {/* <div className="rounded-full bg-white bg-opacity-40 p-3"> */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    width={70}
                    height={70}
                >
                    <defs>
                        <linearGradient
                            id="leftGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop
                                offset="0%"
                                stopColor="#f9ece6"
                            />
                            <stop
                                offset="20%"
                                stopColor="#f0d3c5"
                            />
                            <stop
                                offset="40%"
                                stopColor="#e3b38d"
                            />
                            <stop
                                offset="60%"
                                stopColor="#bc8d57"
                            />
                            <stop
                                offset="80%"
                                stopColor="#a96c4f"
                            />
                            <stop
                                offset="100%"
                                stopColor="#704733"
                            />
                        </linearGradient>
                    </defs>
                    <path
                        d="M156.6 46.3c7.9-15.8 1.5-35-14.3-42.9s-35-1.5-42.9 14.3L13.5 189.4C4.6 207.2 0 226.8 0 246.7L0 256c0 70.7 57.3 128 128 128l72 0 8 0 0-.3c35.2-2.7 65.4-22.8 82.1-51.7c8.8-15.3 3.6-34.9-11.7-43.7s-34.9-3.6-43.7 11.7c-7 12-19.9 20-34.7 20c-22.1 0-40-17.9-40-40s17.9-40 40-40c14.8 0 27.7 8 34.7 20c8.8 15.3 28.4 20.5 43.7 11.7s20.5-28.4 11.7-43.7c-12.8-22.1-33.6-39.1-58.4-47.1l80.8-22c17-4.6 27.1-22.2 22.5-39.3s-22.2-27.1-39.3-22.5L194.9 124.6l81.6-68c13.6-11.3 15.4-31.5 4.1-45.1S249.1-3.9 235.5 7.4L133.6 92.3l23-46z"
                        fill="url(#leftGradient)"
                    />

                    <defs>
                        <linearGradient
                            id="rightGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop
                                offset="0%"
                                stopColor="#f9ece6"
                            />
                            <stop
                                offset="20%"
                                stopColor="#f0d3c5"
                            />
                            <stop
                                offset="40%"
                                stopColor="#e3b38d"
                            />
                            <stop
                                offset="60%"
                                stopColor="#bc8d57"
                            />
                            <stop
                                offset="80%"
                                stopColor="#a96c4f"
                            />
                            <stop
                                offset="100%"
                                stopColor="#704733"
                            />
                        </linearGradient>
                    </defs>
                    <path
                        d="M483.4 465.7c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l85.9-171.7c8.9-17.8 13.5-37.4 13.5-57.2l0-9.3c0-70.7-57.3-128-128-128l-72 0-8 0 0 .3c-35.2 2.7-65.4 22.8-82.1 51.7c-8.9 15.3-3.6 34.9 11.7 43.7s34.9 3.6 43.7-11.7c7-12 19.9-20 34.7-20c22.1 0 40 17.9 40 40s-17.9 40-40 40c-14.8 0-27.7-8-34.7-20c-8.9-15.3-28.4-20.5-43.7-11.7s-20.5 28.4-11.7 43.7c12.8 22.1 33.6 39.1 58.4 47.1l-80.8 22c-17.1 4.7-27.1 22.2-22.5 39.3s22.2 27.1 39.3 22.5l100.7-27.5-81.6 68c-13.6 11.3-15.4 31.5-4.1 45.1s31.5 15.4 45.1 4.1l101.9-84.9-23 46z"
                        fill="url(#rightGradient)"
                    />
                </svg>
                {/* </div> */}
                ASL for Silent Time
            </h1>
            <p className="max-w-xl mt-10 mb-5 text-center w-full">
                Welcome!{" "}
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger className="cursor-help">
                            <span className="border-b border-1 border-dotted border-black">
                                We
                            </span>
                        </TooltipTrigger>
                        <TooltipContent>
                            A teacher who loves to program and a freelance
                            Fiverr artist
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>{" "}
                made this site to give these ASL resources away for free and to
                make them easy to print in any way you might want. The code is
                published under the{" "}
                <a
                    href="https://opensource.org/license/mit"
                    className="link"
                >
                    MIT License
                </a>{" "}
                and the images are published under{" "}
                <a
                    href="https://creativecommons.org/licenses/by-nc/4.0/deed.en"
                    className="link"
                >
                    CC BY-NC 4.0
                </a>{" "}
                (non-commercial). Enjoy!
            </p>
            <p className="mb-5">
                Please submit feedback{" "}
                <Link
                    className="link"
                    href="https://docs.google.com/forms/d/e/1FAIpQLScMUvCMbTa_TYFHoaWJFMSDukShHBcqZaw3mb1Jp8i6Yw5azw/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    here <ExternalLink className="inline w-4 h-4" />
                </Link>
                .
            </p>
            <div className="block md:hidden">
                <div className="flex max-w-2xl items-center justify-center gap-2 rounded-xl bg-yellow-400/50 border-2 border-yellow-600">
                    <div className="rounded-l-xl bg-yellow-400 p-4">
                        <TriangleAlert size={48} />
                    </div>
                    <div className="pr-4 font-medium">
                        <span className="font-[family-name:var(--font-fredoka)]">
                            It looks like you&apos;re on a phone!
                        </span>
                        <p className="text-xs">
                            For best results, please print and/or download from
                            a large-screen device, like a computer or tablet.
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className="mt-5 flex max-w-2xl items-center justify-center gap-2 rounded-xl bg-yellow-400/50 border-2 border-yellow-600">
                <div className="rounded-l-xl bg-yellow-400 p-4">
                    <TriangleAlert size={48} />
                </div>
                <div className="pr-4 font-medium">
                    <span className="font-[family-name:var(--font-fredoka)]">
                        The below images are placeholders for testing!
                    </span>
                    <p className="text-xs">
                        I&apos;m currently looking for a digital artist to make
                        upwards of 60 SVG icons, each for a unique ASL sign. I
                        will not pay you and you must be willing to release your
                        art for free under the CC BY-NC 4.0 license.
                    </p>
                </div>
            </div> */}
            <main className="flex flex-col row-start-2 items-center sm:items-start">
                <ASLGrid />
            </main>
            <p>
                Please submit feedback{" "}
                <a
                    className="link"
                    href="https://docs.google.com/forms/d/e/1FAIpQLScMUvCMbTa_TYFHoaWJFMSDukShHBcqZaw3mb1Jp8i6Yw5azw/viewform?usp=header"
                >
                    here
                </a>
                .
            </p>
            <div className="max-w-xl mt-10">
                <h2 className="text-center text-2xl">
                    Supplementary Materials
                </h2>
                <p className="mt-3">
                    Enjoy any of the pre-made resources to help your kids learn
                    all the signs on this site!
                </p>
                <div className="flex gap-5 justify-center items-center w-full mx-auto mt-5">
                    <Link href={""}>
                        <Image
                            width={300}
                            height={100}
                            src={
                                "https://www.gimkit.com/client/img/svgLogo.svg"
                            }
                            alt="GimKit"
                            className="hover:bg-secondary p-3 rounded-2xl"
                        />
                    </Link>
                    <Link href={""}>
                        <Image
                            width={300}
                            height={100}
                            src={
                                "https://upload.wikimedia.org/wikipedia/commons/4/4d/Kahoot_Logo.svg"
                            }
                            alt="Kahoot!"
                            className="hover:bg-secondary p-3 rounded-2xl"
                        />
                    </Link>
                    <Link href={""}>
                        <Image
                            width={300}
                            height={100}
                            src={
                                "https://logosarchive.com/wp-content/uploads/2022/01/Blooket-logo.svg"
                            }
                            alt="GimKit"
                            className="hover:bg-secondary p-3 rounded-2xl"
                        />
                    </Link>
                    <Link href={""}>
                        <Image
                            width={300}
                            height={100}
                            src={
                                "https://upload.wikimedia.org/wikipedia/commons/0/06/Quizlet_Logo.svg"
                            }
                            alt="Quizlet"
                            className="hover:bg-secondary p-3 rounded-2xl"
                        />
                    </Link>
                </div>
            </div>
            <div className="max-w-xl mt-10">
                <h2 className="text-center text-2xl">Meet the Artists</h2>
                <ArtistsGrid />
            </div>
            <div className="mb-5 max-w-xl mt-10">
                <h2 className="text-center text-2xl">Want to Contribute?</h2>
                <p className="mt-3">
                    The more, the merrier! Be sure to include the sign meaning
                    when you contact me. If you want to be credited, provide
                    your name and any links you want associated with your SVGs.
                    Then, choose one of the below!{" "}
                </p>
                <ol className="mt-2 list-decimal list-inside">
                    <li className="ml-3">
                        Submit a pull request on GitHub: put your SVG(s) in{" "}
                        <Link
                            className="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={
                                "https://github.com/mjf1406/asl/tree/main/app/asl-icons"
                            }
                        >
                            /app/asl-icons{" "}
                            <ExternalLink className="inline w-4 h-4" />
                        </Link>{" "}
                        and add the info to the signs object array in{" "}
                        <Link
                            className="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={
                                "https://github.com/mjf1406/asl/blob/main/lib/constants.ts"
                            }
                        >
                            /app/lib/constants.ts{" "}
                            <ExternalLink className="inline w-4 h-4" />
                        </Link>
                        .
                    </li>
                    <li className="ml-3">
                        Email me your SVG(s) and the other information: michael
                        dot fitzgerald dot 1406 at gmail.com.
                    </li>
                    <li className="ml-3">
                        Message me on Reddit with the SVG(s) download link(s)
                        and the other information:{" "}
                        <Link
                            className="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={"https://www.reddit.com/user/teachcodecycle/"}
                        >
                            teachcodecycle{" "}
                            <ExternalLink className="inline w-4 h-4" />
                        </Link>
                    </li>
                </ol>
            </div>
            <div className="max-w-xl">
                <div className="space-y-4 mt-10">
                    <h2 className="text-center text-2xl">Silence Is Golden</h2>
                    <p>
                        I first thought of using sign language during silent
                        time when I learned about the{" "}
                        <a
                            href="https://en.wikipedia.org/wiki/Irrelevant_speech_effect"
                            className="link"
                        >
                            Irrelevant Speech Effect
                        </a>
                        . This led me to create{" "}
                        <a
                            href="https://mr-monkey-portfolio.vercel.app/blog/the-web-apps-that-i-have-built#magnitext"
                            className="link"
                        >
                            MagniText
                        </a>{" "}
                        <span></span>(
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger className="cursor-help">
                                    <span className="border-b border-1 border-dotted border-black">
                                        V2 soon!
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent>
                                    I wrote this on 2024/12/9, so...
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        ) because I realized that sometimes I needed to say many
                        more words than just one to my students while staying
                        silent. Neither I nor my students were fluent ASL
                        speakers, so...
                    </p>

                    <p>
                        I decided to try it out at Maple Bear back in 2021, but
                        it didn’t land as well as I had hoped, partly because I
                        didn’t stick with it for whatever reason. However, at
                        Younghoon, I put up the posters without mentioning them
                        at all. One giant poster was next to the SMART Board,
                        and another smaller poster was just under the analog
                        clock.
                    </p>

                    <p>
                        I could have never foreseen what my students would do
                        during the first silent time after I put up those
                        posters. You see, those posters had a title, &quot;Sign
                        Language,&quot; and a subtitle, &quot;For use during
                        Silent Time.&quot; Well, guess what they started doing?
                    </p>

                    <p>
                        They started signing to me! And the funniest part was
                        that I didn’t even know what they were doing! &quot;Why
                        are you moving your hands like that? Are you okay?&quot;
                        In the end, we learned together, and many of them LOVED
                        it. They even asked me to create a Blooket for them to
                        play. Let&apos;s be real — they just wanted an excuse to
                        play more Blooket in class, but you know what?
                        That&apos;s okay! 😂
                    </p>
                </div>
                <div className="space-y-4 mt-10">
                    <h2 className="text-2xl text-center">Donations</h2>
                    <p>
                        If you feel so inclined, we accept donations via{" "}
                        <a
                            className="link"
                            href="https://ko-fi.com/michaelfitzgerald1406"
                        >
                            Ko-fi
                        </a>
                        . If you donated, thank you kindly 😊 All donations go
                        to covering the costs of the icons and hosting the site.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
