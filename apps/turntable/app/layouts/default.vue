<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui"

const navigationItems: NavigationMenuItem[][] = [
	[
		{
			label: "General",
			icon: "i-lucide-user",
			active: true,
		},
		{
			label: "Members",
			icon: "i-lucide-users",
		},
		{
			label: "Notifications",
			icon: "i-lucide-bell",
		},
	],
	[
		{
			label: "Documentation",
			icon: "i-lucide-book-open",
			to: "https://ui.nuxt.com/docs",
			target: "_blank",
		},
		{
			label: "Help & Feedback",
			icon: "i-lucide-help-circle",
			to: "https://github.com/nuxt/ui/issues",
			target: "_blank",
		},
	],
]
const route = useRoute()

const items = [
	[
		{
			label: "Dashboard",
			icon: "i-lucide-layout-dashboard",
			to: "/",
			active: route.path === "/",
		},
		{
			label: "New Project",
			icon: "i-lucide-plus-circle",
			to: "/render",
			active: route.path === "/render",
		},
		{
			label: "My Models",
			icon: "i-lucide-box",
			to: "/models",
			active: route.path === "/models",
		},
		{
			label: "Exports",
			icon: "i-lucide-download",
			to: "/exports",
			active: route.path === "/exports",
		},
		{
			label: "Settings",
			icon: "i-lucide-settings",
			defaultOpen: true,
			children: [
				{
					label: "Profile",
				},
				{
					label: "API Keys",
				},
				{
					label: "Billing",
				},
			],
		},
	],
	[
		{
			label: "Documentation",
			icon: "i-lucide-book-open",
			to: "/docs",
			target: "_blank",
		},
		{
			label: "Support",
			icon: "i-lucide-life-buoy",
			to: "/support",
			target: "_blank",
		},
	],
]
</script>

<template>
	<UDashboardGroup>
		<UDashboardSidebar
			id="default"
			resizable
		>
			<template #header="{ collapsed }">
				<TeamsMenu :collapsed="collapsed" />
			</template>

			<template #default="{ collapsed }">
				<UDashboardSearchButton
					:collapsed="collapsed"
					class="bg-transparent ring-default"
				/>

				<UNavigationMenu
					:collapsed="collapsed"
					:items="items[0]"
					orientation="vertical"
					tooltip
					popover
				/>

				<UNavigationMenu
					:collapsed="collapsed"
					:items="items[1]"
					orientation="vertical"
					tooltip
					class="mt-auto"
				/>
			</template>

			<template #footer="{ collapsed }">
				<UserMenu :collapsed="collapsed" />
			</template>
		</UDashboardSidebar>
		<UDashboardPanel>
			<UDashboardToolbar>
				<UNavigationMenu
					:items="navigationItems"
					highlight
					class="flex-1"
				/>
			</UDashboardToolbar>
			<div class="h-full w-full p-12">
				<slot />
			</div>
		</UDashboardPanel>
	</UDashboardGroup>
</template>
