<script setup lang="ts">
const aboutInfo = {
	title: "About Turntable",
	description:
		"Turntable is a production-ready starter template powered by Nuxt UI. Build beautiful, accessible, and performant applications in minutes, not hours.",
	features: [
		"Production-grade Nuxt 3 + Nuxt UI setup",
		"Modern, accessible UI components",
		"Easy project structure with best practices",
		"SEO friendly out of the box",
	],
}
</script>

<template>
	<UDashboardPanel>
		<template #header>
			<UDashboardToolbar>
				<h1 class="text-2xl font-bold">
					{{ aboutInfo.title }}
				</h1>
			</UDashboardToolbar>
		</template>
		<div class="prose max-w-2xl m-auto mt-8">
			<p>{{ aboutInfo.description }}</p>
			<h2 class="mt-6 mb-2 text-xl font-semibold">Features</h2>
			<ul class="list-disc pl-6">
				<li
					v-for="feature in aboutInfo.features"
					:key="feature"
				>
					{{ feature }}
				</li>
			</ul>
		</div>
	</UDashboardPanel>
</template>
