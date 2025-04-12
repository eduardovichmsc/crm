"use client";

import { ContactIcon, FileStackIcon, GripIcon } from "lucide-react";
import { SidebarList } from "@/components/Sidebar/List";
import { ROUTES } from "@/routes/routes";
import { JSX } from "react";

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
