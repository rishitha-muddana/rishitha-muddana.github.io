import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { type: 'spring' as const, stiffness: 240, damping: 26 },
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '100px 0', background: '#F5F3EF' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        <motion.div {...fadeUp} style={{ marginBottom: 16 }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9963A' }}>
            Projects
          </span>
        </motion.div>

        <motion.h2 {...fadeUp} style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
          fontWeight: 700, color: '#0F1F3D',
          margin: '0 0 56px', lineHeight: 1.1,
        }}>
          Selected work
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr))', gap: 24 }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ type: 'spring', stiffness: 240, damping: 26, delay: i * 0.06 }}
              style={{
                background: '#fff',
                borderRadius: 14,
                overflow: 'hidden',
                boxShadow: '0 1px 4px rgba(15,31,61,0.06), 0 4px 16px rgba(15,31,61,0.04)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Top accent bar */}
              <div style={{ height: 3, background: 'linear-gradient(90deg, #C9963A 0%, #E8C870 100%)' }} />

              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                  <h3 style={{
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                    fontSize: '1.35rem', fontWeight: 700,
                    color: '#0F1F3D', margin: 0,
                  }}>
                    {project.name}
                  </h3>
                  <div style={{ display: 'flex', gap: 8, flexShrink: 0, marginLeft: 12 }}>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        style={{ color: '#6B7280', transition: 'color 0.2s' }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#0F1F3D')}
                        onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                        style={{ color: '#6B7280', transition: 'color 0.2s' }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#C9963A')}
                        onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p style={{ fontSize: '0.9rem', color: '#C9963A', fontWeight: 500, margin: '0 0 12px' }}>
                  {project.description}
                </p>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: '#1E3A5F', margin: '0 0 20px', flex: 1 }}>
                  {project.detail}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {project.stack.map(tag => (
                    <span key={tag} style={{
                      fontFamily: 'JetBrains Mono, Courier New, monospace',
                      fontSize: '0.73rem',
                      padding: '3px 8px', borderRadius: 4,
                      background: 'rgba(15,31,61,0.05)',
                      color: '#1E3A5F',
                      border: '1px solid rgba(15,31,61,0.08)',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
