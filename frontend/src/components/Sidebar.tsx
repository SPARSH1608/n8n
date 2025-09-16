import React from "react";
import {
	Sidebar as SidebarUI,
	SidebarBody,
	SidebarLink,
} from "../components/ui/sidebar";

import { IconHome, IconUser, IconSettings, } from "@tabler/icons-react";

const links = [
	{
		label: "Home",
		href: "/dashboard",
		icon: <IconHome />,
	},
	
	{
		label: "Credentials",
		href: "/credentials",
		icon: <IconSettings />,
	},
];

const Sidebar = () => {
	return (
			<SidebarBody>
				<nav className="flex flex-col gap-2 mt-4 bg-black text-white w-48 h-screen p-4">
					{links.map((link) => (
						<SidebarLink key={link.href} link={link} />
					))}
				</nav>
			</SidebarBody>
	);
};

export default Sidebar;
