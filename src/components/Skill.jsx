import React from 'react';

const Skill = () => {
    return (
        <div className="flex text-sm text-gray-800 bg-white shadow-sm gap-4 p-5 px-10 m-4">
            <div className="flex-none items-left gap-4 py-10 w-full md:w-200 px-5 md:px-25">
                <h2 className="text-3xl mb-3">Tech Stack</h2>

                <div className="mb-8">
                    <h3 className="text-xl mb-4 text-gray-800">Languages</h3>
                    <div className="flex flex-wrap gap-3">
                        <div className="flex items-center space-x-2 bg-gray-100 text-gray-800 rounded-lg px-4 py-2 text-sm">
                            <img src="https://api.iconify.design/skill-icons:python-light.svg" className="h-5 w-5" />
                            <span>Python</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-gray-100 text-gray-800 rounded-lg px-4 py-2 text-sm">
                            <img src="https://api.iconify.design/skill-icons:javascript.svg" className="h-5 w-5" />
                            <span>JavaScript</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-gray-100 text-gray-800 rounded-lg px-4 py-2 text-sm">
                            <img src="https://api.iconify.design/skill-icons:cpp.svg" className="h-5 w-5" />
                            <span>C++</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-gray-100 text-gray-800 rounded-lg px-4 py-2 text-sm">
                            <img src="https://api.iconify.design/skill-icons:c.svg" className="h-5 w-5" />
                            <span>C</span>
                        </div>
                        
                    </div>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl mb-4 text-gray-800">Frameworks</h3>
                    <div className="flex flex-wrap gap-3">
                        <div className="flex items-center space-x-2 bg-gray-100 text-gray-800 rounded-lg px-4 py-2 text-sm">
                            <img src="https://api.iconify.design/skill-icons:react-light.svg" className="h-5 w-5" />
                            <span>React</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-gray-100 text-gray-800 rounded-lg px-4 py-2 text-sm">
                            <img src="https://api.iconify.design/skill-icons:vite-light.svg" className="h-5 w-5" />
                            <span>Vite</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-gray-100 text-gray-800 rounded-lg px-4 py-2 text-sm">
                            <img src="https://api.iconify.design/skill-icons:tailwindcss-light.svg" className="h-5 w-5" />
                            <span>Tailwind</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-gray-100 text-gray-800 rounded-lg px-4 py-2 text-sm">
                            <img src="https://api.iconify.design/skill-icons:bootstrap.svg" className="h-5 w-5" />
                            <span>Bootstrap</span>
                        </div>
                        {/* Add more here */}
                        
                    </div>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl mb-4 text-gray-800">Backend</h3>
                    <div className="flex flex-wrap gap-3">
                        <div className="flex items-center space-x-2 bg-gray-100 text-gray-800 rounded-lg px-4 py-2 text-sm">
                            <img src="https://api.iconify.design/skill-icons:flask-light.svg" className="h-5 w-5" />
                            <span>Flask</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-gray-100 text-gray-800 rounded-lg px-4 py-2 text-sm">
                            <img src="https://api.iconify.design/skill-icons:django.svg" className="h-5 w-5" />
                            <span>Django</span>
                        </div>
                        {/* Add more here */}
                        
                    </div>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl mb-4 text-gray-800">Databases</h3>
                    <div className="flex flex-wrap gap-3">
                        <div className="flex items-center space-x-2 bg-gray-100 text-gray-800 rounded-lg px-4 py-2 text-sm">
                            <img src="https://api.iconify.design/skill-icons:mysql-light.svg" className="h-5 w-5" />
                            <span>MySql</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-gray-100 text-gray-800 rounded-lg px-4 py-2 text-sm">
                            <img src="https://api.iconify.design/skill-icons:postgresql-light.svg" className="h-5 w-5" />
                            <span>PostgreSQL</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-gray-100 text-gray-800 rounded-lg px-4 py-2 text-sm">
                            <img src="https://api.iconify.design/skill-icons:sqlite.svg" className="h-5 w-5" />
                            <span>SQLite</span>
                        </div>
                        {/* Add more here */}
                        
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl mb-4 text-gray-800">Tools</h3>
                    <div className="flex flex-wrap gap-3">
                        <div className="flex items-center space-x-2 bg-gray-100 text-gray-800 rounded-lg px-4 py-2 text-sm">
                            <img src="https://api.iconify.design/skill-icons:git.svg" className="h-5 w-5" />
                            <span>Git</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-gray-100 text-gray-800 rounded-lg px-4 py-2 text-sm">
                            <img src="https://api.iconify.design/skill-icons:vscode-light.svg" className="h-5 w-5" />
                            <span>VSCode</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-gray-100 text-gray-800 rounded-lg px-4 py-2 text-sm">
                            <img src="https://api.iconify.design/skill-icons:postman.svg" className="h-5 w-5" />
                            <span>Postman</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-gray-100 text-gray-800 rounded-lg px-4 py-2 text-sm">
                            <img src="https://api.iconify.design/skill-icons:bash-light.svg" className="h-5 w-5" />
                            <span>Bash</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-gray-100 text-gray-800 rounded-lg px-4 py-2 text-sm">
                            <img src="https://api.iconify.design/skill-icons:ubuntu-light.svg" className="h-5 w-5" />
                            <span>Ubuntu</span>
                        </div>
                        {/* Add more here */}
                    </div>
                </div>

                {/* Add more categories if needed */}

            </div>
        </div>
    );
};

export default Skill;