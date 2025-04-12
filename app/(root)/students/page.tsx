"use client";
import Link from "next/link";
import { Plus, Search } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { useSearch } from "@/hooks/useSearch";
import { studentsArray } from "@/store/placeholder";

export default function StudentsPage() {
	const { searchValue, handleValueChange, handleSubmit, filteredData } =
		useSearch(studentsArray);

	return (
		<div className="container py-6">
			<div className="mb-8 flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Students</h1>
					<p className="text-muted-foreground">
						Manage and track student progress
					</p>
				</div>
				<Button className="flex items-center gap-2">
					<Plus className="h-4 w-4" />
					Add Student
				</Button>
			</div>

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
				{filteredData.map((student) => (
					<Card key={student.id} className="overflow-hidden p-0 pt-3">
						<CardContent className="p-0">
							<div className="px-4">
								<div className="flex items-start justify-between">
									<div className="flex items-center gap-3">
										<Avatar className="h-12 w-12 border">
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
										<div>
											<h3 className="font-medium">{student.name}</h3>
											<p className="text-sm text-muted-foreground">
												{student.role}
											</p>
											<p className="text-xs text-muted-foreground">
												{student.company}
											</p>
										</div>
									</div>
								</div>

								<div className="mt-4 flex flex-wrap gap-1">
									{student.skills.map((skill, i) => (
										<span
											key={i}
											className="inline-block rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700">
											{skill.name}
										</span>
									))}
								</div>

								<div className="mt-4">
									<div className="mb-1 flex items-center justify-between">
										<span className="text-sm font-medium">Progress</span>
										<span className="text-sm">
											{+student.progress.overallCompletion}%
										</span>
									</div>
									<Progress
										value={+student.progress.skillsProgress}
										className="h-2"
									/>
								</div>

								<div className="mt-4 flex items-center justify-between">
									<div>
										<div className="text-xs text-muted-foreground">Mentor</div>
										<div className="text-sm">
											{student.currentMentors[0].name}
										</div>
									</div>
								</div>
							</div>

							<div className="flex border-t mt-4">
								<Link
									href={`/students/${student.id}`}
									className="flex flex-1 items-center justify-center py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 hover:text-blue-700">
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
