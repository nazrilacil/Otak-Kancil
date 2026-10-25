<script setup>
import { ChevronDown } from 'lucide-vue-next'
import { site } from '../config/site'
import { useI18n } from '../composables/useI18n'

const { L } = useI18n()
</script>

<template>
  <section id="faq" class="py-14" aria-labelledby="judul-faq">
    <div class="mx-auto max-w-3xl px-4">
      <h2 id="judul-faq" data-reveal class="text-2xl font-bold sm:text-3xl">{{ L.ui.faqTitle }}</h2>
      <div class="mt-6 space-y-3">
        <details v-for="id in site.faq" :key="id" data-reveal class="rounded-2xl border border-line bg-card p-4">
          <summary class="flex cursor-pointer items-center justify-between gap-3 font-semibold">
            {{ L.content.faq[id].q }}
            <ChevronDown :size="20" class="faq-chevron shrink-0 text-brand-soft transition-transform" aria-hidden="true" />
          </summary>
          <p class="mt-2 text-sm text-muted">{{ L.content.faq[id].a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>