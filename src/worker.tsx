import { except, render, route } from "rwsdk/router";
import { defineApp } from "rwsdk/worker";

import { Document } from "@/app/document";
import { setCommonHeaders } from "@/app/headers";
import { Home } from "@/app/pages/home";

export type AppContext = {};

export default defineApp([
	setCommonHeaders(),
	except((error) => {
		console.error("Servtastic error:", error);
		return <p>Error: {JSON.stringify(error)}</p>;
	}),
	({ ctx }) => {
		// setup ctx here
		ctx;
	},
	render(Document, [route("/", Home)]),
]);
