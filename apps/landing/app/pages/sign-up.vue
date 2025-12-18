<script setup lang="ts">
definePageMeta({
	layout: false,
})

useHead({
	title: "Sign Up - TurntableHQ",
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
			<SignUp
				path="/sign-up"
				routing="path"
				sign-in-url="/sign-in"
				fallback-redirect-url="/dashboard"
			/>
		</div>
	</div>
</template>
