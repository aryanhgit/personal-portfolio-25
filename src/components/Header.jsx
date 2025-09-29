import React from "react";

const Header = () => {
    return (
        <header className="flex text-sm text-gray-800 bg-white shadow-sm gap-4 p-5 px-10 m-4">
            <div className="flex-none items-left gap-4 py-10 w-full md:w-200 px-5 md:px-25">
                <div className="flex gap-4 flex-wrap justify-center md:justify-start">
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
                        Twitter
                    </a>
                </div>
                <h1 className="text-3xl my-7">Aryan Raj</h1>
                <p>
                    I'm a full stack software engineer and Computer Science student, currently pursuing my B.Tech at Dr B R Ambedkar National Institute of Technology Jalandhar from India. I possess strong foundations in C++, Data Structures, and Algorithms, which underpin my development work.
                </p>
                <br />
                <p>
                    I am driven by the goal of building and shipping cool, useful products, specializing in modern full-stack development using React alongside backend frameworks like Django and Flask with MySQL. I am actively seeking a Internships to apply these skills to real-world projects, embrace new technologies, and continuously tackle new technical challenges in a dynamic environment.
                </p>
            </div>

        </header>
    );
};

export default Header;