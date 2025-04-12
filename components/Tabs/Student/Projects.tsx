import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { Student } from "@/types/Student";
import { getProjectBadge } from "@/utils/format";
import { ExternalLink, PlusIcon } from "lucide-react";

export const ProjectsTab = ({ data }: { data: Student }) => {
	return (
		<TabsContent value="projects" className="mt-6">
			<Card>
				<CardHeader>
					<CardTitle>Learning Projects</CardTitle>
					<CardDescription>Projects completed and in progress</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="space-y-6">
						{data.projects.map((project) => (
							<div key={project.id} className="rounded-lg border p-4">
								<div className="mb-2 flex items-center justify-between">
									<h3 className="text-lg font-medium">{project.title}</h3>
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
								<PlusIcon className="h-4 w-4" />
								Add New Project
							</Button>
						</div>
					</div>
				</CardContent>
			</Card>
		</TabsContent>
	);
};
