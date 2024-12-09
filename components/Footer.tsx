import { Button } from "@/components/ui/button";
import { Code2Icon, CodeIcon, Palette } from "lucide-react";

const Footer = () => {
    // Define the links with label in plain English
    const links = [
        {
            href: "https://mr-monkey-portfolio.vercel.app/",
            label: "Meet the Dev",
            icon: <CodeIcon className="h-4 w-4" />,
        },
        {
            href: "", // TODO: Need artist's LinkedIn or Portfolio
            label: "Meet the Artist",
            icon: <Palette className="h-4 w-4" />,
        },
        {
            href: "https://github.com/mjf1406/asl",
            label: "Source Code",
            icon: <Code2Icon className="h-4 w-4" />,
        },
    ];

    return (
        <footer className="flex w-full flex-col items-center justify-center gap-6 py-6">
            <div className="flex gap-4">
                {links.map(({ href, label, icon }) => (
                    <Button
                        key={href}
                        variant="ghost"
                        size="sm"
                        className="flex gap-2 hover:text-foreground"
                        asChild
                    >
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {icon}
                            <span>{label}</span>
                        </a>
                    </Button>
                ))}
            </div>

            <div className="text-2xs font-[family-name:var(--font-geist-mono)] flex flex-col gap-2 items-center justify-center">
                <div className="">
                    Code is © {new Date().getFullYear()} MIT Licensed
                </div>
                <div className="">
                    Art is © {new Date().getFullYear()} CC BY-NC 4.0 Licensed
                </div>
            </div>
        </footer>
    );
};

export default Footer;
