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
    color: "bg-blue-600",
    url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&auto=format&fit=crop",
    description: "Shubham (he/him) is here to support you with any backend development doubts. From setting up your server to deploying your app, he's got the wisdom and solutions!",
  },
  {
    name: "Kirti Wardhan Singh",
    role: "Frontend Developer",
    color: "bg-purple-600",
    url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&auto=format&fit=crop",
    description: "Kirti Wardhan Singh (he/him) is here to support you with any frontend development doubts. From setting up your server to deploying your app, he's got the wisdom and solutions!",
  },
  {
    name: "Yogesh Pratap Singh",
    role: "UI/UX Designer",
    color: "bg-red-600",
    url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&auto=format&fit=crop",
    description: "Yogesh Pratap Singh (he/him) is here to support you with any design doubts. From pixel perfect practical advice to getting hired, landing new clients, and more. He's got the wisdom and solutions!",
  },
  {
    name: "Vishnu Hari Gupta",
    role: "Representor - MentorClass",
    color: "bg-green-600",
    url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&auto=format&fit=crop",
    description: "Vishnu Hari Gupta (he/him) is here to support you with any design doubts. From pixel perfect practical advice to getting hired, landing new clients, and more. He's got the wisdom and solutions!",
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
            rounded-tr-[4rem] rounded-bl-3xl rounded-br-3xl rounded-tl-3xl`}
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
            <div className="space-y-2 flex-1">
              <h3 className="text-xl font-semibold">{creator.name}</h3>
              <h4 className="text-sm font-bold uppercase tracking-wider">{creator.role}</h4>
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