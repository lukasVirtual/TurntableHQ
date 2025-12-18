<script setup lang="ts">
const appConfig = useAppConfig()
const route = useRoute()

useHead({
	meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
	link: [{ rel: "icon", href: "/favicon.ico" }],
	htmlAttrs: {
		lang: "en",
	},
})

const title = (appConfig.site as { name: string }).name || "TurntableHQ"
const description =
	(appConfig.site as { description: string }).description ||
	"Build amazing products faster with our powerful platform."

useSeoMeta({
	title,
	description,
	ogTitle: title,
	ogDescription: description,
	twitterCard: "summary_large_image",
})

const navLinks = [
	{ label: "Features", to: "#features" },
	{ label: "Pricing", to: "#pricing" },
	{ label: "Testimonials", to: "#testimonials" },
	{ label: "FAQ", to: "#faq" },
]

const isDashboardRoute = computed(() => route.path.startsWith("/dashboard"))

const footerLinks = {
	product: [
		{ label: "Features", to: "#features" },
		{ label: "Pricing", to: "#pricing" },
		{ label: "Changelog", to: "#" },
	],
	company: [
		{ label: "About", to: "#" },
		{ label: "Blog", to: "#" },
		{ label: "Careers", to: "#" },
	],
	legal: [
		{ label: "Privacy", to: "#" },
		{ label: "Terms", to: "#" },
	],
}

const socialLinks = [
	{ icon: "i-simple-icons-x", to: "#", label: "X" },
	{ icon: "i-simple-icons-github", to: "#", label: "GitHub" },
	{ icon: "i-simple-icons-linkedin", to: "#", label: "LinkedIn" },
]
</script>

<template>
	<UApp>
		<UHeader>
			<template #left>
				<NuxtLink
					to="/"
					class="flex items-center"
				>
					<AppLogo />
				</NuxtLink>
			</template>

			<template #default>
				<UNavigationMenu
					:items="navLinks"
					class="hidden lg:flex"
				/>
			</template>

			<template #right>
				<UColorModeButton class="hidden sm:inline-flex" />

				<SignedIn>
					<UButton
						v-if="!isDashboardRoute"
						to="/dashboard"
						label="Dashboard"
						color="neutral"
						variant="ghost"
						class="hidden sm:inline-flex"
					/>
					<UserButton
						:after-sign-out-url="'/'"
						:user-profile-url="'/dashboard/profile'"
					/>
				</SignedIn>

				<SignedOut>
					<UButton
						to="/sign-in"
						label="Sign in"
						color="neutral"
						variant="ghost"
						class="hidden sm:inline-flex"
					/>
					<UButton
						to="/sign-up"
						label="Get Started"
						trailing-icon="i-lucide-arrow-right"
					/>
				</SignedOut>
			</template>
		</UHeader>

		<UMain>
			<NuxtPage />
		</UMain>

		<UFooter>
			<template #top>
				<UContainer>
					<div class="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
						<div class="col-span-2 md:col-span-1">
							<AppLogo class="mb-4" />
							<p class="text-sm text-muted mb-4">
								{{ description }}
							</p>
							<div class="flex gap-2">
								<UButton
									v-for="social in socialLinks"
									:key="social.label"
									:to="social.to"
									:icon="social.icon"
									:aria-label="social.label"
									color="neutral"
									variant="ghost"
									size="sm"
								/>
							</div>
						</div>

						<div>
							<h4 class="font-semibold mb-4">Product</h4>
							<ul class="space-y-2">
								<li
									v-for="link in footerLinks.product"
									:key="link.label"
								>
									<ULink
										:to="link.to"
										class="text-sm text-muted hover:text-foreground"
									>
										{{ link.label }}
									</ULink>
								</li>
							</ul>
						</div>

						<div>
							<h4 class="font-semibold mb-4">Company</h4>
							<ul class="space-y-2">
								<li
									v-for="link in footerLinks.company"
									:key="link.label"
								>
									<ULink
										:to="link.to"
										class="text-sm text-muted hover:text-foreground"
									>
										{{ link.label }}
									</ULink>
								</li>
							</ul>
						</div>

						<div>
							<h4 class="font-semibold mb-4">Legal</h4>
							<ul class="space-y-2">
								<li
									v-for="link in footerLinks.legal"
									:key="link.label"
								>
									<ULink
										:to="link.to"
										class="text-sm text-muted hover:text-foreground"
									>
										{{ link.label }}
									</ULink>
								</li>
							</ul>
						</div>
					</div>
				</UContainer>
			</template>

			<template #left>
				<p class="text-sm text-muted">© {{ new Date().getFullYear() }} TurntableHQ. All rights reserved.</p>
			</template>

			<template #right>
				<UColorModeButton />
			</template>
		</UFooter>
	</UApp>
</template>
