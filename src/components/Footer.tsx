import { openToWork, siteConfig } from '../data/config'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #E8E4DC',
      padding: '32px 24px',
      textAlign: 'center',
      background: '#FAFAF8',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <p style={{ margin: 0, fontSize: '0.88rem', color: '#6B7280' }}>
          <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 600, color: '#0F1F3D', fontSize: '1rem' }}>
            {siteConfig.name}
          </span>
          {' '}· Software Engineer · © 2026
          {' '}· Built with React & Vite
        </p>
        {openToWork && (
          <p style={{ margin: '8px 0 0', fontSize: '0.82rem', color: '#C9963A' }}>
            Open to new opportunities
          </p>
        )}
      </div>
    </footer>
  )
}
