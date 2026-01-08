import { useRouteError, isRouteErrorResponse } from "react-router";
import ProjectLinks from "../5-atoms/ProjectLinks.jsx";

import type Anchor from "../types/post.d.ts";

export default function ErrorElement() {
	const error = useRouteError();
	const home: Anchor[] = [
		{
			link_text: "Return home",
			link_icon: "back",
			link_url: "/",
			link_target: "_self",
		},
	];
	if (isRouteErrorResponse(error)) {
		return (
			<>
				<div className="loading flex-column">
					<h1>
						{error.status} {error.statusText}
					</h1>
					<p>{error.data}</p>
					<ProjectLinks links={home} />
				</div>
			</>
		);
	} else if (error instanceof Error) {
		return (
			<div>
				<h1>Error</h1>
				<p>{error.message}</p>
				<p>The stack trace is:</p>
				<pre>{error.stack}</pre>
				<ProjectLinks links={home} />
			</div>
		);
	} else {
		return (
			<div className="loading flex-column">
				<h1>Unknown error</h1>
				<ProjectLinks links={home} />
			</div>
		);
	}
}
