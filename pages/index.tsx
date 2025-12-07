import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container">
        <section className="py-16 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase muted">Hi, my name is</p>
            <h2 className="text-4xl md:text-5xl font-extrabold hero-animate">Iqbal Lazuardi</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">Junior Programmer with experience converting business needs into clean, maintainable code. I enjoy building useful products and learning new technologies.</p>

            <div className="mt-6 flex items-center gap-3">
              <Link href="/projects" className="btn">
                See projects
              </Link>
              <a href="/contact" className="text-sm muted hover:underline">
                Get in touch
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="card">
              <h3 className="text-lg font-semibold">About my journey</h3>
              <p className="mt-3 muted">I started from vocational school (TITL) and learned programming through self-study and internal company training. I'm focused on building reliable, well-tested applications.</p>
            </div>
          </div>
        </section>

        <section className="py-8">
          <h3 className="text-2xl font-bold">Featured Projects</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="card">Project A — A short preview</div>
            <div className="card">Project B — A short preview</div>
          </div>
          <div className="mt-4">
            <Link href="/projects" className="text-sm muted hover:underline">
              View all projects →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
