import ASLGrid from "../components/ASLGrid";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className="flex flex-col gap-2 items-center justify-center p-5 bg-background">
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
            <p className="max-w-xl mt-10 mb-10">
                Welcome! We (a teacher/dev and a teacher/artist) made this site
                in collaboration to give these ASL resources away for free and
                to make them easy to print in any way you might want. See the
                footer to learn more about us. Enjoy! If you feel so inclined,
                send us money on{" "}
                <a
                    className="link"
                    href="https://ko-fi.com/michaelfitzgerald1406"
                >
                    Ko-fi
                </a>
                . We split every donation 50-50.
            </p>
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <ASLGrid />
            </main>
            <Footer />
        </div>
    );
}
