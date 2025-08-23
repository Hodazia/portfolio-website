// write about the Blog section have atleast two blogs to display!

export const blogPosts = [
    {
        id:1,
        'title':'Unlocking TypeScript with generics',
        'date':'21 July,2025',
        'content':`Have you ever found yourself writing functions that could work with different data types, but you end up
         sacrificing type safety or repeating a lot of code? ....`,
        'link':'https://medium.com/@zia23hoda/unlock-type-safety-a-practical-guide-to-typescript-generics-ab630c25daef'
    },
    {
        id:2,
        'title':'SSR vs CSR vs SSG',
        'date':'23 August,2025',
        'content':`Before any frontend frameworks like React, next js or vuejs or anything else,
         we used to write all our code in html and link js ....`,
        'link':'https://medium.com/@zia23hoda/csr-vs-ssr-vs-ssg-051e69cdb5cd'
    }
]

export const Blogs = () => {
    return (
        <>
        <div className="relative w-full flex-grow">
        <div className="max-w-3xl sm:w-3/4 mx-auto px-6">
        <section className="py-10">
            <div className="mb-8">
                    <h2 className="text-2xl font-medium mb-3 
                    bg-gradient-to-r from-blue-400 to-cyan-600 
                    bg-clip-text text-transparent">
                        Blogs
                    </h2>
                    <p className="text-gray-400">
                      I write about software development, sharing insights and experiences from my journey in tech.
                    </p>
            </div>
            <div className="flex flex-col gap-4 ">
                    {blogPosts.map((post) => (
                        <a
                            key={post.id}
                            href={post.link}
                            target="_blank"
                            
                            className="block p-6 rounded-lg 
                            border border-[#232323] bg-[#1a1a1a]
                             hover:bg-gradient-to-r from-blue-800 to-indigo-900
                             hover:scale-105
                            transition-all duration-600"
                        >
                            <div className="flex flex-col ">
                                <h3 className="text-lg font-semibold 
                                bg-gradient-to-r 
                                from-blue-400
                                to-cyan-600 bg-clip-text text-transparent 
                                mb-2">
                                 {post.title}
                                </h3>
                                {/* Have a content section too! */}
                                <p className="text-white ">
                                    {post.content}
                                </p>
                                <p className="text-xs py-2 text-gray-500">{post.date}</p>
                                </div>
                                </a>
                            ))}
                        </div>
                        
        </section>
        </div>
        </div>
        </>
    )
}