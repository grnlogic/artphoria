import Link from 'next/link';

export const metadata = {
  title: 'Peta Kegiatan & Timeline — Artphoria',
  description: 'Alur tahapan persiapan, rancangan jadwal hari pelaksanaan, dan gambaran tata letak area festival Artphoria.',
};

export default function TimelinePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Header Halaman */}
      <header className="border-b border-[#E2E0EC] pb-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#58428B]">
          Jadwal & Lokasi
        </span>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#0F1533] sm:text-4xl">
          Peta Kegiatan & Alur Waktu
        </h1>
        <p className="mt-3 text-xs text-[#504E72] sm:text-sm max-w-2xl leading-relaxed">
          Struktur alur perencanaan rangkaian festival Artphoria dari masa persiapan hingga puncak hari pelaksanaan.
        </p>
      </header>

      {/* Bagian 1: Timeline Alur Persiapan */}
      <section className="mt-10">
        <div className="border-b border-[#E2E0EC] pb-3 mb-6">
          <h2 className="text-lg font-semibold text-[#0F1533]">
            1. Alur Tahapan Rangkaian Acara
          </h2>
          <p className="text-xs text-[#504E72] mt-0.5">
            Tahapan resmi pelaksanaan kegiatan Artphoria.
          </p>
        </div>

        <div className="space-y-6">
          {/* Tahap 1 */}
          <div className="border-l-2 border-[#58428B] pl-4 py-2 bg-[#F6F5FA] rounded-r">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <span className="text-xs font-semibold text-[#0F1533]">Tahap 01: Sosialisasi & Publikasi Identitas</span>
              <span className="text-[11px] text-[#58428B] font-medium">Jadwal: Menunggu konfirmasi panitia</span>
            </div>
            <p className="mt-2 text-xs text-[#504E72] leading-relaxed">
              Pengenalan tema besar &ldquo;Echoes of the Mind&rdquo;, pengumuman rangkaian kolaborasi KemapsiBaraya × KBU, dan pembukaan akses informasi umum.
            </p>
          </div>

          {/* Tahap 2 */}
          <div className="border-l-2 border-[#717295] pl-4 py-2 bg-[#F6F5FA] rounded-r">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <span className="text-xs font-semibold text-[#0F1533]">Tahap 02: Pendaftaran Kompetisi & Program Pendukung</span>
              <span className="text-[11px] text-[#58428B] font-medium">Jadwal: Menunggu konfirmasi panitia</span>
            </div>
            <p className="mt-2 text-xs text-[#504E72] leading-relaxed">
              Penerimaan karya Poster Competition, siaran konten Podcast Artphoria, serta diseminasi materi psikoedukasi kesehatan mental.
            </p>
          </div>

          {/* Tahap 3 */}
          <div className="border-l-2 border-[#717295] pl-4 py-2 bg-[#F6F5FA] rounded-r">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <span className="text-xs font-semibold text-[#0F1533]">Tahap 03: Puncak Hari Pelaksanaan (Main Event)</span>
              <span className="text-[11px] text-[#58428B] font-medium">Jadwal: Menunggu konfirmasi panitia</span>
            </div>
            <p className="mt-2 text-xs text-[#504E72] leading-relaxed">
              Pementasan Musical Drama, sesi Talkshow bersama panelis, pembukaan Booth Area kreatif, dan aktivitas interaktif bagi pengunjung.
            </p>
          </div>

          {/* Tahap 4 */}
          <div className="border-l-2 border-[#E2E0EC] pl-4 py-2 bg-[#F6F5FA] rounded-r">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <span className="text-xs font-semibold text-[#0F1533]">Tahap 04: Pasca-Acara & Dokumentasi</span>
              <span className="text-[11px] text-[#58428B] font-medium">Jadwal: Menunggu konfirmasi panitia</span>
            </div>
            <p className="mt-2 text-xs text-[#504E72] leading-relaxed">
              Publikasi dokumentasi panggung, pengumuman hasil kompetisi, dan perilisan arsip evaluasi kegiatan festival.
            </p>
          </div>
        </div>
      </section>

      {/* Bagian 2: Jadwal Hari Pelaksanaan */}
      <section className="mt-12">
        <div className="border-b border-[#E2E0EC] pb-3 mb-6">
          <h2 className="text-lg font-semibold text-[#0F1533]">
            2. Jadwal Hari Pelaksanaan (Rundown)
          </h2>
          <p className="text-xs text-[#504E72] mt-0.5">
            Rincian jam dan urutan sesi panggung pada Hari-H.
          </p>
        </div>

        <div className="rounded border border-[#E2E0EC] bg-[#FBFBFE] p-6 text-center">
          <div className="mx-auto max-w-md">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#58428B]">
              Status Rundown Acara
            </span>
            <p className="mt-2 text-sm font-semibold text-[#0F1533]">
              Menunggu Konfirmasi Resmi Panitia
            </p>
            <p className="mt-2 text-xs text-[#504E72] leading-relaxed">
              Rincian waktu mulai, jeda sesi, penataan panggung teater musikal, dan jadwal talkshow sedang dimatangkan oleh tim teknis acara. Jadwal final akan dipublikasikan secara lengkap sebelum hari pelaksanaan.
            </p>
          </div>
        </div>
      </section>

      {/* Bagian 3: Gambaran Tata Letak Lokasi */}
      <section className="mt-12">
        <div className="border-b border-[#E2E0EC] pb-3 mb-6">
          <h2 className="text-lg font-semibold text-[#0F1533]">
            3. Rancangan Tata Letak Area (Peta Kegiatan)
          </h2>
          <p className="text-xs text-[#504E72] mt-0.5">
            Rencana alokasi zona pengunjung pada venue acara.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded border border-[#E2E0EC] bg-[#F6F5FA] p-5">
            <h3 className="text-xs font-semibold text-[#0F1533]">Zona Panggung Utama</h3>
            <p className="mt-1.5 text-xs text-[#504E72] leading-relaxed">
              Area pementasan Musical Drama dan sesi panel Talkshow. Dirancang dengan visibilitas optimal dan tata akustik yang mendukung penyampaian cerita.
            </p>
          </div>

          <div className="rounded border border-[#E2E0EC] bg-[#F6F5FA] p-5">
            <h3 className="text-xs font-semibold text-[#0F1533]">Zona Booth & Komunitas</h3>
            <p className="mt-1.5 text-xs text-[#504E72] leading-relaxed">
              Area ekshibisi untuk stan informasi psikologi, stan karya mahasiswa, dan stan mitra kolaborasi/sponsor.
            </p>
          </div>

          <div className="rounded border border-[#E2E0EC] bg-[#F6F5FA] p-5">
            <h3 className="text-xs font-semibold text-[#0F1533]">Zona Interaktif & Refleksi</h3>
            <p className="mt-1.5 text-xs text-[#504E72] leading-relaxed">
              Ruang khusus bagi pengunjung untuk berpartisipasi dalam aktivitas refleksi mandiri, wall of thoughts, dan permainan edukatif.
            </p>
          </div>

          <div className="rounded border border-[#E2E0EC] bg-[#F6F5FA] p-5">
            <h3 className="text-xs font-semibold text-[#0F1533]">Meja Informasi & Registrasi</h3>
            <p className="mt-1.5 text-xs text-[#504E72] leading-relaxed">
              Pusat bantuan di pintu masuk untuk verifikasi pendaftaran pengunjung, penukaran tiket, dan pusat informasi umum.
            </p>
          </div>
        </div>

        <p className="mt-4 text-xs italic text-[#504E72]">
          Catatan: Denah grafis resmi venue akan diunggah setelah perizinan lokasi dan tata letak disetujui secara final.
        </p>
      </section>

      {/* Navigasi Bawah */}
      <div className="mt-16 flex items-center justify-between border-t border-[#E2E0EC] pt-6 text-xs">
        <Link href="/kegiatan" className="text-[#504E72] hover:text-[#0F1533] transition-colors">
          ← Kembali ke Kegiatan
        </Link>
        <Link href="/partnership" className="font-semibold text-[#58428B] underline underline-offset-4 hover:text-[#483572] transition-colors">
          Informasi Partnership ↗
        </Link>
      </div>
    </div>
  );
}

