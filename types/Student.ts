interface Skill {
	name: string;
	level: number;
}

interface Education {
	degree: string;
	institution: string;
	yearStart: number;
	yearEnd: number;
}

interface SocialLink {
	platform: string;
	url: string;
}

interface MentorPreview {
	id: number;
	name: string;
	role: string;
	avatar: string;
	startDate: string;
	progress: number;
	focus: string;
}

interface PastMentor {
	id: number;
	name: string;
	role: string;
	avatar: string;
	period: string;
	focus: string;
}

interface SkillProgress {
	skill: string;
	initial: number;
	current: number;
	target: number;
}

interface Progress {
	overallCompletion: number;
	skillsProgress: SkillProgress[];
}

interface MeetingBase {
	id: number;
	mentor: string;
	date: string;
	duration: number;
	topic: string;
}

interface PastMeeting extends MeetingBase {
	notes: string;
}

interface FeedbackArea {
	technical: number;
	communication: number;
	problemSolving: number;
	initiative: number;
}

interface Feedback {
	id: number;
	mentor: string;
	date: string;
	text: string;
	areas: FeedbackArea;
}

interface Project {
	id: number;
	title: string;
	description: string;
	status: "completed" | "in-progress";
	url?: string;
	technologies: string[];
}

export interface Student {
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
	education: Education[];
	languages: string[];
	socialLinks: SocialLink[];
	currentMentors: MentorPreview[];
	pastMentors: PastMentor[];
	progress: Progress;
	meetings: {
		upcoming: MeetingBase[];
		past: PastMeeting[];
	};
	projects: Project[];
	feedback: Feedback[];
}

export type StudentPreview = Pick<
	Student,
	| "id"
	| "name"
	| "role"
	| "company"
	| "avatar"
	| "skills"
	| "progress"
	| "currentMentors"
> & {
	progress: Partial<Student["progress"]>;
	currentMentors: Partial<Student["currentMentors"]>;
};
