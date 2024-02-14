import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copyright from "@/components/Copyright";
import { Link } from "@mui/material";
import PeridotImage from "@/components/PeridotImage";

export default function About() {
	return (
		<Container maxWidth="md">
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
					Yip! About Kobold
				</Typography>
				<Typography variant="h6" component="p" sx={{ mt: 2, mb: 2 }}>
					Developed by SignificantOtter on Discord
				</Typography>
			</Box>
			<Typography variant="body1" component="p" sx={{ mb: 2 }}>
				Kobold integrates the excellent character management websites
				Pathbuilder 2E and Wanderer's Guide with discord for play by post
				pathfinder 2E games.
			</Typography>
			<Typography variant="h6" component="p" sx={{ mb: 2 }}>
				Features
			</Typography>
			<Typography variant="body1" component="p" sx={{ mb: 2 }}>
				Import characters from Pathbuilder 2E or Wanderer's Guide <br /> Roll
				dice for your character's stats <br /> Track characters and NPCs through
				rounds of initiative
				<br /> Create custom, configurable, rollable actions <br /> Use flexible
				modifiers to track bonuses and penalties to dice roll
			</Typography>
			<Typography variant="h6" component="p" sx={{ mb: 2 }}>
				Links
			</Typography>
			<Typography variant="body1" component="p" sx={{ mb: 2 }}>
				<Link href="https://discord.com/oauth2/authorize?client_id=909138081163137094&scope=bot&permissions=532643576896">
					Invite Kobold to a Discord Server
				</Link>
				<br />
				<Link href="https://ko-fi.com/significantotter">
					Support Kobold's development through ko-fi
				</Link>
				<br />
				<Link href="https://discord.gg/6bS2GM59uj">
					Join Kobold's Support Server on Discord
				</Link>
				<br />
				<Link href="https://github.com/significantotter/kobold">
					Follow Kobold's development on Github
				</Link>
			</Typography>
			<Copyright />
		</Container>
	);
}
