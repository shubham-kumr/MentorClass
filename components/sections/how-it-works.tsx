'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SmilePlus, Send, BookOpen } from 'lucide-react'

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState('subscribe')
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const tabsData = [
    { id: 'subscribe', title: 'Subscribe', icon: Send, bgColor: 'bg-blue-100', iconColor: 'text-blue-600', buttonColor: 'bg-blue-600 hover:bg-blue-700' },
    { id: 'say-hi', title: 'Say hi', icon: SmilePlus, bgColor: 'bg-green-100', iconColor: 'text-green-600', buttonColor: 'bg-green-600 hover:bg-green-700' },
    { id: 'start-learning', title: 'Start learning', icon: BookOpen, bgColor: 'bg-purple-100', iconColor: 'text-purple-600', buttonColor: 'bg-purple-600 hover:bg-purple-700' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('card-visible')
          setActiveTab(entry.target.id)
        } else {
          entry.target.classList.remove('card-visible')
        }
      })
    }, { threshold: 0.5 })

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToCard = (id: string) => {
    const card = document.getElementById(id)
    if (card) {
      card.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full mt-36">
      <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-sm pt-4 pb-2">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-medium text-center mb-4">
            Don&apos;t know where to start?
          </h1>
          
          <div className="flex text-2xl justify-center gap-2 mb-2">
            {tabsData.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? 'default' : 'ghost'}
                onClick={() => scrollToCard(tab.id)}
                className={`rounded-full ${activeTab === tab.id ? `${tab.buttonColor} text-white` : ''}`}
              >
                {tab.title}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-20">
        <div className="space-y-[10vh] mb-[10vh]">
          {tabsData.map((tab, index) => (
            <div 
              key={tab.id}
              id={tab.id}
              ref={el => cardsRef.current[index] = el}
              className={`card grid grid-cols-1 md:grid-cols-2 gap-4 overflow-hidden rounded-2xl ${tab.bgColor} opacity-0 translate-y-10 transition-all duration-700 ease-out sticky top-[30vh]`}
            >
              <div className={`${tab.buttonColor} h-[300px]`} />
              <div className="p-8">
                <tab.icon className={`w-8 h-8 mb-4 ${tab.iconColor}`} />
                <h2 className="text-2xl font-medium mb-4">{tab.title}</h2>
                <p className="text-muted-foreground mb-6">
                  {tab.id === 'subscribe' && "Stay updated with our latest courses, mentorship opportunities, and educational resources. Join our growing community of learners today!"}
                  {tab.id === 'say-hi' && "Connect with fellow learners and mentors in our vibrant community. Share your experiences, ask questions, and grow together in your learning journey."}
                  {tab.id === 'start-learning' && "Dive into our comprehensive courses and start your learning adventure. From coding to design, we've got you covered with expert-led, hands-on lessons."}
                </p>
                {tab.id === 'subscribe' ? (
                  <div className="flex gap-2">
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="max-w-[240px] bg-white"
                    />
                    <Button className={`${tab.buttonColor} text-white`}>
                      Subscribe
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                ) : (
                  <Button className={`${tab.buttonColor} text-white`}>
                    {tab.title}
                    <tab.icon className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .card-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
}