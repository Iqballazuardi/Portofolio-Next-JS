import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    // Simulate sending
    setTimeout(() => setSent(true), 400);
  }

  return (
    <div>
      <Header />
      <main className="container py-8">
        <h2 className="text-2xl font-bold">Contact</h2>

        {!sent ? (
          <form onSubmit={submit} className="mt-4 grid gap-3 max-w-xl">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="border p-2 rounded" required />
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" type="email" className="border p-2 rounded" required />
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" className="border p-2 rounded h-32" required />
            <div>
              <button type="submit" className="btn">
                Send message
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-4 card">
            <h3 className="text-lg font-semibold">Thanks — I got your message!</h3>
            <p className="mt-2 muted">I'll get back to you at the email you provided.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
