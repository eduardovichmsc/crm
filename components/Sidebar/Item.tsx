"use client";
import clsx from "clsx";
import Link from "next/link";
import { cloneElement, JSX } from "react";

export const SidebarItem = ({
	icon,
	title,
	active,
	href = "/",
}: {
	icon: JSX.Element;
	title: string;
	active?: boolean;
	href?: string;
	hide?: boolean;
}) => {
	return (
		<li
			className={clsx(
				"*:select-none rounded-full flex items-center transition-colors",
				active
					? "bg-zinc-800 cursor-default"
					: "bg-transparent hover:bg-zinc-200 cursor-pointer",
				"w-full h-14 p-1 gap-4"
			)}>
			<Link href={href} className="contents">
				<span
					className={clsx(
						"h-full aspect-square rounded-full overflow-hidden shrink-0",
						active ? "bg-zinc-700" : "bg-white"
					)}>
					{cloneElement(icon, {
						className: clsx(
							"size-full aspect-square p-3.5",
							active ? "bg-transparent text-white" : "bg-zinc-200 text-zinc-600"
						),
					})}
				</span>
				<span
					className={clsx(
						"w-full overflow-hidden",
						active ? "text-white" : "text-black"
					)}>
					{title}
				</span>
			</Link>
		</li>
	);
};
