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
import { CalendarIcon, ClockIcon } from "lucide-react";
import { formatDate, formatTime } from "@/utils/format";
import { Student } from "@/types/Student";
import { Mentor } from "@/types/Mentor";

type MeetingsTabProps = {
	data: Student | Mentor;
	role: "student" | "mentor";
};

export const MeetingsTab = ({ data, role }: MeetingsTabProps) => {
	return (
		<TabsContent value="meetings" className="mt-6">
			<Card>
				<CardHeader>
					<CardTitle>Mentorship Meetings</CardTitle>
					<CardDescription>
						{role === "student"
							? "Upcoming and past mentoring sessions"
							: `${(data as Mentor).upcomingMeetings.length} scheduled meeting${
									(data as Mentor).upcomingMeetings.length !== 1 ? "s" : ""
							  }`}
					</CardDescription>
				</CardHeader>
				<CardContent>
					{role === "student" && (
						<div className="space-y-6">
							{/* Upcoming Meetings */}
							<div>
								<h3 className="mb-3 text-lg font-medium">Upcoming Meetings</h3>
								{(data as Student).meetings.upcoming.length > 0 ? (
									<div className="space-y-4">
										{(data as Student).meetings.upcoming.map((meeting) => (
											<div key={meeting.id} className="rounded-lg border p-4">
												<div className="mb-2 flex items-center justify-between">
													<h4 className="font-medium">{meeting.topic}</h4>
													<Badge variant="outline">
														{meeting.duration} min
													</Badge>
												</div>
												<div className="mb-3 flex items-center gap-4">
													<div className="flex items-center gap-1 text-sm">
														<CalendarIcon className="h-4 w-4 text-muted-foreground" />
														<span>{formatDate(meeting.date)}</span>
													</div>
													<div className="flex items-center gap-1 text-sm">
														<ClockIcon className="h-4 w-4 text-muted-foreground" />
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

							{/* Past Meetings */}
							<div>
								<h3 className="mb-3 text-lg font-medium">Past Meetings</h3>
								<div className="space-y-4">
									{(data as Student).meetings.past.map((meeting) => (
										<div key={meeting.id} className="rounded-lg border p-4">
											<div className="mb-2 flex items-center justify-between">
												<h4 className="font-medium">{meeting.topic}</h4>
												<Badge variant="outline">{meeting.duration} min</Badge>
											</div>
											<div className="mb-3 flex items-center gap-4">
												<div className="flex items-center gap-1 text-sm">
													<CalendarIcon className="h-4 w-4 text-muted-foreground" />
													<span>{formatDate(meeting.date)}</span>
												</div>
												<div className="flex items-center gap-1 text-sm">
													<ClockIcon className="h-4 w-4 text-muted-foreground" />
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
													<div className="font-medium">Meeting Notes:</div>
													<p className="mt-1 text-muted-foreground">
														{meeting.notes}
													</p>
												</div>
											)}
										</div>
									))}
								</div>
							</div>
						</div>
					)}

					{role === "mentor" && (
						<div className="space-y-4">
							{(data as Mentor).upcomingMeetings.map((meeting) => (
								<div key={meeting.id} className="rounded-lg border p-4">
									<div className="mb-2 flex items-center justify-between">
										<h4 className="font-medium">{meeting.topic}</h4>
										<Badge variant="outline">{meeting.duration} min</Badge>
									</div>
									<div className="mb-3 flex items-center gap-4">
										<div className="flex items-center gap-1 text-sm">
											<CalendarIcon className="h-4 w-4 text-muted-foreground" />
											<span>{formatDate(meeting.date)}</span>
										</div>
										<div className="flex items-center gap-1 text-sm">
											<ClockIcon className="h-4 w-4 text-muted-foreground" />
											<span>{formatTime(meeting.date)}</span>
										</div>
									</div>
									<div className="flex items-center gap-2">
										<span className="text-sm text-muted-foreground">With:</span>
										<span className="text-sm font-medium">
											{meeting.mentee}
										</span>
									</div>
									<div className="mt-3 flex gap-2">
										<Button size="sm" variant="outline" className="flex-1">
											Reschedule
										</Button>
										<Button size="sm" className="flex-1">
											Join Meeting
										</Button>
									</div>
								</div>
							))}
						</div>
					)}
				</CardContent>
			</Card>
		</TabsContent>
	);
};
