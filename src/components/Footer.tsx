import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="border-t border-[#E2E0EC] bg-[#F6F5FA] text-[#0F1533]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Kolom 1: Identitas */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-artphoria.jpg"
                alt="Logo Artphoria"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="text-lg font-semibold tracking-tight text-[#0F1533]">Artphoria</span>
            </div>
            <p className="mt-3 text-xs italic text-[#504E72] max-w-sm">
              &ldquo;Every Mind Has a Story. Every Echo Deserves to Be Heard.&rdquo;
            </p>
            <p className="mt-3 text-xs text-[#504E72] max-w-md leading-relaxed">
              Sebuah festival psikologi yang memadukan edukasi, seni, hiburan, dan interaksi. Kolaborasi antara KemapsiBaraya (Fakultas Psikologi Unisba) dan Kabaretungu Unisba (KBU).
            </p>
          </div>

          {/* Kolom 2: Halaman Navigasi */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#0F1533]">Navigasi</h2>
            <ul className="mt-3 space-y-2 text-xs text-[#504E72]">
              <li>
                <Link href="/" className="hover:text-[#58428B] transition-colors">Beranda</Link>
              </li>
              <li>
                <Link href="/tentang" className="hover:text-[#58428B] transition-colors">Tentang Artphoria</Link>
              </li>
              <li>
                <Link href="/kegiatan" className="hover:text-[#58428B] transition-colors">Kegiatan & Main Event</Link>
              </li>
              <li>
                <Link href="/timeline" className="hover:text-[#58428B] transition-colors">Peta & Timeline</Link>
              </li>
              <li>
                <Link href="/partnership" className="hover:text-[#58428B] transition-colors">Partnership</Link>
              </li>
              <li>
                <Link href="/galeri" className="hover:text-[#58428B] transition-colors">Galeri & Dokumentasi</Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-[#58428B] transition-colors">Kontak & FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kanal Resmi */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#0F1533]">Kanal Informasi</h2>
            <p className="mt-3 text-xs text-[#504E72] leading-relaxed">
              Ikuti publikasi resmi untuk pembaruan jadwal, pendaftaran kompetisi, dan pengumuman acara.
            </p>
            <div className="mt-4 flex flex-col gap-2 text-xs font-medium text-[#58428B]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:underline underline-offset-4"
              >
                Instagram Resmi ↗
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="hover:underline underline-offset-4"
              >
                TikTok Resmi ↗
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#E2E0EC] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#504E72]">
          <p>© 2026 Artphoria · Festival Psikologi & Seni.</p>
          <p>Tema: Echoes of the Mind</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

