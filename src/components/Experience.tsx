import { motion } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'
import ScrollStack, { ScrollStackItem } from './ScrollStack'
import { experience } from '../data/experience'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { type: 'spring' as const, stiffness: 240, damping: 26 },
}

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '100px 0', background: '#FAFAF8' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        <motion.div {...fadeUp} style={{ marginBottom: 16 }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9963A' }}>
            Experience
          </span>
        </motion.div>

        <motion.h2 {...fadeUp} style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
          fontWeight: 700, color: '#0F1F3D',
          margin: '0 0 56px', lineHeight: 1.1,
        }}>
          Career timeline
        </motion.h2>

        <ScrollStack
          useWindowScroll
          className="window-mode"
          itemDistance={220}
          itemScale={0.02}
          itemStackDistance={22}
          stackPosition="20%"
          scaleEndPosition="13%"
          baseScale={0.93}
        >
          {experience.map(role => (
            <ScrollStackItem key={role.company + role.period}>
              <div style={{
                background: '#ffffff',
                borderRadius: 16,
                marginBottom: 24,
                overflow: 'hidden',
                borderLeft: `3px solid ${role.accentColor}`,
                boxShadow: '0 2px 8px rgba(15,31,61,0.06), 0 8px 32px rgba(15,31,61,0.06)',
              }}>
                {/* Card header */}
                <div style={{
                  padding: '24px 28px 20px',
                  background: `rgba(${hexToRgb(role.accentColor)},0.04)`,
                  borderBottom: `1px solid rgba(${hexToRgb(role.accentColor)},0.12)`,
                }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                    <div>
                      <h3 style={{
                        fontFamily: 'Cormorant Garamond, Georgia, serif',
                        fontSize: '1.5rem', fontWeight: 700,
                        color: '#0F1F3D', margin: '0 0 4px',
                      }}>
                        {role.title}
                      </h3>
                      <div style={{ fontSize: '1rem', fontWeight: 600, color: role.accentColor }}>
                        {role.company}
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.82rem', color: '#6B7280' }}>
                        <Calendar size={13} />
                        {role.period}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.82rem', color: '#6B7280' }}>
                        <MapPin size={13} />
                        {role.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div style={{ padding: '24px 28px' }}>
                  <ul style={{ margin: '0 0 24px', padding: '0 0 0 16px', listStyle: 'none' }}>
                    {role.bullets.map((b, i) => (
                      <li key={i} style={{
                        position: 'relative',
                        paddingLeft: 16,
                        marginBottom: 12,
                        fontSize: '0.95rem',
                        lineHeight: 1.7,
                        color: '#1E3A5F',
                      }}>
                        <span style={{
                          position: 'absolute', left: 0, top: '0.65em',
                          width: 5, height: 5, borderRadius: '50%',
                          background: role.accentColor,
                        }} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Stack tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {role.stack.map(tag => (
                      <span key={tag} style={{
                        fontFamily: 'JetBrains Mono, Courier New, monospace',
                        fontSize: '0.73rem',
                        padding: '3px 8px',
                        borderRadius: 4,
                        background: 'transparent',
                        color: '#1E3A5F',
                        border: '1px solid #E8E4DC',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  )
}

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return '15,31,61'
  return `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`
}
