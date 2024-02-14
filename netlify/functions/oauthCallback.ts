import axios, { AxiosResponse } from "axios";
import { db } from "./utils/db";
import { Handler } from "@netlify/functions";

// based on https://github.com/netlify/explorers/blob/main/functions/auth-callback.js
export const handler: Handler = async (event) => {
	let redirect = {
		statusCode: 302,
		headers: {
			Location: `${process.env.VITE_BASE_URL}/oauth-error`,
			"Cache-Control": "no-cache",
		},
		body: "redirecting to application...",
	};
	let axiosResponse: AxiosResponse<any, any> | null = null;
	try {
		if (!event.queryStringParameters) {
			return {
				statusCode: 401,
				body: JSON.stringify({ error: "Not authorized" }),
			};
		}

		const { code } = event.queryStringParameters;

		// wanderer's guide uses a non-standard header auth method
		// so we can't continue to use the simple-oauth2 module here
		axiosResponse! = await axios({
			url: `https://wanderersguide.app/api/oauth2/token?code=${code}&client_id=${process.env.WG_CLIENT_ID}`,
			method: "post",
			headers: {
				authorization: `Apikey ${process.env.WG_API_KEY}`,
				Accept: "application/json",
				"content-type": "application/json",
				"cache-control": "no-cache",
				Connection: "keep-alive",
			},
			responseType: "json",
		});

		await db
			.insertInto("wgAuthToken")
			.values({
				charId: axiosResponse.data.char_id,
				accessToken: axiosResponse.data.access_token,
				accessRights: axiosResponse.data.access_rights,
				expiresAt: axiosResponse.data.expires_at,
				tokenType: axiosResponse.data.token_type,
			})
			.execute();
		redirect = {
			statusCode: 302,
			headers: {
				Location: `${process.env.VITE_BASE_URL}/oauth-authorized`,
				"Cache-Control": "no-cache",
			},
			body: "redirecting to application...",
		};
	} catch (err) {
		if (axiosResponse) console.warn(axiosResponse.data);
		if (err instanceof Error) console.error(err.message);
		console.error(err);
	} finally {
		await db.destroy();
	}
	return redirect;
};
