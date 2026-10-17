/* =====================================================================
   MAMIMOR — Jadwal Pesanan (Order Calendar Data)
   =====================================================================
   Isi tanggal yang SUDAH PENUH di bawah ini.
   Format: 'YYYY-MM-DD' (tahun-bulan-tanggal), satu per baris, dalam kutip tunggal,
   dipisahkan koma.

   Contoh:
     const FULL_DATES = [
       '2026-10-25',
       '2026-10-26',
       '2026-11-01',
       '2026-11-15',
     ];

   Tanggal yang tidak ada di daftar ini otomatis ditandai TERSEDIA.
   Tanggal yang sudah lewat (sebelum hari ini) otomatis berwarna abu-abu.

   Setelah diubah, upload ulang file ini ke GitHub — kalender langsung update.
   ===================================================================== */

const FULL_DATES = [
  // '2026-10-25',
  // '2026-10-26',
];

/* Jumlah bulan yang ditampilkan (default: 2 = bulan ini + bulan depan) */
const MONTHS_TO_SHOW = 2;
