// "use client";

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

export async function generateStaticParams() {
  const mentors = await fetchMentors();
  return mentors.map((mentor) => ({
    id: mentor.id.toString(),
  }));
}

interface Params {
  id: string;
}

export default function MentorPage({ params }: { params: Params }) {
  const { id } = params;

  // You can fetch mentor details here if needed
  return;
}

// Example function to simulate data fetching
async function fetchMentors() {
  return [
    { id: '1', name: 'Mentor 1' },
    { id: '2', name: 'Mentor 2' },
  ];
}