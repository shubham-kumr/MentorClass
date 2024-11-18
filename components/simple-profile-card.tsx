'use client'

import React from 'react'

interface Creator {
  name: string
  role: string
  color: string
  url: string
  description: string
}

const creator = [
  {
    name: "Shubham Kumar",
    role: "Backend Developer",
    color: "bg-blue-500",
    url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&auto=format&fit=crop",
    description: "Shubham started mentorclass with kirti wardhan to help people connect with mentors and learn new skills.",
  },
  {
    name: "Kirti Wardhan Singh",
    role: "Frontend Developer",
    color: "bg-purple-500",
    url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&auto=format&fit=crop",
    description: "Kirti Wardhan started mentorclass to help people connect with mentors and learn new skills.",
  },
  {
    name: "Yogesh Pratap Singh",
    role: "UI/UX Designer",
    color: "bg-red-500",
    url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&auto=format&fit=crop",
    description: "Yogesh Pratap Singh is here for all your UI/UX design needs. He's has the best UI/UX design and concept in the team.",
  },
  {
    name: "Vishnu Hari Gupta",
    role: "Representor",
    color: "bg-green-500",
    url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&auto=format&fit=crop",
    description: "Vishnu Hari Gupta is here to represent the MentorClass team. He's got the best advice and solutions for you!",
  },
]

export default function Creator() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {creator.map((creator, index) => (
        <div 
          key={index} 
          className={`w-full sm:w-[300px] overflow-hidden ${creator.color} text-white
            sm:rounded-tl-3xl sm:rounded-tr-[4rem] sm:rounded-bl-[4rem] sm:rounded-br-3xl
            rounded-3xl`}
        >
          <div className="sm:space-y-4 sm:p-6 p-4 flex sm:flex-col items-start gap-4">
            <div className="relative sm:aspect-square aspect-square w-28 sm:rounded-tr-[4rem] md:rounded-tr-[4rem] sm:w-full overflow-hidden rounded-2xl flex-shrink-0">
              <img
                alt={`Profile of ${creator.name}`}
                className="h-full w-full object-cover"
                src={creator.url}
                width={400}
                height={400}
              />
            </div>
            <div className="space-y-1 flex-1">
              <h3 className="text-xl uppercase font-semibold">{creator.name}</h3>
              <h4 className="sm:text-lg md:text-lg text-sm font-bold uppercase bg-white/50 rounded-full p-2">{creator.role}</h4>
              <p className="text-sm leading-relaxed text-white/90 line-clamp-3 sm:line-clamp-none">
                {creator.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}