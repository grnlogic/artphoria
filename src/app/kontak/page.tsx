import Link from 'next/link';
import Magnet from '@/components/Magnet/Magnet';

export const metadata = {
  title: 'Kontak & FAQ — Artphoria',
  description: 'Pertanyaan yang sering diajukan (FAQ), informasi narahubung resmi, lokasi venue, dan formulir komunikasi panitia Artphoria.',
};

const faqItems = [
  {
    q: 'Apa itu festival Artphoria?',
    a: 'Artphoria merupakan festival psikologi yang menggabungkan psikologi, seni, edukasi, hiburan, dan interaksi. Acara ini lahir dari kolaborasi antara KemapsiBaraya (Keluarga Mahasiswa Psikologi Unisba) dan Kabaretungu Unisba (KBU) untuk mengenalkan psikologi secara lebih kreatif dan dekat dengan keseharian.',
  },
  {
    q: 'Apa makna tema "Echoes of the Mind"?',
    a: 'Tema tersebut menggambarkan jejak pengalaman yang pernah dialami seseorang dan meninggalkan "gema" di pikiran maupun perasaannya—mulai dari kenangan masa lalu, overthinking, emosi yang belum tersampaikan, hingga harapan yang masih diperjuangkan.',
  },
  {
    q: 'Kapan dan di mana Artphoria akan diselenggarakan?',
    a: 'Jadwal tanggal pelaksanaan dan lokasi venue acara saat ini sedang dalam proses finalisasi perizinan oleh panitia. Informasi resmi akan diumumkan secara terbuka melalui website ini serta kanal media sosial resmi.',
  },
  {
    q: 'Apakah seluruh rangkaian kegiatan terbuka untuk umum?',
    a: 'Ya, sebagian besar kegiatan seperti pameran booth, aktivitas interaktif, dan pementasan musical drama terbuka bagi mahasiswa dan masyarakat umum dengan ketentuan pendaftaran yang akan diumumkan kemudian.',
  },
  {
    q: 'Bagaimana alur pendaftaran untuk Poster Competition?',
    a: 'Petunjuk teknis lomba, tema khusus, batas pengumpulan karya, serta formulir registrasi kompetisi akan dibuka pada periode pendaftaran resmi melalui pengumuman terpadu.',
  },
  {
    q: 'Bagaimana prosedur mengajukan kerja sama sponsorship atau media partner?',
    a: 'Calon mitra dapat mengisi formulir minat di halaman Partnership atau menghubungi narahubung kemitraan kami secara langsung melalui kontak resmi yang tertera di bawah.',
  },
];

export default function KontakPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Header Halaman */}
      <header className="border-b border-[#E2E0EC] pb-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#58428B]">
          Bantuan & Narahubung
        </span>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#0F1533] sm:text-4xl">
          Kontak Panitia & Pertanyaan Umum (FAQ)
        </h1>
        <p className="mt-3 text-xs text-[#504E72] sm:text-sm max-w-2xl leading-relaxed">
          Temukan jawaban atas pertanyaan seputar festival Artphoria atau hubungi tim panitia melalui kanal komunikasi resmi.
        </p>
      </header>

      {/* 1. FAQ Section */}
      <section className="mt-10">
        <div className="border-b border-[#E2E0EC] pb-3 mb-6">
          <h2 className="text-lg font-semibold text-[#0F1533]">
            1. Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="text-xs text-[#504E72] mt-0.5">
            Informasi penting terkait konsep, kegiatan, jadwal, dan partisipasi.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="rounded border border-[#E2E0EC] bg-[#F6F5FA] p-5"
            >
              <h3 className="text-xs font-semibold text-[#0F1533] sm:text-sm">
                {item.q}
              </h3>
              <p className="mt-2 text-xs text-[#504E72] leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Informasi Narahubung & Lokasi */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Kontak Resmi */}
        <div className="rounded border border-[#E2E0EC] bg-[#FBFBFE] p-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#58428B]">
            Narahubung
          </span>
          <h3 className="mt-1 text-base font-semibold text-[#0F1533]">
            Kanal Komunikasi Resmi
          </h3>
          <p className="mt-2 text-xs text-[#504E72] leading-relaxed">
            Untuk keperluan umum, konfirmasi kemitraan, atau pertanyaan seputar program:
          </p>

          <dl className="mt-4 space-y-2 text-xs">
            <div>
              <dt className="font-semibold text-[#0F1533]">Penyelenggara:</dt>
              <dd className="text-[#504E72]">KemapsiBaraya (Fakultas Psikologi Unisba) × Kabaretungu Unisba</dd>
            </div>
            <div>
              <dt className="font-semibold text-[#0F1533]">Media Sosial Resmi:</dt>
              <dd className="text-[#58428B] font-medium space-x-3">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="underline underline-offset-4">
                  Instagram
                </a>
                <span>•</span>
                <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="underline underline-offset-4">
                  TikTok
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[#0F1533]">Korespondensi Kemitraan:</dt>
              <dd className="text-[#504E72]">Melalui narahubung panitia yang disepakati</dd>
            </div>
          </dl>
        </div>

        {/* Lokasi Acara */}
        <div className="rounded border border-[#E2E0EC] bg-[#FBFBFE] p-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#58428B]">
            Venue Acara
          </span>
          <h3 className="mt-1 text-base font-semibold text-[#0F1533]">
            Lokasi Pelaksanaan
          </h3>
          <p className="mt-2 text-xs text-[#504E72] leading-relaxed">
            Informasi tempat pelaksanaan kegiatan utama dan panggung Musical Drama:
          </p>

          <div className="mt-4 rounded border-l-2 border-[#58428B] bg-[#F6F5FA] p-3 text-xs text-[#504E72]">
            <strong className="text-[#0F1533]">Status Venue:</strong> Menunggu konfirmasi panitia. Petunjuk rute transportasi umum, titik parkir, dan denah detail akan dicantumkan setelah perizinan venue selesai.
          </div>
        </div>
      </section>

      {/* 3. Formulir Pertanyaan (Tampilan Frontend) */}
      <section className="mt-12">
        <div className="border-b border-[#E2E0EC] pb-3 mb-6">
          <h2 className="text-lg font-semibold text-[#0F1533]">
            2. Formulir Pertanyaan Pengunjung
          </h2>
          <p className="text-xs text-[#504E72] mt-0.5">
            Sampaikan pertanyaan jika topik Anda belum terjawab di bagian FAQ.
          </p>
        </div>

        {/* Pemberitahuan Status Frontend */}
        <div className="mb-6 rounded border-l-2 border-[#58428B] bg-[#F6F5FA] p-3 text-xs text-[#504E72]">
          <strong className="text-[#0F1533]">Catatan Teknis:</strong> Formulir ini merupakan tampilan antarmuka frontend dan belum terhubung ke sistem pengiriman backend.
        </div>

        <form action="#" className="space-y-4 max-w-xl">
          <div>
            <label htmlFor="faq-name" className="block text-xs font-semibold text-[#0F1533]">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="faq-name"
              placeholder="Masukkan nama lengkap Anda"
              className="mt-1 block w-full rounded border border-[#717295] bg-[#FBFBFE] px-3 py-2 text-xs text-[#0F1533] placeholder:text-[#504E72]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58428B]"
            />
          </div>

          <div>
            <label htmlFor="faq-email" className="block text-xs font-semibold text-[#0F1533]">
              Alamat Email
            </label>
            <input
              type="email"
              id="faq-email"
              placeholder="nama@email.com"
              className="mt-1 block w-full rounded border border-[#717295] bg-[#FBFBFE] px-3 py-2 text-xs text-[#0F1533] placeholder:text-[#504E72]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58428B]"
            />
          </div>

          <div>
            <label htmlFor="faq-category" className="block text-xs font-semibold text-[#0F1533]">
              Kategori Pertanyaan
            </label>
            <select
              id="faq-category"
              className="mt-1 block w-full rounded border border-[#717295] bg-[#FBFBFE] px-3 py-2 text-xs text-[#0F1533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58428B]"
            >
              <option value="general">Informasi Umum Acara</option>
              <option value="competition">Poster Competition</option>
              <option value="musical">Musical Drama & Tiket</option>
              <option value="partnership">Sponsorship & Partnership</option>
              <option value="other">Pertanyaan Lainnya</option>
            </select>
          </div>

          <div>
            <label htmlFor="faq-message" className="block text-xs font-semibold text-[#0F1533]">
              Isi Pertanyaan
            </label>
            <textarea
              id="faq-message"
              rows={4}
              placeholder="Tuliskan pertanyaan atau informasi yang ingin Anda tanyakan"
              className="mt-1 block w-full rounded border border-[#717295] bg-[#FBFBFE] px-3 py-2 text-xs text-[#0F1533] placeholder:text-[#504E72]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58428B]"
            />
          </div>

          <Magnet padding={30} magnetStrength={2}>
            <button
              type="submit"
              className="inline-flex h-9 items-center justify-center rounded px-5 text-xs font-semibold text-[#FBFBFE] bg-[#58428B] hover:bg-[#483572] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58428B]"
            >
              Kirimkan Pertanyaan
            </button>
          </Magnet>
        </form>
      </section>

      {/* Navigasi Bawah */}
      <div className="mt-16 flex items-center justify-between border-t border-[#E2E0EC] pt-6 text-xs">
        <Link href="/galeri" className="text-[#504E72] hover:text-[#0F1533] transition-colors">
          ← Kembali ke Galeri
        </Link>
        <Link href="/" className="font-semibold text-[#58428B] underline underline-offset-4 hover:text-[#483572] transition-colors">
          Kembali ke Beranda ↗
        </Link>
      </div>
    </div>
  );
}

