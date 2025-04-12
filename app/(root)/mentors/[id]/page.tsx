import {
	ArrowLeft,
	Calendar,
	Clock,
	ExternalLink,
	Mail,
	MessageSquare,
	Phone,
	Users,
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
import { Mentor } from "@/types/Mentor";
import { formatDate, formatTime, renderStars } from "@/utils/format";
import Link from "next/link";

export default function MentorProfile() {
	// Mentor Data
	const mentor: Mentor = {
		id: 1,
		name: "Alex Johnson",
		role: "Senior Developer",
		company: "TechCorp Inc.",
		location: "San Francisco, CA",
		avatar: "/placeholder.svg?height=128&width=128",
		email: "alex.johnson@example.com",
		phone: "+1 (555) 123-4567",
		bio: "Full-stack developer with 8+ years of experience specializing in React, Node.js, and cloud architecture. Passionate about mentoring junior developers and sharing knowledge within the tech community.",
		skills: [
			{ name: "React", level: 50 },
			{ name: "Node.js", level: 70 },
			{ name: "TypeScript", level: 60 },
			{ name: "Cloud Architecture", level: 0 },
			{ name: "DevOps", level: 75 },
		],
		languages: [
			"Kazakh (Native)",
			"Russian (Intermediate)",
			"English (Pre-Intermediate)",
		],
		availability: {
			status: "Available",
			hours: "10 hours/week",
			preferredTimes: ["Weekday evenings", "Weekend mornings"],
		},
		mentorshipStats: {
			totalMentees: 12,
			activeMentees: 3,
			completedMentorships: 9,
			averageRating: 4.8,
			totalHours: 156,
		},
		education: [
			{
				degree: "Bachelor's Degree",
				institution: "Kazakh-British Technical University",
				yearStart: "2023",
				yearEnd: "2027",
			},
			{
				degree: "Associate's Degree",
				institution: "n'Factorial Incubator",
				yearStart: "2024",
				yearEnd: "2024",
			},
		],
		certifications: [
			"AWS Certified Solutions Architect",
			"Google Cloud Professional Developer",
			"MongoDB Certified Developer",
		],
		socialLinks: [
			{ platform: "LinkedIn", url: "https://linkedin.com/in/alexjohnson" },
			{ platform: "GitHub", url: "https://github.com/alexjohnson" },
			{ platform: "Twitter", url: "https://twitter.com/alexjohnson" },
		],
		currentMentees: [
			{
				id: "1",
				name: "Jamie Smith",
				role: "Junior Developer",
				avatar: "/placeholder.svg?height=40&width=40",
				startDate: "2023-09-15",
				progress: 65,
			},
			{
				id: "2",
				name: "Taylor Wong",
				role: "Frontend Developer",
				avatar: "/placeholder.svg?height=40&width=40",
				startDate: "2023-10-01",
				progress: 40,
			},
			{
				id: "3",
				name: "Jordan Rivera",
				role: "CS Student",
				avatar: "/placeholder.svg?height=40&width=40",
				startDate: "2023-10-20",
				progress: 25,
			},
		],
		reviews: [
			{
				id: "1",
				mentee: "Chris Lee",
				avatar: "/placeholder.svg?height=40&width=40",
				rating: 5,
				date: "2023-08-15",
				text: "Alex was an incredible mentor who helped me navigate complex React concepts and improve my coding practices. Always patient and insightful.",
			},
			{
				id: "2",
				mentee: "Sarah Chen",
				avatar: "/placeholder.svg?height=40&width=40",
				rating: 5,
				date: "2023-07-22",
				text: "Working with Alex transformed my approach to software development. Their guidance on architecture patterns was invaluable.",
			},
			{
				id: "3",
				mentee: "Michael Taylor",
				avatar: "/placeholder.svg?height=40&width=40",
				rating: 4,
				date: "2023-06-10",
				text: "Alex provided practical advice that helped me solve real-world problems in my projects. Great at explaining complex topics.",
			},
		],
		upcomingMeetings: [
			{
				id: "1",
				mentee: "Jamie Smith",
				date: "2023-11-10T15:00:00",
				duration: 60,
				topic: "React Performance Optimization",
			},
			{
				id: "2",
				mentee: "Taylor Wong",
				date: "2023-11-12T10:30:00",
				duration: 45,
				topic: "Code Review Best Practices",
			},
		],
	};

	return (
		<div className="w-full">
			{/* Breadcrumb */}
			<div className="mb-6">
				<Link
					href="/mentors"
					className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800">
					<ArrowLeft className="mr-1 h-4 w-4" />
					Back to Mentors
				</Link>
			</div>

			<div className="grid gap-6 lg:grid-cols-3 w-full">
				{/* Profile Info */}
				<div className="space-y-6">
					{/* Profile Card */}
					<Card>
						<CardContent className="pt-6">
							<div className="flex flex-col items-center text-center">
								<Avatar className="h-32 w-32 border-4 border-white shadow-lg">
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
								<h1 className="mt-4 text-2xl font-bold">{mentor.name}</h1>
								<p className="text-muted-foreground">{mentor.role}</p>
								<p className="text-sm text-muted-foreground">
									{mentor.company}
								</p>

								<div className="mt-4 flex items-center gap-2">
									<Badge className="bg-green-500">
										{mentor.availability.status}
									</Badge>
									<Badge variant="outline">Mentor</Badge>
								</div>

								<div className="mt-6 grid w-full">
									<Button className="flex items-center gap-2">
										<MessageSquare className="h-4 w-4" />
										Message
									</Button>
								</div>
							</div>

							<div className="mt-6 space-y-4">
								<div className="flex items-center gap-2">
									<Mail className="h-4 w-4 text-muted-foreground" />
									<span className="text-sm">{mentor.email}</span>
								</div>
								<div className="flex items-center gap-2">
									<Phone className="h-4 w-4 text-muted-foreground" />
									<span className="text-sm">{mentor.phone}</span>
								</div>
							</div>

							<div className="mt-6">
								<h3 className="mb-2 text-sm font-medium">Social Profiles</h3>
								<div className="flex flex-wrap gap-2">
									{mentor.socialLinks.map((link, i) => (
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
							<CardTitle className="text-lg">Skills & Expertise</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								{mentor.skills.map((skill, i) => (
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

							<div className="mt-6">
								<h3 className="mb-2 text-sm font-medium">Languages</h3>
								<div className="flex flex-wrap gap-2">
									{mentor.languages.map((language, i) => (
										<Badge key={i} variant="outline">
											{language}
										</Badge>
									))}
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Education & Certifications */}
					<Card>
						<CardHeader className="pb-2">
							<CardTitle className="text-lg">
								Education & Certifications
							</CardTitle>
						</CardHeader>

						<CardContent>
							<div className="space-y-4">
								{/* Education */}
								<div>
									<h3 className="mb-2 text-sm font-medium">Education</h3>
									<ul className="space-y-3">
										{mentor.education.map((edu, i) => (
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
								</div>

								{/* Certificiations */}
								<div>
									<h3 className="mb-2 text-sm font-medium">Certifications</h3>
									<ul className="space-y-2">
										{mentor.certifications.map((cert, i) => (
											<li key={i} className="text-sm">
												{cert}
											</li>
										))}
									</ul>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Right - Tabs Content */}
				<div className="lg:col-span-2 w-full">
					<Tabs defaultValue="about" className="">
						<TabsList className="grid w-full grid-cols-4">
							<TabsTrigger value="about">About</TabsTrigger>
							<TabsTrigger value="mentees">Mentees</TabsTrigger>
							<TabsTrigger value="reviews">Reviews</TabsTrigger>
							<TabsTrigger value="meetings">Meetings</TabsTrigger>
						</TabsList>

						{/* About Tab */}
						<TabsContent value="about" className="mt-6">
							<Card>
								<CardHeader>
									<CardTitle>About {mentor.name}</CardTitle>
									<CardDescription>
										Professional background and mentorship approach
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="space-y-6">
										<div>
											<h3 className="mb-2 text-lg font-medium">Bio</h3>
											<p>{mentor.bio}</p>
										</div>

										<div>
											<h3 className="mb-3 text-lg font-medium">
												Mentorship Statistics
											</h3>
											<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
												<div className="rounded-lg border p-3 text-center">
													<div className="text-2xl font-bold text-blue-600">
														{mentor.mentorshipStats.totalMentees}
													</div>
													<div className="text-xs text-muted-foreground">
														Total Mentees
													</div>
												</div>
												<div className="rounded-lg border p-3 text-center">
													<div className="text-2xl font-bold text-green-600">
														{mentor.mentorshipStats.activeMentees}
													</div>
													<div className="text-xs text-muted-foreground">
														Active
													</div>
												</div>
												<div className="rounded-lg border p-3 text-center">
													<div className="text-2xl font-bold text-purple-600">
														{mentor.mentorshipStats.completedMentorships}
													</div>
													<div className="text-xs text-muted-foreground">
														Completed
													</div>
												</div>
												<div className="rounded-lg border p-3 text-center">
													<div className="text-2xl font-bold text-amber-600">
														{mentor.mentorshipStats.averageRating}
													</div>
													<div className="text-xs text-muted-foreground">
														Avg. Rating
													</div>
												</div>
												<div className="rounded-lg border p-3 text-center">
													<div className="text-2xl font-bold text-cyan-600">
														{mentor.mentorshipStats.totalHours}
													</div>
													<div className="text-xs text-muted-foreground">
														Total Hours
													</div>
												</div>
											</div>
										</div>

										<div>
											<h3 className="mb-2 text-lg font-medium">Availability</h3>
											<div className="rounded-lg border p-4">
												<div className="mb-3 flex items-center">
													<Badge className="bg-green-500 mr-2">
														{mentor.availability.status}
													</Badge>
													<span className="text-sm">
														{mentor.availability.hours}
													</span>
												</div>
												<div>
													<h4 className="mb-1 text-sm font-medium">
														Preferred Meeting Times:
													</h4>
													<ul className="list-inside list-disc space-y-1">
														{mentor.availability.preferredTimes?.map((time) => (
															<li
																key={time}
																className="text-sm text-muted-foreground">
																{time}
															</li>
														))}
													</ul>
												</div>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						{/* Mentees Tab */}
						<TabsContent value="mentees" className="mt-6">
							<Card>
								<CardHeader>
									<CardTitle>Current Mentees</CardTitle>
									<CardDescription>
										{mentor.currentMentees.length} active mentorship
										{mentor.currentMentees.length !== 1 ? "s" : ""}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="space-y-4">
										{mentor.currentMentees.map((mentee) => (
											<div
												key={mentee.id}
												className="flex items-center justify-between rounded-lg border p-4">
												<div className="flex items-center gap-3">
													<Avatar>
														<AvatarImage
															src={mentee.avatar || "/placeholder.svg"}
															alt={mentee.name}
														/>
														<AvatarFallback>
															{mentee.name
																.split(" ")
																.map((n) => n[0])
																.join("")}
														</AvatarFallback>
													</Avatar>
													<div>
														<h4 className="font-medium">{mentee.name}</h4>
														<p className="text-sm text-muted-foreground">
															{mentee.role}
														</p>
														<div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
															<Calendar className="h-3 w-3" />
															<span>
																Started {formatDate(mentee.startDate)}
															</span>
														</div>
													</div>
												</div>
												<div className="text-right hidden">
													<div className="mb-1 flex items-center justify-end gap-2">
														<span className="text-sm font-medium">
															Progress
														</span>
														<span className="text-sm">{mentee.progress}%</span>
													</div>
													<div className="h-2 w-32 overflow-hidden rounded-full bg-slate-100">
														<div
															className="h-full rounded-full bg-blue-600"
															style={{ width: `${mentee.progress}%` }}></div>
													</div>
												</div>
											</div>
										))}
									</div>

									<div className="mt-6 flex justify-center">
										<Button
											variant="outline"
											className="flex items-center gap-2">
											<Users className="h-4 w-4" />
											View Past Mentees
										</Button>
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						{/* Reviews Tab */}
						<TabsContent value="reviews" className="mt-6">
							<Card>
								<CardHeader>
									<div className="flex items-center justify-between">
										<div>
											<CardTitle>Mentee Reviews</CardTitle>
											<CardDescription>
												Average rating: {mentor.mentorshipStats.averageRating}/5
												({mentor.reviews.length} reviews)
											</CardDescription>
										</div>
										<div className="flex items-center">
											{renderStars(mentor.mentorshipStats.averageRating || 0)}
										</div>
									</div>
								</CardHeader>
								<CardContent>
									<div className="space-y-6">
										{mentor.reviews.map((review) => (
											<div key={review.id} className="rounded-lg border p-4">
												<div className="mb-3 flex items-center justify-between">
													<div className="flex items-center gap-3">
														<Avatar>
															<AvatarImage
																src={review.avatar || "/placeholder.svg"}
																alt={review.mentee}
															/>
															<AvatarFallback>
																{review.mentee[0]}
															</AvatarFallback>
														</Avatar>
														<div>
															<h4 className="font-medium">{review.mentee}</h4>
															<p className="text-xs text-muted-foreground">
																{formatDate(review.date)}
															</p>
														</div>
													</div>
													<div className="flex">
														{renderStars(review.rating)}
													</div>
												</div>
												<p className="text-sm">{review.text}</p>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						{/* Meetings Tab */}
						<TabsContent value="meetings" className="mt-6">
							<Card>
								<CardHeader>
									<CardTitle>Upcoming Meetings</CardTitle>
									<CardDescription>
										{mentor.upcomingMeetings.length} scheduled meeting
										{mentor.upcomingMeetings.length !== 1 ? "s" : ""}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="space-y-4">
										{mentor.upcomingMeetings.map((meeting) => (
											<div key={meeting.id} className="rounded-lg border p-4">
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
														{meeting.mentee}
													</span>
												</div>
												<div className="mt-3 flex gap-2">
													<Button
														size="sm"
														variant="outline"
														className="flex-1">
														Reschedule
													</Button>
													<Button size="sm" className="flex-1">
														Join Meeting
													</Button>
												</div>
											</div>
										))}
									</div>

									<div className="mt-6">
										<Button className="w-full">Schedule New Meeting</Button>
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
