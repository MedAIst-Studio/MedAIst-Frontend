"use client";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {Separator} from "@/components/ui/separator";
import {
  Award,
  BookmarkPlus,
  BookOpen,
  Brain,
  Clock,
  FileText,
  Flame,
  HelpCircle,
  MessageCircle,
  Star,
  Target,
  Zap,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Welcome Section with Achievement Alert */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-primary">Welcome Back, Dr. Sarah! 👋</h1>
              <p className="text-lg text-gray-600 mt-2">Ready to continue your medical journey?</p>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Badge
                variant="secondary"
                className="bg-yellow-100 text-yellow-800 border-yellow-200"
              >
                <Star className="w-3 h-3 mr-1" />
                Top Performer
              </Badge>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white transform hover:scale-105 transition-all duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-100">Study Sessions</CardTitle>
              <div className="p-2 bg-white/20 rounded-lg">
                <Brain className="h-5 w-5" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">127</div>
            </CardContent>
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full"></div>
          </Card>

          <Card className="relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-emerald-500 to-emerald-600 text-white transform hover:scale-105 transition-all duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-emerald-100">
                Notes Summarized
              </CardTitle>
              <div className="p-2 bg-white/20 rounded-lg">
                <FileText className="h-5 w-5" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">43</div>
            </CardContent>
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full"></div>
          </Card>

          <Card className="relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white transform hover:scale-105 transition-all duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-100">Quiz Score</CardTitle>
              <div className="p-2 bg-white/20 rounded-lg">
                <Award className="h-5 w-5" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">92%</div>
            </CardContent>
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full"></div>
          </Card>

          <Card className="relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-orange-500 to-red-500 text-white transform hover:scale-105 transition-all duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-orange-100">Study Streak</CardTitle>
              <div className="p-2 bg-white/20 rounded-lg">
                <Flame className="h-5 w-5" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">15 days</div>
            </CardContent>
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full"></div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                <CardTitle className="text-xl">Quick Actions</CardTitle>
              </div>
              <CardDescription>Jump into your AI-powered study tools</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button className="h-28 group relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 shadow-lg transform hover:scale-105 transition-all duration-200">
                  <div className="flex flex-col items-center space-y-2 relative z-10">
                    <MessageCircle className="h-7 w-7" />
                    <span className="font-semibold">AI Chat</span>
                    <span className="text-xs opacity-90">Ask anything instantly</span>
                  </div>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </Button>

                <Button className="h-28 group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white border-0 shadow-lg transform hover:scale-105 transition-all duration-200">
                  <div className="flex flex-col items-center space-y-2 relative z-10">
                    <FileText className="h-7 w-7" />
                    <span className="font-semibold">Smart Summarize</span>
                    <span className="text-xs opacity-90">Upload & process notes</span>
                  </div>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </Button>

                <Button className="h-28 group relative overflow-hidden bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-0 shadow-lg transform hover:scale-105 transition-all duration-200">
                  <div className="flex flex-col items-center space-y-2 relative z-10">
                    <HelpCircle className="h-7 w-7" />
                    <span className="font-semibold">Quiz Generator</span>
                    <span className="text-xs opacity-90">Test your knowledge</span>
                  </div>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </Button>

                <Button className="h-28 group relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 shadow-lg transform hover:scale-105 transition-all duration-200">
                  <div className="flex flex-col items-center space-y-2 relative z-10">
                    <BookOpen className="h-7 w-7" />
                    <span className="font-semibold">Study Library</span>
                    <span className="text-xs opacity-90">Curated medical content</span>
                  </div>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-blue-500" />
                <CardTitle className="text-xl">Study Goals</CardTitle>
              </div>
              <CardDescription>Your weekly progress tracking</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-blue-500" />
                    Study Time
                  </span>
                  <Badge variant="outline">18h / 25h</Badge>
                </div>
                <Progress value={72} className="h-3 bg-blue-100" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium flex items-center">
                    <HelpCircle className="w-4 h-4 mr-2 text-purple-500" />
                    Quiz Target
                  </span>
                  <Badge variant="outline">8 / 10</Badge>
                </div>
                <Progress value={80} className="h-3 bg-purple-100" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium flex items-center">
                    <BookmarkPlus className="w-4 h-4 mr-2 text-emerald-500" />
                    Notes Review
                  </span>
                  <Badge variant="outline">5 / 7</Badge>
                </div>
                <Progress value={71} className="h-3 bg-emerald-100" />
              </div>

              <Separator />

              <Button className="w-full  text-white border-0">
                <Target className="h-4 w-4 mr-2" />
                Update Goals
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
