import Link from 'next/link';
import { FadeContent } from '@/components/FadeContent/FadeContent';

export const metadata = {
  title: 'Kegiatan & Main Event — Artphoria',
  description: 'Daftar program utama dan program pendukung festival Artphoria: Musical Drama, Talkshow, Poster Competition, Booth, dan Psikoedukasi.',
};

export default function KegiatanPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Header Halaman */}
      <header className="border-b border-[#E2E0EC] pb-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#58428B]">
          Program Acara
        </span>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#0F1533] sm:text-4xl">
          Kegiatan Utama & Program Pendukung
        </h1>
        <p className="mt-3 text-xs text-[#504E72] sm:text-sm max-w-2xl leading-relaxed">
          Rangkaian kegiatan Artphoria dirancang untuk mempertemukan edukasi psikologi dengan eksplorasi seni, memberikan ruang refleksi sekaligus pengalaman interaktif yang bermakna bagi pengunjung.
        </p>
      </header>

      {/* Bagian 1: Kegiatan Utama */}
      <section className="mt-12">
        <div className="border-b border-[#E2E0EC] pb-4 mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#58428B]">
            Bagian I
          </span>
          <h2 className="mt-1 text-xl font-semibold text-[#0F1533]">
            Kegiatan Utama (Main Event)
          </h2>
          <p className="mt-1 text-xs text-[#504E72]">
            Program inti yang diselenggarakan pada puncak pelaksanaan festival Artphoria.
          </p>
        </div>

        <FadeContent trigger="mount" duration={0.6}>
          <div className="space-y-6">
            {/* 1. Musical Drama */}
            <article className="rounded border border-[#E2E0EC] bg-[#F6F5FA] p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div>
                  <span className="text-xs font-medium text-[#58428B] underline underline-offset-2">
                    Kolaborasi Teater Musikal
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-[#0F1533]">
                    Musical Drama
                  </h3>
                </div>
                <span className="inline-block text-[11px] font-medium text-[#58428B] bg-[#FBFBFE] border border-[#E2E0EC] px-2.5 py-1 rounded">
                  Menunggu konfirmasi jadwal
                </span>
              </div>
              <p className="mt-3 text-xs text-[#504E72] sm:text-sm leading-relaxed">
                Pertunjukan kolaborasi antara KemapsiBaraya dan Kabaretungu Unisba (KBU). Pementasan ini memadukan akting, musik, olah vokal, gerak tubuh, penokohan, dan tata visual panggung untuk mengangkat perjalanan karakter serta konflik batin yang lekat dengan isu psikologi. Isu kesehatan mental tidak sekadar disampaikan lewat materi kata, tetapi dihadirkan nyata melalui empati pertunjukan.
              </p>
              <div className="mt-4 pt-4 border-t border-[#E2E0EC] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#504E72]">
                <div><strong className="text-[#0F1533]">Penyelenggara:</strong> Kolaborasi KemapsiBaraya × Kabaretungu Unisba</div>
                <div><strong className="text-[#0F1533]">Ketentuan Menonton:</strong> Menunggu pengumuman tiket & registrasi</div>
              </div>
            </article>

            {/* 2. Talkshow */}
            <article className="rounded border border-[#E2E0EC] bg-[#F6F5FA] p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div>
                  <span className="text-xs font-medium text-[#58428B] underline underline-offset-2">
                    Diskusi Panel Multiperspektif
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-[#0F1533]">
                    Talkshow Interaktif
                  </h3>
                </div>
                <span className="inline-block text-[11px] font-medium text-[#58428B] bg-[#FBFBFE] border border-[#E2E0EC] px-2.5 py-1 rounded">
                  Menunggu konfirmasi narasumber
                </span>
              </div>
              <p className="mt-3 text-xs text-[#504E72] sm:text-sm leading-relaxed">
                Menghadirkan dialog mendalam dari beberapa sudut pandang: psikolog profesional, sutradara, dan asisten sutradara. Psikolog memberikan tinjauan ilmiah mengenai fenomena mental yang relevan di masyarakat, sementara sutradara dan asisten sutradara membagikan proses kreatif dalam menerjemahkan fenomena tersebut ke dalam narasi panggung drama musikal.
              </p>
              <div className="mt-4 pt-4 border-t border-[#E2E0EC] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#504E72]">
                <div><strong className="text-[#0F1533]">Pembicara:</strong> Psikolog, Sutradara, Asisten Sutradara (Konfirmasi segera)</div>
                <div><strong className="text-[#0F1533]">Fokus Bahasan:</strong> Isu psikologi terkini & proses kreatif seni peran</div>
              </div>
            </article>

            {/* 3. Poster Competition */}
            <article className="rounded border border-[#E2E0EC] bg-[#F6F5FA] p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div>
                  <span className="text-xs font-medium text-[#58428B] underline underline-offset-2">
                    Kompetisi Seni Visual
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-[#0F1533]">
                    Poster Competition
                  </h3>
                </div>
                <span className="inline-block text-[11px] font-medium text-[#58428B] bg-[#FBFBFE] border border-[#E2E0EC] px-2.5 py-1 rounded">
                  Menunggu pembukaan pendaftaran
                </span>
              </div>
              <p className="mt-3 text-xs text-[#504E72] sm:text-sm leading-relaxed">
                Ajang kompetisi bagi peserta untuk menyampaikan gagasan dan kepedulian terhadap isu psikologi melalui media visual. Peserta menggabungkan pesan edukasi yang mendalam dengan estetika desain poster yang komunikatif, terarah, dan mudah dipahami publik.
              </p>
              <div className="mt-4 pt-4 border-t border-[#E2E0EC] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#504E72]">
                <div><strong className="text-[#0F1533]">Sasaran:</strong> Mahasiswa dan masyarakat umum</div>
                <div><strong className="text-[#0F1533]">Petunjuk Teknis:</strong> Akan diumumkan melalui kanal resmi Artphoria</div>
              </div>
            </article>

            {/* 4. Booth Area & Interactive Activities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <article className="rounded border border-[#E2E0EC] bg-[#F6F5FA] p-6 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-medium text-[#58428B] underline underline-offset-2">
                    Eksibisi Hari-H
                  </span>
                  <h3 className="mt-1 text-base font-semibold text-[#0F1533]">
                    Booth Area
                  </h3>
                  <p className="mt-2 text-xs text-[#504E72] leading-relaxed">
                    Area yang direncanakan untuk menghadirkan aneka aktivitas, stan informasi edukatif, pameran karya, serta partisipasi mitra tenant dan komunitas.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-[#E2E0EC] text-[11px] text-[#504E72]">
                  Status: Dalam tahap pematangan konsep & penjaringan tenant
                </div>
              </article>

              <article className="rounded border border-[#E2E0EC] bg-[#F6F5FA] p-6 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-medium text-[#58428B] underline underline-offset-2">
                    Keterlibatan Audiens
                  </span>
                  <h3 className="mt-1 text-base font-semibold text-[#0F1533]">
                    Interactive Activities
                  </h3>
                  <p className="mt-2 text-xs text-[#504E72] leading-relaxed">
                    Aktivitas langsung yang mengajak audiens berefleksi, seperti permainan pemantik kesadaran diri, zona cerita bersama, dan aktivitas ekspresi kreatif.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-[#E2E0EC] text-[11px] text-[#504E72]">
                  Status: Penyesuaian tema dan alur interaksi pengunjung
                </div>
              </article>
            </div>
          </div>
        </FadeContent>
      </section>

      {/* Bagian 2: Program Pendukung */}
      <section className="mt-16">
        <div className="border-b border-[#E2E0EC] pb-4 mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#58428B]">
            Bagian II
          </span>
          <h2 className="mt-1 text-xl font-semibold text-[#0F1533]">
            Program Pendukung (Departemen & BSO)
          </h2>
          <p className="mt-1 text-xs text-[#504E72]">
            Program kerja dari departemen dan Badan Semi Otonom (BSO) KemapsiBaraya di bawah payung Artphoria.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="rounded border border-[#E2E0EC] bg-[#FBFBFE] p-5">
            <span className="text-xs font-semibold text-[#58428B]">Program 01</span>
            <h3 className="mt-1 text-sm font-semibold text-[#0F1533]">Podcast Artphoria</h3>
            <p className="mt-2 text-xs text-[#504E72] leading-relaxed">
              Kanal percakapan audio-visual yang mengulas topik psikologi, cerita pengalaman hidup, dan fenomena sehari-hari dengan pembawaan santai dan reflektif.
            </p>
          </div>

          <div className="rounded border border-[#E2E0EC] bg-[#FBFBFE] p-5">
            <span className="text-xs font-semibold text-[#58428B]">Program 02</span>
            <h3 className="mt-1 text-sm font-semibold text-[#0F1533]">Psikoedukasi</h3>
            <p className="mt-2 text-xs text-[#504E72] leading-relaxed">
              Program diseminasi informasi psikologi praktis kepada masyarakat secara lugas, ilmiah, dan mudah diterapkan dalam pengelolaan kesehatan mental harian.
            </p>
          </div>

          <div className="rounded border border-[#E2E0EC] bg-[#FBFBFE] p-5">
            <span className="text-xs font-semibold text-[#58428B]">Program 03</span>
            <h3 className="mt-1 text-sm font-semibold text-[#0F1533]">Kelas Psikodrama</h3>
            <p className="mt-2 text-xs text-[#504E72] leading-relaxed">
              Sesi edukatif khusus yang memadukan psikologi dan metode drama, difasilitasi oleh psikolog untuk membantu peserta mengeksplorasi emosi dan dinamika diri.
            </p>
          </div>
        </div>
      </section>

      {/* Navigasi Bawah */}
      <div className="mt-16 flex items-center justify-between border-t border-[#E2E0EC] pt-6 text-xs">
        <Link href="/tentang" className="text-[#504E72] hover:text-[#0F1533] transition-colors">
          ← Kembali ke Tentang
        </Link>
        <Link href="/timeline" className="font-semibold text-[#58428B] underline underline-offset-4 hover:text-[#483572] transition-colors">
          Lihat Peta Kegiatan & Timeline ↗
        </Link>
      </div>
    </div>
  );
}

