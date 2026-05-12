import { motion } from 'framer-motion'
import { Send, Linkedin, Github, CheckCircle, AlertCircle } from 'lucide-react'
import { siteConfig } from '../data/config'
import { useContactForm } from '../hooks/useContactForm'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { type: 'spring' as const, stiffness: 240, damping: 26 },
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  border: '1px solid #E8E4DC',
  borderRadius: 8,
  fontSize: '0.95rem',
  fontFamily: 'Inter, sans-serif',
  color: '#0F1F3D',
  background: '#FAFAF8',
  outline: 'none',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box',
}

export default function Contact() {
  const { form, status, handleChange, handleSubmit } = useContactForm()

  return (
    <section id="contact" style={{ padding: '100px 0', background: '#FAFAF8' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        <motion.div {...fadeUp} style={{ marginBottom: 16 }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9963A' }}>
            Contact
          </span>
        </motion.div>

        <motion.h2 {...fadeUp} style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
          fontWeight: 700, color: '#0F1F3D',
          margin: '0 0 16px', lineHeight: 1.1,
        }}>
          Let's build something together
        </motion.h2>

        <motion.p {...fadeUp} style={{ fontSize: '1.05rem', color: '#1E3A5F', marginBottom: 56, maxWidth: 540 }}>
          Open to roles in fintech, banking technology, and platform engineering.
          Reach out via the form or connect directly on LinkedIn.
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 48 }}>

          {/* Form */}
          <motion.div {...fadeUp}>
            {status === 'success' ? (
              <div style={{
                padding: '40px 32px',
                background: '#fff',
                borderRadius: 14,
                textAlign: 'center',
                boxShadow: '0 1px 4px rgba(15,31,61,0.06), 0 4px 16px rgba(15,31,61,0.04)',
              }}>
                <CheckCircle size={40} color="#16a34a" style={{ marginBottom: 16 }} />
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.4rem', fontWeight: 700, color: '#0F1F3D', marginBottom: 8 }}>
                  Message sent
                </h3>
                <p style={{ color: '#6B7280', fontSize: '0.95rem' }}>
                  Thanks for reaching out — I'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{
                background: '#fff',
                borderRadius: 14,
                padding: '32px',
                boxShadow: '0 1px 4px rgba(15,31,61,0.06), 0 4px 16px rgba(15,31,61,0.04)',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1E3A5F', display: 'block', marginBottom: 6 }}>Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = '#C9963A')}
                      onBlur={e => (e.currentTarget.style.borderColor = '#E8E4DC')}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1E3A5F', display: 'block', marginBottom: 6 }}>Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = '#C9963A')}
                      onBlur={e => (e.currentTarget.style.borderColor = '#E8E4DC')}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1E3A5F', display: 'block', marginBottom: 6 }}>Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={e => (e.currentTarget.style.borderColor = '#C9963A')}
                    onBlur={e => (e.currentTarget.style.borderColor = '#E8E4DC')}
                  />
                </div>

                {status === 'error' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#dc2626', fontSize: '0.88rem' }}>
                    <AlertCircle size={16} />
                    Something went wrong. Please try emailing me directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    padding: '13px 28px',
                    borderRadius: 8,
                    background: status === 'loading' ? '#6B7280' : '#0F1F3D',
                    color: '#fff',
                    border: 'none', cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                    fontSize: '0.9rem', fontWeight: 600,
                    transition: 'background 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={e => { if (status !== 'loading') (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = '' }}
                >
                  <Send size={16} />
                  {status === 'loading' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Link cards */}
          <motion.div {...fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 16,
                padding: '24px 28px',
                background: '#fff',
                borderRadius: 12,
                borderLeft: '3px solid #0077B5',
                textDecoration: 'none',
                boxShadow: '0 1px 4px rgba(15,31,61,0.06), 0 4px 16px rgba(15,31,61,0.04)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = '')}
            >
              <Linkedin size={24} color="#0077B5" />
              <div>
                <div style={{ fontWeight: 600, color: '#0F1F3D', marginBottom: 2 }}>LinkedIn</div>
                <div style={{ fontSize: '0.85rem', color: '#6B7280' }}>Connect professionally</div>
              </div>
            </a>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 16,
                padding: '24px 28px',
                background: '#fff',
                borderRadius: 12,
                borderLeft: '3px solid #0F1F3D',
                textDecoration: 'none',
                boxShadow: '0 1px 4px rgba(15,31,61,0.06), 0 4px 16px rgba(15,31,61,0.04)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = '')}
            >
              <Github size={24} color="#0F1F3D" />
              <div>
                <div style={{ fontWeight: 600, color: '#0F1F3D', marginBottom: 2 }}>GitHub</div>
                <div style={{ fontSize: '0.85rem', color: '#6B7280' }}>View open-source work</div>
              </div>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              style={{
                display: 'flex', alignItems: 'center', gap: 16,
                padding: '24px 28px',
                background: '#fff',
                borderRadius: 12,
                borderLeft: '3px solid #C9963A',
                textDecoration: 'none',
                boxShadow: '0 1px 4px rgba(15,31,61,0.06), 0 4px 16px rgba(15,31,61,0.04)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = '')}
            >
              <div style={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C9963A' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
              </div>
              <div>
                <div style={{ fontWeight: 600, color: '#0F1F3D', marginBottom: 2 }}>Email</div>
                <div style={{ fontSize: '0.85rem', color: '#6B7280' }}>{siteConfig.email}</div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
