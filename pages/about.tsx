import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
      <Header />
      <main className="container py-8">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="mt-4 text-slate-600">A short bio goes here.</p>
      </main>
      <Footer />
    </div>
  );
}
