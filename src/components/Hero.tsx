import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ArrowDown } from 'lucide-react'
import { openToWork, targetingLabel, siteConfig } from '../data/config'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { type: 'spring' as const, stiffness: 260, damping: 28, delay },
})

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: '#FAFAF8',
        paddingTop: 80,
      }}
    >
      {/* Dot grid background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(201,150,58,0.10) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px', width: '100%', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>

          {/* Text side */}
          <div>
            {openToWork && (
              <motion.div {...fadeUp(0.0)} style={{ marginBottom: 20 }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'rgba(22,163,74,0.08)', border: '1px solid rgba(22,163,74,0.2)',
                  borderRadius: 999, padding: '6px 14px',
                  fontSize: '0.8rem', fontWeight: 500, color: '#15803d',
                }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#16a34a', display: 'inline-block' }} />
                  Available for new opportunities
                </span>
                <div style={{ marginTop: 6, fontSize: '0.75rem', color: '#6B7280', fontWeight: 500 }}>
                  {targetingLabel}
                </div>
              </motion.div>
            )}

            <motion.h1 {...fadeUp(0.08)} style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 'clamp(3.2rem, 7vw, 6.5rem)',
              fontWeight: 700,
              color: '#0F1F3D',
              margin: '0 0 12px',
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
            }}>
              {siteConfig.name}
            </motion.h1>

            <motion.p {...fadeUp(0.14)} style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              color: '#C9963A',
              margin: '0 0 20px',
              letterSpacing: '0.02em',
            }}>
              Software Engineer · Fintech & Compliance Systems
            </motion.p>

            <motion.p {...fadeUp(0.2)} style={{
              fontSize: '1.1rem',
              lineHeight: 1.7,
              color: '#1E3A5F',
              margin: '0 0 36px',
              maxWidth: 520,
            }}>
              I build the financial infrastructure that processes millions of transactions daily —
              where precision isn't optional and every system must earn its trust.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.26)} style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 32 }}>
              <button
                onClick={() => scrollTo('#projects')}
                style={{
                  padding: '12px 24px', borderRadius: 8,
                  background: '#0F1F3D', color: '#fff',
                  border: 'none', cursor: 'pointer',
                  fontSize: '0.9rem', fontWeight: 600,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 24px rgba(15,31,61,0.18)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = ''; (e.currentTarget as HTMLButtonElement).style.boxShadow = '' }}
              >
                View My Work
              </button>
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '12px 24px', borderRadius: 8,
                  background: 'transparent', color: '#C9963A',
                  border: '1.5px solid #C9963A',
                  fontSize: '0.9rem', fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'background 0.2s, color 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#C9963A'; (e.currentTarget as HTMLAnchorElement).style.color = '#fff' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = '#C9963A' }}
              >
                Download CV
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                style={{
                  padding: '12px 24px', borderRadius: 8,
                  background: 'transparent', color: '#6B7280',
                  border: '1.5px solid #E8E4DC',
                  fontSize: '0.9rem', fontWeight: 600,
                  textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#0F1F3D'; (e.currentTarget as HTMLAnchorElement).style.color = '#0F1F3D' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#E8E4DC'; (e.currentTarget as HTMLAnchorElement).style.color = '#6B7280' }}
              >
                <Mail size={15} />
                Get in touch
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div {...fadeUp(0.32)} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#0077B5', fontSize: '0.85rem', fontWeight: 500, textDecoration: 'none' }}>
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#0F1F3D', fontSize: '0.85rem', fontWeight: 500, textDecoration: 'none' }}>
                <Github size={18} />
                GitHub
              </a>
              <span style={{ color: '#E8E4DC', fontSize: '0.85rem' }}>·</span>
              <span style={{ color: '#6B7280', fontSize: '0.85rem' }}>{siteConfig.location}</span>
            </motion.div>
          </div>

          {/* Avatar / photo side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 28, delay: 0.1 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative' }}>
              {/* Warm glow */}
              <div style={{
                position: 'absolute', inset: -24,
                background: 'radial-gradient(ellipse at 50% 50%, rgba(201,150,58,0.12) 0%, transparent 70%)',
                borderRadius: '50%',
                zIndex: 0,
              }} />
              {/* Avatar placeholder — replace src with your photo */}
              <div style={{
                width: 280, height: 373,
                borderRadius: 16,
                background: 'linear-gradient(145deg, #E8E4DC 0%, #D4CFC5 100%)',
                border: '2px solid rgba(201,150,58,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 1,
                boxShadow: '0 20px 60px rgba(15,31,61,0.12)',
                overflow: 'hidden',
              }}>
                <span style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: '5rem',
                  fontWeight: 700,
                  color: 'rgba(15,31,61,0.25)',
                  letterSpacing: '-0.02em',
                }}>
                  RM
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            position: 'absolute',
            bottom: 24,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 6,
            cursor: 'pointer',
          }}
          onClick={() => scrollTo('#about')}
        >
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6B7280' }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} color="#C9963A" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
