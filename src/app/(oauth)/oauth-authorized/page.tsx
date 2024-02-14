import PeridotImage from "@/components/PeridotImage";
import { Box, Typography } from "@mui/material";

export default function OauthAuthorized() {
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
				Yip! Success!
			</Typography>
			<Typography variant="h6" component="p" sx={{ mt: 2, mb: 2 }}>
				You may close the tab and return to discord.
			</Typography>
		</Box>
	);
}
