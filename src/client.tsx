import { initClient, initClientNavigation } from "rwsdk/client";

// RedwoodSDK uses RSC RPC to emulate client side navigation.
// https://docs.rwsdk.com/guides/frontend/client-side-nav/
const { handleResponse, onHydrated } = initClientNavigation();

initClient({
	handleResponse,
	onHydrated,
	hydrateRootOptions: {
		onUncaughtError: (error, errorInfo) => {
			console.error("Uncaught error:", error);
			console.error("Component stack:", errorInfo.componentStack);
		},
		onCaughtError: (error, errorInfo) => {
			console.error("Caught error:", error);
			console.error("Component stack:", errorInfo.componentStack);
		},
	},
});
