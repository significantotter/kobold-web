"use client";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function OauthRequestCharIdInput() {
	function authorize(characterId: string) {
		window.location.href = `${process.env?.VITE_BASE_URL}/.netlify/functions/oauth?characterId=${characterId}`;
	}

	const [characterId, setCharacterId] = useState<string>();

	return (
		<>
			<TextField
				id="oauth-request-char-id-input"
				label="Wanderer's Guide Character ID"
				variant="standard"
				value={characterId}
				onChange={(event) => setCharacterId(event.target.value)}
				sx={{ mb: 2, "min-width": "218px" }}
			/>
			<br />
			<Button onClick={() => authorize}>Authorize</Button>
		</>
	);
}
