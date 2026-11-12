import Link from 'next/link';
import Image from 'next/image';
import TiltedCard from '@/components/TiltedCard/TiltedCard';

export const metadata = {
  title: 'Galeri & Dokumentasi — Artphoria',
  description: 'Materi visual resmi, identitas logo, dan dokumentasi proses persiapan festival Artphoria.',
};

export default function GaleriPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Header Halaman */}
      <header className="border-b border-[#E2E0EC] pb-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#58428B]">
          Visual & Dokumentasi
        </span>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#0F1533] sm:text-4xl">
          Galeri & Identitas Visual
        </h1>
        <p className="mt-3 text-xs text-[#504E72] sm:text-sm max-w-2xl leading-relaxed">
          Kumpulan aset visual resmi, filosofi identitas visual, dan catatan dokumentasi proses persiapan kolaborasi seni pertunjukan Artphoria.
        </p>
      </header>

      {/* 1. Identitas Visual Resmi */}
      <section className="mt-10">
        <div className="border-b border-[#E2E0EC] pb-3 mb-6">
          <h2 className="text-lg font-semibold text-[#0F1533]">
            1. Identitas Visual Artphoria
          </h2>
          <p className="text-xs text-[#504E72] mt-0.5">
            Logo resmi dan representasi grafis tema &ldquo;Echoes of the Mind&rdquo;.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded border border-[#E2E0EC] bg-[#F6F5FA] p-6 sm:p-8">
          <div className="flex items-center justify-center p-4 bg-[#FBFBFE] rounded border border-[#E2E0EC]">
            <Image
              src="/logo-artphoria.jpg"
              alt="Logo Resmi Artphoria"
              width={280}
              height={280}
              className="h-56 w-56 object-contain"
            />
          </div>
          <div>
            <span className="text-xs font-medium text-[#58428B] underline underline-offset-2">
              Filosofi Bentuk & Warna
            </span>
            <h3 className="mt-2 text-base font-semibold text-[#0F1533]">
              Simbol Gema dan Percikan Emosi
            </h3>
            <p className="mt-3 text-xs text-[#504E72] leading-relaxed">
              Tipografi Artphoria dirancang organik dengan percikan warna-warni yang merepresentasikan ragam spektrum emosi manusia. Sebagaimana konsep psikologi yang memandang setiap perasaan memiliki fungsi dan maknanya tersendiri, percikan warna tersebut menyatu mengelilingi nama Artphoria sebagai lambang keutuhan diri.
            </p>
            <p className="mt-2 text-xs text-[#504E72] leading-relaxed">
              Pendekatan visual ini selaras dengan arahan Departemen Media: ekspresif, hangat, komunikatif, dan terhubung erat dengan eksplorasi psikologis.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Dokumentasi Proses & Latihan */}
      <section className="mt-12">
        <div className="border-b border-[#E2E0EC] pb-3 mb-6">
          <h2 className="text-lg font-semibold text-[#0F1533]">
            2. Di Balik Layar (Behind the Scene)
          </h2>
          <p className="text-xs text-[#504E72] mt-0.5">
            Catatan proses persiapan menuju pementasan Musical Drama dan festival.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <TiltedCard
            containerHeight="240px"
            containerWidth="100%"
            scaleOnHover={1.03}
            rotateAmplitude={10}
            glare={0.2}
            glareColor="#58428B"
            shadow={0.1}
            showTooltip={false}
            radius={8}
            className="w-full"
          >
            <div className="h-full w-full rounded border border-[#E2E0EC] bg-[#FBFBFE] p-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#58428B]">Proses 01</span>
                <h3 className="mt-1 text-sm font-semibold text-[#0F1533]">Latihan Musical Drama</h3>
                <p className="mt-2 text-xs text-[#504E72] leading-relaxed">
                  Proses pembacaan naskah (table read), latihan vokal, dan eksplorasi karakter oleh para pemeran Kabaretungu Unisba untuk menerjemahkan dinamika psikologis ke dalam panggung musikal.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E2E0EC] text-[11px] text-[#504E72]">
                Dokumentasi foto latihan akan diperbarui berkala.
              </div>
            </div>
          </TiltedCard>

          <TiltedCard
            containerHeight="240px"
            containerWidth="100%"
            scaleOnHover={1.03}
            rotateAmplitude={10}
            glare={0.2}
            glareColor="#58428B"
            shadow={0.1}
            showTooltip={false}
            radius={8}
            className="w-full"
          >
            <div className="h-full w-full rounded border border-[#E2E0EC] bg-[#FBFBFE] p-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#58428B]">Proses 02</span>
                <h3 className="mt-1 text-sm font-semibold text-[#0F1533]">Pengembangan Konsep Psikologi</h3>
                <p className="mt-2 text-xs text-[#504E72] leading-relaxed">
                  Diskusi perumusan materi psikoedukasi, kurasi topik talkshow, dan penyusunan tema interaktif bersama tim KemapsiBaraya.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E2E0EC] text-[11px] text-[#504E72]">
                Dokumentasi diskusi kurasi materi.
              </div>
            </div>
          </TiltedCard>

          <TiltedCard
            containerHeight="240px"
            containerWidth="100%"
            scaleOnHover={1.03}
            rotateAmplitude={10}
            glare={0.2}
            glareColor="#58428B"
            shadow={0.1}
            showTooltip={false}
            radius={8}
            className="w-full"
          >
            <div className="h-full w-full rounded border border-[#E2E0EC] bg-[#FBFBFE] p-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#58428B]">Proses 03</span>
                <h3 className="mt-1 text-sm font-semibold text-[#0F1533]">Produksi Visual & Poster</h3>
                <p className="mt-2 text-xs text-[#504E72] leading-relaxed">
                  Perancangan identitas publikasi, panduan grafis tema emosi, dan persiapan materi kompetisi desain poster nasional.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E2E0EC] text-[11px] text-[#504E72]">
                Materi grafis resmi dalam tahap finalisasi.
              </div>
            </div>
          </TiltedCard>
        </div>
      </section>

      {/* 3. Arsip Dokumentasi Hari Pelaksanaan */}
      <section className="mt-12 rounded border border-[#E2E0EC] bg-[#F6F5FA] p-6 text-center">
        <div className="mx-auto max-w-lg">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#58428B]">
            Dokumentasi Pementasan & Pasca-Acara
          </span>
          <p className="mt-2 text-sm font-semibold text-[#0F1533]">
            Dokumentasi Panggung Akan Diunggah Pasca-Acara
          </p>
          <p className="mt-2 text-xs text-[#504E72] leading-relaxed">
            Foto panggung musical drama, dokumentasi sesi talkshow, karya pemenang poster competition, dan suasana booth akan diarsipkan di halaman ini setelah festival selesai diselenggarakan.
          </p>
        </div>
      </section>

      {/* Navigasi Bawah */}
      <div className="mt-16 flex items-center justify-between border-t border-[#E2E0EC] pt-6 text-xs">
        <Link href="/partnership" className="text-[#504E72] hover:text-[#0F1533] transition-colors">
          ← Kembali ke Partnership
        </Link>
        <Link href="/kontak" className="font-semibold text-[#58428B] underline underline-offset-4 hover:text-[#483572] transition-colors">
          Kontak & FAQ ↗
        </Link>
      </div>
    </div>
  );
}

