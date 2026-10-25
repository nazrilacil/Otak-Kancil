<script setup>
import { ref } from 'vue'
import { site } from './config/site'
import { iconMap } from './components/iconMap'
import { useReveal } from './composables/useReveal'
import { useI18n } from './composables/useI18n'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import FeatureSection from './components/FeatureSection.vue'
import DownloadSection from './components/DownloadSection.vue'
import UpdateList from './components/UpdateList.vue'
import RequestSection from './components/RequestSection.vue'
import Faq from './components/Faq.vue'
import Footer from './components/Footer.vue'

const root = ref(null)
const { L } = useI18n()
useReveal(root)
</script>

<template>
  <div ref="root">
    <a href="#konten" class="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white">
      {{ L.ui.skip }}
    </a>
    <Navbar />
    <main id="konten">
      <Hero />

      <section class="mx-auto max-w-6xl px-4 py-14" aria-labelledby="manfaat">
        <h2 id="manfaat" data-reveal class="text-2xl font-bold sm:text-3xl">{{ L.ui.whyTitle.replace('{name}', site.name) }}</h2>
        <div class="mt-6 grid gap-4 sm:grid-cols-3">
          <div v-for="b in site.benefits" :key="b.id" data-reveal class="rounded-2xl border border-line bg-card p-5">
            <component :is="iconMap[b.icon]" :size="26" class="text-brand-soft" aria-hidden="true" />
            <h3 class="mt-3 font-semibold">{{ L.content.benefits[b.id].title }}</h3>
            <p class="mt-2 text-sm text-muted">{{ L.content.benefits[b.id].text }}</p>
          </div>
        </div>
      </section>

      <FeatureSection />

      <section class="mx-auto max-w-6xl px-4 py-14" aria-labelledby="cara">
        <h2 id="cara" data-reveal class="text-2xl font-bold sm:text-3xl">{{ L.ui.howTitle }}</h2>
        <ol class="mt-6 grid gap-4 sm:grid-cols-3">
          <li v-for="(s, i) in site.steps" :key="s.id" data-reveal class="rounded-2xl border border-line bg-card p-5">
            <div class="flex items-center gap-3">
              <span class="flex h-9 w-9 items-center justify-center rounded-full bg-brand font-bold text-white" aria-hidden="true">{{ i + 1 }}</span>
              <component :is="iconMap[s.icon]" :size="22" class="text-brand-soft" aria-hidden="true" />
            </div>
            <h3 class="mt-3 font-semibold">{{ L.content.steps[s.id].title }}</h3>
            <p class="mt-1 text-sm text-muted">{{ L.content.steps[s.id].text }}</p>
          </li>
        </ol>
      </section>

      <DownloadSection />
      <UpdateList />
      <RequestSection />
      <Faq />
    </main>
    <Footer />
  </div>
</template>