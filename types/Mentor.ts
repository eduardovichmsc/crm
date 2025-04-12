interface Skill {
	name: string;
	level: number;
}

interface Availability {
	status: string;
	hours?: string;
	preferredTimes?: string[];
}

interface MentorshipStats {
	totalMentees?: number;
	activeMentees?: number;
	completedMentorships?: number;
	averageRating?: number;
	totalHours?: number;
}

interface Education {
	degree: string;
	institution: string;
	yearStart: string;
	yearEnd: string;
}

interface SocialLink {
	platform: string;
	url: string;
}

interface Mentee {
	id: string;
	name: string;
	role: string;
	avatar: string;
	startDate: string;
	progress: number;
}

interface Review {
	id: string;
	mentee: string;
	avatar: string;
	rating: number;
	date: string;
	text: string;
}

interface Meeting {
	id: string;
	mentee: string;
	date: string;
	duration: number;
	topic: string;
}

export interface Mentor {
	id: number;
	name: string;
	role: string;
	company: string;
	location: string;
	avatar: string;
	email: string;
	phone: string;
	bio: string;
	skills: Skill[];
	languages: string[];
	availability: Availability;
	mentorshipStats: MentorshipStats;
	education: Education[];
	certifications: string[];
	socialLinks: SocialLink[];
	currentMentees: Mentee[];
	reviews: Review[];
	upcomingMeetings: Meeting[];
}

export type MentorPreview = Pick<
	Mentor,
	"id" | "name" | "role" | "company" | "avatar" | "skills" | "mentorshipStats"
> & {
	availability: Partial<Mentor["availability"]>;
	mentorshipStats: Partial<Mentor["mentorshipStats"]>;
};
