<script setup lang="ts">
import { useUser } from "@clerk/nuxt/composables"

definePageMeta({
	middleware: "auth",
})

const { user } = useUser()

useHead({
	title: "Dashboard - TurntableHQ",
})

const stats = [
	{
		label: "Total Projects",
		value: "12",
		icon: "i-lucide-folder",
		change: "+2 from last month",
		changeType: "positive",
	},
	{
		label: "Active Users",
		value: "1,234",
		icon: "i-lucide-users",
		change: "+18% from last month",
		changeType: "positive",
	},
	{
		label: "API Calls",
		value: "45.2K",
		icon: "i-lucide-activity",
		change: "+12% from last week",
		changeType: "positive",
	},
	{
		label: "Revenue",
		value: "$8,249",
		icon: "i-lucide-dollar-sign",
		change: "+23% from last month",
		changeType: "positive",
	},
]

const recentActivity = [
	{
		title: "New project created",
		description: "Marketing Website",
		time: "2 hours ago",
		icon: "i-lucide-plus-circle",
	},
	{
		title: "Team member invited",
		description: "john@example.com",
		time: "5 hours ago",
		icon: "i-lucide-user-plus",
	},
	{
		title: "API key generated",
		description: "Production environment",
		time: "1 day ago",
		icon: "i-lucide-key",
	},
	{
		title: "Plan upgraded",
		description: "Pro plan activated",
		time: "2 days ago",
		icon: "i-lucide-arrow-up-circle",
	},
]
</script>

<template>
	<div class="space-y-8 w-full p-12 text-left mx-auto ">
		<div>
			<h1 class="text-3xl font-bold">Welcome back, {{ user?.firstName || "there" }}!</h1>
			<p class="text-muted mt-2">Here's what's happening with your projects today.</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			<UCard
				v-for="stat in stats"
				:key="stat.label"
			>
				<div class="flex items-start justify-between">
					<div>
						<p class="text-sm text-muted">{{ stat.label }}</p>
						<p class="text-2xl font-bold mt-2">{{ stat.value }}</p>
						<p
							class="text-xs mt-2"
							:class="
								stat.changeType === 'positive'
									? 'text-green-600 dark:text-green-400'
									: 'text-red-600 dark:text-red-400'
							"
						>
							{{ stat.change }}
						</p>
					</div>
					<div class="p-3 rounded-lg bg-primary/10">
						<UIcon
							:name="stat.icon"
							class="w-6 h-6 text-primary"
						/>
					</div>
				</div>
			</UCard>
		</div>

		<UCard>
			<div class="mb-4">
				<h2 class="text-xl font-semibold">Quick Actions</h2>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
				<UButton
					label="Create New Project"
					icon="i-lucide-plus"
					variant="outline"
					block
					size="lg"
				/>
				<UButton
					label="Invite Team Member"
					icon="i-lucide-user-plus"
					variant="outline"
					block
					size="lg"
				/>
				<UButton
					label="View Analytics"
					icon="i-lucide-bar-chart"
					variant="outline"
					block
					size="lg"
				/>
			</div>
		</UCard>

		<UCard>
			<div class="mb-4">
				<h2 class="text-xl font-semibold">Recent Activity</h2>
			</div>
			<div class="space-y-4">
				<div
					v-for="(activity, index) in recentActivity"
					:key="index"
					class="flex items-start gap-4 pb-4"
					:class="{ 'border-b border-gray-200 dark:border-gray-700': index < recentActivity.length - 1 }"
				>
					<div class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
						<UIcon
							:name="activity.icon"
							class="w-5 h-5"
						/>
					</div>
					<div class="flex-1">
						<p class="font-medium">{{ activity.title }}</p>
						<p class="text-sm text-muted">{{ activity.description }}</p>
					</div>
					<span class="text-sm text-muted">{{ activity.time }}</span>
				</div>
			</div>
		</UCard>
	</div>
</template>
