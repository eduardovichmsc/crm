import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TabsContent } from "@/components/ui/tabs";
import { Student } from "@/types/Student";

export const ProgressTab = ({ data }: { data: Student }) => {
	return (
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
							<h3 className="mb-3 text-lg font-medium">Overall Progress</h3>
							<div className="rounded-lg border p-4">
								<div className="mb-2 flex items-center justify-between">
									<span className="font-medium">Mentorship Completion</span>
									<span>{data.progress.overallCompletion}%</span>
								</div>
								<Progress
									value={data.progress.overallCompletion}
									className="h-2.5"
								/>
							</div>
						</div>

						{/* Skills Progress */}
						<div>
							<h3 className="mb-3 text-lg font-medium">Skills Progress</h3>
							<div className="space-y-4">
								{data.progress.skillsProgress.map((skill, i) => (
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
	);
};
