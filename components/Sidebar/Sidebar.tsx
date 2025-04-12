import { ContactIcon, FileStackIcon, GripIcon, VideoIcon } from "lucide-react";
import { SidebarList } from "@/components/Sidebar/List";
import { JSX } from "react";
import { PRIVATEROUTES, ROUTES } from "@/routes/routes";

const SidebarItems: {
	[section: string]: {
		icon: JSX.Element;
		title: string;
		active?: boolean;
		href?: string;
		hide?: boolean;
	}[];
} = {
	Menu: [
		{
			icon: <GripIcon />,
			title: "Dashboard",
			active: true,
			href: ROUTES.DASHBOARD,
		},
		{
			icon: <ContactIcon />,
			title: "Mentors",
			href: ROUTES.MENTORS,
		},
		{
			icon: <FileStackIcon />,
			title: "Students",
			href: ROUTES.STUDENTS,
		},
	],
	Mentor: [
		{
			icon: <VideoIcon />,
			title: "Meetings",
			active: true,
			href: PRIVATEROUTES.MEETINGS,
		},
	],
};

export const Sidebar = () => {
	return (
		<>
			{/* <div className="flex justify-between items-center">
				<ArrowLeftToLineIcon className="p-0.5" />
			</div> */}
			<div className="mt-4 space-y-10">
				{/* Sidebar List Render */}
				{Object.entries(SidebarItems).map(([key, items]) => (
					<SidebarList
						collapsed={key === "Menu" ? false : true}
						key={key}
						title={key}
						array={items}
					/>
				))}
			</div>
		</>
	);
};
