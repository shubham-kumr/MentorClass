import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Users,
  Calendar,
  MessageSquare,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

const timelineSteps = [
  {
    icon: Users,
    title: "Create Your Profile",
    description: "Sign up and tell us about your academic goals and interests.",
  },
  {
    icon: Star,
    title: "Browse Mentors",
    description: "Explore profiles of experienced mentors in your field of study.",
  },
  {
    icon: Calendar,
    title: "Schedule Sessions",
    description: "Book one-on-one mentoring sessions at convenient times.",
  },
  {
    icon: MessageSquare,
    title: "Connect & Learn",
    description: "Meet virtually with your mentor and accelerate your growth.",
  },
]

const benefits = [
  "Personalized guidance from experienced mentors",
  "Flexible scheduling options",
  "One-on-one focused sessions",
  "Academic and career support",
  "Project help and code reviews",
  "Interview preparation",
  "Resume and portfolio feedback",
  "Industry insights",
]

export default function HowItWorks() {
  return (
    <div className="container px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24 space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-24">
      {/* Hero Section */}
      <section className="text-center space-y-3 sm:space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">How MentorClass Works</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Your journey to academic success starts here
        </p>
      </section>

      {/* Timeline Steps */}
      <section className="relative max-w-5xl mx-auto" aria-labelledby="timeline-heading">
        <h2 id="timeline-heading" className="sr-only">MentorClass Process</h2>
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-border sm:-translate-x-1/2" />
        {timelineSteps.map((step, index) => (
          <div key={index} className="relative mb-8 sm:mb-0">
            <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 ${
              index % 2 === 0 ? 'sm:flex-row-reverse' : ''
            }`}>
              <div className="sm:w-1/2 flex sm:justify-end order-2 sm:order-none">
                <Card className="w-full sm:max-w-sm">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
              <div className="absolute left-0 sm:left-1/2 mt-1 sm:mt-0 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary" />
                </div>
              </div>
              <div className="sm:w-1/2 order-1 sm:order-none" />
            </div>
          </div>
        ))}
      </section>

      {/* Benefits Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start" aria-labelledby="benefits-heading">
        <div className="space-y-6 sm:space-y-8">
          <h2 id="benefits-heading" className="text-xl sm:text-2xl md:text-3xl font-bold">Benefits of MentorClass</h2>
          <div className="grid gap-3 sm:gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">{benefit}</span>
              </div>
            ))}
          </div>
          <Button size="lg" asChild className="w-full sm:w-auto">
            <Link href="/signup">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <Card className="h-full flex flex-col justify-between">
          <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-semibold">Ready to Start Learning?</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Join MentorClass today and take your academic journey to the next level with
                personalized mentorship from experienced peers.
              </p>
            </div>
            <Button className="w-full" variant="outline" asChild>
              <Link href="/signup">
                Sign Up Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}