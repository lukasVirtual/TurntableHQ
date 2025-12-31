<script setup lang="ts">
useHead({
	title: "New Project - Turntable 3D",
	meta: [{ name: "description", content: "Upload images and generate 3D models" }],
})

import { ref } from "vue"

const uploadedFiles = ref<File[]>([])
const isProcessing = ref(false)
const processingProgress = ref(0)
const modelGenerated = ref(false)

const handleFileUpload = (event: Event) => {
	const target = event.target as HTMLInputElement
	const files = Array.from(target.files || [])
	if (uploadedFiles.value.length + files.length <= 4) {
		uploadedFiles.value.push(...files)
	}
}

const removeFile = (index: number) => {
	uploadedFiles.value.splice(index, 1)
}

const generateModel = async () => {
	if (uploadedFiles.value.length === 0) return
	isProcessing.value = true
	processingProgress.value = 0

	const interval = setInterval(() => {
		processingProgress.value += 10
		if (processingProgress.value >= 100) {
			clearInterval(interval)
			isProcessing.value = false
			modelGenerated.value = true
		}
	}, 500)
}

const exportModel = (format: string) => {
	alert(`Exporting model as ${format.toUpperCase()}`)
}
</script>

<template>
	<div class="space-y-6">
		<div class="flex items-center justify-between">
			<div>
				<h1 class="text-3xl font-bold text-gray-900 dark:text-white">
					New Project
				</h1>
				<p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
					Upload 1-4 images to generate a 3D model
				</p>
			</div>
		</div>

		<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
			<div class="space-y-4">
				<UCard>
					<template #header>
						<div class="flex items-center justify-between">
							<h2 class="text-lg font-semibold text-gray-900 dark:text-white">
								Upload Images
							</h2>
							<UBadge variant="subtle">
								{{ uploadedFiles.length }}/4
							</UBadge>
						</div>
					</template>

					<div
						v-if="uploadedFiles.length < 4"
						class="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center hover:border-primary-500 dark:hover:border-primary-500 transition-colors cursor-pointer"
					>
						<input
							type="file"
							accept="image/*"
							multiple
							@change="handleFileUpload"
							class="hidden"
							id="file-upload"
						/>
						<label
							for="file-upload"
							class="cursor-pointer"
						>
							<UIcon
								name="i-lucide-upload-cloud"
								class="w-12 h-12 mx-auto text-gray-400 dark:text-gray-600 mb-4"
							/>
							<p class="text-sm font-medium text-gray-900 dark:text-white">
								Click to upload images
							</p>
							<p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
								PNG, JPG up to 10MB each
							</p>
						</label>
					</div>

					<div
						v-if="uploadedFiles.length > 0"
						class="grid grid-cols-2 gap-3 mt-4"
					>
						<div
							v-for="(file, index) in uploadedFiles"
							:key="index"
							class="relative group"
						>
							<div class="aspect-square rounded-lg bg-gray-100 dark:bg-gray-800 overflow-hidden">
								<img
									:src="URL.createObjectURL(file)"
									:alt="file.name"
									class="w-full h-full object-cover"
								/>
							</div>
							<button
								@click="removeFile(index)"
								class="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
							>
								<UIcon name="i-lucide-x" class="w-4 h-4" />
							</button>
							<p class="text-xs text-gray-500 dark:text-gray-400 mt-1 truncate">
								{{ file.name }}
							</p>
						</div>
					</div>

					<div class="mt-6">
						<UButton
							block
							size="lg"
							icon="i-lucide-wand-2"
							:disabled="uploadedFiles.length === 0 || isProcessing"
							:loading="isProcessing"
							@click="generateModel"
						>
							{{ isProcessing ? 'Generating Model...' : 'Generate 3D Model' }}
						</UButton>
					</div>

					<div
						v-if="isProcessing"
						class="mt-4"
					>
						<div class="flex justify-between text-sm mb-2">
							<span class="text-gray-500 dark:text-gray-400">Processing</span>
							<span class="font-medium text-gray-900 dark:text-white">{{ processingProgress }}%</span>
						</div>
						<UProgress
							:value="processingProgress"
							color="primary"
						/>
					</div>
				</UCard>

				<UCard v-if="modelGenerated">
					<template #header>
						<h2 class="text-lg font-semibold text-gray-900 dark:text-white">
							Export Options
						</h2>
					</template>
					<div class="space-y-3">
						<UButton
							block
							variant="outline"
							icon="i-lucide-cube"
							@click="exportModel('obj')"
						>
							Export as OBJ
						</UButton>
						<UButton
							block
							variant="outline"
							icon="i-lucide-box"
							@click="exportModel('gltf')"
						>
							Export as GLTF
						</UButton>
						<UButton
							block
							variant="outline"
							icon="i-lucide-file-code"
							@click="exportModel('stl')"
						>
							Export as STL (3D Print)
						</UButton>
						<UButton
							block
							variant="outline"
							icon="i-lucide-file-json"
							@click="exportModel('fbx')"
						>
							Export as FBX
						</UButton>
					</div>
				</UCard>
			</div>

			<div>
				<UCard class="h-full">
					<template #header>
						<div class="flex items-center justify-between">
							<h2 class="text-lg font-semibold text-gray-900 dark:text-white">
								3D Preview
							</h2>
							<div class="flex gap-2">
								<UButton
									icon="i-lucide-rotate-cw"
									size="sm"
									variant="ghost"
								/>
								<UButton
									icon="i-lucide-maximize"
									size="sm"
									variant="ghost"
								/>
							</div>
						</div>
					</template>

					<div class="aspect-square bg-gray-900 dark:bg-black rounded-lg overflow-hidden">
						<TresCanvas
							v-if="modelGenerated || uploadedFiles.length > 0"
							clear-color="#020420"
							class="w-full h-full"
						>
							<TresPerspectiveCamera
								:position="[3, 3, 5]"
								:look-at="[0, 0, 0]"
							/>
							<TresAmbientLight :intensity="0.5" />
							<TresDirectionalLight
								:position="[5, 5, 5]"
								:intensity="1"
								cast-shadow
							/>

							<TresMesh
								:position="[0, 0, 0]"
								cast-shadow
								receive-shadow
							>
								<TresBoxGeometry :args="[1, 1, 1]" />
								<TresMeshStandardMaterial color="#8b5cf6" />
							</TresMesh>
						</TresCanvas>
						<div
							v-else
							class="w-full h-full flex items-center justify-center"
						>
							<div class="text-center">
								<UIcon
									name="i-lucide-cube"
									class="w-16 h-16 mx-auto text-gray-600 dark:text-gray-700 mb-4"
								/>
								<p class="text-sm text-gray-500 dark:text-gray-400">
									Upload images to see 3D preview
								</p>
							</div>
						</div>
					</div>

					<div class="mt-4 grid grid-cols-3 gap-2">
						<div class="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
							<p class="text-xs text-gray-500 dark:text-gray-400">Vertices</p>
							<p class="text-lg font-semibold text-gray-900 dark:text-white">2,456</p>
						</div>
						<div class="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
							<p class="text-xs text-gray-500 dark:text-gray-400">Faces</p>
							<p class="text-lg font-semibold text-gray-900 dark:text-white">4,892</p>
						</div>
						<div class="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
							<p class="text-xs text-gray-500 dark:text-gray-400">Size</p>
							<p class="text-lg font-semibold text-gray-900 dark:text-white">2.4 MB</p>
						</div>
					</div>
				</UCard>
			</div>
		</div>
	</div>
</template>
