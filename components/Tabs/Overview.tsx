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
import { TabsContent } from "@/components/ui/tabs";
import { formatDate, formatTime, renderStars } from "@/utils/format";
import { CalendarIcon, ClockIcon } from "lucide-react";
import { Student } from "@/types/Student";
import { Mentor } from "@/types/Mentor";

type OverviewTabProps = {
	data: Student | Mentor;
	role: "student" | "mentor";
};

export const OverviewTab = ({ data, role }: OverviewTabProps) => {
	return (
		<TabsContent
			value={role === "student" ? "overview" : "about"}
			className="mt-6">
			<Card>
				<CardHeader>
					<CardTitle>About {data.name}</CardTitle>
					<CardDescription>
						{role === "student"
							? "Background and mentorship journey"
							: "Professional background and mentorship approach"}
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="space-y-6">
						{/* Bio */}
						<div>
							<h3 className="mb-2 text-lg font-medium">Bio</h3>
							<p>{data.bio}</p>
						</div>

						{/* Student-specific */}
						{role === "student" && (
							<>
								{/* Mentorship Progress */}
								<div>
									<h3 className="mb-3 text-lg font-medium">
										Mentorship Progress
									</h3>
									<div className="mb-6 rounded-lg border p-4">
										<div className="mb-2 flex items-center justify-between">
											<span className="font-medium">Overall Progress</span>
											<span>
												{(data as Student).progress.overallCompletion}%
											</span>
										</div>
										<Progress
											value={(data as Student).progress.overallCompletion}
											className="h-2.5"
										/>
									</div>

									<div className="grid gap-4 md:grid-cols-2">
										{/* Current Mentors */}
										<div>
											<h4 className="mb-3 text-sm font-medium">
												Current Mentors
											</h4>
											{(data as Student).currentMentors.map((mentor) => (
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
														<div className="mt-1 text-xs text-blue-600">
															{mentor.focus}
														</div>
													</div>
												</div>
											))}
										</div>

										{/* Upcoming Meeting */}
										<div>
											<h4 className="mb-3 text-sm font-medium">
												Upcoming Meeting
											</h4>
											{(data as Student).meetings.upcoming.length > 0 ? (
												<div className="rounded-lg border p-3">
													<div className="font-medium">
														{(data as Student).meetings.upcoming[0].topic}
													</div>
													<div className="mt-2 flex items-center gap-4">
														<div className="flex items-center gap-1 text-sm">
															<CalendarIcon className="h-4 w-4 text-muted-foreground" />
															<span>
																{formatDate(
																	(data as Student).meetings.upcoming[0].date
																)}
															</span>
														</div>
														<div className="flex items-center gap-1 text-sm">
															<ClockIcon className="h-4 w-4 text-muted-foreground" />
															<span>
																{formatTime(
																	(data as Student).meetings.upcoming[0].date
																)}
															</span>
														</div>
													</div>
													<div className="mt-1 text-sm text-muted-foreground">
														With {(data as Student).meetings.upcoming[0].mentor}
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

								{/* Feedback */}
								<div>
									<h3 className="mb-3 text-lg font-medium">Recent Feedback</h3>
									{(data as Student).feedback.length > 0 ? (
										<div className="rounded-lg border p-4">
											<div className="mb-2 flex items-center justify-between">
												<div className="font-medium">
													From {(data as Student).feedback[0].mentor}
												</div>
												<div className="text-sm text-muted-foreground">
													{formatDate((data as Student).feedback[0].date)}
												</div>
											</div>
											<p className="text-sm">
												{(data as Student).feedback[0].text}
											</p>
											<div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
												{Object.entries(
													(data as Student).feedback[0].areas
												).map(([key, value]) => (
													<div
														key={key}
														className="rounded-md bg-slate-50 p-2 text-center">
														<div className="text-xs text-muted-foreground">
															{key.replace(/([A-Z])/g, " $1")}
														</div>
														<div className="flex justify-center">
															{renderStars(value)}
														</div>
													</div>
												))}
											</div>
										</div>
									) : (
										<div className="rounded-lg border p-4 text-center text-muted-foreground">
											No feedback available yet
										</div>
									)}
								</div>
							</>
						)}

						{/* Mentor-specific */}
						{role === "mentor" && (
							<>
								{/* Mentorship Stats */}
								<div>
									<h3 className="mb-3 text-lg font-medium">
										Mentorship Statistics
									</h3>
									<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
										{Object.entries((data as Mentor).mentorshipStats).map(
											([key, value]) => {
												const label = key
													.replace(/([A-Z])/g, " $1")
													.replace(/^./, (str) => str.toUpperCase());
												const colors: Record<string, string> = {
													totalMentees: "text-blue-600",
													activeMentees: "text-green-600",
													completedMentorships: "text-purple-600",
													averageRating: "text-amber-600",
													totalHours: "text-cyan-600",
												};
												return (
													<div
														key={key}
														className="rounded-lg border p-3 text-center">
														<div
															className={`text-2xl font-bold ${colors[key]}`}>
															{value}
														</div>
														<div className="text-xs text-muted-foreground">
															{label}
														</div>
													</div>
												);
											}
										)}
									</div>
								</div>

								{/* Availability */}
								<div>
									<h3 className="mb-2 text-lg font-medium">Availability</h3>
									<div className="rounded-lg border p-4">
										<div className="mb-3 flex items-center">
											<Badge className="bg-green-500 mr-2">
												{(data as Mentor).availability.status}
											</Badge>
											<span className="text-sm">
												{(data as Mentor).availability.hours}
											</span>
										</div>
										<div>
											<h4 className="mb-1 text-sm font-medium">
												Preferred Meeting Times:
											</h4>
											<ul className="list-inside list-disc space-y-1">
												{(data as Mentor).availability.preferredTimes?.map(
													(time) => (
														<li
															key={time}
															className="text-sm text-muted-foreground">
															{time}
														</li>
													)
												)}
											</ul>
										</div>
									</div>
								</div>
							</>
						)}
					</div>
				</CardContent>
			</Card>
		</TabsContent>
	);
};
