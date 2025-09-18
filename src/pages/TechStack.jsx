
import React from "react";
import { twMerge } from "tailwind-merge";
import AWS from "../assets/TECHSTACK/AWS.png"
import EXPRESS from "../assets/TECHSTACK/Express.png"
import FIGMA from "../assets/TECHSTACK/Figma.png"
import MONGODB from "../assets/TECHSTACK/MongoDB.png"
import NEXT from "../assets/TECHSTACK/Next.js.png"
import NODE from "../assets/TECHSTACK/Node.js.png"
import PG from "../assets/TECHSTACK/PostgresSQL.png"
import POSTMAN from "../assets/TECHSTACK/Postman.png"
import REACT from "../assets/TECHSTACK/React.png"
import TYPESCRIPT from "../assets/TECHSTACK/TypeScript.png"
import NextAuth from "../assets/TECHSTACK/NextAuth.png"
import Prisma from "../assets/TECHSTACK/Prisma.png"
import Docker from "../assets/TECHSTACK/Docker.png"
import Shadcn from "../assets/TECHSTACK/Shadcn.png"

export const TechStack = () => {
  const stack = [
    {
      title: "React",
      src: REACT,
      className: "h-20 w-20",
    },
    {
      title: "Express",
      src: EXPRESS,
      className: "h-20 w-20 bg-white",
    },
    {
      title: "MongoDB",
      src: MONGODB,
      className: "h-20 w-20",
    },
    {
      title: "Postgre SQL",
      src: PG,
      className: "h-20 w-20",
    },
    {
      title: "Postman",
      src: POSTMAN,
      className: "h-20 w-20",
    },
    {
      title: "TypeScript",
      src: TYPESCRIPT,
      className: "h-20 w-20",
    },
    {
      title: "Next.js",
      src: NEXT,
      className: "h-20 w-20 bg-white",
    },
    {
      title: "AWS",
      src: AWS,
      className: "h-20 w-20",
    },
    {
      title: "Figma",
      src: FIGMA,
      className: "h-20 w-20",
    },
    {
      title: "Node",
      src: NODE,
      className: "h-20 w-20",
    },
    {
      title:"NextAuth",
      src: NextAuth,
      className:"h-20 w-20",
    },
    {
      title:"DOCKER",
      src:Docker,
      className:"h-20 w-20 bg-black"
    },
    {
      title:"Prisma",
      src:Prisma,
      className:"h-20 w-20"
    },
    {
      title:"Shadcn",
      src:Shadcn,
      className:"h-20 w-20 bg-white text-black"
    }
  ];
  return (
    <>
        <div className="relative w-full flex-grow">
        <div className="max-w-3xl sm:w-3/4 mx-auto px-6">
        <section className="">
        <div>
              <h2
                className="text-white text-center text-lg md:text-2xl 
                lg:text-3xl mt-20 mb-10 font-bold"
              >
                Tech Stack
              </h2>
              <div className="flex flex-wrap items-center justify-center 
              gap-6 md:gap-8 lg:gap-10">
                {stack.map((item) => (
                  <div key={item.title} className="flex flex-col items-center">
                    <img
                      src={item.src}
                      width={100}
                      height={100}
                      alt={item.title}
                      className={twMerge("object-contain transition-all duration-300 transform hover:scale-110", item.className)}
                    />
                    <p className="text-sm md:text-base text-gray-400 
                    mt-2 text-center">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
        </section>
        </div>
        </div>
    
    </>
    
  );
};