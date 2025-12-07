import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

type Project = { title: string; description: string; details: string };

export default function Projects() {
  const sample: Project[] = [
    { title: 'Project A', description: 'A cool project', details: 'Detailed info about Project A.' },
    { title: 'Project B', description: 'Another project', details: 'Detailed info about Project B.' },
  ];

  const [active, setActive] = useState<Project | null>(null);

  return (
    <div>
      <Header />
      <main className="container py-8">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {sample.map((p) => (
            <ProjectCard key={p.title} title={p.title} description={p.description} onOpen={() => setActive(p)} />
          ))}
        </div>

        {/* Modal */}
        {active && (
          <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50" onClick={() => setActive(null)}>
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 max-w-xl mx-4" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-xl font-semibold">{active.title}</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{active.details}</p>
              <div className="mt-4 flex justify-end">
                <button className="btn" onClick={() => setActive(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
