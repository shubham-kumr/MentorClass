"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Linkedin, Mail, Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";

// This would come from your API/database
const mentorData = {
  id: 1,
  name: "Alex Thompson",
  major: "Computer Science",
  year: "Senior",
  bio: "Passionate about helping fellow students excel in computer science and software development. Experienced in web development, algorithms, and system design.",
  skills: ["Java", "Python", "React", "Node.js", "Data Structures", "Algorithms"],
  projects: [
    {
      title: "Student Collaboration Platform",
      description: "Built a full-stack web application for student collaboration",
    },
    {
      title: "Algorithm Visualization Tool",
      description: "Created an interactive tool for visualizing sorting algorithms",
    },
  ],
  experience: [
    {
      title: "Teaching Assistant",
      organization: "Computer Science Department",
      period: "2023 - Present",
    },
    {
      title: "Software Engineering Intern",
      organization: "Tech Company",
      period: "Summer 2023",
    },
  ],
  rating: 4.8,
  reviews: 24,
  availability: "Available Mon-Fri, 3-6 PM",
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  social: {
    github: "https://github.com/alexthompson",
    linkedin: "https://linkedin.com/in/alexthompson",
  },
};

export default function MentorProfile() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="container py-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Profile Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center space-x-4">
            <img
              src={mentorData.image}
              alt={mentorData.name}
              className="h-24 w-24 rounded-full object-cover"
            />
            <div>
              <h1 className="text-3xl font-bold">{mentorData.name}</h1>
              <p className="text-muted-foreground">
                {mentorData.major} • {mentorData.year}
              </p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-sm">⭐️ {mentorData.rating}</span>
                <span className="text-sm text-muted-foreground">
                  ({mentorData.reviews} reviews)
                </span>
              </div>
            </div>
          </div>

          <Tabs defaultValue="about" className="w-full">
            <TabsList>
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Bio</CardTitle>
                </CardHeader>
                <CardContent>{mentorData.bio}</CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {mentorData.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mentorData.projects.map((project) => (
                      <div key={project.title}>
                        <h4 className="font-semibold">{project.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {project.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="experience" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mentorData.experience.map((exp) => (
                      <div key={exp.title} className="border-b last:border-0 pb-4 last:pb-0">
                        <h4 className="font-semibold">{exp.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {exp.organization}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {exp.period}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Student Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Add reviews component here */}
                  <p className="text-muted-foreground">No reviews yet.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Column - Booking & Contact */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Schedule a Session</CardTitle>
              <CardDescription>
                Book a mentoring session with {mentorData.name}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
              <div className="space-y-2">
                <h4 className="font-semibold">Availability</h4>
                <p className="text-sm text-muted-foreground">
                  {mentorData.availability}
                </p>
              </div>
              <Button className="w-full">
                <CalendarIcon className="mr-2 h-4 w-4" />
                Book Session
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full" asChild>
                <a href={`mailto:${mentorData.name}@university.edu`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </a>
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1" asChild>
                  <a
                    href={mentorData.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" className="flex-1" asChild>
                  <a
                    href={mentorData.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}