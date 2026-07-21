import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Home as HomeIcon } from 'lucide-react'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found | City Harvest Church'
  }, [])

  return (
    <section className="section shell not-found-page text-center">
      <div style={{ maxWidth: '500px', margin: '60px auto' }}>
        <p className="eyebrow">404 ERROR</p>
        <h1 style={{ font: 'clamp(40px, 5vw, 64px)/1 "DM Serif Display"', margin: '16px 0' }}>
          Page not found.
        </h1>
        <p className="lead" style={{ color: 'var(--muted)', fontSize: '18px', marginBottom: '32px' }}>
          The page you are looking for might have been moved, removed, or is temporarily unavailable.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <Link className="button dark" to="/">
            <HomeIcon size={17} /> Return to Home
          </Link>
          <Link className="button outline" to="/contact">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
