"use client";
import LinkTab, { useLinkTabs } from "@/components/NavTabs/LinkTab";
import { Box, Tabs } from "@mui/material";
import { usePathname } from "next/navigation";
import React from "react";

export default function HeaderNavTabs() {
	const pathname = usePathname();
	const { handleChange } = useLinkTabs();

	const tabbableRoutes = [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "About",
			href: "/about",
		},
		{
			label: "Commands",
			href: "/commands",
		},
	];

	return (
		<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
			<Tabs
				value={pathname}
				onChange={handleChange}
				aria-label="nav tabs example"
				role="navigation"
				centered
			>
				{tabbableRoutes.map((route) => (
					<LinkTab
						label={route.label}
						href={route.href}
						value={route.href}
						key={route.href}
					/>
				))}
			</Tabs>
		</Box>
	);
}
