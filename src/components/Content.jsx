import { Share2 } from 'lucide-react'

export default function Content() {
  const posts = [
    {
      id: 1,
      title: 'Transparansi Anggaran dan Laporan Realisasi Dana Desa',
      excerpt:
        'Ringkasan realisasi penggunaan dana desa triwulan terbaru yang berfokus pada infrastruktur dasar, pemberdayaan UMKM, dan layanan sosial.',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
      date: '9 Nov 2025',
      labels: ['Transparansi', 'Dana Desa'],
    },
    {
      id: 2,
      title: 'Program Air Bersih: Pemasangan Pipa Distribusi Tahap II',
      excerpt:
        'Update pembangunan jaringan pipa air bersih untuk meningkatkan akses air minum layak bagi warga.',
      image:
        'https://images.unsplash.com/photo-1543248939-ff40856f65d4?q=80&w=1200&auto=format&fit=crop',
      date: '6 Nov 2025',
      labels: ['Pembangunan', 'Kesehatan'],
    },
  ]

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 py-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          {posts.map((post) => (
            <article key={post.id} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
              <img src={post.image} alt="" className="h-56 w-full object-cover" />
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-3 text-xs text-emerald-700 dark:text-emerald-300">
                  <time className="font-medium" dateTime="2025-11-09">{post.date}</time>
                  <span>•</span>
                  {post.labels.map((l) => (
                    <span key={l} className="rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:ring-emerald-800/60">#{l}</span>
                  ))}
                </div>
                <h2 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white">{post.title}</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <a href="#" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 dark:text-emerald-300 dark:hover:text-emerald-200">Baca selengkapnya →</a>
                  <div className="flex items-center gap-2">
                    {['Facebook', 'X', 'WhatsApp'].map((n) => (
                      <button key={n} aria-label={`Bagikan ke ${n}`} className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2 py-1 text-xs text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
                        <Share2 size={14} />
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="space-y-4">
          {/* Widgets area */}
          
        </div>
      </div>
    </main>
  )
}
