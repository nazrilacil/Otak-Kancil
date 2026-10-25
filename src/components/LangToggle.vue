<script setup>
import { Languages } from 'lucide-vue-next'
import { useI18n } from '../composables/useI18n'

const { locale, L, toggle } = useI18n()
</script>

<template>
  <button
    type="button"
    class="inline-flex items-center gap-1 rounded-lg p-2 text-sm font-semibold text-muted transition-colors hover:bg-card hover:text-ink"
    :aria-label="L.ui.langSwitch"
    :title="L.ui.langSwitch"
    @click="toggle"
  >
    <Languages :size="20" aria-hidden="true" />
    <span aria-hidden="true">{{ locale.toUpperCase() }}</span>
  </button>
</template>