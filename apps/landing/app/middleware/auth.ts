import { useAuth } from "@clerk/nuxt/composables"

export default defineNuxtRouteMiddleware((to) => {
	const { isSignedIn } = useAuth()

	if (!isSignedIn.value) {
		return navigateTo({
			path: "/sign-in",
			query: { redirect: to.fullPath },
		})
	}
})
