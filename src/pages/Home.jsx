import Badge from '../components/ui/badge'
import Button from '../components/ui/button'
import { Twitter, Github, BookOpen } from 'lucide-react'
import profile from '../assets/profile-photo.png'


const Home = () => {
  const skills = [
    'React', 'JavaScript', 'TypeScript', 
    'Node.js', 'MongoDB', 'PostgreSQL', 'MERN', 'Testing'
  ]

  const recentArticles = [
    {
      title: "JavaScript Interview Part 1 : Cookie Storage, Local Storage and Session Storage",
      date: "March 23, 2025",
      url:"sdvs"
    },
    {
      title: "TypeScript Generics",
      date: "July 21, 2025",
      url:"https://medium.com/@zia23hoda/unlock-type-safety-a-practical-guide-to-typescript-generics-ab630c25daef"
    },
    {
      title: "All about arrays in Javascript",
      date: "March 4, 2025"
    },
    {
      title: "Cohesion and Coupling in Object Oriented Programming",
      date: "January 9, 2025"
    }
  ]

  return (
    <>
    <div className='min-h-screen bg-white pt-20'>
        <div  className='max-w-4xl mx-auto px-6 py-12'>
            <section className='mb-20'>
                <div className='flex flex-col lg:flex-row items-center justify-between gap-12'> 
                    {/*left side portfolio image */}
                    <div className="flex-shrink-0">
                        <div className="relative">
                            <img 
                            src={profile}
                            alt="Profile"
                            className="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-3xl shadow-2xl"
                            />
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </div>

                        {/* Center - Name and Description */}
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-2">
                            Hi, I'm Ziaul
                        </h1>
                        <p className="text-portfolio-text-muted text-lg mb-6">
                            Front End Engineer | Full Stack Engineer
                        </p>
                        <p className="text-foreground text-lg leading-relaxed max-w-2xl">
                            
                        </p>
                    </div>

                     {/* Right side - Social Media */}
                    <div className="flex lg:flex-col gap-4">
                        <Button
                            variant="ghost"
                            size="lg"
                            className="p-3 hover:bg-portfolio-card hover:text-primary transition-colors"
                            onClick={() => window.open('https://x.com/zia2402', '_blank')}
                        >
                            <Twitter className="w-6 h-6" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="lg"
                            className="p-3 hover:bg-portfolio-card hover:text-primary transition-colors"
                            onClick={() => window.open('https://medium.com/@zia23hoda', '_blank')}
                        >
                            <BookOpen className="w-6 h-6" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="lg"
                            className="p-3 hover:bg-portfolio-card hover:text-primary transition-colors"
                            onClick={() => window.open('https://github.com/Hodazia', '_blank')}
                        >
                            <Github className="w-6 h-6" />
                        </Button>
                    </div>

                </div>
            </section>

              {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-6">skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary"
                className="px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        {/* Recent Articles Section */}
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-8">checkout my technical articles</h2>
          <div className="space-y-6">
            {recentArticles.map((article, index) => (
              <div 
                key={index}
                onClick={() => { window.open("https://medium.com/@zia23hoda/unlock-type-safety-a-practical-guide-to-typescript-generics-ab630c25daef", '_blank')}}
                className="flex items-center justify-between py-4 border-b border-border last:border-b-0 group cursor-pointer hover:bg-portfolio-card/30 rounded-lg px-2 transition-colors"
              >
                <h3 className="text-foreground font-medium group-hover:text-primary transition-colors flex-1">
                  {article.title}
                </h3>
                <span className="text-portfolio-text-muted text-sm ml-4 flex items-center gap-2">
                  {article.date}
                  <svg 
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M7 17L17 7M17 7H7M17 7V17" 
                    />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </section>
        </div>
    </div>
    </>
  )
}

export default Home
