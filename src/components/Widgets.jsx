import { Facebook, Instagram, Youtube, Calendar, MapPin, Search } from 'lucide-react'

function WidgetContainer({ title, children }) {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">{title}</h3>
      <div>{children}</div>
    </section>
  )
}

export default function Widgets() {
  return (
    <aside className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <WidgetContainer title="Profile">
        <div className="flex items-center gap-3">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" alt="Profile" className="h-14 w-14 rounded-md object-cover" />
          <div>
            <p className="font-semibold text-gray-900 dark:text-gray-100">Pendamping Desa Kedungdung</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Mendampingi perencanaan, pelaksanaan, dan evaluasi pembangunan desa.</p>
          </div>
        </div>
      </WidgetContainer>

      <WidgetContainer title="Search">
        <div className="relative">
          <input type="text" placeholder="Cari berita, data, atau dokumen..." className="w-full rounded-md border border-gray-300 px-4 py-2 pr-10 text-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100" />
          <Search className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        </div>
      </WidgetContainer>

      <WidgetContainer title="Latest News">
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
            <a href="#news" className="text-gray-700 hover:text-emerald-700 dark:text-gray-300 dark:hover:text-emerald-400">Program Peningkatan Infrastruktur Desa</a>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
            <a href="#news" className="text-gray-700 hover:text-emerald-700 dark:text-gray-300 dark:hover:text-emerald-400">Pelatihan UMKM dan Digitalisasi</a>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
            <a href="#news" className="text-gray-700 hover:text-emerald-700 dark:text-gray-300 dark:hover:text-emerald-400">Transparansi Dana Desa Semester Ini</a>
          </li>
        </ul>
      </WidgetContainer>

      <WidgetContainer title="Categories">
        <div className="flex flex-wrap gap-2">
          {['Pembangunan', 'Kesehatan', 'Pendidikan', 'UMKM', 'Regulasi', 'Kegiatan'].map((label) => (
            <a key={label} href="#" className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 hover:bg-emerald-100 dark:border-emerald-900/50 dark:bg-emerald-900/20 dark:text-emerald-300">
              #{label}
            </a>
          ))}
        </div>
      </WidgetContainer>

      <WidgetContainer title="Archive">
        <ul className="text-sm text-gray-700 dark:text-gray-300">
          {['2025', '2024', '2023', '2022'].map((y) => (
            <li key={y} className="py-1"><a href="#">{y}</a></li>
          ))}
        </ul>
      </WidgetContainer>

      <WidgetContainer title="Social Media">
        <div className="flex gap-3">
          <a href="#" aria-label="Facebook" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 text-white hover:opacity-90"><Facebook size={18} /></a>
          <a href="#" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-tr from-purple-600 via-pink-600 to-yellow-400 text-white hover:opacity-90"><Instagram size={18} /></a>
          <a href="#" aria-label="YouTube" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-red-600 text-white hover:opacity-90"><Youtube size={18} /></a>
        </div>
      </WidgetContainer>

      <WidgetContainer title="Location">
        <div className="aspect-video w-full overflow-hidden rounded-md">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.0668376807215!2d112.745!3d-7.344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjAnMzguNCJTIDExMsKwNDQnNDIuMCJF!5e0!3m2!1sen!2sid!4v1610000000000!5m2!1sen!2sid"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </WidgetContainer>

      <WidgetContainer title="Upcoming Events">
        <ul className="space-y-3 text-sm">
          {[
            { date: '12 Nov', title: 'Musyawarah Desa Rencana Kerja 2026', place: 'Balai Desa' },
            { date: '20 Nov', title: 'Pelatihan Dasar Digital UMKM', place: 'Aula Kecamatan' },
            { date: '28 Nov', title: 'Gotong Royong Bersih Desa', place: 'Dusun Krajan' },
          ].map((ev) => (
            <li key={ev.title} className="flex items-start gap-3">
              <div className="flex h-10 w-12 flex-col items-center justify-center rounded-md bg-emerald-600 text-xs font-bold text-white">
                <Calendar size={14} />
                <span>{ev.date}</span>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">{ev.title}</p>
                <p className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400"><MapPin size={14} /> {ev.place}</p>
              </div>
            </li>
          ))}
        </ul>
      </WidgetContainer>
    </aside>
  )
}
