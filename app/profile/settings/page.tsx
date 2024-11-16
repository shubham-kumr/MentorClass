"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function SettingsPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-4 md:py-6">
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard" passHref>
            <Button variant="ghost" size="icon" aria-label="Back to Dashboard">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Settings</h1>
            <p className="text-sm text-muted-foreground">Manage your account preferences and settings</p>
          </div>
        </div>

        <Tabs defaultValue="account" className="space-y-4">
          <TabsList className="w-full justify-start overflow-x-auto">
            <TabsTrigger value="account" className="flex-1 md:flex-none">Account</TabsTrigger>
            <TabsTrigger value="notifications" className="flex-1 md:flex-none">Notifications</TabsTrigger>
            <TabsTrigger value="privacy" className="flex-1 md:flex-none">Privacy</TabsTrigger>
          </TabsList>

          <TabsContent value="account" className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Account Settings</CardTitle>
                <CardDescription className="text-sm">Update your account information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1">
                  <Label htmlFor="current-password" className="text-sm">Current Password</Label>
                  <Input id="current-password" type="password" className="text-sm" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new-password" className="text-sm">New Password</Label>
                  <Input id="new-password" type="password" className="text-sm" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="confirm-password" className="text-sm">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" className="text-sm" />
                </div>
                <Button className="w-full md:w-auto text-sm">Update Password</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Danger Zone</CardTitle>
                <CardDescription className="text-sm">Irreversible account actions</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="destructive" className="w-full md:w-auto text-sm">Delete Account</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Notification Preferences</CardTitle>
                <CardDescription className="text-sm">Choose what notifications you receive</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <Label className="text-sm">Email Notifications</Label>
                    <p className="text-xs text-muted-foreground">
                      Receive email updates about your sessions
                    </p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <Label className="text-sm">Session Reminders</Label>
                    <p className="text-xs text-muted-foreground">
                      Get reminded about upcoming sessions
                    </p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <Label className="text-sm">Marketing Emails</Label>
                    <p className="text-xs text-muted-foreground">
                      Receive updates about new features and promotions
                    </p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy" className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Privacy Settings</CardTitle>
                <CardDescription className="text-sm">Control your privacy preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <Label className="text-sm">Profile Visibility</Label>
                    <p className="text-xs text-muted-foreground">
                      Make your profile visible to other users
                    </p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <Label className="text-sm">Show Online Status</Label>
                    <p className="text-xs text-muted-foreground">
                      Let others see when you're online
                    </p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}