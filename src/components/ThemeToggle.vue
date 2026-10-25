<script setup>
import { computed } from 'vue'
import { Sun, Moon } from 'lucide-vue-next'
import { useTheme } from '../composables/useTheme'
import { useI18n } from '../composables/useI18n'

const { theme, toggle } = useTheme()
const { L } = useI18n()
const label = computed(() => (theme.value === 'dark' ? L.value.ui.themeToLight : L.value.ui.themeToDark))
</script>

<template>
  <button type="button" class="rounded-lg p-2 text-muted transition-colors hover:bg-card hover:text-ink" :aria-label="label" :title="label" @click="toggle">
    <Sun v-if="theme === 'dark'" :size="20" aria-hidden="true" />
    <Moon v-else :size="20" aria-hidden="true" />
  </button>
</template>