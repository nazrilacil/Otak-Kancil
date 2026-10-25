import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Animasi masuk saat scroll untuk elemen [data-reveal]. Satu mekanisme saja (ScrollTrigger.batch).
// Konten tetap terlihat jika JS gagal; dilewati jika pengguna memilih reduced motion.
export function useReveal(rootRef) {
  let ctx
  onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.registerPlugin(ScrollTrigger)
    ctx = gsap.context(() => {
      gsap.set('[data-reveal]', { opacity: 0, y: 24 })
      ScrollTrigger.batch('[data-reveal]', {
        start: 'top 92%',
        once: true,
        onEnter: (els) =>
          gsap.to(els, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out', stagger: 0.08, overwrite: true }),
      })
    }, rootRef.value)
  })
  onBeforeUnmount(() => ctx?.revert())
}