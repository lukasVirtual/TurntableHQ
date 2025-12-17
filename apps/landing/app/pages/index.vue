<script setup lang="ts">
// Hero section content - customize these
const hero = {
  title: "Build products people love, faster than ever",
  description:
    "TurntableHQ gives you the tools, workflows, and insights to ship amazing products. Start building today and see results in minutes.",
  primaryCta: { label: "Start for free", to: "#" },
  secondaryCta: { label: "Book a demo", to: "#" }
}

// Features - customize these
const features = [
  {
    icon: "i-lucide-zap",
    title: "Lightning Fast",
    description:
      "Built for speed with optimized performance. Your users will love the instant response times."
  },
  {
    icon: "i-lucide-shield-check",
    title: "Secure by Default",
    description:
      "Enterprise-grade security with end-to-end encryption. Your data is always protected."
  },
  {
    icon: "i-lucide-blocks",
    title: "Modular Design",
    description:
      "Pick and choose the features you need. Scale up or down as your needs change."
  },
  {
    icon: "i-lucide-users",
    title: "Team Collaboration",
    description:
      "Work together seamlessly with real-time collaboration tools and shared workspaces."
  },
  {
    icon: "i-lucide-bar-chart-3",
    title: "Powerful Analytics",
    description:
      "Get deep insights into your product with comprehensive analytics and reporting."
  },
  {
    icon: "i-lucide-headphones",
    title: "24/7 Support",
    description:
      "Our team is always here to help. Get support whenever you need it, day or night."
  }
]

// Pricing plans - customize these
const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small projects",
    price: "$0",
    period: "/month",
    features: [
      "Up to 3 projects",
      "1 team member",
      "Basic analytics",
      "Community support"
    ],
    cta: { label: "Get started", to: "#" },
    highlight: false
  },
  {
    name: "Pro",
    description: "Best for growing teams and businesses",
    price: "$29",
    period: "/month",
    features: [
      "Unlimited projects",
      "Up to 10 team members",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
      "API access"
    ],
    cta: { label: "Start free trial", to: "#" },
    highlight: true
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    price: "Custom",
    period: "",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "Dedicated account manager",
      "Custom contracts",
      "SLA guarantee",
      "On-premise option"
    ],
    cta: { label: "Contact sales", to: "#" },
    highlight: false
  }
]

// Testimonials - customize these
const testimonials = [
  {
    quote:
      "TurntableHQ transformed how our team works. We shipped 3x faster in the first month.",
    author: "Sarah Chen",
    role: "CTO at TechStartup",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    quote:
      "The best investment we made this year. Simple, powerful, and the support is incredible.",
    author: "Michael Roberts",
    role: "Founder at ProductCo",
    avatar: "https://i.pravatar.cc/150?img=3"
  },
  {
    quote:
      "Finally, a tool that just works. No steep learning curve, just results from day one.",
    author: "Emily Watson",
    role: "Product Lead at ScaleUp",
    avatar: "https://i.pravatar.cc/150?img=5"
  }
]

// FAQ items - customize these
const faqItems = [
  {
    label: "How do I get started?",
    content:
      "Simply sign up for a free account and you'll be guided through the setup process. It takes less than 5 minutes to get your first project running."
  },
  {
    label: "Can I cancel my subscription anytime?",
    content:
      "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees."
  },
  {
    label: "Do you offer a free trial?",
    content:
      "Yes! All paid plans come with a 14-day free trial. No credit card required to start."
  },
  {
    label: "What kind of support do you offer?",
    content:
      "We offer email support for all plans, priority support for Pro users, and dedicated account managers for Enterprise customers."
  },
  {
    label: "Is my data secure?",
    content:
      "Absolutely. We use industry-standard encryption and security practices. Your data is stored securely and backed up regularly."
  }
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <UPageHero
      :title="hero.title"
      :description="hero.description"
      orientation="horizontal"
      :links="[
        {
          ...hero.primaryCta,
          trailingIcon: 'i-lucide-arrow-right',
          size: 'xl'
        },
        {
          ...hero.secondaryCta,
          size: 'xl',
          color: 'neutral',
          variant: 'outline'
        }
      ]"
    >
      <template #title>
        <span class="text-primary">Build products</span> people love, faster
        than ever
      </template>

      <!-- Hero image/illustration placeholder -->
      <div
        class="relative aspect-video rounded-xl bg-linear-to-br from-primary/20 to-primary/5 border border-default flex items-center justify-center overflow-hidden"
      >
        <div
          class="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25 mask-[linear-gradient(0deg,white,rgba(255,255,255,0.6))]"
        />
        <div class="relative text-center p-8">
          <UIcon
            name="i-lucide-play-circle"
            class="w-16 h-16 text-primary mb-4"
          />
          <p class="text-muted">
            Add your product screenshot or demo video here
          </p>
        </div>
      </div>
    </UPageHero>

    <!-- Logos/Trust Section -->
    <UPageSection class="pt-0!">
      <div class="text-center">
        <p class="text-sm text-muted mb-6">
          Trusted by teams at
        </p>
        <div
          class="flex flex-wrap justify-center items-center gap-8 opacity-50"
        >
          <!-- Replace with actual company logos -->
          <span class="text-xl font-bold">Company 1</span>
          <span class="text-xl font-bold">Company 2</span>
          <span class="text-xl font-bold">Company 3</span>
          <span class="text-xl font-bold">Company 4</span>
          <span class="text-xl font-bold">Company 5</span>
        </div>
      </div>
    </UPageSection>

    <!-- Features Section -->
    <UPageSection
      id="features"
      headline="Features"
      title="Everything you need to succeed"
      description="Powerful features designed to help you build, launch, and grow your product."
      :features="features"
    />

    <!-- Pricing Section -->
    <UPageSection
      id="pricing"
      headline="Pricing"
      title="Simple, transparent pricing"
      description="Choose the plan that fits your needs. Upgrade or downgrade anytime."
    >
      <div class="grid md:grid-cols-3 gap-8 mt-12">
        <UCard
          v-for="plan in pricingPlans"
          :key="plan.name"
          :class="['relative', plan.highlight ? 'ring-2 ring-primary' : '']"
        >
          <div
            v-if="plan.highlight"
            class="absolute left-1/2 -translate-x-1/2"
          >
            <UBadge
              color="primary"
              variant="solid"
            >
              Most Popular
            </UBadge>
          </div>

          <div class="text-center mb-6">
            <h3 class="text-xl font-bold mb-2">
              {{ plan.name }}
            </h3>
            <p class="text-sm text-muted mb-4">
              {{ plan.description }}
            </p>
            <div class="flex items-baseline justify-center gap-1">
              <span class="text-4xl font-bold">{{ plan.price }}</span>
              <span class="text-muted">{{ plan.period }}</span>
            </div>
          </div>

          <ul class="space-y-3 mb-6">
            <li
              v-for="feature in plan.features"
              :key="feature"
              class="flex items-center gap-2"
            >
              <UIcon
                name="i-lucide-check"
                class="w-5 h-5 text-primary shrink-0"
              />
              <span class="text-sm">{{ feature }}</span>
            </li>
          </ul>

          <UButton
            :to="plan.cta.to"
            :label="plan.cta.label"
            :color="plan.highlight ? 'primary' : 'neutral'"
            :variant="plan.highlight ? 'solid' : 'outline'"
            block
          />
        </UCard>
      </div>
    </UPageSection>

    <!-- Testimonials Section -->
    <UPageSection
      id="testimonials"
      title="Loved by teams worldwide"
      description="See what our customers have to say about their experience."
    >
      <div class="grid md:grid-cols-3 gap-8 mt-12">
        <UCard
          v-for="testimonial in testimonials"
          :key="testimonial.author"
        >
          <div class="flex flex-col h-full">
            <div class="flex gap-1 mb-4">
              <UIcon
                v-for="i in 5"
                :key="i"
                name="i-lucide-star"
                class="w-5 h-5 text-yellow-500 fill-yellow-500"
              />
            </div>
            <p class="text-muted mb-6 flex-grow">
              "{{ testimonial.quote }}"
            </p>
            <div class="flex items-center gap-3">
              <UAvatar
                :src="testimonial.avatar"
                :alt="testimonial.author"
                size="md"
              />
              <div>
                <p class="font-semibold">
                  {{ testimonial.author }}
                </p>
                <p class="text-sm text-muted">
                  {{ testimonial.role }}
                </p>
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </UPageSection>

    <!-- FAQ Section -->
    <UPageSection
      id="faq"
      title="Frequently asked questions"
      description="Got questions? We've got answers."
    >
      <div class="max-w-3xl mx-auto mt-12">
        <UAccordion :items="faqItems" />
      </div>
    </UPageSection>

    <!-- CTA Section -->
    <UPageSection>
      <UPageCTA
        title="Ready to get started?"
        description="Join thousands of teams building better products with TurntableHQ. Start your free trial today."
        :links="[
          {
            label: 'Start for free',
            to: '#',
            trailingIcon: 'i-lucide-arrow-right',
            size: 'xl'
          },
          {
            label: 'Talk to sales',
            to: '#',
            size: 'xl',
            color: 'neutral',
            variant: 'outline'
          }
        ]"
      />
    </UPageSection>
  </div>
</template>

<style scoped>
.bg-grid-slate-100 {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 0.5)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
}

.dark .bg-grid-slate-700\/25 {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.25)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
}
</style>
