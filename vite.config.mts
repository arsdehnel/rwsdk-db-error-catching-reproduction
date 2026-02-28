import { cloudflare } from "@cloudflare/vite-plugin";
import { redwood } from "rwsdk/vite";
import { defineConfig } from "vite";

export default defineConfig({
	server: {
		hmr: {
			overlay: false,
		},
	},
	plugins: [
		cloudflare({
			viteEnvironment: { name: "worker" },
		}),
		redwood(),
	],
});
