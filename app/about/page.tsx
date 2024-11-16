// pages/about.js
import React from 'react';

export default function About() {
  return (
    <div className="text-white font-disp">

      <section className="bg-blue-500 text-center py-40 sm:py-60 md:py-80 min-h-screen rounded-b-3xl">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
            Bringing people to connect with mentors and learn new skills
          </h1>
        </div>
      </section>

      <section className="container py-16 sm:py-20 text-center px-4 mx-auto max-w-8xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-zinc-800 font-semibold tracking-tight mb-8">
          The MentorClass Way
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {[
            { title: "Knowledgeable Mentors", description: "Handpicked mentors ready to share their expertise and experiences.", color: "bg-blue-300" },
            { title: "Flexible Scheduling", description: "Book sessions that fit your schedule and learning pace.", color: "bg-green-300" },
            { title: "Personalized Support", description: "Get tailored guidance to achieve your learning goals.", color: "bg-yellow-300" },
            { title: "Career Development", description: "Gain skills and insights that make you stand out in the job market.", color: "bg-red-300" },
          ].map((item, index) => (
            <div key={index} className={`${item.color} p-6 rounded-lg`}>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 text-center text-black px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Meet the Creator</h2>
        <p className="text-lg sm:text-xl md:text-2xl mx-auto text-gray-700 mb-8 max-w-2xl">
          The brains behind MentorClass - say Hi or get support
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { name: "Shubham Kumar", role: "Backend Developer", color: "bg-blue-200" },
            { name: "Kirti Wardhan Singh", role: "Frontend Developer", color: "bg-green-200" },
            { name: "Yogesh Pratap Singh", role: "UX Designer", color: "bg-yellow-200" },
            { name: "Vishnu Hari Gupta", role: "Representor - MentorClass", color: "bg-red-200" },
          ].map((mentor, index) => (
            <div key={index} className={`${mentor.color} p-4 rounded-lg w-full sm:w-64 text-left`}>
              <h3 className="text-lg sm:text-xl font-semibold">{mentor.name}</h3>
              <p>{mentor.role}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="container py-16 bg-yellow-400 px-4 mx-auto max-w-8xl mb-20 max-h-16xl rounded-3xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8">FAQs</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {[
            { question: "How is MentorClass different from other mentorship platforms?", answer: "We offer personalized mentorship with experienced professionals tailored to your needs." },
            { question: "How can I book a session with a mentor?", answer: "Simply browse our mentor list and click on the 'Book Session' button to choose your time." },
            { question: "Can I become a mentor on MentorClass?", answer: "Yes, you can apply to be a mentor by filling out our application form." },
          ].map((faq, index) => (
            <div key={index} className="p-4 border rounded-lg bg-white text-black">
              <h3 className="text-lg sm:text-xl font-semibold">{faq.question}</h3>
              <p className="mt-2 text-sm sm:text-base">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>


      <footer className="container bg-blue-600 text-white py-8 text-center px-4 mx-auto max-w-8xl mb-20 max-h-16xl rounded-3xl">
        <p className="text-lg sm:text-xl md:text-2xl font-bold">
          Keep up to date with MentorClass by joining our newsletter!
        </p>
        <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border rounded-lg w-full sm:w-auto"
          />
          <button className="px-4 py-2 bg-black text-white rounded-lg">
            Subscribe
          </button>
        </div>
      </footer>
    </div>
  );
}
