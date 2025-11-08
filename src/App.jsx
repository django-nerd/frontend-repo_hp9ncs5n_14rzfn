import Header from './components/Header'
import Hero from './components/Hero'
import Content from './components/Content'
import Widgets from './components/Widgets'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
      <Header />
      <main>
        <Hero />
        <section id="profile" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 p-8 ring-1 ring-emerald-200 dark:from-emerald-900/20 dark:to-emerald-900/10 dark:ring-emerald-800/50">
            <h2 className="text-2xl font-semibold text-emerald-800 dark:text-emerald-300">Profil</h2>
            <p className="mt-2 max-w-3xl text-gray-700 dark:text-gray-300">
              Pendamping Desa Kedungdung bertugas untuk memperkuat kapasitas pemerintah desa dalam perencanaan, pelaksanaan, dan pengawasan pembangunan desa. Kami mendorong transparansi, partisipasi, dan inovasi untuk kesejahteraan masyarakat.
            </p>
          </div>
        </section>

        <div id="news">
          <Content />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
            <Widgets />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
