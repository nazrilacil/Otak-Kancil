<script setup>
import { computed } from 'vue'
import { ShieldAlert } from 'lucide-vue-next'
import { site } from '../config/site'
import { useI18n } from '../composables/useI18n'
import badge from '../assets/btn-download-android.webp'

const { L } = useI18n()
const r = site.release
const ready = computed(() => Boolean(r.url))
const details = computed(() =>
  [[L.value.ui.dlVersion, r.version], [L.value.ui.dlDate, r.date], [L.value.ui.dlSize, r.size], [L.value.ui.dlMinAndroid, r.minAndroid]].filter(([, v]) => v),
)
</script>

<template>
  <section id="unduh" class="mx-auto max-w-6xl px-4 py-14" aria-labelledby="judul-unduh">
    <div data-reveal class="rounded-3xl bg-brand p-6 text-white sm:p-10">
      <h2 id="judul-unduh" class="text-2xl font-bold sm:text-3xl">{{ L.ui.downloadTitle }}</h2>

      <dl v-if="details.length" class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div v-for="[k, v] in details" :key="k">
          <dt class="text-xs uppercase text-white/75">{{ k }}</dt>
          <dd class="font-semibold">{{ v }}</dd>
        </div>
      </dl>

      <a v-if="ready" :href="r.url" target="_blank" rel="noopener noreferrer" class="mt-6 inline-block rounded-xl transition-transform hover:-translate-y-0.5" :aria-label="L.ui.dlLinkLabel">
        <img :src="badge" width="327" height="112" alt="" class="h-auto w-56 sm:w-64" loading="lazy" />
      </a>
      <div v-else class="mt-6">
        <!-- Belum dikonfigurasi: gambar tidak bisa diklik dan dibuat pudar agar tidak terlihat seperti tombol aktif -->
        <img :src="badge" width="327" height="112" :alt="L.ui.dlOffAlt" class="pointer-events-none h-auto w-56 opacity-40 grayscale sm:w-64" loading="lazy" />
        <p class="mt-2 text-sm text-white/90">{{ L.ui.dlSoon }} {{ L.ui.dlNotConfigured }}</p>
      </div>

      <p class="mt-6 flex max-w-prose gap-2 text-sm text-white/90">
        <ShieldAlert :size="18" class="mt-0.5 shrink-0" aria-hidden="true" />
        {{ L.ui.dlNote }}
      </p>
    </div>
  </section>
</template>