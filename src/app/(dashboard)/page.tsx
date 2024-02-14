import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copyright from "@/components/Copyright";
import { Link } from "@mui/material";
import NextLink from "next/link";
import PeridotImage from "@/components/PeridotImage";

export default function Home() {
	return (
		<Container maxWidth="lg">
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
					Yip!
				</Typography>
				<Typography variant="h4" component="h1" sx={{ mt: 2 }}>
					Add{" "}
					<Link
						href="https://discord.com/oauth2/authorize?client_id=909138081163137094&scope=bot&permissions=532643576896"
						component={NextLink}
					>
						Kobold Bot
					</Link>{" "}
					to your Discord server!
				</Typography>
				<Typography variant="h6" component="h6" sx={{ mb: 2 }}>
					For Pathfinder 2E play by post
				</Typography>
				<Copyright />
			</Box>
		</Container>
	);
}
