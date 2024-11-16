"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Camera, Trash2 } from "lucide-react";

export default function EditProfilePage() {
  const [isMentor, setIsMentor] = useState(false);
  const [skills, setSkills] = useState(['React', 'TypeScript', 'Node.js']);

  return (
    <div className="container max-w-4xl py-8 px-4 md:py-12 lg:py-24">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Edit Profile</h1>
          <p className="text-muted-foreground mt-2">
            Update your personal information and preferences
          </p>
        </div>

        <div className="grid gap-8">
          {/* Profile Picture Card */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Picture</CardTitle>
              <CardDescription>
                Upload a profile picture to make your profile more personable
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="relative group">
                  <Avatar className="h-32 w-32">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
                      alt="Profile picture"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button size="icon" variant="ghost" className="text-white">
                      <Camera className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline">Upload New Picture</Button>
                    <Button variant="outline" className="text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Remove
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Recommended: Square image, at least 400x400px
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Update your basic profile information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@university.edu" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="major">Major</Label>
                <Input id="major" placeholder="Computer Science" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself..."
                  className="min-h-[120px] resize-none"
                />
              </div>
            </CardContent>
          </Card>

          {/* Mentor Profile */}
          <Card>
            <CardHeader>
              <CardTitle>Mentor Profile</CardTitle>
              <CardDescription>
                Set up your profile as a mentor to help others
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Mentor Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Enable to offer mentoring services
                  </p>
                </div>
                <Switch
                  checked={isMentor}
                  onCheckedChange={setIsMentor}
                />
              </div>

              {isMentor && (
                <div className="space-y-6 pt-4">
                  <div className="space-y-2">
                    <Label>Skills & Expertise</Label>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                          <button
                            className="ml-1 hover:text-destructive"
                            onClick={() => setSkills(skills.filter(s => s !== skill))}
                          >
                            ×
                          </button>
                        </Badge>
                      ))}
                      <Input
                        placeholder="Add a skill..."
                        className="w-32"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            const value = e.currentTarget.value.trim();
                            if (value && !skills.includes(value)) {
                              setSkills([...skills, value]);
                              e.currentTarget.value = '';
                            }
                          }
                        }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience Level</Label>
                    <Input
                      id="experience"
                      placeholder="e.g., 3 years of programming experience"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mentoring-style">Mentoring Approach</Label>
                    <Textarea
                      id="mentoring-style"
                      placeholder="Describe your mentoring style and approach..."
                      className="min-h-[120px] resize-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Availability</Label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                        <Button
                          key={day}
                          variant="outline"
                          className="w-full"
                        >
                          {day}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="flex justify-end gap-4">
            <Button variant="outline">Cancel</Button>
            <Button>Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
}