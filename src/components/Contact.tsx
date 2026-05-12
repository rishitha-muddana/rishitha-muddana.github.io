import { motion } from 'framer-motion'
import { Linkedin, Github, Mail } from 'lucide-react'
import { siteConfig } from '../data/config'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { type: 'spring' as const, stiffness: 240, damping: 26 },
}

const linkCardStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 20,
  padding: '28px 32px',
  background: '#fff',
  borderRadius: 14,
  textDecoration: 'none',
  boxShadow: '0 1px 4px rgba(15,31,61,0.06), 0 4px 16px rgba(15,31,61,0.04)',
  transition: 'transform 0.2s, box-shadow 0.2s',
}

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '100px 0', background: '#FAFAF8' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>

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
          Let's connect
        </motion.h2>

        <motion.p {...fadeUp} style={{ fontSize: '1.05rem', color: '#1E3A5F', marginBottom: 56, maxWidth: 520 }}>
          Whether it's a collaboration, a question, or just a conversation about financial systems and
          engineering — reach out on LinkedIn or drop me an email.
        </motion.p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 560 }}>

          <motion.a
            {...fadeUp}
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...linkCardStyle, borderLeft: '3px solid #0077B5' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px rgba(15,31,61,0.10)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = ''; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 1px 4px rgba(15,31,61,0.06), 0 4px 16px rgba(15,31,61,0.04)' }}
          >
            <div style={{
              width: 48, height: 48, borderRadius: 12, flexShrink: 0,
              background: 'rgba(0,119,181,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Linkedin size={22} color="#0077B5" />
            </div>
            <div>
              <div style={{ fontWeight: 600, color: '#0F1F3D', fontSize: '1rem', marginBottom: 3 }}>LinkedIn</div>
              <div style={{ fontSize: '0.875rem', color: '#6B7280' }}>linkedin.com/in/rishitha-muddana</div>
            </div>
          </motion.a>

          <motion.a
            {...fadeUp}
            href={`mailto:${siteConfig.email}`}
            style={{ ...linkCardStyle, borderLeft: '3px solid #C9963A' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px rgba(15,31,61,0.10)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = ''; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 1px 4px rgba(15,31,61,0.06), 0 4px 16px rgba(15,31,61,0.04)' }}
          >
            <div style={{
              width: 48, height: 48, borderRadius: 12, flexShrink: 0,
              background: 'rgba(201,150,58,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Mail size={22} color="#C9963A" />
            </div>
            <div>
              <div style={{ fontWeight: 600, color: '#0F1F3D', fontSize: '1rem', marginBottom: 3 }}>Email</div>
              <div style={{ fontSize: '0.875rem', color: '#6B7280' }}>{siteConfig.email}</div>
            </div>
          </motion.a>

          <motion.a
            {...fadeUp}
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...linkCardStyle, borderLeft: '3px solid #0F1F3D' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px rgba(15,31,61,0.10)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = ''; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 1px 4px rgba(15,31,61,0.06), 0 4px 16px rgba(15,31,61,0.04)' }}
          >
            <div style={{
              width: 48, height: 48, borderRadius: 12, flexShrink: 0,
              background: 'rgba(15,31,61,0.06)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Github size={22} color="#0F1F3D" />
            </div>
            <div>
              <div style={{ fontWeight: 600, color: '#0F1F3D', fontSize: '1rem', marginBottom: 3 }}>GitHub</div>
              <div style={{ fontSize: '0.875rem', color: '#6B7280' }}>github.com/rishitha-muddana</div>
            </div>
          </motion.a>

        </div>
      </div>
    </section>
  )
}
