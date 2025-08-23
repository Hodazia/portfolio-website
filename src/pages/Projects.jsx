import React from 'react';
import { Github, Link} from "lucide-react";
import Zenchat from "../assets/PROJECTIMG/ZenChat.png"
import CardVault from "../assets/PROJECTIMG/CardVault.png"
import DailyBrew from "../assets/PROJECTIMG/dailybrew.png"
import Virtualpay from "../assets/PROJECTIMG/dashpreview.png"
import Resumeroast from "../assets/PROJECTIMG/roastresume.png"
import ClickyDrop from "../assets/PROJECTIMG/clickydrop.png"

export const PROJECTS = [
    {
        id: 1,
        title: "CARDVAULT",
        description: "Your Personal Hub for Curated Digital Content",
        technologies: ["ReactJS", "NodeJS", "ExpressJS", "Shadcn UI", "TailwindCSS","MongoDB"],
        status: "finished",
        image: CardVault,
        liveLink: "https://card-vault-iota.vercel.app/",
        githubLink: "https://github.com/Hodazia/CardVault"
    },
    {
        id: 2,
        title: "ZENCHAT",
        description: "Room based web chat App",
        technologies: ["ReactJS", "NodeJS", "TailwindCSS", "Web Sockets"],
        status: "finished",
        image: Zenchat,
        liveLink: "https://zen-chat-pcpt.vercel.app/",
        githubLink: "https://github.com/Hodazia/ZenChat"
    },
    {
        id: 3,
        title: "VIRTUAL PAY",
        description: "Virtual payment App with features like real ones",
        technologies: ["ReactJS", "NodeJS", "TailwindCSS", "MongoDB","Express JS"],
        status: "finished",
        image: Virtualpay,
        liveLink: "https://paytm-payment-eta.vercel.app/",
        githubLink: "https://github.com/Hodazia/Paytm-payment"
    },
    {
        id: 4,
        title: "ResumeRoast",
        description: "Roast your resume accordingly to ur standards",
        technologies: ["ReactJS", "NodeJS", "TailwindCSS", "OpenAI"],
        status: "finished",
        image: Resumeroast,
        liveLink: "https://roast-my-resume-lilac.vercel.app/",
        githubLink: "https://github.com/Hodazia/resume-roast"
    },
    {
        id: 5,
        title: "ClickyDrop",
        description: "A one place for all your important links",
        technologies: ["ReactJS", "NodeJS", "TailwindCSS", "Prisma","Expressjs","PostgreSQL"],
        status: "ongoing",
        image: ClickyDrop,
        liveLink: "https://github.com/Hodazia/Clickydrop",
        githubLink: "https://github.com/Hodazia/Clickydrop"
    },
    {
        id: 6,
        title: "DailyBrew",
        description: "A static frontend coffee store website",
        technologies: ["ReactJS", "TailwindCSS","Framer"],
        status: "finished",
        image: DailyBrew,
        liveLink: "https://daily-brew-six.vercel.app/",
        githubLink: "https://github.com/Hodazia/Daily-Brew"
    },
    
];


export const Projects = () => {
    return (
        <>
            <div className="relative w-full flex-grow">
            <div className="max-w-3xl sm:w-3/4 mx-auto px-6">
            <section className="py-5 ">
                <h2 className="text-2xl font-medium mb-3 bg-gradient-to-r 
                from-blue-400
                to-cyan-600 bg-clip-text text-transparent">
                    Projects
                </h2>
                <p className="text-white mb-2">
                    A collection of my work, frontend , full stack projects 
                    and the works i have been working on!
                </p>
            <div className="flex flex-col gap-2 w-full">
                {/*Cards of projects, */}
                <div className="flex-1 outline-none mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6
                    min-h-[400px]">
                        {/*project cards, have live link, github link and a thumbnail 
                        of the project */}
                        {PROJECTS.map(project => {
                            return (
                                <div key={project.id} className="opacity-100">
                                    <div className="rounded-lg border flex flex-col gap-6 
                                    shadom-sm py-2 text-[#ffffff] group relative border-[#232323]
                                     bg-[#1a1a1a] 
                                     hover:bg-gradient-to-r from-blue-800 to-indigo-900
                                    hover:scale-105
                                     transition-all duration-300
                                      overflow-hidden min-h-[400px]">
                                        <div className="absolute -inset-[1px] bg-gradient-to-r 
                                        from-purple-600/20 via-pink-600/20 to-red-600/20 opacity-0 
                                        group-hover:opacity-100 transition duration-500 blur-sm"></div>
                                        <div className="relative z-10 p-3 flex flex-col h-full 
                                        justify-between">
                                            {/* Thumbnail with a colored placeholder */}
                                            <a href={project.liveLink} target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="block mb-4 h-48 rounded-lg overflow-hidden">
                                                <div 
                                                className="w-full h-full flex items-center border-blue-300 
                                                rounded-2xl border-1px 
                                                justify-center p-4">
                                                    <img src={project.image}
                                                    className='w-full h-full object-cover rounded-2xl border border-blue-300'
                                                     alt='Project image' />  
                                                    {/*project */}
                                                </div>
                                            </a>
                                            {/* Project title, status, and description */}
                                            <div className="flex flex-col flex-grow">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className="text-lg font-semibold">{project.title}</h3>
                                                    <span className={`text-xs px-2 py-1 
                                                        rounded-full capitalize
                                                         ${project.status === "building" ? "bg-yellow-400/20 text-yellow-400" 
                                                         : "bg-green-400/20 text-green-400"}`}>
                                                        {project.status}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-400 mb-4">{project.description}</p>
                                                {/* Technologies */}
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {project.technologies.map((tech, index) => (
                                                        <span key={index}
                                                         className="text-xs px-2 py-1 bg-[#ffffff]
                                                         text-blue-400
                                                          rounded-full">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            {/* Links */}
                                            <div className="flex gap-4">
                                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                                                 className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors">
                                                    <Link />
                                                    Live Link
                                                </a>
                                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" 
                                                className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors">
                                                    <Github />
                                                    GitHub
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>

                </div>

            </div>

        </section>
            </div>
            </div>
        
        </>
    )
}
