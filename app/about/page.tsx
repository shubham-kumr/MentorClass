
import MentorClassSection from '@/components/mentor-class-section';
import Creator from '@/components/simple-profile-card';
import React from 'react';

export default function About() {
  return (
    <div className="text-white font-disp">

      <section className="bg-blue-500 text-center py-40 sm:py-60 md:py-80 min-h-screen rounded-b-3xl">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-7xl sm:text-8xl md:text-7xl lg:text-8xl font-bold">
            Bringing people to connect with mentors and learn new skills
          </h1>
        </div>
      </section>

      <section className="py-3 sm:py-20 text-center px-4 mx-auto w-full text-black rounded-3xl">
      <div className="min-h-screen rounded-3xl flex flex-col items-center justify-center p-16">
      {/* <div className="relative w-full max-w-4xl">
        <h1 className="text-5xl font-bold text-center mb-16 text-purple-500">
          Why Choose MentorClass?
        </h1>
        <div className="absolute top-0 left-0 transform -translate-x-12 -translate-y-20">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            Think freely on an infinite canvas! 🧠
          </div>
        </div>
        <div className="absolute top-0 right-0 transform translate-x-10 -translate-y-36">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            Feel like just doing in-depth writing? Work on your docs in focus mode! 📝
          </div>
        </div>
        <div className="absolute bottom-0 left-0 transform -translate-x-80 translate-y-20">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            Rich text editing, media embeds and unlimited nesting of everything you create!
          </div>
        </div>
        <div className="absolute bottom-0 right-0 transform translate-x-80 translate-y-10">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            Connect things on your board. Visualize everything from relationships to workflows. 🔗
          </div>
        </div>
        <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-64">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            Why should writing have to be linear, when creative thinking isn’t? 🤔
          </div>
        </div>
      </div> */}
      <MentorClassSection />
    </div>
      </section>

      <section className="py-16 text-center text-black px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Meet the Creator</h2>
        <p className="text-lg sm:text-xl md:text-2xl mx-auto text-gray-700 mb-8 max-w-2xl">
          The brains behind MentorClass - say Hi or get support
        </p>
        {/* <div className="flex flex-wrap justify-center gap-6">
          {[
            { name: "Shubham Kumar", role: "Backend Developer", color: "bg-blue-300" },
            { name: "Kirti Wardhan Singh", role: "Frontend Developer", color: "bg-green-300" },
            { name: "Yogesh Pratap Singh", role: "UI/UX Designer", color: "bg-yellow-300" },
            { name: "Vishnu Hari Gupta", role: "Representor - MentorClass", color: "bg-red-300" },
          ].map((mentor, index) => (
            <div key={index} className={`${mentor.color} p-4 rounded-lg w-full sm:w-64 text-left`}>
              <h3 className="text-lg sm:text-xl font-semibold">{mentor.name}</h3>
              <p>{mentor.role}</p>
            </div>
          ))}
        </div> */}
        <div className='flex flex-wrap justify-center gap-6'>
        <Creator/>
        </div>
      </section>


      <section className="py-16 bg-yellow-400 px-4 mx-auto w-11/12 mb-20 max-h-16xl rounded-3xl">
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


      <footer className="bg-blue-600 text-white py-8 text-center px-4 mx-auto w-11/12 max-h-16xl rounded-3xl">
        <p className="text-xl sm:text-2xl md:text-3xl font-bold">
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
