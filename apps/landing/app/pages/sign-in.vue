<script setup lang="ts">
definePageMeta({
	layout: false,
})

useHead({
	title: "Sign In - TurntableHQ",
})
</script>

<template>
	<div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
		<div class="w-full max-w-md">
			<div class="text-center mb-8">
				<NuxtLink
					to="/"
					class="inline-block"
				>
					<AppLogo class="mx-auto" />
				</NuxtLink>
			</div>
			<SignIn
				path="/sign-in"
				routing="path"
				sign-up-url="/sign-up"
				fallback-redirect-url="/dashboard"
			/>
		</div>
	</div>
</template>
