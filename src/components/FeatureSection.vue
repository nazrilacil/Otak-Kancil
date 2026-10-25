<script setup>
import { site } from '../config/site'
import { useI18n } from '../composables/useI18n'
import { iconMap } from './iconMap'
import StatusBadge from './StatusBadge.vue'

const { L } = useI18n()
</script>

<template>
  <section id="fitur" class="py-14" aria-labelledby="judul-fitur">
    <div class="mx-auto max-w-6xl px-4">
      <h2 id="judul-fitur" data-reveal class="text-2xl font-bold sm:text-3xl">{{ L.ui.featuresTitle }}</h2>
      <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="f in site.features" :key="f.id" data-reveal class="rounded-2xl border border-line bg-card p-5 transition-transform hover:-translate-y-1">
          <div class="flex items-center justify-between">
            <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/20 text-brand-soft"><component :is="iconMap[f.icon]" :size="22" aria-hidden="true" /></span>
            <StatusBadge :status="f.status" />
          </div>
          <h3 class="mt-4 font-semibold">{{ L.content.features[f.id].title }}</h3>
          <p class="mt-1 text-sm text-muted">{{ L.content.features[f.id].text }}</p>
        </article>
      </div>

      <h2 id="materi" data-reveal class="mt-16 text-2xl font-bold sm:text-3xl">{{ L.ui.categoriesTitle }}</h2>
      <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article v-for="c in site.categories" :key="c.id" data-reveal class="rounded-2xl bg-brand p-5 text-white transition-transform hover:-translate-y-1">
          <component :is="iconMap[c.icon]" :size="28" aria-hidden="true" />
          <h3 class="mt-4 font-semibold">{{ L.content.categories[c.id].title }}</h3>
          <p class="mt-1 text-sm text-white/85">{{ L.content.categories[c.id].text }}</p>
          <p v-if="c.count" class="mt-2 text-xs font-semibold">{{ c.count }} {{ L.ui.materialsCount }}</p>
        </article>
      </div>
    </div>
  </section>
</template>