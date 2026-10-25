<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { PawPrint, Download, ArrowDown } from 'lucide-vue-next'
import { site } from '../config/site'
import { useTheme } from '../composables/useTheme'
import { useI18n } from '../composables/useI18n'
import shotDark from '../assets/screenshot-beranda.webp'
import shotLight from '../assets/screenshot-beranda-light.webp'

const root = ref(null)
const { theme } = useTheme()
const { L } = useI18n()
let ctx

// Tampilan HP mengikuti tema website (hanya satu gambar yang dimuat sesuai tema aktif)
const screenshot = computed(() => (theme.value === 'light' ? shotLight : shotDark))
const alt = computed(() => `${L.value.ui.heroAlt} (${theme.value === 'light' ? L.value.ui.modeLight : L.value.ui.modeDark})`)
const highlights = site.features.filter((f) => f.status === 'available').slice(0, 4)

onMounted(() => {
  // Konten tetap terlihat jika JS gagal: hanya gsap.from, dilewati saat reduced motion.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  ctx = gsap.context(() => {
    gsap
      .timeline({ defaults: { duration: 0.6, ease: 'power2.out' } })
      .from('[data-hero="text"] > *', { opacity: 0, y: 18, stagger: 0.08 })
      .from('[data-hero="phone"]', { opacity: 0, y: 32, scale: 0.96, duration: 0.8 }, '-=0.5')
      .from('[data-hero="chip"]', { opacity: 0, scale: 0.8, stagger: 0.08, duration: 0.4 }, '-=0.3')
  }, root.value)
})

onBeforeUnmount(() => ctx?.revert())
</script>

<template>
  <section ref="root" class="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-14 pt-10 md:grid-cols-2 md:py-20">
    <div data-hero="text">
      <p class="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-sm font-semibold text-brand-soft">
        <PawPrint :size="16" aria-hidden="true" /> {{ L.content.tagline }}
      </p>
      <h1 class="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">{{ L.content.headline }}</h1>
      <p class="mt-4 max-w-prose text-lg text-muted">{{ L.content.description }}</p>
      <p v-if="site.release.version" class="mt-3 text-sm text-muted">{{ L.ui.latestVersion }}: {{ site.release.version }}</p>
      <div class="mt-6 flex flex-wrap gap-3">
        <a href="#unduh" class="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 font-semibold text-white transition-colors hover:bg-brand-dark">
          <Download :size="20" aria-hidden="true" /> {{ L.ui.downloadApkAndroid }}
        </a>
        <a href="#fitur" class="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 font-semibold transition-colors hover:bg-card">
          <ArrowDown :size="20" aria-hidden="true" /> {{ L.ui.exploreFeatures }}
        </a>
      </div>
    </div>

    <figure data-hero="phone" class="relative mx-auto w-full max-w-[280px]">
      <img :src="screenshot" width="520" height="1200" fetchpriority="high" :alt="alt" class="h-auto w-full rounded-[2rem] border-4 border-line" />
      <ul class="absolute -left-3 top-10 hidden space-y-2 sm:block lg:-left-10" :aria-label="L.ui.heroHighlights">
        <li v-for="h in highlights" :key="h.id" data-hero="chip" class="w-fit rounded-full border border-line bg-card px-3 py-1 text-xs font-semibold text-ink">{{ L.content.features[h.id].title }}</li>
      </ul>
    </figure>
  </section>
</template>