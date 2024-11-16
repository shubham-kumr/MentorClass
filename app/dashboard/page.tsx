'use client'

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Settings, Users, Star, Bell, LogOut } from "lucide-react"
import Link from "next/link"

const userProfile = {
  image: "/placeholder.svg?height=40&width=40",
  name: "John Doe",
  role: "Mentor",
  connectedMentors: 10,
  sessionsCompleted: 5,
  totalHours: 20,
}

const scheduledSessions = [
  {
    id: 1,
    mentor: {
      image: "/placeholder.svg?height=48&width=48",
      name: "Jane Smith",
      rating: 4.5,
      skills: ["JavaScript", "React"],
    },
    topic: "React Basics",
    date: "2023-10-01",
    time: "10:00 AM",
  },
]

const recommendedMentors = [
  {
    id: 1,
    image: "/placeholder.svg?height=48&width=48",
    name: "Jane Smith",
    rating: 4.5,
    role: "Senior Developer",
    skills: ["JavaScript", "React"],
    availability: "Available",
  },
]

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col fixed h-screen border-r bg-card">
        <div className="p-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">MentorClass</span>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/dashboard">
              <Users className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/dashboard/schedule">
              <Star className="mr-2 h-4 w-4" />
              Schedule
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/dashboard/messages">
              <Bell className="mr-2 h-4 w-4" />
              Messages
            </Link>
          </Button>
        </nav>

        <div className="p-4 border-t">
          <div className="flex items-center space-x-3 mb-4">
            <Avatar>
              <AvatarImage src={userProfile.image} alt={userProfile.name} />
              <AvatarFallback>{userProfile.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{userProfile.name}</p>
              <p className="text-sm text-muted-foreground">{userProfile.role}</p>
            </div>
          </div>
          <div className="space-y-2">
            <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
              <Link href="/profile/settings">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Link>
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-4 md:p-8 pt-6 overflow-y-auto">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Search Bar */}
          <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 pb-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search mentors, sessions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-primary" />
                  <h3 className="text-sm font-medium">Connected Mentors</h3>
                </div>
                <p className="text-2xl font-bold mt-2">{userProfile.connectedMentors}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-primary" />
                  <h3 className="text-sm font-medium">Sessions Completed</h3>
                </div>
                <p className="text-2xl font-bold mt-2">{userProfile.sessionsCompleted}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-primary" />
                  <h3 className="text-sm font-medium">Total Hours</h3>
                </div>
                <p className="text-2xl font-bold mt-2">{userProfile.totalHours}</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="upcoming" className="space-y-6">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
              <TabsTrigger value="recommended">Recommended</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-6">
              {scheduledSessions.map((session) => (
                <Card key={session.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={session.mentor.image} alt={session.mentor.name} />
                        <AvatarFallback>{session.mentor.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold truncate">{session.mentor.name}</h3>
                          <span className="text-sm">⭐️ {session.mentor.rating}</span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{session.topic}</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {session.mentor.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="truncate">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between flex-wrap gap-4">
                      <div className="text-sm text-muted-foreground">
                        {session.date} at {session.time}
                      </div>
                      <Button>Join Session</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="recommended" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recommendedMentors.map((mentor) => (
                  <Card key={mentor.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={mentor.image} alt={mentor.name} />
                          <AvatarFallback>{mentor.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold truncate">{mentor.name}</h3>
                            <span className="text-sm">⭐️ {mentor.rating}</span>
                          </div>
                          <p className="text-sm text-muted-foreground truncate">{mentor.role}</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex flex-wrap gap-2">
                          {mentor.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="truncate">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between flex-wrap gap-4">
                        <span className="text-sm text-muted-foreground">
                          {mentor.availability}
                        </span>
                        <Button size="sm">Book Session</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <CardTitle>Session History</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">No past sessions found.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}