// Semua konten yang sering berubah ada di file ini.
// Nilai null / '' = BELUM DIKONFIGURASI (website menampilkan status jujur, bukan tautan palsu).

export const site = {
  name: 'Otak Kancil',
  tagline: 'Gabut Jadi Hebat',
  headline: 'Belajar hal baru, satu misi setiap hari.',
  description:
    'Otak Kancil adalah aplikasi edukasi Android untuk menjelajahi materi, mengerjakan kuis, dan mengembangkan pengetahuan secara bertahap.',

  release: {
    version: '1.0.0', // contoh: '1.0.0'
    date: '2026-10-25', // contoh: '2026-11-01'
    size: '187 MB', // contoh: '45 MB'
    minAndroid: 'Android 11.0', // contoh: 'Android 8.0'
    url: 'https://github.com/nazrilacil/Otak-Kancil/releases/download/v1.0.0/Otak-Kancil-v1.0.0.apk', // contoh: 'https://github.com/USER/REPO/releases/latest'
    repoUrl: 'https://github.com/nazrilacil/Otak-Kancil', // contoh: 'https://github.com/USER/REPO'
  },

  // TODO: isi kontak resmi. Jangan publikasikan nomor pribadi tanpa persetujuan pemilik.
  contact: {
    whatsapp: '6285175414118', // format internasional tanpa + atau spasi, contoh: '6281234567890'
    email: 'nazrilacil04@gmail.com', // contoh: 'halo@domain.com'
  },

  nav: [
    { id: 'fitur', href: '#fitur', icon: 'Sparkles' },
    { id: 'materi', href: '#materi', icon: 'BookOpen' },
    { id: 'pembaruan', href: '#pembaruan', icon: 'Rocket' },
    { id: 'faq', href: '#faq', icon: 'CircleHelp' },
  ],
 
  benefits: [
    { id: 'bertahap', icon: 'Compass' },
    { id: 'uji', icon: 'ListChecks' },
    { id: 'progres', icon: 'TrendingUp' },
  ],
 
  // status: 'available' | 'developing' | 'planned'
  // XP/level, Tantangan Harian, dan Misi Harian terlihat di screenshot aplikasi (Beranda).
  // TODO: pastikan status cocok dengan APK yang dirilis.
  features: [
    { id: 'materi', icon: 'BookOpen', status: 'available' },
    { id: 'kuis', icon: 'ListChecks', status: 'available' },
    { id: 'xp', icon: 'Zap', status: 'available' },
    { id: 'tantangan', icon: 'Target', status: 'available' },
    { id: 'misi', icon: 'CheckCheck', status: 'available' },
    { id: 'progres', icon: 'TrendingUp', status: 'available' },
  ],
 
  // Tidak ada angka jumlah materi: tambahkan `count: <angka>` hanya jika sudah pasti.
  categories: [
    { id: 'sains', icon: 'FlaskConical' },
    { id: 'teknologi', icon: 'Cpu' },
    { id: 'logika', icon: 'Puzzle' },
    { id: 'umum', icon: 'Globe' },
  ],
 
  steps: [
    { id: 'unduh', icon: 'Download' },
    { id: 'pasang', icon: 'Smartphone' },
    { id: 'mulai', icon: 'Rocket' },
  ],
 
  // Hanya versi yang benar-benar sudah dirilis. Contoh bentuk:
  // { version: '1.0.0', date: '2026-11-01', items: { id: ['Rilis pertama'], en: ['First release'] } }
  // (items juga boleh berupa array biasa jika tidak ingin diterjemahkan)
  changelog: [],
 
  roadmap: [
    { id: 'level777', status: 'planned' },
    { id: 'teknik', status: 'planned' },
  ],
 
  // Urutan pertanyaan FAQ (teksnya ada di locales)
  faq: ['apa', 'unduh', 'versi', 'request', 'bug'],
}
 