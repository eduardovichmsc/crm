"use client";
import Link from "next/link";
import { Plus, Search } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { mentorsArray } from "@/store/placeholder";
import { getAvailabilityBadge } from "@/utils/format";
import { useSearch } from "@/hooks/useSearch";

export default function MentorsPage() {
	const { searchValue, filteredData, handleValueChange, handleSubmit } =
		useSearch(mentorsArray);

	return (
		<div className="container py-6">
			{/* Page Overview */}
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

			{/* Search */}
			<div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<form onSubmit={handleSubmit} className="relative w-full max-w-sm">
					<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
					<Input
						type="search"
						placeholder="Search mentors..."
						className="pl-8"
						value={searchValue}
						onChange={handleValueChange}
					/>
				</form>
			</div>

			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{filteredData.map((mentor: MentorPreview) => (
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
