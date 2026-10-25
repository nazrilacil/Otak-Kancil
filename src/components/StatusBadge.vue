<script setup>
import { useI18n } from '../composables/useI18n'

defineProps({ status: { type: String, required: true } }) // 'available' | 'developing' | 'planned'
const { L } = useI18n()
const styles = {
  available: 'bg-mint/15 text-mint',
  developing: 'bg-warn/15 text-warn',
  planned: 'bg-violet/15 text-violet',
}
</script>

<template>
  <!-- Status ditulis sebagai teks, tidak hanya warna -->
  <span class="inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold" :class="styles[status]">{{ L.ui.status[status] }}</span>
</template>