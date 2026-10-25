<script setup>
import { PawPrint } from 'lucide-vue-next'
import { site } from '../config/site'
import { useI18n } from '../composables/useI18n'

const { L } = useI18n()
</script>

<template>
  <footer class="border-t border-line py-10">
    <div class="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm sm:flex-row sm:items-center sm:justify-between">
      <p class="flex items-center gap-2"><PawPrint :size="18" class="text-brand-soft" aria-hidden="true" /><strong>{{ site.name }}</strong> · <span class="text-muted">{{ L.content.tagline }}</span></p>
      <ul class="flex flex-wrap gap-4 text-muted">
        <li v-for="n in site.nav" :key="n.href"><a :href="n.href" class="hover:text-ink hover:underline">{{ L.ui.nav[n.id] }}</a></li>
        <li v-if="site.release.repoUrl"><a :href="site.release.repoUrl" target="_blank" rel="noopener noreferrer" class="hover:text-ink hover:underline">GitHub</a></li>
        <li v-if="site.contact.email"><a :href="`mailto:${site.contact.email}`" class="hover:text-ink hover:underline">{{ site.contact.email }}</a></li>
      </ul>
    </div>
  </footer>
</template>