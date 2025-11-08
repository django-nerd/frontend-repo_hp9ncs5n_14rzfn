export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h4 className="text-base font-semibold text-gray-900 dark:text-white">About Us</h4>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              Pendamping Desa Kedungdung berkomitmen mendukung pembangunan desa yang transparan, partisipatif, dan berkelanjutan.
            </p>
          </div>
          <div>
            <h4 className="text-base font-semibold text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                ['Beranda', '#home'],
                ['Profil', '#profile'],
                ['Berita Desa', '#news'],
                ['Data Desa', '#data'],
                ['Regulasi', '#regulations'],
                ['Galeri', '#gallery'],
                ['Kontak', '#contact'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-gray-600 hover:text-emerald-700 dark:text-gray-400 dark:hover:text-emerald-300">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold text-gray-900 dark:text-white">Contact & Social Media</h4>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">Email: info@kedungdung.desa.id</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Telp: (032) 123 456</p>
            <div className="mt-4 flex gap-3">
              <a href="#" className="text-sm text-emerald-700 hover:underline dark:text-emerald-300">Facebook</a>
              <a href="#" className="text-sm text-emerald-700 hover:underline dark:text-emerald-300">Instagram</a>
              <a href="#" className="text-sm text-emerald-700 hover:underline dark:text-emerald-300">YouTube</a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-xs text-gray-500 dark:border-gray-800 dark:text-gray-400">
          © {new Date().getFullYear()} Pendamping Desa Kedungdung. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
