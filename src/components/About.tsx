import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { stats } from '../data/config'
import { useEffect, useState } from 'react'

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const isDecimal = value % 1 !== 0
    const duration = 1200
    const start = performance.now()
    const frame = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = isDecimal
        ? Math.round(eased * value * 10) / 10
        : Math.round(eased * value)
      setDisplay(current)
      if (progress < 1) requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  }, [inView, value])

  return (
    <div ref={ref} style={{
      flex: 1, minWidth: 140,
      borderTop: '2px solid #C9963A',
      paddingTop: 20, paddingBottom: 8,
    }}>
      <div style={{
        fontFamily: 'Cormorant Garamond, Georgia, serif',
        fontSize: '2.8rem',
        fontWeight: 700,
        color: '#0F1F3D',
        lineHeight: 1,
      }}>
        {display}{suffix}
      </div>
      <div style={{ fontSize: '0.82rem', color: '#6B7280', marginTop: 6, fontWeight: 500 }}>{label}</div>
    </div>
  )
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { type: 'spring' as const, stiffness: 240, damping: 26 },
}

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 0', background: '#FAFAF8' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        <motion.div {...fadeUp} style={{ marginBottom: 16 }}>
          <span style={{
            fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: '#C9963A',
          }}>About</span>
        </motion.div>

        <motion.h2 {...fadeUp} style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
          fontWeight: 700, color: '#0F1F3D',
          margin: '0 0 48px', lineHeight: 1.1,
        }}>
          Engineering systems where<br />precision is non-negotiable
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 64,
          alignItems: 'start',
        }}>
          {/* Bio text */}
          <motion.div {...fadeUp}>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#1E3A5F', marginBottom: 20 }}>
              I'm a software engineer who has spent the better part of a decade building
              the systems that financial institutions rely on — compliance platforms, fraud detection
              pipelines, real-time alerting infrastructure, and, increasingly, AI-powered automation.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#1E3A5F', marginBottom: 20 }}>
              At JP Morgan Chase and First Republic Bank, I worked inside the regulatory and compliance
              technology stacks that sit between raw transaction data and legal obligation. These systems
              don't get to have downtime or ambiguous results. They process millions of events daily,
              flag fraud in under a second, and must produce audit trails that satisfy federal examiners.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#1E3A5F', marginBottom: 20 }}>
              My stack spans Python, Java, Spark, Kafka, and the major cloud platforms —
              but the more interesting part is the judgment that comes with knowing when to
              use each piece of that toolbox. I've migrated legacy platforms, designed multi-cloud
              ingestion architectures, and shipped AI systems that financial operations teams
              actually trust to make decisions.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#1E3A5F' }}>
              Currently I'm building AI automation for document and invoice workflows at Archkey
              in San Francisco — bringing the same rigor from regulated financial systems to
              the messy, human-driven world of procurement and accounts payable.
            </p>
          </motion.div>

          {/* Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <motion.div
              {...fadeUp}
              style={{
                background: '#fff',
                borderRadius: 12,
                padding: '24px 28px',
                borderLeft: '3px solid #C9963A',
                boxShadow: '0 1px 4px rgba(15,31,61,0.06), 0 4px 16px rgba(15,31,61,0.04)',
              }}
            >
              <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.2rem', fontWeight: 700, color: '#0F1F3D', marginTop: 0, marginBottom: 16 }}>
                Current Focus
              </h3>
              <ul style={{ margin: 0, padding: '0 0 0 16px', color: '#1E3A5F', lineHeight: 1.9, fontSize: '0.95rem' }}>
                <li>AI-powered document intelligence and automated invoice processing</li>
                <li>LLM workflows with confidence scoring and structured extraction</li>
                <li>Vector search for vendor catalog matching and contract reconciliation</li>
                <li>Containerized microservices on Azure with event-driven orchestration</li>
                <li>Distributed systems design for high-reliability financial workflows</li>
              </ul>
            </motion.div>

            <motion.div
              {...fadeUp}
              style={{
                background: '#fff',
                borderRadius: 12,
                padding: '24px 28px',
                borderLeft: '3px solid #1E3A5F',
                boxShadow: '0 1px 4px rgba(15,31,61,0.06), 0 4px 16px rgba(15,31,61,0.04)',
              }}
            >
              <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.2rem', fontWeight: 700, color: '#0F1F3D', marginTop: 0, marginBottom: 16 }}>
                Education
              </h3>
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontWeight: 600, color: '#0F1F3D', fontSize: '0.95rem' }}>M.S. Data Science & Business Analytics</div>
                <div style={{ color: '#6B7280', fontSize: '0.85rem', marginTop: 2 }}>UNC Charlotte · 2020 – 2021</div>
              </div>
              <div>
                <div style={{ fontWeight: 600, color: '#0F1F3D', fontSize: '0.95rem' }}>B.Tech Computer Science</div>
                <div style={{ color: '#6B7280', fontSize: '0.85rem', marginTop: 2 }}>Gandhi Institute of Technology & Management · 2015 – 2019</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          {...fadeUp}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 40, marginTop: 72 }}
        >
          {stats.map(stat => (
            <AnimatedStat key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
