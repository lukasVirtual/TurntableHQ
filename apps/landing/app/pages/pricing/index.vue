<script setup lang="ts">
// Clerk PricingTable appearance customization (matches site theme)
const pricingAppearance = {
	variables: {
		colorPrimary: "#4f46e5", // Indigo-600
		colorBackground: "#ffffff", // White card background
		colorInputBackground: "#f1f5f9", // Slate-100
		colorText: "#1e293b", // Slate-800
		colorTextSecondary: "#64748b", // Slate-500
		colorNeutral: "#cbd5e1", // Slate-300
		borderRadius: "0.5rem", // Match site border radius
		fontFamily: "Inter, 'Public Sans', system-ui, sans-serif",
	},
}
</script>

<template>
	<main>
		<PricingTable :appearance="pricingAppearance" />
	</main>
</template>
