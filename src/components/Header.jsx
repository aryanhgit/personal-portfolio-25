import React from "react";

const Header = () => {
    return (
        <header className="flex text-sm text-gray-800 bg-white shadow-sm gap-4 p-5 px-10 m-4">
            <div className="flex-none items-left gap-4 px-25 py-10 w-200">
                <div className="flex gap-4 flex-wrap">
                    <a
                        href="https://github.com/aryanhgit"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="underline-offset-4 underline"
                    >
                        GitHub
                    </a>
                        //
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="underline-offset-4 underline"
                    >
                        LinkedIn
                    </a>
                        //
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="underline-offset-4 underline"
                    >
                        LinkedIn
                    </a>
                </div>
                <h1 className="text-3xl my-7">Aryan Raj</h1>
                <p>
                    I'm a full stack software engineer from India. I'm passionate about building and shipping cool and useful products. I use React, Typescript, Next.js and Tanstack Start to build opensource projects.
                </p>
                <br />
                <p>
                    I'm inspired to learn new things and tackle new challenges. I'm currently working on a Opensource Google Calendar alternative called One and i have contributed to various opensource projects including athas, opencut, mail0 and more. I'm currently studying at Dr.APJ Abdul Kalam Technical University pursuing my B.Tech in Computer Science and Engineering.
                </p>
            </div>

        </header>
    );
};

export default Header;