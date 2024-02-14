import { NextRequest, NextResponse } from "next/server";

const allowedParams: string[] = [];

export const config = {
	matcher: "/oauth-*",
};

export function middleware(req: NextRequest) {
	const url = req.nextUrl;
	let changed = false;

	url.searchParams.forEach((_, key) => {
		if (!allowedParams.includes(key)) {
			url.searchParams.delete(key);
			changed = true;
		}
		if (url.hash?.length > 0) {
			url.hash = "";
			changed = true;
		}
	});

	// Avoid infinite loop by only redirecting if the query
	// params were changed
	if (changed) {
		return NextResponse.rewrite(url);
	}
}
