
import { Blogs } from "./pages/Blogs";
import { ContactMe } from "./pages/Contact";
import {Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { TechStack } from "./pages/TechStack";

const App = () => {

  return (
    <>
    <main className="relative min-h-screen w-full flex flex-col">
        {/* Bottom-most solid black */}
        <div className="fixed inset-0 bg-[#0a0a0a] -z-50 pointer-events-none">
          
        </div>

       
        <div className="fixed inset-0 -z-10 pointer-events-none">
        
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/[0.03] via-transparent to-purple-500/[0.03]"></div>

          {/* white grid pattern  */}
          <div className="absolute inset-0 opacity-10
            bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            bg-[length:44px_44px]"
          ></div>
        </div>

        {/* Main content */}
        <div className="relative z-10 w-full">
          <Home />
          <Projects />
          <TechStack />
          <Blogs />
          <ContactMe />
        </div>
      </main>
    </>
  )

}

export default App;