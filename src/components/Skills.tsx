import { motion } from 'framer-motion'
import { skillCategories } from '../data/skills'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { type: 'spring' as const, stiffness: 240, damping: 26 },
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '100px 0', background: '#F5F3EF' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        <motion.div {...fadeUp} style={{ marginBottom: 16 }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9963A' }}>
            Skills
          </span>
        </motion.div>

        <motion.h2 {...fadeUp} style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
          fontWeight: 700, color: '#0F1F3D',
          margin: '0 0 56px', lineHeight: 1.1,
        }}>
          The full stack of financial engineering
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 20,
        }}>
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ type: 'spring', stiffness: 240, damping: 26, delay: i * 0.05 }}
                style={{
                  background: '#fff',
                  borderRadius: 12,
                  padding: '24px',
                  borderLeft: '3px solid #C9963A',
                  boxShadow: '0 1px 4px rgba(15,31,61,0.06), 0 4px 16px rgba(15,31,61,0.04)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: 'rgba(201,150,58,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#C9963A', flexShrink: 0,
                  }}>
                    <Icon size={18} />
                  </div>
                  <h3 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 600, color: '#0F1F3D' }}>
                    {cat.title}
                  </h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {cat.skills.map(skill => (
                    <span
                      key={skill}
                      style={{
                        fontFamily: 'JetBrains Mono, Courier New, monospace',
                        fontSize: '0.75rem',
                        padding: '4px 10px',
                        borderRadius: 4,
                        background: 'rgba(15,31,61,0.05)',
                        color: '#1E3A5F',
                        border: '1px solid rgba(15,31,61,0.08)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
