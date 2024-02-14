import { Box, Typography } from "@mui/material";
import OauthRequestCharIdInput from "./OauthRequestCharIdInput";
import PeridotImage from "@/components/PeridotImage";

export default async function OauthRequest() {
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
				Yip! Authorize Your Character!
			</Typography>
			<OauthRequestCharIdInput />
		</Box>
	);
}
