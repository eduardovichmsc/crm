import { Mentor, MentorPreview } from "@/types/Mentor";
import { StudentPreview } from "@/types/Student";

// Mentors - Mentors - Mentors - Mentors - Mentors - Mentors - Mentors - Mentors
const mentor: Mentor = {
	id: 1,
	name: "Alex Johnson",
	role: "Senior Developer",
	company: "TechCorp Inc.",
	location: "San Francisco, CA",
	avatar: "/placeholder.svg?height=128&width=128",
	email: "alex.johnson@example.com",
	phone: "+1 (555) 123-4567",
	bio: "Full-stack developer with 8+ years of experience specializing in React, Node.js, and cloud architecture. Passionate about mentoring junior developers and sharing knowledge within the tech community.",
	skills: [
		{ name: "React", level: 50 },
		{ name: "Node.js", level: 70 },
		{ name: "TypeScript", level: 60 },
		{ name: "Cloud Architecture", level: 0 },
		{ name: "DevOps", level: 75 },
	],
	languages: [
		"Kazakh (Native)",
		"Russian (Intermediate)",
		"English (Pre-Intermediate)",
	],
	availability: {
		status: "Available",
		hours: "10 hours/week",
		preferredTimes: ["Weekday evenings", "Weekend mornings"],
	},
	mentorshipStats: {
		totalMentees: 12,
		activeMentees: 3,
		completedMentorships: 9,
		averageRating: 4.8,
		totalHours: 156,
	},
	education: [
		{
			degree: "Bachelor's Degree",
			institution: "Kazakh-British Technical University",
			yearStart: "2023",
			yearEnd: "2027",
		},
		{
			degree: "Associate's Degree",
			institution: "n'Factorial Incubator",
			yearStart: "2024",
			yearEnd: "2024",
		},
	],
	certifications: [
		"AWS Certified Solutions Architect",
		"Google Cloud Professional Developer",
		"MongoDB Certified Developer",
	],
	socialLinks: [
		{ platform: "LinkedIn", url: "https://linkedin.com/in/alexjohnson" },
		{ platform: "GitHub", url: "https://github.com/alexjohnson" },
		{ platform: "Twitter", url: "https://twitter.com/alexjohnson" },
	],
	currentMentees: [
		{
			id: "1",
			name: "Jamie Smith",
			role: "Junior Developer",
			avatar: "/placeholder.svg?height=40&width=40",
			startDate: "2023-09-15",
			progress: 65,
		},
		{
			id: "2",
			name: "Taylor Wong",
			role: "Frontend Developer",
			avatar: "/placeholder.svg?height=40&width=40",
			startDate: "2023-10-01",
			progress: 40,
		},
		{
			id: "3",
			name: "Jordan Rivera",
			role: "CS Student",
			avatar: "/placeholder.svg?height=40&width=40",
			startDate: "2023-10-20",
			progress: 25,
		},
	],
	reviews: [
		{
			id: "1",
			mentee: "Chris Lee",
			avatar: "/placeholder.svg?height=40&width=40",
			rating: 5,
			date: "2023-08-15",
			text: "Alex was an incredible mentor who helped me navigate complex React concepts and improve my coding practices. Always patient and insightful.",
		},
		{
			id: "2",
			mentee: "Sarah Chen",
			avatar: "/placeholder.svg?height=40&width=40",
			rating: 5,
			date: "2023-07-22",
			text: "Working with Alex transformed my approach to software development. Their guidance on architecture patterns was invaluable.",
		},
		{
			id: "3",
			mentee: "Michael Taylor",
			avatar: "/placeholder.svg?height=40&width=40",
			rating: 4,
			date: "2023-06-10",
			text: "Alex provided practical advice that helped me solve real-world problems in my projects. Great at explaining complex topics.",
		},
	],
	upcomingMeetings: [
		{
			id: "1",
			mentee: "Jamie Smith",
			date: "2023-11-10T15:00:00",
			duration: 60,
			topic: "React Performance Optimization",
		},
		{
			id: "2",
			mentee: "Taylor Wong",
			date: "2023-11-12T10:30:00",
			duration: 45,
			topic: "Code Review Best Practices",
		},
	],
};

export const mentorsArray: MentorPreview[] = [
	{
		id: 1,
		name: "Alex Johnson",
		role: "Senior Developer",
		company: "TechCorp Inc.",
		avatar: "/placeholder.svg?height=80&width=80",
		skills: [
			{ name: "React", level: 50 },
			{ name: "Node.js", level: 70 },
			{ name: "TypeScript", level: 60 },
			{ name: "Cloud Architecture", level: 0 },
			{ name: "DevOps", level: 75 },
		],
		availability: {
			status: "Available",
		},
		mentorshipStats: {
			activeMentees: 3,
			totalMentees: 10,
		},
	},
	{
		id: 2,
		name: "Maria Garcia",
		role: "UX Designer",
		company: "DesignHub",
		avatar: "/placeholder.svg?height=80&width=80",
		skills: [
			{ name: "UI/UX", level: 60 },
			{ name: "Figma", level: 50 },
		],
		availability: { status: "Unavailable" },
		mentorshipStats: {
			activeMentees: 7,
			totalMentees: 10,
			averageRating: 4.2,
		},
	},
];

// Students - Students - Students - Students - Students - Students - Students - Students
export const studentsArray: StudentPreview[] = [
	{
		id: 1,
		name: "Jamie Smith",
		role: "Junior Developer",
		company: "StartupX",
		avatar: "/placeholder.svg?height=80&width=80",
		skills: [
			{ name: "React", level: 50 },
			{ name: "Node.js", level: 70 },
			{ name: "TypeScript", level: 60 },
			{ name: "Cloud Architecture", level: 0 },
			{ name: "DevOps", level: 75 },
		],
		progress: {
			overallCompletion: 65,
			skillsProgress: [],
		},
		currentMentors: [
			{
				id: 1,
				name: "Alex Johnson",
				role: "Senior Developer",
				avatar: "/placeholder.svg?height=40&width=40",
				startDate: "2023-09-15",
				progress: 65,
				focus: "React Development",
			},
		],
	},

	{
		id: 2,
		name: "Lena Carter",
		role: "Frontend Intern",
		company: "PixelPerfect",
		avatar: "/placeholder.svg?height=80&width=80",
		skills: [
			{ name: "HTML/CSS", level: 90 },
			{ name: "JavaScript", level: 70 },
			{ name: "Figma", level: 60 },
			{ name: "Accessibility", level: 55 },
		],
		progress: {
			overallCompletion: 50,
			skillsProgress: [],
		},
		currentMentors: [
			{
				id: 2,
				name: "Maria Garcia",
				role: "UX Designer",
				avatar: "/placeholder.svg?height=40&width=40",
				startDate: "2024-01-10",
				progress: 50,
				focus: "UI/UX Fundamentals",
			},
		],
	},

	{
		id: 3,
		name: "Omar Malik",
		role: "Data Science Trainee",
		company: "DataMinds",
		avatar: "/placeholder.svg?height=80&width=80",
		skills: [
			{ name: "Python", level: 80 },
			{ name: "Machine Learning", level: 60 },
			{ name: "SQL", level: 70 },
			{ name: "Data Visualization", level: 65 },
		],
		progress: {
			overallCompletion: 72,
			skillsProgress: [],
		},
		currentMentors: [
			{
				id: 5,
				name: "Sophia Kim",
				role: "Data Scientist",
				avatar: "/placeholder.svg?height=40&width=40",
				startDate: "2024-02-20",
				progress: 72,
				focus: "ML Fundamentals",
			},
		],
	},
];
