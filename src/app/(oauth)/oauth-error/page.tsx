import PeridotImage from "@/components/PeridotImage";
import { Box, Link, Typography } from "@mui/material";

export default function OauthError() {
	return (
		<Box
			sx={{
				my: 4,
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<PeridotImage />
			<Typography variant="h4" component="h1" sx={{ mb: 2 }}>
				Yip! Something went wrong!
			</Typography>
			<Typography variant="h6" component="p" sx={{ mt: 2, mb: 2 }}>
				We'll look into the problem. You can help me fix the issue by reporting
				it in the{" "}
				<Link href="https://discord.gg/6bS2GM59uj">
					Kobold discord support server
				</Link>
				.
			</Typography>
		</Box>
	);
}
