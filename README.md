# Otak Kancil — Gabut Jadi Hebat

Aplikasi belajar interaktif Android (React Native + Expo, TypeScript, offline-first).

## Menjalankan
1. `npm install`
2. `npx expo install expo-sqlite`
3. `npx expo start` lalu buka di Android (Expo Go atau emulator). Jangan uji di browser: expo-sqlite tidak disiapkan untuk web.

## Pengujian
- Logika murni: `npm run test:core` (konversi bilangan, gerbang logika, skor kuis, XP, set kuis, badge).
- Type-check: `npx tsc --noEmit`.

## Struktur
- `src/app/` rute Expo Router (lima tab, `lesson/[id]`, `quiz/[id]`, `simulation/[id]`)
- `src/features/` logika murni yang dapat diuji
- `src/content/` materi dan soal bawaan (offline)
- `src/db/` SQLite: migrasi berversi (`PRAGMA user_version`) dan akses data
- `src/theme/` design tokens dan tema terang/gelap/sistem

## Backlog
Aset maskot asli (ikon sekarang memakai Ionicons dari @expo/vector-icons lewat src/components/Icon.tsx; bisa diganti ke Lucide), mode berbatas waktu, konten 40 materi / 120 soal, simulasi fisika-kimia, verifikasi sumber fakta.

## Level dan materi
Level naik 1 setiap 20 XP, maksimum 777 (butuh sekitar 15.500 XP). Setiap materi punya level minimum: bawaan mudah 1, menengah 5, sulit 10, atau `minLevel` khusus (1 sampai 777). Materi terkunci tetap bisa dibaca; hanya kuis dan XP-nya yang menunggu level tercapai. Aturannya ada di `src/features/gamification/xp.ts`.

Kategori kelima, Fakultas Teknik, memuat materi per jurusan dan mata kuliah (Informatika, Elektro, Mesin, Sipil, Industri, Kimia). Lihat `docs/MENAMBAH-MATERI.md` untuk cara menambah materi.

## Popup promosi dan suara
- Popup promosi tampil setiap aplikasi dibuka dan selalu bisa ditutup. Atur di `src/config/promo.ts` (aktif/nonaktif, tautan kontak). Ganti gambar dengan menimpa `assets/promo/poster.png` (saran 800 x 1000 px).
- Efek suara (klik, jawaban benar, jawaban salah) ada di `assets/sounds/*.wav` dan diputar lewat `src/services/sound.ts` (paket `expo-audio`). Pengguna dapat mematikannya di Profil.
