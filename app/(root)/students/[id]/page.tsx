import Link from "next/link";
import {
	ArrowLeft,
	ExternalLink,
	Mail,
	MessageSquare,
	Phone,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsTrigger } from "@/components/ui/tabs";
import { Student } from "@/types/Student";
import { MentorsTab } from "@/components/Tabs/Student/Mentors";
import { ProgressTab } from "@/components/Tabs/Student/Progress";
import { ProjectsTab } from "@/components/Tabs/Student/Projects";
import { CustomTabsList } from "@/components/Tabs/CustomTabsList";
import { MeetingsTab } from "@/components/Tabs/Meetings";
import { OverviewTab } from "@/components/Tabs/Overview";

export default function StudentProfile() {
	const student: Student = {
		id: 1,
		name: "Jamie Smith",
		role: "Junior Developer",
		company: "StartupX",
		location: "Seattle, WA",
		avatar: "/placeholder.svg?height=128&width=128",
		email: "jamie.smith@example.com",
		phone: "+1 (555) 987-6543",
		bio: "Junior developer with 1 year of experience, focusing on frontend technologies. Looking to improve my React skills and learn more about backend development with Node.js. Passionate about creating accessible and user-friendly web applications.",
		skills: [
			{ name: "HTML/CSS", level: 85 },
			{ name: "JavaScript", level: 70 },
			{ name: "React", level: 60 },
			{ name: "Node.js", level: 30 },
			{ name: "Git", level: 75 },
		],
		education: [
			{
				degree: "B.S. Computer Science",
				institution: "University of Washington",
				yearStart: 2018,
				yearEnd: 2022,
			},
		],
		languages: ["English (Native)", "Spanish (Basic)"],
		socialLinks: [
			{ platform: "LinkedIn", url: "https://linkedin.com/in/jamiesmith" },
			{ platform: "GitHub", url: "https://github.com/jamiesmith" },
			{ platform: "Portfolio", url: "https://jamiesmith.dev" },
		],
		currentMentors: [
			{
				id: 1,
				name: "Alex Johnson",
				role: "Senior Developer",
				avatar: "/placeholder.svg?height=40&width=40",
				startDate: "2023-09-15",
				progress: 65,
				focus: "React Development",
			},
		],
		pastMentors: [
			{
				id: 2,
				name: "Maria Garcia",
				role: "UX Designer",
				avatar: "/placeholder.svg?height=40&width=40",
				period: "May - August 2023",
				focus: "UI/UX Fundamentals",
			},
		],
		progress: {
			overallCompletion: 65,
			skillsProgress: [
				{ skill: "React", initial: 40, current: 60, target: 85 },
				{ skill: "Node.js", initial: 10, current: 30, target: 70 },
				{ skill: "Testing", initial: 20, current: 45, target: 80 },
			],
		},
		meetings: {
			upcoming: [
				{
					id: 1,
					mentor: "Alex Johnson",
					date: "2023-11-10T15:00:00",
					duration: 60,
					topic: "React Performance Optimization",
				},
			],
			past: [
				{
					id: 2,
					mentor: "Alex Johnson",
					date: "2023-10-27T15:00:00",
					duration: 60,
					topic: "React Component Patterns",
					notes:
						"Discussed compound components and render props. Jamie should practice creating a custom hook for form validation.",
				},
				{
					id: 3,
					mentor: "Alex Johnson",
					date: "2023-10-13T15:00:00",
					duration: 60,
					topic: "State Management in React",
					notes:
						"Covered useState, useReducer, and Context API. Jamie should refactor the project to use context for theme and authentication.",
				},
				{
					id: 4,
					mentor: "Alex Johnson",
					date: "2023-09-29T15:00:00",
					duration: 60,
					topic: "React Fundamentals",
					notes:
						"Reviewed component lifecycle, props, and state. Jamie has a good understanding of the basics.",
				},
			],
		},
		projects: [
			{
				id: 1,
				title: "Personal Portfolio",
				description:
					"A responsive portfolio website built with React and Tailwind CSS.",
				status: "completed",
				url: "https://jamiesmith.dev",
				technologies: ["React", "Tailwind CSS", "Vite"],
			},
			{
				id: 2,
				title: "Task Management App",
				description:
					"A full-stack application for managing tasks and projects.",
				status: "in-progress",
				technologies: ["React", "Node.js", "Express", "MongoDB"],
			},
			{
				id: 3,
				title: "Weather Dashboard",
				description:
					"A weather application that displays current and forecasted weather data.",
				status: "completed",
				url: "https://weather-app.jamiesmith.dev",
				technologies: ["JavaScript", "HTML/CSS", "Weather API"],
			},
		],
		feedback: [
			{
				id: 1,
				mentor: "Alex Johnson",
				date: "2023-10-27",
				text: "Jamie has shown significant improvement in understanding React concepts. Their code is becoming more organized and they're starting to implement best practices. Should focus more on writing tests for components.",
				areas: {
					technical: 4,
					communication: 5,
					problemSolving: 3,
					initiative: 4,
				},
			},
			{
				id: 2,
				mentor: "Maria Garcia",
				date: "2023-08-15",
				text: "Jamie has a good eye for design and quickly picked up UI/UX principles. They successfully applied these concepts to improve the usability of their projects.",
				areas: {
					technical: 3,
					communication: 5,
					problemSolving: 4,
					initiative: 5,
				},
			},
		],
	};

	return (
		<>
			{/* Breadcrumb */}
			<div className="mb-6">
				<Link
					href="/students"
					className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800">
					<ArrowLeft className="mr-1 h-4 w-4" />
					Back to Students
				</Link>
			</div>

			<div className="grid gap-6 lg:grid-cols-3">
				{/* Left Column - Profile Info */}
				<div className="space-y-6">
					{/* Profile Card */}
					<Card>
						<CardContent className="pt-6">
							<div className="flex flex-col items-center text-center">
								<Avatar className="h-32 w-32 border-4 border-white shadow-lg">
									<AvatarImage
										src={student.avatar || "/placeholder.svg"}
										alt={student.name}
									/>
									<AvatarFallback>
										{student.name
											.split(" ")
											.map((n) => n[0])
											.join("")}
									</AvatarFallback>
								</Avatar>
								<h1 className="mt-4 text-2xl font-bold">{student.name}</h1>
								<p className="text-muted-foreground">{student.role}</p>
								<p className="text-sm text-muted-foreground">
									{student.company}
								</p>

								<div className="mt-6 grid w-full">
									<Button className="flex items-center gap-2">
										<MessageSquare className="h-4 w-4" />
										Message
									</Button>
								</div>
							</div>

							{/* Communication */}
							<div className="mt-6 space-y-4">
								<div className="flex items-center gap-2">
									<Mail className="h-4 w-4 text-muted-foreground" />
									<span className="text-sm">{student.email}</span>
								</div>
								<div className="flex items-center gap-2">
									<Phone className="h-4 w-4 text-muted-foreground" />
									<span className="text-sm">{student.phone}</span>
								</div>
							</div>

							{/* Social Media */}
							<div className="mt-6">
								<h3 className="mb-2 text-sm font-medium">Social Profiles</h3>
								<div className="flex flex-wrap gap-2">
									{student.socialLinks.map((link, i) => (
										<a
											key={i}
											href={link.url}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 text-xs hover:bg-slate-200">
											{link.platform}
											<ExternalLink className="h-3 w-3" />
										</a>
									))}
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Skills Card */}
					<Card>
						<CardHeader className="pb-2">
							<CardTitle className="text-lg">Skills & Languages</CardTitle>
						</CardHeader>
						<CardContent>
							{/* Skills */}
							<div className="space-y-4">
								<h3 className="text-sm font-medium">Current Skills</h3>
								{student.skills.map((skill, i) => (
									<div key={i}>
										<div className="mb-1 flex items-center justify-between">
											<span className="text-sm font-medium">{skill.name}</span>
											<span className="text-xs text-muted-foreground">
												{skill.level}%
											</span>
										</div>
										<Progress value={skill.level} className="h-2" />
									</div>
								))}
							</div>

							{/* Languages */}
							<div className="mt-6">
								<h3 className="mb-2 text-sm font-medium">Languages</h3>
								<div className="flex flex-wrap gap-2">
									{student.languages.map((language, i) => (
										<Badge key={i} variant="outline">
											{language}
										</Badge>
									))}
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Education */}
					<Card>
						<CardHeader className="">
							<CardTitle className="text-lg">Education</CardTitle>
						</CardHeader>
						<CardContent>
							<ul className="">
								{student.education.map((edu, i) => (
									<li key={i} className="text-sm">
										<div className="font-medium">{edu.degree}</div>
										<div className="text-muted-foreground">
											{edu.institution} • {edu.yearStart}
											{edu.yearStart == edu.yearEnd
												? null
												: " • " + edu.yearEnd}
										</div>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>
				</div>

				{/* Right Column - Tabs Content */}
				<div className="lg:col-span-2">
					<Tabs defaultValue="overview">
						<CustomTabsList className="border border-black w-full">
							<TabsTrigger value="overview">Overview</TabsTrigger>
							<TabsTrigger value="mentors">Mentors</TabsTrigger>
							<TabsTrigger value="progress">Progress</TabsTrigger>
							<TabsTrigger value="meetings">Meetings</TabsTrigger>
							<TabsTrigger value="projects">Projects</TabsTrigger>
						</CustomTabsList>

						{/* Overview Tab */}
						<OverviewTab role="student" data={student} />

						{/* Mentors Tab */}
						<MentorsTab data={student} />

						{/* Progress Tab */}
						<ProgressTab data={student} />

						{/* Meetings Tab */}
						<MeetingsTab role="student" data={student} />

						{/* Projects Tab */}
						<ProjectsTab data={student} />
					</Tabs>
				</div>
			</div>
		</>
	);
}
