<script setup lang="ts">
useHead({
	title: "Profile - TurntableHQ",
})

const appearance = {
	theme: "dark",
}
</script>

<template>
	<div class="space-y-8 w-3xl text-left mx-auto mt-12">
		<div>
			<h1 class="text-3xl font-bold">Profile Settings</h1>
			<p class="text-muted mt-2">Manage your account settings and preferences</p>
		</div>

		<div class="max-w-3xl">
			<UserProfile :appearance="appearance" />
		</div>
	</div>
</template>
