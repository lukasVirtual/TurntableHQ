<script setup lang="ts">
const stats = [
	{
		label: 'Total Models',
		value: '24',
		icon: 'i-lucide-box',
		color: 'primary',
	},
	{
		label: 'Exports',
		value: '18',
		icon: 'i-lucide-download',
		color: 'success',
	},
	{
		label: 'Processing',
		value: '3',
		icon: 'i-lucide-loader-2',
		color: 'warning',
	},
	{
		label: 'Credits',
		value: '156',
		icon: 'i-lucide-coins',
		color: 'violet',
	},
]

const recentModels = [
	{
		name: 'Product Vase',
		status: 'completed',
		date: '2 hours ago',
		images: 4,
	},
	{
		name: 'Chair Design',
		status: 'processing',
		date: '5 hours ago',
		images: 3,
	},
	{
		name: 'Coffee Mug',
		status: 'completed',
		date: '1 day ago',
		images: 2,
	},
]
</script>

<template>
	<div class="space-y-6">
		<div class="flex items-center justify-between">
			<div>
				<h1 class="text-3xl font-bold text-gray-900 dark:text-white">
					Welcome back
				</h1>
				<p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
					Create stunning 3D models from your images
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

		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
			<UCard
				v-for="stat in stats"
				:key="stat.label"
				class="hover:shadow-lg transition-shadow"
			>
				<div class="flex items-center justify-between">
					<div>
						<p class="text-sm font-medium text-gray-500 dark:text-gray-400">
							{{ stat.label }}
						</p>
						<p class="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
							{{ stat.value }}
						</p>
					</div>
					<div :class="`p-3 rounded-lg bg-${stat.color}-50 dark:bg-${stat.color}-950/20`">
						<UIcon
							:name="stat.icon"
							:class="`w-6 h-6 text-${stat.color}-500 dark:text-${stat.color}-400`"
						/>
					</div>
				</div>
			</UCard>
		</div>

		<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
			<div class="lg:col-span-2">
				<UCard>
					<template #header>
						<h2 class="text-lg font-semibold text-gray-900 dark:text-white">
							Recent Models
						</h2>
					</template>
					<div class="space-y-4">
						<div
							v-for="model in recentModels"
							:key="model.name"
							class="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
						>
							<div class="flex items-center gap-4">
								<div class="p-2 rounded-lg bg-primary-50 dark:bg-primary-950/20">
									<UIcon
										name="i-lucide-cube"
										class="w-5 h-5 text-primary-500 dark:text-primary-400"
									/>
								</div>
								<div>
									<p class="font-medium text-gray-900 dark:text-white">
										{{ model.name }}
									</p>
									<p class="text-sm text-gray-500 dark:text-gray-400">
										{{ model.images }} images • {{ model.date }}
									</p>
								</div>
							</div>
							<UBadge
								:color="model.status === 'completed' ? 'success' : 'warning'"
								variant="subtle"
							>
								{{ model.status }}
							</UBadge>
						</div>
					</div>
				</UCard>
			</div>

			<div>
				<UCard>
					<template #header>
						<h2 class="text-lg font-semibold text-gray-900 dark:text-white">
							Quick Actions
						</h2>
					</template>
					<div class="space-y-3">
						<UButton
							block
							variant="outline"
							icon="i-lucide-upload"
							to="/render"
						>
							Upload Images
						</UButton>
						<UButton
							block
							variant="outline"
							icon="i-lucide-folder"
							to="/models"
						>
							Browse Models
						</UButton>
						<UButton
							block
							variant="outline"
							icon="i-lucide-file-down"
							to="/exports"
						>
							View Exports
						</UButton>
						<UButton
							block
							variant="outline"
							icon="i-lucide-book"
							to="/docs"
						>
							Documentation
						</UButton>
					</div>
				</UCard>

				<UCard class="mt-6">
					<template #header>
						<h2 class="text-lg font-semibold text-gray-900 dark:text-white">
							Usage This Month
						</h2>
					</template>
					<div class="space-y-4">
						<div>
							<div class="flex justify-between text-sm mb-2">
								<span class="text-gray-500 dark:text-gray-400">Credits Used</span>
								<span class="font-medium text-gray-900 dark:text-white">44 / 200</span>
							</div>
							<UProgress
								:value="22"
								color="primary"
							/>
						</div>
						<div>
							<div class="flex justify-between text-sm mb-2">
								<span class="text-gray-500 dark:text-gray-400">Storage</span>
								<span class="font-medium text-gray-900 dark:text-white">1.2 GB / 5 GB</span>
							</div>
							<UProgress
								:value="24"
								color="success"
							/>
						</div>
					</div>
				</UCard>
			</div>
		</div>
	</div>
</template>
