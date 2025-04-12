import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Format date for display
export const formatDate = (dateString: string) => {
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
	});
};

// Format time for display
export const formatTime = (dateString: string) => {
	const date = new Date(dateString);
	return date.toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
	});
};

// Generate star rating
export const renderStars = (rating: number) => {
	return Array(5)
		.fill(0)
		.map((_, i) => (
			<Star
				key={i}
				className={`h-4 w-4 ${
					i < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"
				}`}
			/>
		));
};

// Get project status badge
export const getProjectBadge = (status: string) => {
	switch (status) {
		case "completed":
			return <Badge className="bg-green-500">Completed</Badge>;
		case "in-progress":
			return <Badge className="bg-blue-500">In Progress</Badge>;
		case "planned":
			return <Badge className="bg-slate-500">Planned</Badge>;
		default:
			return <Badge>Unknown</Badge>;
	}
};
