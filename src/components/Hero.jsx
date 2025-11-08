import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-white/90 dark:to-gray-950/95" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-emerald-600/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-200 ring-1 ring-inset ring-emerald-400/40 backdrop-blur">
            Resmi • Kedungdung
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Pendamping Desa Kedungdung – Building from the Village for a Progressive Indonesia.
          </h1>
          <p className="mt-4 text-base text-emerald-50/90 md:text-lg">
            Informasi, berita, dan program pembangunan desa dalam satu tempat yang modern dan profesional.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#news" className="inline-flex items-center rounded-md bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
              Lihat Berita
            </a>
            <a href="#profile" className="inline-flex items-center rounded-md bg-white/90 px-5 py-2.5 text-sm font-semibold text-emerald-700 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
              Tentang Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
