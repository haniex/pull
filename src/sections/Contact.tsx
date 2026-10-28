import { useState, type FormEvent, type ChangeEvent } from 'react';
import { z } from 'zod';
import { ContactScene } from '../components/ContactScene';
import './Contact.css';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  projectType: z.string().min(1, 'Select a project type'),
  budget: z.string().optional(),
  message: z.string().min(10, 'Message should be at least 10 characters'),
});

type FormData = z.infer<typeof schema>;
type FieldErrors = Partial<Record<keyof FormData, string>>;

const projectTypes = [
  'Digital Design',
  'Web Design & Development',
  'Brand Identity',
  '3D / CGI',
  'Motion',
  'Other',
];

export function Contact() {
  const [values, setValues] = useState<FormData>({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((err) => ({ ...err, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      result.error.errors.forEach((err) => {
        const key = err.path[0] as keyof FormData;
        fieldErrors[key] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;
    if (!endpoint) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: result.data.name,
          email: result.data.email,
          projectType: result.data.projectType,
          budget: result.data.budget || '',
          message: result.data.message,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setValues({ name: '', email: '', projectType: '', budget: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__info">
            <p className="section-eyebrow">Contact</p>
            <h2 id="contact-title" className="section-title">
              Have an idea?<br />Let&apos;s make it real.
            </h2>
            <p className="contact__lead">
              Tell us about the world you want to build. We typically respond
              within a few days.
            </p>
            <div className="contact__visual">
              <ContactScene />
            </div>
            <div className="contact__links">
              <a href="mailto:hello@obscura.studio">hello@obscura.studio</a>
              <p className="contact__social-note">
                Social profiles can be added when accounts are configured.
              </p>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <span id="name-error" className="form-error" role="alert">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <span id="email-error" className="form-error" role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="projectType">Project type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={values.projectType}
                  onChange={handleChange}
                  aria-invalid={!!errors.projectType}
                >
                  <option value="">Select…</option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                {errors.projectType && (
                  <span className="form-error" role="alert">
                    {errors.projectType}
                  </span>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="budget">
                  Budget <span className="optional">(optional)</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={values.budget}
                  onChange={handleChange}
                >
                  <option value="">Prefer not to say</option>
                  <option value="<10k">Under $10k</option>
                  <option value="10-25k">$10k – $25k</option>
                  <option value="25-50k">$25k – $50k</option>
                  <option value="50k+">$50k+</option>
                </select>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <span id="message-error" className="form-error" role="alert">
                  {errors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="btn btn--primary contact__submit"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'error' && (
              <p className="form-status form-status--error" role="status">
                {import.meta.env.VITE_FORMSPREE_ENDPOINT
                  ? 'Could not send the message. Please try again or email hello@obscura.studio.'
                  : 'Form is not connected yet. Set VITE_FORMSPREE_ENDPOINT (Formspree) to enable delivery. Validation works.'}
              </p>
            )}
            {status === 'success' && (
              <p className="form-status form-status--success" role="status">
                Message sent. We will get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
