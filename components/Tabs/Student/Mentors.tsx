"use client";

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
import { TabsContent } from "@/components/ui/tabs";
import { Mentor } from "@/types/Mentor";
import { Student } from "@/types/Student";
import { formatDate } from "@/utils/format";
import { CalendarIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const MentorCard = ({
	date,
}: {
	date: Pick<Mentor, "id" | "name" | "avatar" | "role"> & {
		startDate: string;
		focus: string;
		progress: number;
	};
}) => {
	const router = useRouter();

	return (
		<div key={date.id} className="mb-4 rounded-lg border p-4">
			<div className="flex items-start justify-between">
				<div className="flex items-start gap-3">
					<Avatar className="h-12 w-12">
						<AvatarImage
							src={date.avatar || "/placeholder.svg"}
							alt={date.name}
						/>
						<AvatarFallback>
							{date.name
								.split(" ")
								.map((n) => n[0])
								.join("")}
						</AvatarFallback>
					</Avatar>
					<div>
						<h4 className="font-medium">{date.name}</h4>
						<p className="text-sm text-muted-foreground">{date.role}</p>
						<div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
							<CalendarIcon className="h-3 w-3" />
							<span>Started {formatDate(date.startDate)}</span>
						</div>
					</div>
				</div>
				<div className="text-right">
					<Badge className="bg-blue-500">{date.focus}</Badge>
					<div className="mt-2">
						<div className="mb-1 flex items-center justify-end gap-2">
							<span className="text-sm font-medium">Progress</span>
							<span className="text-sm">{date.progress}%</span>
						</div>
						<div className="h-2 w-32 overflow-hidden rounded-full bg-slate-100">
							<div
								className="h-full rounded-full bg-blue-600"
								style={{
									width: `${date.progress}%`,
								}}></div>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-4 flex justify-end gap-2">
				<Button onClick={() => router.push("/")} variant="outline" size="sm">
					View Profile
				</Button>
			</div>
		</div>
	);
};

export const MentorsTab = ({ data }: { data: Student }) => {
	return (
		<TabsContent value="mentors" className="mt-6">
			<Card>
				<CardHeader>
					<CardTitle>Mentorship Relationships</CardTitle>
					<CardDescription>Current and past mentors</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="space-y-6">
						<div>
							<h3 className="mb-3 text-lg font-medium">Current Mentors</h3>
							{data.currentMentors.map((mentor, index) => (
								<MentorCard key={index} date={mentor} />
							))}
						</div>

						<div>
							<h3 className="mb-3 text-lg font-medium">Past Mentors</h3>
							{data.pastMentors.map((mentor) => (
								<div key={mentor.id} className="mb-4 rounded-lg border p-4">
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
												<Badge className="bg-blue-500">{mentor.focus}</Badge>
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
	);
};
