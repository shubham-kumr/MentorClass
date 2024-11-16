"use client";

import Image from "next/image";

const featuredMentors = [
  {
    name: "Sarah Chen",
    role: "Senior Software Engineer",
    company: "Google",
    description:
      "Try our free course: Plan, Design + Code Your First Website. Get from idea to up-and-running, plus learn how to work with clients, project plans, wireframes, hosting, and more.",
    color: "#f0c8c8",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
  },
  {
    name: "Michael Rodriguez",
    role: "Product Manager",
    company: "Microsoft",
    description:
      "Everything you need to know to create websites from scratch. By the end, you'll be comfortable making your own websites with JavaScript libraries, animations, and responsive design.",
    color: "#b6e3b6",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
  },
  {
    name: "Emily Watson",
    role: "Data Science Lead",
    company: "Netflix",
    description:
      "Learn responsive web design, from layouts and visual hierarchy to branding, color, type, and more. This is our fundamental design course, Visual Design + Branding.",
    color: "#f7ad5c",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
  },
];

export function FeaturedMentors() {
  return (
    <section className="container py-10 md:py-20 bg-blue-500 rounded-3xl font-disp mx-auto max-w-7xl mb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
            Mentors in the Spotlight
            </h2>
        </div>
        <div className="flex justify-center gap-6 md:gap-10 overflow-x-auto overflow-y-hidden snap-x snap-mandatory px-2">
          {featuredMentors.map((mentor, index) => (
            <div
              key={index}
              className="snap-center shrink-0 rounded-lg shadow-lg relative"
              style={{
                flex: "0 0 85%",
                maxWidth: "350px",
                backgroundColor: mentor.color,
                borderRadius: "20px",
              }}
            >
              <div className="relative w-full h-64 sm:h-72 md:h-80">
                <Image
                  src={mentor.image}
                  alt={`${mentor.name}'s picture`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-3xl"
                />
              </div>
              <div className="p-4 md:p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-center">
                    {mentor.name}
                  </h3>
                  <p className="text-sm md:text-base text-center text-gray-800">
                    {mentor.role} at {mentor.company}
                  </p>
                  <p className="mt-4 text-sm md:text-base text-gray-700 text-center">
                    {mentor.description}
                  </p>
                </div>
              </div>
              <button
                className="absolute bottom-4 right-4 w-10 h-10 md:w-12 md:h-12 bg-white text-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 focus:outline-none"
                onClick={() =>
                  alert(`Redirecting to ${mentor.name}'s profile...`)
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 md:w-6 md:h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
