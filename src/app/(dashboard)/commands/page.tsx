import PeridotImage from "@/components/PeridotImage";
import { Box, Typography } from "@mui/material";

export default function Commands() {
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
				Yip! Kobold Commands
			</Typography>
		</Box>
	);
}
