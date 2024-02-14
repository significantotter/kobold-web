"use client";
import * as React from "react";
import Tab from "@mui/material/Tab";

export function samePageLinkNavigation(
	event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) {
	if (
		event.defaultPrevented ||
		event.button !== 0 || // ignore everything but left-click
		event.metaKey ||
		event.ctrlKey ||
		event.altKey ||
		event.shiftKey
	) {
		return false;
	}
	return true;
}

/**
 * A hook to manage the state of the tabs.
 * @returns [value, setValue, handleChange]
 */
export function useLinkTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		// event.type can be equal to focus with selectionFollowsFocus.
		if (
			event.type !== "click" ||
			(event.type === "click" &&
				samePageLinkNavigation(
					event as React.MouseEvent<HTMLAnchorElement, MouseEvent>
				))
		) {
			setValue(newValue);
		}
	};
	return { value, setValue, handleChange };
}

interface LinkTabProps {
	label?: string;
	href?: string;
	value?: string;
	selected?: boolean;
}

export default function LinkTab(props: LinkTabProps) {
	return <Tab aria-current={props.selected && "page"} {...props} />;
}
