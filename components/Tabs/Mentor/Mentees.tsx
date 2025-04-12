import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { formatDate } from "@/utils/format";
import { CalendarIcon, Users } from "lucide-react";

export const MenteesTab = ({ data }: { data: Mentor }) => {
	return (
		<TabsContent value="mentees" className="mt-6">
			<Card>
				<CardHeader>
					<CardTitle>Current Mentees</CardTitle>
					<CardDescription>
						{data.currentMentees.length} active mentorship
						{data.currentMentees.length !== 1 ? "s" : ""}
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						{data.currentMentees.map((mentee) => (
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
											<CalendarIcon className="h-3 w-3" />
											<span>Started {formatDate(mentee.startDate)}</span>
										</div>
									</div>
								</div>
								<div className="text-right hidden">
									<div className="mb-1 flex items-center justify-end gap-2">
										<span className="text-sm font-medium">Progress</span>
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
						<Button variant="outline" className="flex items-center gap-2">
							<Users className="h-4 w-4" />
							View Past Mentees
						</Button>
					</div>
				</CardContent>
			</Card>
		</TabsContent>
	);
};
