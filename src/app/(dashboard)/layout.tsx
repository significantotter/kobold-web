import HeaderNavTabs from "@/components/NavTabs/HeaderNavTabs";

export default function DashboardLayout(props: { children: React.ReactNode }) {
	return (
		<>
			<HeaderNavTabs />
			{props.children}
		</>
	);
}
