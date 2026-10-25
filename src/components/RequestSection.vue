<script setup>
import { computed, reactive } from 'vue'
import { MessageCircle, Mail } from 'lucide-vue-next'
import { site } from '../config/site'
import { useI18n } from '../composables/useI18n'

const { L, locale } = useI18n()

// Isi pesan SELALU berbahasa Indonesia agar mudah dibaca penerima, apa pun bahasa tampilan website.
const types = [
  { id: 'feature', msg: 'Fitur' },
  { id: 'material', msg: 'Materi' },
  { id: 'bug', msg: 'Laporan Bug' },
]
const form = reactive({ type: 'feature', title: '', description: '', steps: '' })
const typeMsg = computed(() => types.find((t) => t.id === form.type).msg)

const message = computed(() => {
  const lines = [`Jenis: ${typeMsg.value}`, `Judul: ${form.title || '-'}`, `Deskripsi/manfaat: ${form.description || '-'}`]
  if (form.type === 'bug') lines.push(`Langkah reproduksi: ${form.steps || '-'}`)
  return lines.join('\n')
})
const subject = computed(() => `[${site.name}] ${typeMsg.value}: ${form.title || 'Usulan baru'}`)

const waNumber = site.contact.whatsapp.replace(/\D/g, '')
const waHref = computed(() => (waNumber ? `https://wa.me/${waNumber}?text=${encodeURIComponent(`Halo ${site.name},\n\n${message.value}`)}` : null))
const mailHref = computed(() =>
  site.contact.email ? `mailto:${site.contact.email}?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent(message.value)}` : null,
)

const input = 'mt-1 w-full rounded-xl border border-line bg-night px-3 py-2 text-ink placeholder:text-muted'
</script>

<template>
  <section id="usulan" class="mx-auto max-w-3xl px-4 py-14" aria-labelledby="judul-usulan">
    <div data-reveal class="rounded-3xl border border-line bg-card p-6 sm:p-8">
      <h2 id="judul-usulan" class="text-2xl font-bold sm:text-3xl">{{ L.ui.requestTitle }}</h2>
      <p class="mt-2 text-sm text-muted">{{ L.ui.requestNote }}</p>
      <p v-if="locale !== 'id'" class="mt-1 text-sm text-muted">{{ L.ui.requestLangNote }}</p>

      <div class="mt-6 space-y-4">
        <fieldset>
          <legend class="font-medium">{{ L.ui.typeLegend }}</legend>
          <div class="mt-2 flex flex-wrap gap-2">
            <label v-for="t in types" :key="t.id" class="cursor-pointer">
              <input v-model="form.type" type="radio" name="jenis" :value="t.id" class="peer sr-only" />
              <span class="inline-block rounded-xl border border-line bg-night px-4 py-2 text-sm font-medium transition-colors peer-checked:border-brand peer-checked:bg-brand peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand-soft">{{ L.ui.types[t.id] }}</span>
            </label>
          </div>
        </fieldset>

        <div>
          <label for="judul" class="font-medium">{{ L.ui.fieldTitle }}</label>
          <input id="judul" v-model="form.title" type="text" :class="input" />
        </div>
        <div>
          <label for="deskripsi" class="font-medium">{{ L.ui.fieldDesc }}</label>
          <textarea id="deskripsi" v-model="form.description" rows="3" :class="input"></textarea>
        </div>
        <div v-if="form.type === 'bug'">
          <label for="langkah" class="font-medium">{{ L.ui.fieldSteps }}</label>
          <textarea id="langkah" v-model="form.steps" rows="3" :class="input"></textarea>
        </div>

        <div class="flex flex-wrap gap-3">
          <a v-if="waHref" :href="waHref" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 font-semibold text-white transition-colors hover:bg-brand-dark">
            <MessageCircle :size="20" aria-hidden="true" /> {{ L.ui.waBtn }}
          </a>
          <button v-else type="button" disabled class="cursor-not-allowed rounded-xl bg-line px-5 py-3 font-semibold text-muted">{{ L.ui.waOff }}</button>

          <a v-if="mailHref" :href="mailHref" class="inline-flex items-center gap-2 rounded-xl border border-brand px-5 py-3 font-semibold text-brand-soft transition-colors hover:bg-brand/10">
            <Mail :size="20" aria-hidden="true" /> {{ L.ui.mailBtn }}
          </a>
          <button v-else type="button" disabled class="cursor-not-allowed rounded-xl bg-line px-5 py-3 font-semibold text-muted">{{ L.ui.mailOff }}</button>
        </div>
        <p v-if="!waHref || !mailHref" class="text-sm text-muted">{{ L.ui.configHint }}</p>
      </div>
    </div>
  </section>
</template>