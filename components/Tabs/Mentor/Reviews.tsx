import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { Mentor } from "@/types/Mentor";
import { formatDate, renderStars } from "@/utils/format";

export const ReviewsTab = ({ data }: { data: Mentor }) => {
	return (
		<TabsContent value="reviews" className="mt-6">
			<Card>
				<CardHeader>
					<div className="flex items-center justify-between">
						<div>
							<CardTitle>Mentee Reviews</CardTitle>
							<CardDescription>
								Average rating: {data.mentorshipStats.averageRating}/5 (
								{data.reviews.length} reviews)
							</CardDescription>
						</div>
						<div className="flex items-center">
							{renderStars(data.mentorshipStats.averageRating || 0)}
						</div>
					</div>
				</CardHeader>
				<CardContent>
					<div className="space-y-6">
						{data.reviews.map((review) => (
							<div key={review.id} className="rounded-lg border p-4">
								<div className="mb-3 flex items-center justify-between">
									<div className="flex items-center gap-3">
										<Avatar>
											<AvatarImage
												src={review.avatar || "/placeholder.svg"}
												alt={review.mentee}
											/>
											<AvatarFallback>{review.mentee[0]}</AvatarFallback>
										</Avatar>
										<div>
											<h4 className="font-medium">{review.mentee}</h4>
											<p className="text-xs text-muted-foreground">
												{formatDate(review.date)}
											</p>
										</div>
									</div>
									<div className="flex">{renderStars(review.rating)}</div>
								</div>
								<p className="text-sm">{review.text}</p>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</TabsContent>
	);
};
