import { TabsList } from "@/components/ui/tabs";
import { ReactNode, ComponentProps } from "react";

export const CustomTabsList = ({
	children,
	...props
}: {
	children: ReactNode;
} & ComponentProps<typeof TabsList>) => {
	return (
		<TabsList className="grid w-full grid-cols-5" {...props}>
			{children}
		</TabsList>
	);
};
