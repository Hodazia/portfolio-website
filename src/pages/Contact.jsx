import React from 'react';
import { Github, Mail,Linkedin,FileUser } from 'lucide-react';



const ContactCard = ({ children }) => {
    return (
        <div className="block p-6 rounded-lg border border-[#232323]
         bg-[#1a1a1a] hover:bg-gradient-to-r from-blue-800 to-indigo-900
        hover:scale-105 transition-all duration-300">
            {children}
        </div>
    );
};

export const ContactMe = () => {
    return (
        <>
            <div className="relative w-full flex-grow">
                <div className="max-w-3xl sm:w-3/4 mx-auto px-6">
                    <section className="py-10">
                        <div className="mb-8">
                            <h2 className="text-2xl font-medium mb-3 bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">
                                Contact Me
                            </h2>
                            <p className="text-gray-400">
                                Feel free to reach out to me for collaborations, questions, or just to say hello.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <ContactCard>
                                <a href="mailto:zia23hoda@gmail.com" className="flex items-center space-x-4">
                                    <Mail className='w-6 h-6 text-white'/>
                                    <h3 className="text-lg font-semibold text-white">Email</h3>
                                </a>
                            </ContactCard>
                            <ContactCard>
                                <a href="https://www.linkedin.com/in/ziaul-hoda-30248a319/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4">
                                    <Linkedin className='h-6 w-6 text-white'/>
                                    <h3 className="text-lg font-semibold text-white">LinkedIn</h3>
                                </a>
                            </ContactCard>
                            <ContactCard>
                                <a href="https://github.com/Hodazia" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4">
                                    <Github className='h-6 w-6 text-white'/>
                                    <h3 className="text-lg font-semibold text-white">GitHub</h3>
                                </a>
                            </ContactCard>
                            <ContactCard>
                                <a href="https://drive.google.com/file/d/1zWAi3r28KeAhDabm0jysALQ63n8yf6Hy/view"
                                 target="_blank" rel="noopener noreferrer"
                                  className="flex items-center space-x-4">
                                    <FileUser className='h-6 w-6 text-white'/>
                                    <h3 className="text-lg font-semibold text-white">Resume</h3>
                                </a>
                            </ContactCard>
                        </div>

                        <p 
                        className="bg-gradient-to-r 
                        from-blue-400
                        to-cyan-600 bg-clip-text text-center m-4
                        text-lg text-transparent">
                        Made with 
                            <span className="text-red-400"> ❤️ </span>
                        by Ziaul
                        </p>
                    </section>
                </div>
            </div>
        </>
    );
};
