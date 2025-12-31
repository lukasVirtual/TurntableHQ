<script setup lang="ts">
useHead({
	title: "My Models - Turntable 3D",
	meta: [{ name: "description", content: "View and manage your 3D models" }],
})
</script>

<template>
	<div class="space-y-6">
		<div class="flex items-center justify-between">
			<div>
				<h1 class="text-3xl font-bold text-gray-900 dark:text-white">
					My Models
				</h1>
				<p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
					Manage your generated 3D models
				</p>
			</div>
			<UButton
				icon="i-lucide-plus"
				size="lg"
				to="/render"
			>
				New Project
			</UButton>
		</div>

		<UCard>
			<div class="text-center py-12">
				<UIcon
					name="i-lucide-box"
					class="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600 mb-4"
				/>
				<p class="text-gray-500 dark:text-gray-400">
					No models yet. Create your first 3D model!
				</p>
			</div>
		</UCard>
	</div>
</template>
