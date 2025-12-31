<script setup lang="ts">
useHead({
	title: "Exports - Turntable 3D",
	meta: [{ name: "description", content: "View and download your exported 3D models" }],
})
</script>

<template>
	<div class="space-y-6">
		<div>
			<h1 class="text-3xl font-bold text-gray-900 dark:text-white">
				Exports
			</h1>
			<p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
				View and download your exported 3D models
			</p>
		</div>

		<UCard>
			<div class="text-center py-12">
				<UIcon
					name="i-lucide-download"
					class="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600 mb-4"
				/>
				<p class="text-gray-500 dark:text-gray-400">
					No exports yet. Generate and export a 3D model!
				</p>
			</div>
		</UCard>
	</div>
</template>
