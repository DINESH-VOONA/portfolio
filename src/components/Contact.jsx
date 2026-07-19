import { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setFeedback('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/voonadinesh3@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'New portfolio contact message',
          _captcha: 'false',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFeedback('Thanks! Your message was sent successfully.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setFeedback('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setFeedback('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24" style={{ backgroundColor: 'rgb(13, 13, 13)' }}>
      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-12">
        <div className="mb-14 text-center">
          <h2 className="inline-flex items-center justify-center text-4xl font-bold sm:text-5xl">
            <span className="text-white">Get In</span>
            <span className="ml-2 text-red-500">Touch</span>
          </h2>
          <div className="mx-auto mt-3 h-1.5 w-24 rounded-full bg-red-500" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={handleSubmit} className="space-y-5 rounded-[24px] border border-red-500/10 bg-[rgb(26,26,26)] p-6 sm:p-8">
            <label className="block text-sm font-semibold text-white">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full rounded-xl border border-red-500/20 bg-[rgb(26,26,26)] px-3 py-3 text-sm text-white outline-none transition focus:border-red-500"
            />

            <label className="block text-sm font-semibold text-white">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              className="w-full rounded-xl border border-red-500/20 bg-[rgb(26,26,26)] px-3 py-3 text-sm text-white outline-none transition focus:border-red-500"
            />

            <label className="block text-sm font-semibold text-white">Message</label>
            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              required
              className="w-full rounded-xl border border-red-500/20 bg-[rgb(26,26,26)] px-4 py-4 text-sm text-white outline-none transition focus:border-red-500"
            />

            {feedback && (
              <p className={`text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {feedback}
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="mt-2 w-full rounded-xl bg-red-500 px-6 py-4 text-base font-semibold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-red-500/10 bg-[rgb(26,26,26)] p-6 shadow-[0_20px_40px_rgba(239,68,68,0.16)] sm:p-8">
              <h3 className="text-2xl font-semibold text-white">Contact Information</h3>
              <div className="mt-8 space-y-5">
                <div className="flex flex-col gap-3 rounded-3xl bg-[rgb(26,26,26)] sm:flex-row sm:items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-red-500 text-white">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="mt-1 text-sm font-medium text-white">voonadinesh3@gmail.com</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 rounded-3xl bg-[rgb(26,26,26)] sm:flex-row sm:items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-red-500 text-white">
                    <FaPhone className="text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="mt-1 text-sm font-medium text-white">+91 7337079603</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 rounded-3xl bg-[rgb(26,26,26)] sm:flex-row sm:items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-red-500 text-white">
                    <FaLinkedinIn className="text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <p className="mt-1 text-sm font-medium text-white">www.linkedin.com/in/dinesh-voona-582a8b1a5</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 rounded-3xl bg-[rgb(26,26,26)] sm:flex-row sm:items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-red-500 text-white">
                    <FaGithub className="text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <p className="mt-1 text-sm font-medium text-white">https://github.com/DINESH-VOONA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-red-500/10 bg-[rgb(26,26,26)] p-6 shadow-[0_20px_40px_rgba(239,68,68,0.16)] sm:p-8">
              <p className="text-sm leading-7 text-gray-300">
                I'm currently looking for new opportunities and would love to hear from you. Whether you have a question or just want to say hi, I'll do my best to get back to you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
