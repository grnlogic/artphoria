import Link from 'next/link';
import { FadeContent } from '@/components/FadeContent/FadeContent';
import LineWaves from '@/components/LineWaves/LineWaves';
import Magnet from '@/components/Magnet/Magnet';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 py-0 sm:gap-24">
      {/* 1. Hero Section with LineWaves from @react-bits */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-[#E2E0EC] bg-radial from-[#F3E8FF]/30 via-[#FBFBFE] to-[#FBFBFE]">
        <div className="absolute inset-0 pointer-events-none opacity-45">
          <LineWaves
            color1="#58428B"
            color2="#816BAA"
            color3="#C5B6E0"
            speed={0.35}
            lineCount={24}
            lineWidth={1.5}
            glow={0.4}
            warpIntensity={0.5}
            enableMouseInteraction={true}
            lightMode={true}
            opacity={0.4}
          />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 z-10">
          <FadeContent trigger="mount" duration={0.6}>
            <div className="inline-flex items-center gap-2 border border-[#E2E0EC] bg-[#F6F5FA]/90 backdrop-blur-xs px-3 py-1 rounded text-xs font-medium text-[#504E72]">
              <span>Festival Psikologi & Seni</span>
              <span className="text-[#58428B]">•</span>
              <span>KemapsiBaraya × Kabaretungu Unisba</span>
            </div>

            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-[#0F1533] sm:text-5xl">
              Echoes of the Mind
            </h1>

            <p className="mt-4 text-base italic text-[#58428B] sm:text-lg">
              &ldquo;Every Mind Has a Story. Every Echo Deserves to Be Heard.&rdquo;
            </p>

            <p className="mt-6 text-sm text-[#504E72] sm:text-base leading-relaxed max-w-2xl mx-auto">
              Ruang bagi masyarakat untuk mengenal psikologi melalui cerita, pertunjukan, karya visual, dan interaksi yang dekat dengan kehidupan sehari-hari.
            </p>

            {/* Penanda Status Jadwal */}
            <div className="mt-6 inline-block border-l-2 border-[#58428B] bg-[#F6F5FA]/90 backdrop-blur-xs px-4 py-2 text-left text-xs text-[#504E72]">
              <p className="font-semibold text-[#0F1533]">Jadwal & Lokasi Acara</p>
              <p className="mt-0.5">Menunggu konfirmasi panitia (akan diumumkan melalui kanal resmi).</p>
            </div>

            {/* Tombol Ajakan with Magnet */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Magnet padding={35} magnetStrength={2}>
                <Link
                  href="/kegiatan"
                  className="inline-flex h-10 items-center justify-center rounded px-5 text-xs font-semibold text-[#FBFBFE] bg-[#58428B] hover:bg-[#483572] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58428B] shadow-xs"
                >
                  Jelajahi Rangkaian Kegiatan
                </Link>
              </Magnet>
              <Magnet padding={35} magnetStrength={2}>
                <Link
                  href="/partnership"
                  className="inline-flex h-10 items-center justify-center rounded border border-[#717295] bg-[#FBFBFE]/90 backdrop-blur-xs px-5 text-xs font-semibold text-[#0F1533] hover:bg-[#F6F5FA] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58428B]"
                >
                  Peluang Kerja Sama
                </Link>
              </Magnet>
            </div>
          </FadeContent>
        </div>
      </section>

      {/* 2. Pengenalan Singkat Artphoria */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded border border-[#E2E0EC] bg-[#F6F5FA] p-6 sm:p-10">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#58428B]">
              Latar Belakang
            </span>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-[#0F1533] sm:text-2xl">
              Memahami Manusia Melalui Seni dan Psikologi
            </h2>
            <p className="mt-4 text-xs text-[#504E72] sm:text-sm leading-relaxed">
              Psikologi merupakan ilmu yang dekat dengan kehidupan sehari-hari: cara seseorang berpikir, merasakan emosi, mengambil keputusan, hingga menghadapi pengalaman hidup. Namun, pembahasannya sering disampaikan secara formal dan akademis.
            </p>
            <p className="mt-3 text-xs text-[#504E72] sm:text-sm leading-relaxed">
              Di sisi lain, seni menjadi media yang mampu menyampaikan pengalaman manusia dengan cara yang lebih mudah diterima. Melalui kolaborasi antara KemapsiBaraya dan Kabaretungu Unisba (KBU), Artphoria menghadirkan ruang refleksi dan edukasi bersama.
            </p>
            <div className="mt-6">
              <Link
                href="/tentang"
                className="text-xs font-semibold text-[#58428B] underline underline-offset-4 hover:text-[#483572] transition-colors"
              >
                Baca profil dan filosofi lengkap ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sorotan Kegiatan Utama */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#58428B]">
              Rangkaian Program
            </span>
            <h2 className="mt-1 text-xl font-semibold tracking-tight text-[#0F1533] sm:text-2xl">
              Sorotan Kegiatan Utama
            </h2>
          </div>
          <Link
            href="/kegiatan"
            className="text-xs font-medium text-[#58428B] underline underline-offset-4 hover:text-[#483572] transition-colors"
          >
            Lihat semua program ↗
          </Link>
        </div>

        <FadeContent trigger="scroll" duration={0.7}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Card 1: Musical Drama */}
            <div className="rounded border border-[#E2E0EC] bg-[#F6F5FA] p-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-medium text-[#58428B] underline underline-offset-2">Kolaborasi Utama</span>
                <h3 className="mt-2 text-base font-semibold text-[#0F1533]">Musical Drama</h3>
                <p className="mt-2 text-xs text-[#504E72] leading-relaxed">
                  Pertunjukan kolaborasi KemapsiBaraya dan Kabaretungu Unisba yang memadukan akting, musik, vokal, dan visual panggung untuk menyampaikan cerita seputar isu psikologis.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[#E2E0EC] text-[11px] text-[#504E72]">
                Status: Menunggu konfirmasi jadwal
              </div>
            </div>

            {/* Card 2: Talkshow */}
            <div className="rounded border border-[#E2E0EC] bg-[#F6F5FA] p-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-medium text-[#58428B] underline underline-offset-2">Diskusi & Refleksi</span>
                <h3 className="mt-2 text-base font-semibold text-[#0F1533]">Talkshow</h3>
                <p className="mt-2 text-xs text-[#504E72] leading-relaxed">
                  Menghadirkan perspektif psikolog, sutradara, dan asisten sutradara untuk membahas isu psikologi dan bagaimana gagasan tersebut diterjemahkan ke dalam seni pertunjukan.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[#E2E0EC] text-[11px] text-[#504E72]">
                Status: Menunggu konfirmasi pengisi acara
              </div>
            </div>

            {/* Card 3: Poster Competition */}
            <div className="rounded border border-[#E2E0EC] bg-[#F6F5FA] p-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-medium text-[#58428B] underline underline-offset-2">Kompetisi Kreatif</span>
                <h3 className="mt-2 text-base font-semibold text-[#0F1533]">Poster Competition</h3>
                <p className="mt-2 text-xs text-[#504E72] leading-relaxed">
                  Kompetisi desain poster edukatif yang memberikan ruang bagi peserta untuk menyampaikan gagasan mengenai isu psikologi melalui media visual.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[#E2E0EC] text-[11px] text-[#504E72]">
                Status: Menunggu pengumuman pendaftaran
              </div>
            </div>

            {/* Card 4: Booth & Interactive Area */}
            <div className="rounded border border-[#E2E0EC] bg-[#F6F5FA] p-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-medium text-[#58428B] underline underline-offset-2">Aktivitas Hari-H</span>
                <h3 className="mt-2 text-base font-semibold text-[#0F1533]">Booth Area & Aktivitas Interaktif</h3>
                <p className="mt-2 text-xs text-[#504E72] leading-relaxed">
                  Ruang keterlibatan langsung bagi pengunjung yang mencakup pameran informasi, aktivitas refleksi, permainan interaktif, dan tenant komunitas.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[#E2E0EC] text-[11px] text-[#504E72]">
                Status: Dalam tahap pengembangan konsep
              </div>
            </div>
          </div>
        </FadeContent>
      </section>

      {/* 4. Ringkasan Timeline */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded border border-[#E2E0EC] bg-[#FBFBFE] p-6 sm:p-10">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#58428B]">
              Jadwal Rangkaian
            </span>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-[#0F1533] sm:text-2xl">
              Alur Pelaksanaan Artphoria
            </h2>
            <p className="mt-2 text-xs text-[#504E72] sm:text-sm">
              Rangkaian tahapan kegiatan dari perencanaan hingga puncak acara hari-H.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="border-l-2 border-[#58428B] pl-4 py-1">
              <span className="text-xs font-semibold text-[#0F1533]">Tahap 1: Persiapan & Publikasi Program</span>
              <p className="text-xs text-[#504E72] mt-0.5">Pengenalan tema, sosialisasi program kerja, dan pembukaan informasi pendaftaran.</p>
            </div>
            <div className="border-l-2 border-[#E2E0EC] pl-4 py-1">
              <span className="text-xs font-semibold text-[#0F1533]">Tahap 2: Pelaksanaan Kompetisi & Program Pendukung</span>
              <p className="text-xs text-[#504E72] mt-0.5">Pengumpulan karya poster, siaran podcast, dan pelaksanaan kegiatan psikoedukasi.</p>
            </div>
            <div className="border-l-2 border-[#E2E0EC] pl-4 py-1">
              <span className="text-xs font-semibold text-[#0F1533]">Tahap 3: Hari-H Pelaksanaan Utama (Main Event)</span>
              <p className="text-xs text-[#504E72] mt-0.5">Pementasan Musical Drama, talkshow panel, area booth, dan aktivitas interaktif.</p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#E2E0EC] flex items-center justify-between text-xs">
            <span className="text-[#504E72]">Tanggal pasti: Menunggu konfirmasi panitia</span>
            <Link
              href="/timeline"
              className="font-medium text-[#58428B] underline underline-offset-4 hover:text-[#483572] transition-colors"
            >
              Lihat detail peta kegiatan ↗
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Peluang Kemitraan (Partnership Section) */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded border border-[#E2E0EC] bg-[#F6F5FA] p-6 sm:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#58428B]">
              Kolaborasi & Kemitraan
            </span>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-[#0F1533] sm:text-2xl">
              Membangun Ruang Bersama Melalui Kemitraan
            </h2>
            <p className="mt-3 text-xs text-[#504E72] sm:text-sm leading-relaxed">
              Artphoria membuka kesempatan kerja sama bagi instansi, perusahaan, media, dan komunitas yang ingin berpartisipasi dalam menggaungkan kesadaran kesehatan mental melalui pendekatan seni.
            </p>
            <div className="mt-4 text-xs text-[#504E72]">
              Mitra resmi: Menunggu konfirmasi kesepakatan kerjasama.
            </div>
          </div>

          <div className="flex-shrink-0">
            <Magnet padding={30} magnetStrength={2}>
              <Link
                href="/partnership"
                className="inline-flex h-10 items-center justify-center rounded px-5 text-xs font-semibold text-[#FBFBFE] bg-[#58428B] hover:bg-[#483572] transition-colors"
              >
                Pelajari Bentuk Kemitraan
              </Link>
            </Magnet>
          </div>
        </div>
      </section>
    </div>
  );
}
