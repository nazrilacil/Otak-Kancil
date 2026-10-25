import { ref } from 'vue'

// State tema dibagi lintas komponen. Nilai awal sudah diset oleh skrip kecil di index.html.
const theme = ref(typeof document !== 'undefined' ? document.documentElement.dataset.theme || 'dark' : 'dark')

function apply(value) {
  theme.value = value
  document.documentElement.dataset.theme = value
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', value === 'light' ? '#f4f7ff' : '#121a31')
  try {
    localStorage.setItem('theme', value)
  } catch (e) {
    /* penyimpanan tidak tersedia: tema tetap berlaku untuk sesi ini */
  }
}

export function useTheme() {
  const toggle = () => apply(theme.value === 'dark' ? 'light' : 'dark')
  return { theme, toggle }
}