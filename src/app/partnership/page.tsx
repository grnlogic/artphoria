import Link from 'next/link';
import Magnet from '@/components/Magnet/Magnet';

export const metadata = {
  title: 'Partnership & Kemitraan — Artphoria',
  description: 'Peluang kolaborasi sponsorship, media partner, dan komunitas bersama festival psikologi dan seni Artphoria.',
};

export default function PartnershipPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Header Halaman */}
      <header className="border-b border-[#E2E0EC] pb-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#58428B]">
          Kolaborasi
        </span>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#0F1533] sm:text-4xl">
          Peluang Kemitraan & Sponsorship
        </h1>
        <p className="mt-3 text-xs text-[#504E72] sm:text-sm max-w-2xl leading-relaxed">
          Artphoria membuka ruang kolaborasi bagi perusahaan, institusi, media, dan komunitas kreatif yang ingin bersama-sama menyuarakan pesan kesehatan mental melalui seni pertunjukan dan edukasi.
        </p>
      </header>

      {/* 1. Pengantar Kemitraan */}
      <section className="mt-10 space-y-4">
        <h2 className="text-lg font-semibold text-[#0F1533]">1. Nilai Kolaborasi Bersama Artphoria</h2>
        <p className="text-xs text-[#504E72] sm:text-sm leading-relaxed">
          Kemitraan di Artphoria dibangun atas dasar saling mendukung dalam menyebarkan kesadaran psikologi yang inklusif dan ramah masyarakat. Melalui perpaduan seni pertunjukan, diskusi ilmiah, dan aktivitas interaktif, mitra mendapatkan ruang komunikasi yang relevan, bermakna, dan dekat dengan kalangan mahasiswa serta masyarakat umum.
        </p>
      </section>

      {/* 2. Bentuk-Bentuk Kerja Sama */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-[#0F1533] mb-4">2. Bentuk Kolaborasi yang Terbuka</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Sponsorship */}
          <div className="rounded border border-[#E2E0EC] bg-[#F6F5FA] p-5">
            <span className="text-xs font-semibold text-[#58428B]">Bentuk 01</span>
            <h3 className="mt-1 text-sm font-semibold text-[#0F1533]">Sponsorship</h3>
            <p className="mt-2 text-xs text-[#504E72] leading-relaxed">
              Dukungan finansial atau barang/jasa untuk mendukung kelancaran produksi acara. Bentuk eksposur mencakup pencantuman logo, ruang stan eksibisi, dan penyebutan pada materi publikasi resmi sesuai kesepakatan.
            </p>
            <p className="mt-3 text-[11px] italic text-[#504E72]">
              Status: Paket sponsorship sedang disusun oleh tim panitia.
            </p>
          </div>

          {/* Media Partner */}
          <div className="rounded border border-[#E2E0EC] bg-[#F6F5FA] p-5">
            <span className="text-xs font-semibold text-[#58428B]">Bentuk 02</span>
            <h3 className="mt-1 text-sm font-semibold text-[#0F1533]">Media Partner</h3>
            <p className="mt-2 text-xs text-[#504E72] leading-relaxed">
              Pertukaran materi promosi, siaran pers, dan peliputan kegiatan acara untuk memperluas jangkauan informasi festival kepada audiens yang lebih luas.
            </p>
            <p className="mt-3 text-[11px] italic text-[#504E72]">
              Status: Terbuka untuk media kampus, komunitas, dan kanal publik.
            </p>
          </div>

          {/* Komunitas & Tenant */}
          <div className="rounded border border-[#E2E0EC] bg-[#F6F5FA] p-5">
            <span className="text-xs font-semibold text-[#58428B]">Bentuk 03</span>
            <h3 className="mt-1 text-sm font-semibold text-[#0F1533]">Komunitas & Tenant</h3>
            <p className="mt-2 text-xs text-[#504E72] leading-relaxed">
              Partisipasi aktif komunitas psikologi, pegiat seni, serta penyedia produk kreatif dalam mengisi area stan dan aktivitas pada hari pelaksanaan.
            </p>
            <p className="mt-3 text-[11px] italic text-[#504E72]">
              Status: Menunggu pengumuman alur kurasi tenant.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Media Kit & Proposal */}
      <section className="mt-12 rounded border border-[#E2E0EC] bg-[#FBFBFE] p-6 sm:p-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#58428B]">
          Dokumen Kemitraan
        </span>
        <h2 className="mt-1 text-xl font-semibold text-[#0F1533]">
          Permohonan Proposal Sponsorship & Media Kit
        </h2>
        <p className="mt-3 text-xs text-[#504E72] sm:text-sm leading-relaxed">
          Dokumen proposal resmi yang memuat profil lengkap, estimasi jangkauan audiens, rincian hak kontraprestasi, dan opsi skema kemitraan dapat diminta secara langsung kepada tim kerja sama Artphoria.
        </p>
        <div className="mt-5 flex flex-wrap gap-4 text-xs font-medium">
          <Link
            href="/kontak"
            className="inline-flex h-9 items-center justify-center rounded px-4 text-xs font-semibold text-[#FBFBFE] bg-[#58428B] hover:bg-[#483572] transition-colors"
          >
            Hubungi Narahubung Partnership
          </Link>
          <span className="inline-flex items-center text-[#504E72]">
            Tautan unduhan dokumen resmi akan diaktifkan setelah rilis proposal final.
          </span>
        </div>
      </section>

      {/* 4. Formulir Pengajuan Minat Kemitraan (Tampilan Frontend) */}
      <section className="mt-12">
        <div className="border-b border-[#E2E0EC] pb-3 mb-6">
          <h2 className="text-lg font-semibold text-[#0F1533]">
            Formulir Pengajuan Minat Kerja Sama
          </h2>
          <p className="text-xs text-[#504E72] mt-0.5">
            Sampaikan ketertarikan instansi atau komunitas Anda untuk memulai komunikasi awal.
          </p>
        </div>

        {/* Pemberitahuan Status Frontend */}
        <div className="mb-6 rounded border-l-2 border-[#58428B] bg-[#F6F5FA] p-3 text-xs text-[#504E72]">
          <strong className="text-[#0F1533]">Catatan Teknis:</strong> Formulir ini merupakan tampilan frontend antarmuka dan belum terhubung ke sistem pengiriman backend. Silakan gunakan narahubung resmi di halaman kontak untuk pengajuan langsung.
        </div>

        <form action="#" className="space-y-4 max-w-xl">
          <div>
            <label htmlFor="partner-name" className="block text-xs font-semibold text-[#0F1533]">
              Nama Lengkap Narahubung
            </label>
            <input
              type="text"
              id="partner-name"
              placeholder="Masukkan nama Anda"
              className="mt-1 block w-full rounded border border-[#717295] bg-[#FBFBFE] px-3 py-2 text-xs text-[#0F1533] placeholder:text-[#504E72]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58428B]"
            />
          </div>

          <div>
            <label htmlFor="partner-org" className="block text-xs font-semibold text-[#0F1533]">
              Nama Perusahaan / Komunitas / Instansi
            </label>
            <input
              type="text"
              id="partner-org"
              placeholder="Masukkan nama organisasi atau perusahaan"
              className="mt-1 block w-full rounded border border-[#717295] bg-[#FBFBFE] px-3 py-2 text-xs text-[#0F1533] placeholder:text-[#504E72]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58428B]"
            />
          </div>

          <div>
            <label htmlFor="partner-email" className="block text-xs font-semibold text-[#0F1533]">
              Alamat Email Resmi
            </label>
            <input
              type="email"
              id="partner-email"
              placeholder="nama@instansi.com"
              className="mt-1 block w-full rounded border border-[#717295] bg-[#FBFBFE] px-3 py-2 text-xs text-[#0F1533] placeholder:text-[#504E72]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58428B]"
            />
          </div>

          <div>
            <label htmlFor="partner-type" className="block text-xs font-semibold text-[#0F1533]">
              Bentuk Minat Kemitraan
            </label>
            <select
              id="partner-type"
              className="mt-1 block w-full rounded border border-[#717295] bg-[#FBFBFE] px-3 py-2 text-xs text-[#0F1533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58428B]"
            >
              <option value="sponsorship">Sponsorship / Pendanaan</option>
              <option value="media-partner">Media Partner / Publikasi</option>
              <option value="community-tenant">Komunitas / Stan Tenant</option>
              <option value="other">Bentuk Kolaborasi Lainnya</option>
            </select>
          </div>

          <div>
            <label htmlFor="partner-message" className="block text-xs font-semibold text-[#0F1533]">
              Pesan atau Gambaran Kerja Sama
            </label>
            <textarea
              id="partner-message"
              rows={4}
              placeholder="Tuliskan gambaran singkat rencana kerja sama yang ingin diajukan"
              className="mt-1 block w-full rounded border border-[#717295] bg-[#FBFBFE] px-3 py-2 text-xs text-[#0F1533] placeholder:text-[#504E72]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58428B]"
            />
          </div>

          <Magnet padding={30} magnetStrength={2}>
            <button
              type="submit"
              className="inline-flex h-9 items-center justify-center rounded px-5 text-xs font-semibold text-[#FBFBFE] bg-[#58428B] hover:bg-[#483572] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58428B]"
            >
              Kirimkan Pengajuan Minat
            </button>
          </Magnet>
        </form>
      </section>

      {/* Navigasi Bawah */}
      <div className="mt-16 flex items-center justify-between border-t border-[#E2E0EC] pt-6 text-xs">
        <Link href="/timeline" className="text-[#504E72] hover:text-[#0F1533] transition-colors">
          ← Kembali ke Timeline
        </Link>
        <Link href="/galeri" className="font-semibold text-[#58428B] underline underline-offset-4 hover:text-[#483572] transition-colors">
          Lihat Galeri & Dokumentasi ↗
        </Link>
      </div>
    </div>
  );
}

