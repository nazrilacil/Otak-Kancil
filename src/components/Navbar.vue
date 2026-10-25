<script setup>
import { ref } from 'vue'
import { Menu, X, PawPrint, Download } from 'lucide-vue-next'
import { site } from '../config/site'
import { useI18n } from '../composables/useI18n'
import { iconMap } from './iconMap'
import ThemeToggle from './ThemeToggle.vue'
import LangToggle from './LangToggle.vue'

const { L } = useI18n()
const open = ref(false)
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-line bg-night">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3" :aria-label="L.ui.navAria">
      <a href="#" class="flex items-center gap-2 text-lg font-extrabold">
        <span class="flex h-8 w-8 items-center justify-center rounded-full bg-white text-brand shadow-sm ring-1 ring-line"><PawPrint :size="18" aria-hidden="true" /></span>
        {{ site.name }}
      </a>

      <ul class="hidden items-center gap-5 md:flex">
        <li v-for="n in site.nav" :key="n.href">
          <a :href="n.href" class="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink">
            <component :is="iconMap[n.icon]" :size="16" aria-hidden="true" /> {{ L.ui.nav[n.id] }}
          </a>
        </li>
        <li><LangToggle /></li>
        <li><ThemeToggle /></li>
        <li>
          <a href="#unduh" class="inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark">
            <Download :size="16" aria-hidden="true" /> {{ L.ui.downloadApk }}
          </a>
        </li>
      </ul>

      <div class="flex items-center gap-1 md:hidden">
        <LangToggle />
        <ThemeToggle />
        <button type="button" class="rounded-lg p-2" :aria-expanded="open" aria-controls="menu-mobile" :aria-label="open ? L.ui.menuClose : L.ui.menuOpen" @click="open = !open">
          <X v-if="open" :size="24" aria-hidden="true" />
          <Menu v-else :size="24" aria-hidden="true" />
        </button>
      </div>
    </nav>

    <ul v-show="open" id="menu-mobile" class="border-t border-line px-4 pb-4 md:hidden">
      <li v-for="n in site.nav" :key="n.href">
        <a :href="n.href" class="flex items-center gap-3 py-3 font-medium" @click="open = false">
          <component :is="iconMap[n.icon]" :size="20" class="text-brand-soft" aria-hidden="true" /> {{ L.ui.nav[n.id] }}
        </a>
      </li>
      <li>
        <a href="#unduh" class="mt-1 flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 font-semibold text-white" @click="open = false">
          <Download :size="20" aria-hidden="true" /> {{ L.ui.downloadApk }}
        </a>
      </li>
    </ul>
  </header>
</template>