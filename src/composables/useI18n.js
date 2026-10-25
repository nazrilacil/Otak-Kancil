import { ref, computed } from 'vue'
import { id } from '../locales/Id'
import { en } from '../locales/En'

const dicts = { id, en }

function initial() {
  try {
    const s = localStorage.getItem('lang')
    if (s === 'id' || s === 'en') return s
  } catch (e) {
    /* abaikan */
  }
  // Tanpa pilihan tersimpan: Inggris hanya jika bahasa browser Inggris, selain itu Indonesia.
  return typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'id'
}

const locale = ref(initial())
const L = computed(() => dicts[locale.value])

// Sinkronkan atribut lang, judul, dan meta description dengan bahasa aktif.
function sync(v) {
  document.documentElement.lang = v
  document.title = dicts[v].ui.meta.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', dicts[v].ui.meta.description)
}

let started = false

export function useI18n() {
  if (!started && typeof document !== 'undefined') {
    started = true
    sync(locale.value)
  }
  const toggle = () => {
    const next = locale.value === 'id' ? 'en' : 'id'
    locale.value = next
    sync(next)
    try {
      localStorage.setItem('lang', next)
    } catch (e) {
      /* pilihan hanya berlaku untuk sesi ini */
    }
  }
  return { locale, L, toggle }
}