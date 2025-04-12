import Link from "next/link";
import {
	ArrowLeft,
	Calendar,
	Clock,
	ExternalLink,
	Mail,
	MessageSquare,
	Phone,
	Plus,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Student } from "@/types/Student";
import {
	formatDate,
	formatTime,
	getProjectBadge,
	renderStars,
} from "@/utils/format";

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
		<div className="container py-6">
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
						<TabsList className="grid w-full grid-cols-5">
							<TabsTrigger value="overview">Overview</TabsTrigger>
							<TabsTrigger value="mentors">Mentors</TabsTrigger>
							<TabsTrigger value="progress">Progress</TabsTrigger>
							<TabsTrigger value="meetings">Meetings</TabsTrigger>
							<TabsTrigger value="projects">Projects</TabsTrigger>
						</TabsList>

						{/* Overview Tab */}
						<TabsContent value="overview" className="mt-6">
							<Card>
								<CardHeader>
									<CardTitle>About {student.name}</CardTitle>
									<CardDescription>
										Background and mentorship journey
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="space-y-6">
										<div>
											<h3 className="mb-2 text-lg font-medium">Bio</h3>
											<p>{student.bio}</p>
										</div>

										<div>
											<h3 className="mb-3 text-lg font-medium">
												Mentorship Progress
											</h3>
											<div className="mb-6 rounded-lg border p-4">
												<div className="mb-2 flex items-center justify-between">
													<span className="font-medium">Overall Progress</span>
													<span>{student.progress.overallCompletion}%</span>
												</div>
												<Progress
													value={student.progress.overallCompletion}
													className="h-2.5"
												/>
											</div>

											<div className="grid gap-4 md:grid-cols-2">
												<div>
													<h4 className="mb-3 text-sm font-medium">
														Current Mentors
													</h4>
													{student.currentMentors.map((mentor) => (
														<div
															key={mentor.id}
															className="flex items-center gap-3 rounded-lg border p-3">
															<Avatar>
																<AvatarImage
																	src={mentor.avatar || "/placeholder.svg"}
																	alt={mentor.name}
																/>
																<AvatarFallback>
																	{mentor.name
																		.split(" ")
																		.map((n) => n[0])
																		.join("")}
																</AvatarFallback>
															</Avatar>
															<div>
																<div className="font-medium">{mentor.name}</div>
																<div className="text-xs text-muted-foreground">
																	{mentor.role}
																</div>
																<div className="mt-1 text-xs">
																	<span className="text-blue-600">
																		{mentor.focus}
																	</span>
																</div>
															</div>
														</div>
													))}
												</div>

												<div>
													<h4 className="mb-3 text-sm font-medium">
														Upcoming Meeting
													</h4>
													{student.meetings.upcoming.length > 0 ? (
														<div className="rounded-lg border p-3">
															<div className="font-medium">
																{student.meetings.upcoming[0].topic}
															</div>
															<div className="mt-2 flex items-center gap-4">
																<div className="flex items-center gap-1 text-sm">
																	<Calendar className="h-4 w-4 text-muted-foreground" />
																	<span>
																		{formatDate(
																			student.meetings.upcoming[0].date
																		)}
																	</span>
																</div>
																<div className="flex items-center gap-1 text-sm">
																	<Clock className="h-4 w-4 text-muted-foreground" />
																	<span>
																		{formatTime(
																			student.meetings.upcoming[0].date
																		)}
																	</span>
																</div>
															</div>
															<div className="mt-1 text-sm text-muted-foreground">
																With {student.meetings.upcoming[0].mentor}
															</div>
															<Button size="sm" className="mt-3 w-full">
																Join Meeting
															</Button>
														</div>
													) : (
														<div className="rounded-lg border p-3 text-center text-muted-foreground">
															No upcoming meetings scheduled
														</div>
													)}
												</div>
											</div>
										</div>

										<div>
											<h3 className="mb-3 text-lg font-medium">
												Recent Feedback
											</h3>
											{student.feedback.length > 0 ? (
												<div className="rounded-lg border p-4">
													<div className="mb-2 flex items-center justify-between">
														<div className="font-medium">
															From {student.feedback[0].mentor}
														</div>
														<div className="text-sm text-muted-foreground">
															{formatDate(student.feedback[0].date)}
														</div>
													</div>
													<p className="text-sm">{student.feedback[0].text}</p>
													<div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
														<div className="rounded-md bg-slate-50 p-2 text-center">
															<div className="text-xs text-muted-foreground">
																Technical
															</div>
															<div className="flex justify-center">
																{renderStars(
																	student.feedback[0].areas.technical
																)}
															</div>
														</div>
														<div className="rounded-md bg-slate-50 p-2 text-center">
															<div className="text-xs text-muted-foreground">
																Communication
															</div>
															<div className="flex justify-center">
																{renderStars(
																	student.feedback[0].areas.communication
																)}
															</div>
														</div>
														<div className="rounded-md bg-slate-50 p-2 text-center">
															<div className="text-xs text-muted-foreground">
																Problem Solving
															</div>
															<div className="flex justify-center">
																{renderStars(
																	student.feedback[0].areas.problemSolving
																)}
															</div>
														</div>
														<div className="rounded-md bg-slate-50 p-2 text-center">
															<div className="text-xs text-muted-foreground">
																Initiative
															</div>
															<div className="flex justify-center">
																{renderStars(
																	student.feedback[0].areas.initiative
																)}
															</div>
														</div>
													</div>
												</div>
											) : (
												<div className="rounded-lg border p-4 text-center text-muted-foreground">
													No feedback available yet
												</div>
											)}
										</div>
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						{/* Mentors Tab */}
						<TabsContent value="mentors" className="mt-6">
							<Card>
								<CardHeader>
									<CardTitle>Mentorship Relationships</CardTitle>
									<CardDescription>Current and past mentors</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="space-y-6">
										<div>
											<h3 className="mb-3 text-lg font-medium">
												Current Mentors
											</h3>
											{student.currentMentors.map((mentor) => (
												<div
													key={mentor.id}
													className="mb-4 rounded-lg border p-4">
													<div className="flex items-start justify-between">
														<div className="flex items-start gap-3">
															<Avatar className="h-12 w-12">
																<AvatarImage
																	src={mentor.avatar || "/placeholder.svg"}
																	alt={mentor.name}
																/>
																<AvatarFallback>
																	{mentor.name
																		.split(" ")
																		.map((n) => n[0])
																		.join("")}
																</AvatarFallback>
															</Avatar>
															<div>
																<h4 className="font-medium">{mentor.name}</h4>
																<p className="text-sm text-muted-foreground">
																	{mentor.role}
																</p>
																<div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
																	<Calendar className="h-3 w-3" />
																	<span>
																		Started {formatDate(mentor.startDate)}
																	</span>
																</div>
															</div>
														</div>
														<div className="text-right">
															<Badge className="bg-blue-500">
																{mentor.focus}
															</Badge>
															<div className="mt-2">
																<div className="mb-1 flex items-center justify-end gap-2">
																	<span className="text-sm font-medium">
																		Progress
																	</span>
																	<span className="text-sm">
																		{mentor.progress}%
																	</span>
																</div>
																<div className="h-2 w-32 overflow-hidden rounded-full bg-slate-100">
																	<div
																		className="h-full rounded-full bg-blue-600"
																		style={{
																			width: `${mentor.progress}%`,
																		}}></div>
																</div>
															</div>
														</div>
													</div>
													<div className="mt-4 flex justify-end gap-2">
														<Button variant="outline" size="sm">
															View Profile
														</Button>
														<Button size="sm">Schedule Meeting</Button>
													</div>
												</div>
											))}
										</div>

										<div>
											<h3 className="mb-3 text-lg font-medium">Past Mentors</h3>
											{student.pastMentors.map((mentor) => (
												<div
													key={mentor.id}
													className="mb-4 rounded-lg border p-4">
													<div className="flex items-start gap-3">
														<Avatar className="h-12 w-12">
															<AvatarImage
																src={mentor.avatar || "/placeholder.svg"}
																alt={mentor.name}
															/>
															<AvatarFallback>
																{mentor.name
																	.split(" ")
																	.map((n) => n[0])
																	.join("")}
															</AvatarFallback>
														</Avatar>
														<div>
															<h4 className="font-medium">{mentor.name}</h4>
															<p className="text-sm text-muted-foreground">
																{mentor.role}
															</p>
															<div className="mt-1 flex items-center gap-2 text-xs">
																<Badge variant="outline">{mentor.period}</Badge>
																<Badge className="bg-blue-500">
																	{mentor.focus}
																</Badge>
															</div>
														</div>
													</div>
													<div className="mt-3 flex justify-end">
														<Button variant="outline" size="sm">
															View Profile
														</Button>
													</div>
												</div>
											))}
										</div>
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						{/* Progress Tab */}
						<TabsContent value="progress" className="mt-6">
							<Card>
								<CardHeader>
									<CardTitle>Learning Progress</CardTitle>
									<CardDescription>
										Track skills development and milestones
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="space-y-6">
										{/* Mentor Relationships Progress */}
										<div>
											<h3 className="mb-3 text-lg font-medium">
												Overall Progress
											</h3>
											<div className="rounded-lg border p-4">
												<div className="mb-2 flex items-center justify-between">
													<span className="font-medium">
														Mentorship Completion
													</span>
													<span>{student.progress.overallCompletion}%</span>
												</div>
												<Progress
													value={student.progress.overallCompletion}
													className="h-2.5"
												/>
											</div>
										</div>

										{/* Skills Progress */}
										<div>
											<h3 className="mb-3 text-lg font-medium">
												Skills Progress
											</h3>
											<div className="space-y-4">
												{student.progress.skillsProgress.map((skill, i) => (
													<div key={i} className="rounded-lg border p-4">
														<div className="mb-2 flex items-center justify-between">
															<span className="font-medium">{skill.skill}</span>
															<span className="text-sm">
																{skill.current}% of {skill.target}% target
															</span>
														</div>
														<div className="relative h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
															<div
																className="absolute left-0 h-full rounded-full bg-slate-300"
																style={{ width: `${skill.target}%` }}></div>
															<div
																className="absolute left-0 h-full rounded-full bg-blue-600"
																style={{ width: `${skill.current}%` }}></div>
															<div
																className="absolute left-0 h-full w-px bg-slate-400"
																style={{ left: `${skill.initial}%` }}></div>
														</div>
														<div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
															<span>Initial: {skill.initial}%</span>
															<span>Current: {skill.current}%</span>
															<span>Target: {skill.target}%</span>
														</div>
													</div>
												))}
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						{/* Meetings Tab */}
						<TabsContent value="meetings" className="mt-6">
							<Card>
								<CardHeader>
									<CardTitle>Mentorship Meetings</CardTitle>
									<CardDescription>
										Upcoming and past mentoring sessions
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="space-y-6">
										<div>
											<h3 className="mb-3 text-lg font-medium">
												Upcoming Meetings
											</h3>
											{student.meetings.upcoming.length > 0 ? (
												<div className="space-y-4">
													{student.meetings.upcoming.map((meeting) => (
														<div
															key={meeting.id}
															className="rounded-lg border p-4">
															<div className="mb-2 flex items-center justify-between">
																<h4 className="font-medium">{meeting.topic}</h4>
																<Badge variant="outline">
																	{meeting.duration} min
																</Badge>
															</div>
															<div className="mb-3 flex items-center gap-4">
																<div className="flex items-center gap-1 text-sm">
																	<Calendar className="h-4 w-4 text-muted-foreground" />
																	<span>{formatDate(meeting.date)}</span>
																</div>
																<div className="flex items-center gap-1 text-sm">
																	<Clock className="h-4 w-4 text-muted-foreground" />
																	<span>{formatTime(meeting.date)}</span>
																</div>
															</div>
															<div className="flex items-center gap-2">
																<span className="text-sm text-muted-foreground">
																	With:
																</span>
																<span className="text-sm font-medium">
																	{meeting.mentor}
																</span>
															</div>
															<div className="mt-3 flex gap-2">
																<Button size="sm" className="flex-1">
																	Join Meeting
																</Button>
															</div>
														</div>
													))}
												</div>
											) : (
												<div className="rounded-lg border p-4 text-center text-muted-foreground">
													No upcoming meetings scheduled
												</div>
											)}
										</div>

										<div>
											<h3 className="mb-3 text-lg font-medium">
												Past Meetings
											</h3>
											<div className="space-y-4">
												{student.meetings.past.map((meeting) => (
													<div
														key={meeting.id}
														className="rounded-lg border p-4">
														<div className="mb-2 flex items-center justify-between">
															<h4 className="font-medium">{meeting.topic}</h4>
															<Badge variant="outline">
																{meeting.duration} min
															</Badge>
														</div>
														<div className="mb-3 flex items-center gap-4">
															<div className="flex items-center gap-1 text-sm">
																<Calendar className="h-4 w-4 text-muted-foreground" />
																<span>{formatDate(meeting.date)}</span>
															</div>
															<div className="flex items-center gap-1 text-sm">
																<Clock className="h-4 w-4 text-muted-foreground" />
																<span>{formatTime(meeting.date)}</span>
															</div>
														</div>
														<div className="flex items-center gap-2">
															<span className="text-sm text-muted-foreground">
																With:
															</span>
															<span className="text-sm font-medium">
																{meeting.mentor}
															</span>
														</div>
														{meeting.notes && (
															<div className="mt-3 rounded-md bg-slate-50 p-3 text-sm">
																<div className="font-medium">
																	Meeting Notes:
																</div>
																<p className="mt-1 text-muted-foreground">
																	{meeting.notes}
																</p>
															</div>
														)}
													</div>
												))}
											</div>
										</div>

										<div className="flex justify-center">
											<Button className="flex items-center gap-2">
												<Calendar className="h-4 w-4" />
												Schedule New Meeting
											</Button>
										</div>
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						{/* Projects Tab */}
						<TabsContent value="projects" className="mt-6">
							<Card>
								<CardHeader>
									<CardTitle>Learning Projects</CardTitle>
									<CardDescription>
										Projects completed and in progress
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="space-y-6">
										{student.projects.map((project) => (
											<div key={project.id} className="rounded-lg border p-4">
												<div className="mb-2 flex items-center justify-between">
													<h3 className="text-lg font-medium">
														{project.title}
													</h3>
													{getProjectBadge(project.status)}
												</div>
												<p className="mb-3 text-muted-foreground">
													{project.description}
												</p>
												<div className="mb-3 flex flex-wrap gap-1">
													{project.technologies.map((tech, i) => (
														<span
															key={i}
															className="inline-block rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700">
															{tech}
														</span>
													))}
												</div>
												<div className="flex justify-between">
													{project.url ? (
														<a
															href={project.url}
															target="_blank"
															rel="noopener noreferrer"
															className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800">
															View Project <ExternalLink className="h-3 w-3" />
														</a>
													) : (
														<span></span>
													)}
													<Button variant="outline" size="sm">
														View Details
													</Button>
												</div>
											</div>
										))}

										<div className="flex justify-center">
											<Button className="flex items-center gap-2">
												<Plus className="h-4 w-4" />
												Add New Project
											</Button>
										</div>
									</div>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</div>
	);
}
