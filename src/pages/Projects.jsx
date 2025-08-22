

export const Projects = () => {
    return (
        <>
            <div className="relative w-full flex-grow">
            <div className="max-w-3xl sm:w-3/4 mx-auto px-6">
            <section className="py-20 ">
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
                        <div className="opacity-0">
                            <div className="rounded-lg border flex flex-col gap-6 shadom-sm py-6 
                            text-[#ffffff] group relative border-[#232323]
                            bg-[#1a1a1a] hover:bg-[#242424] transition-all duration-300
                            overflow-hidden">
                                <div class="absolute -inset-[1px] bg-gradient-to-r from-purple-600/20 
                                via-pink-600/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition
                                 duration-500 blur-sm">
                                </div>
                                <a target="_blank" href="">
                                    <div className="">
                                        <div className="">

                                        </div>
                                    </div>
                                </a>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
            </div>
            </div>
        
        </>
    )
}