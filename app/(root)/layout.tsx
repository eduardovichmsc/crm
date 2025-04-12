import { Sidebar } from "@/components/Sidebar/Sidebar";
import { MoonIcon } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<main className="w-full min-h-screen bg-zinc-100 p-[2%]">
			<div className="header flex mb-10 justify-between items-center">
				<p className="font-medium text-xl">Google Dev Groups</p>
				<div className="flex gap-4">
					<div className="size-12 flex justify-center items-center aspect-square bg-zinc-200 rounded-full overflow-hidden">
						<MoonIcon className="p-1 text-black" />
					</div>
					<div className="size-12 flex justify-center items-center aspect-square bg-zinc-800 rounded-full overflow-hidden relative">
						<Image src={"/pfp.jpg"} fill alt="pfp" />
					</div>
				</div>
			</div>
			<div className="flex h-full">
				<div className="w-1/6">
					<Sidebar />
				</div>
				<div className="w-5/6 pl-[2%]">{children}</div>
			</div>
		</main>
	);
}
