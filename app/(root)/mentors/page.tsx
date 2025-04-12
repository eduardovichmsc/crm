import Link from "next/link";
import { Plus, Search } from "lucide-react";

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
import { Input } from "@/components/ui/input";
import { MentorPreview } from "@/types/Mentor";

export default function MentorsPage() {
	// Sample mentors data
	const mentors: MentorPreview[] = [
		{
			id: 1,
			name: "Alex Johnson",
			role: "Senior Developer",
			company: "TechCorp Inc.",
			avatar: "/placeholder.svg?height=80&width=80",
			skills: [
				{ name: "React", level: 50 },
				{ name: "Node.js", level: 70 },
				{ name: "TypeScript", level: 60 },
				{ name: "Cloud Architecture", level: 0 },
				{ name: "DevOps", level: 75 },
			],
			availability: {
				status: "Available",
			},
			mentorshipStats: {
				activeMentees: 3,
				totalMentees: 10,
			},
		},
		{
			id: 2,
			name: "Maria Garcia",
			role: "UX Designer",
			company: "DesignHub",
			avatar: "/placeholder.svg?height=80&width=80",
			skills: [
				{ name: "UI/UX", level: 60 },
				{ name: "Figma", level: 50 },
			],
			availability: { status: "Unavailable" },
			mentorshipStats: {
				activeMentees: 7,
				totalMentees: 10,
				averageRating: 4.2,
			},
		},
	];

	// Get availability badge color
	const getAvailabilityBadge = (availability: string) => {
		switch (availability) {
			case "Available":
				return <Badge className="bg-green-500">Available</Badge>;
			case "Limited":
				return <Badge className="bg-amber-500">Limited</Badge>;
			case "Unavailable":
				return <Badge className="bg-slate-500">Unavailable</Badge>;
			default:
				return <Badge>Unknown</Badge>;
		}
	};

	return (
		<div className="container py-6">
			<div className="mb-8 flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Mentors</h1>
					<p className="text-muted-foreground">
						Browse and connect with our expert mentors
					</p>
				</div>
				<Button className="flex items-center gap-2">
					<Plus className="h-4 w-4" />
					Add Mentor
				</Button>
			</div>

			<div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<div className="relative w-full max-w-sm">
					<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
					<Input
						type="search"
						placeholder="Search mentors..."
						className="pl-8"
					/>
				</div>
			</div>

			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{mentors.map((mentor: MentorPreview) => (
					<Card key={mentor.id} className="overflow-hidden">
						<CardHeader className="pb-2">
							<div className="flex items-start justify-between">
								<div className="flex items-center gap-3">
									<Avatar className="h-12 w-12 border">
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
										<CardTitle className="text-lg">{mentor.name}</CardTitle>
										<CardDescription>{mentor.role}</CardDescription>
										<p className="text-xs text-muted-foreground">
											{mentor.company}
										</p>
									</div>
								</div>
								<div>
									{getAvailabilityBadge(
										mentor.availability.status || "Unavailable"
									)}
								</div>
							</div>
						</CardHeader>
						<CardContent>
							<div className="mb-4 flex flex-wrap gap-1">
								{mentor.skills.map((skill, i) => (
									<span
										key={i}
										className="inline-block rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700">
										{skill.name}
									</span>
								))}
							</div>

							<div className="mb-4 grid grid-cols-2 gap-2 text-center">
								<div className="rounded-md border p-2">
									<div className="text-lg font-bold">
										{mentor.mentorshipStats.averageRating || "XX"}
									</div>
									<div className="text-xs text-muted-foreground">Rating</div>
								</div>
								<div className="rounded-md border p-2">
									<div className="text-lg font-bold">
										{mentor.mentorshipStats.totalMentees || "XX"}
									</div>
									<div className="text-xs text-muted-foreground">Mentees</div>
								</div>
							</div>

							<div className="flex justify-between">
								<div className="text-sm text-muted-foreground">
									<span className="font-medium text-foreground">
										{mentor.mentorshipStats.activeMentees}
									</span>{" "}
									active mentees
								</div>
								<Link
									href={`/mentors/${mentor.id}`}
									className="text-sm font-medium text-blue-600 hover:text-blue-800">
									View Profile
								</Link>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
