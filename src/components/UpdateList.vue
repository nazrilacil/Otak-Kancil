<script setup>
import { Rocket, History } from 'lucide-vue-next'
import { site } from '../config/site'
import { useI18n } from '../composables/useI18n'
import StatusBadge from './StatusBadge.vue'

const { L, locale } = useI18n()
// items boleh array biasa atau objek { id: [...], en: [...] }
const items = (c) => (Array.isArray(c.items) ? c.items : c.items[locale.value] ?? c.items.id ?? [])
</script>

<template>
  <section id="pembaruan" class="py-14" aria-labelledby="judul-pembaruan">
    <div class="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
      <div data-reveal>
        <h2 id="judul-pembaruan" class="flex items-center gap-2 text-2xl font-bold sm:text-3xl"><History :size="26" class="text-brand-soft" aria-hidden="true" /> {{ L.ui.changelogTitle }}</h2>
        <ul v-if="site.changelog.length" class="mt-6 space-y-4">
          <li v-for="c in site.changelog" :key="c.version" class="rounded-2xl border border-line bg-card p-5">
            <h3 class="font-semibold">{{ L.ui.versionWord }} {{ c.version }} <span class="text-sm font-normal text-muted">· {{ c.date }}</span></h3>
            <ul class="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
              <li v-for="i in items(c)" :key="i">{{ i }}</li>
            </ul>
          </li>
        </ul>
        <p v-else class="mt-6 rounded-2xl border border-line bg-card p-5 text-sm text-muted">{{ L.ui.noRelease }}</p>
      </div>

      <div data-reveal>
        <h2 class="flex items-center gap-2 text-2xl font-bold sm:text-3xl"><Rocket :size="26" class="text-brand-soft" aria-hidden="true" /> {{ L.ui.roadmapTitle }}</h2>
        <p class="mt-2 text-sm text-muted">{{ L.ui.roadmapNote }}</p>
        <ul class="mt-4 space-y-3">
          <li v-for="r in site.roadmap" :key="r.id" class="flex items-center justify-between gap-3 rounded-2xl border border-line bg-card p-4">
            <span class="font-medium">{{ L.content.roadmap[r.id] }}</span>
            <StatusBadge :status="r.status" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>