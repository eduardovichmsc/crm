"use client";

import { JSX, useState } from "react";
import { SidebarItem } from "@/components/Sidebar/Item";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";

export const SidebarList = ({
	title,
	collapsed: initiallyCollapsed,
	array,
}: {
	title: string;
	collapsed: boolean;
	array: {
		icon: JSX.Element;
		title: string;
		active?: boolean;
		href?: string;
		hide?: boolean;
	}[];
}) => {
	const pathname = usePathname();
	const [collapsed, setCollapsed] = useState(initiallyCollapsed);

	return (
		<div className="space-y-4">
			<button
				onClick={() => setCollapsed(!collapsed)}
				className="flex items-center gap-2 text-left w-full text-sm font-medium text-gray-700 hover:text-black">
				{collapsed ? (
					<ChevronRightIcon className="size-4" />
				) : (
					<ChevronDownIcon className="size-4" />
				)}
				{title}
			</button>
			<ul
				className={clsx("transition duration-300 overflow-hidden", {
					"h-0 ": collapsed,
					"space-y-2 h-full": !collapsed,
				})}>
				{array.map((item, index) => (
					<SidebarItem
						key={index}
						icon={item.icon}
						href={item.href}
						title={item.title}
						active={pathname === item.href}
					/>
				))}
			</ul>
		</div>
	);
};
