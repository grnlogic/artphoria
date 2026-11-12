import Link from 'next/link';

export const metadata = {
  title: 'Tentang Artphoria — Profil, Visi, Misi & Tema',
  description: 'Mengenal latar belakang, tema Echoes of the Mind, visi, misi, dan pilar konsep Artphoria.',
};

export default function TentangPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Header Halaman */}
      <header className="border-b border-[#E2E0EC] pb-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#58428B]">
          Tentang Artphoria
        </span>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#0F1533] sm:text-4xl">
          Ruang Memahami Manusia Melalui Psikologi dan Seni
        </h1>
        <p className="mt-3 text-sm italic text-[#58428B]">
          &ldquo;Every Mind Has a Story. Every Echo Deserves to Be Heard.&rdquo;
        </p>
      </header>

      {/* 1. Profil & Pengertian */}
      <section className="mt-10 space-y-4">
        <h2 className="text-lg font-semibold text-[#0F1533]">1. Pengertian Artphoria</h2>
        <p className="text-xs text-[#504E72] sm:text-sm leading-relaxed">
          Artphoria merupakan festival psikologi yang menggabungkan psikologi, seni, edukasi, hiburan, dan interaksi dalam satu rangkaian kegiatan terpadu. Acara ini dikembangkan melalui kolaborasi antara KemapsiBaraya (Keluarga Mahasiswa Psikologi Unisba) dan Kabaretungu Unisba (KBU).
        </p>
        <p className="text-xs text-[#504E72] sm:text-sm leading-relaxed">
          Artphoria tidak hanya berfokus pada penyampaian materi psikologi teoretis. Berbagai bentuk kegiatan dirancang agar psikologi dapat disampaikan melalui cerita, pertunjukan panggung, karya visual, diskusi panel, aktivitas interaktif, maupun program psikoedukasi.
        </p>
      </section>

      {/* 2. Latar Belakang */}
      <section className="mt-10 space-y-4">
        <h2 className="text-lg font-semibold text-[#0F1533]">2. Latar Belakang</h2>
        <p className="text-xs text-[#504E72] sm:text-sm leading-relaxed">
          Psikologi merupakan ilmu yang sangat lekat dengan kehidupan manusia sehari-hari. Mulai dari cara seseorang berpikir, merasakan emosi, mengambil keputusan, menjalin hubungan dengan sesama, hingga berproses saat menghadapi peristiwa hidup. Namun, pembahasan psikologi kerap kali disajikan dalam format yang sangat akademis dan formal, sehingga belum tentu terasa dekat bagi publik.
        </p>
        <p className="text-xs text-[#504E72] sm:text-sm leading-relaxed">
          Di sisi lain, seni memiliki kekuatan sebagai media penyampaian pengalaman manusia yang luwes dan mudah diterima. Lewat alur cerita, lantunan musik, akting panggung, dan eksplorasi visual, seseorang diajak melihat suatu persoalan batin dari sudut pandang yang lebih kaya dan berempati. Artphoria hadir untuk mempertemukan kedua dunia ini dalam harmoni edukatif.
        </p>
      </section>

      {/* 3. Tema & Makna */}
      <section className="mt-10 rounded border border-[#E2E0EC] bg-[#F6F5FA] p-6 sm:p-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#58428B]">
          Tema Resmi
        </span>
        <h2 className="mt-1 text-xl font-semibold text-[#0F1533]">
          &ldquo;Echoes of the Mind&rdquo;
        </h2>
        <p className="mt-3 text-xs text-[#504E72] sm:text-sm leading-relaxed">
          Tema ini menggambarkan jejak pengalaman hidup yang pernah dialami seseorang dan meninggalkan &ldquo;gema&rdquo; di dalam pikiran maupun perasaannya.
        </p>
        <p className="mt-2 text-xs text-[#504E72] sm:text-sm leading-relaxed">
          Gema tersebut hadir dalam beragam wujud: kenangan masa lalu, pengalaman yang membekas, emosi yang belum sempat tersampaikan, pergulatan overthinking, proses berdamai dengan diri sendiri maupun orang lain, serta harapan yang terus diperjuangkan.
        </p>
        <p className="mt-3 text-xs font-medium text-[#0F1533]">
          Melalui tema ini, Artphoria menegaskan bahwa setiap pikiran dan perasaan memiliki ruang yang layak untuk didengarkan, dipahami, dan direfleksikan bersama.
        </p>
      </section>

      {/* 4. Visi dan Misi */}
      <section className="mt-10 space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-[#0F1533]">3. Visi</h2>
          <div className="mt-3 border-l-2 border-[#58428B] pl-4 py-1 bg-[#F6F5FA]">
            <p className="text-xs text-[#0F1533] sm:text-sm font-medium leading-relaxed">
              &ldquo;Menjadi festival kreatif berkelanjutan yang mengintegrasikan psikologi, seni, dan berbagai pendekatan inovatif untuk meningkatkan kesadaran serta kepedulian terhadap kesehatan mental.&rdquo;
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#0F1533]">4. Misi</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded border border-[#E2E0EC] bg-[#FBFBFE] p-4">
              <span className="text-xs font-semibold text-[#58428B]">Misi 01</span>
              <h3 className="mt-1 text-xs font-semibold text-[#0F1533] sm:text-sm">Edukasi yang Inklusif</h3>
              <p className="mt-1.5 text-xs text-[#504E72] leading-relaxed">
                Menghadirkan edukasi kesehatan mental melalui seni, media kreatif, dan berbagai kegiatan edukatif yang inklusif serta mudah diakses.
              </p>
            </div>

            <div className="rounded border border-[#E2E0EC] bg-[#FBFBFE] p-4">
              <span className="text-xs font-semibold text-[#58428B]">Misi 02</span>
              <h3 className="mt-1 text-xs font-semibold text-[#0F1533] sm:text-sm">Ruang Ekspresi & Empati</h3>
              <p className="mt-1.5 text-xs text-[#504E72] leading-relaxed">
                Menciptakan ruang ekspresi, apresiasi, dan refleksi untuk menumbuhkan pemahaman serta empati terhadap pengalaman psikologis manusia.
              </p>
            </div>

            <div className="rounded border border-[#E2E0EC] bg-[#FBFBFE] p-4">
              <span className="text-xs font-semibold text-[#58428B]">Misi 03</span>
              <h3 className="mt-1 text-xs font-semibold text-[#0F1533] sm:text-sm">Kolaborasi Lintas Bidang</h3>
              <p className="mt-1.5 text-xs text-[#504E72] leading-relaxed">
                Membangun kolaborasi lintas bidang, komunitas, dan institusi untuk memperluas jangkauan kampanye kesehatan mental di masyarakat.
              </p>
            </div>

            <div className="rounded border border-[#E2E0EC] bg-[#FBFBFE] p-4">
              <span className="text-xs font-semibold text-[#58428B]">Misi 04</span>
              <h3 className="mt-1 text-xs font-semibold text-[#0F1533] sm:text-sm">Tumbuh Berkelanjutan</h3>
              <p className="mt-1.5 text-xs text-[#504E72] leading-relaxed">
                Mengembangkan Artphoria sebagai festival yang adaptif dan inovatif melalui pengembangan program, kemitraan, serta regenerasi yang berkelanjutan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Empat Pilar Konsep */}
      <section className="mt-10 border-t border-[#E2E0EC] pt-8">
        <h2 className="text-lg font-semibold text-[#0F1533]">5. Empat Pilar Konsep Artphoria</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-4">
          <div className="border-l-2 border-[#58428B] pl-3 py-1">
            <h3 className="text-xs font-semibold text-[#0F1533]">Edukasi</h3>
            <p className="mt-1 text-xs text-[#504E72]">Pengetahuan psikologi dengan bahasa sederhana dan relevan.</p>
          </div>
          <div className="border-l-2 border-[#58428B] pl-3 py-1">
            <h3 className="text-xs font-semibold text-[#0F1533]">Seni</h3>
            <p className="mt-1 text-xs text-[#504E72]">Media ekspresi lewat teater musikal, musik, dan karya visual.</p>
          </div>
          <div className="border-l-2 border-[#58428B] pl-3 py-1">
            <h3 className="text-xs font-semibold text-[#0F1533]">Hiburan</h3>
            <p className="mt-1 text-xs text-[#504E72]">Pengalaman festival yang berkesan dan menyenangkan.</p>
          </div>
          <div className="border-l-2 border-[#58428B] pl-3 py-1">
            <h3 className="text-xs font-semibold text-[#0F1533]">Interaksi</h3>
            <p className="mt-1 text-xs text-[#504E72]">Aktivitas langsung yang melibatkan audiens dalam refleksi.</p>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between pt-4 border-t border-[#E2E0EC] text-xs">
          <Link href="/" className="text-[#504E72] hover:text-[#0F1533] transition-colors">
            ← Kembali ke Beranda
          </Link>
          <Link href="/kegiatan" className="font-semibold text-[#58428B] underline underline-offset-4 hover:text-[#483572] transition-colors">
            Lihat Rangkaian Kegiatan ↗
          </Link>
        </div>
      </section>
    </div>
  );
}

