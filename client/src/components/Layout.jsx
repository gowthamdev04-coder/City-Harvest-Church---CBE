import { useState, useEffect } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [
  ['About', '/about'],
  ['Ministries', '/ministries'],
  ['Events', '/events'],
  ['Sermons', '/sermons']
]

export default function Layout() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <header className="site-header">
        <div className="shell nav-wrap">
          <Link className="brand" to="/" onClick={() => setOpen(false)}>
            <div className="brand-logo-badge">
              <img className="brand-logo" src="/images/city-harvest-logo.jpg" alt="City Harvest Church Coimbatore" />
            </div>
            <div className="brand-text">
              <span className="brand-title">CITY HARVEST</span>
              <span className="brand-sub">CHURCH · COIMBATORE</span>
            </div>
          </Link>

          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
          {open && <div className="nav-backdrop" onClick={() => setOpen(false)} />}

          <nav className={open ? 'nav open' : 'nav'}>
            {links.map(([name, to]) => (
              <NavLink key={to} to={to} onClick={() => setOpen(false)}>
                {name}
              </NavLink>
            ))}
            <NavLink to="/contact" onClick={() => setOpen(false)}>
              I'm New
            </NavLink>
            <Link className="nav-give" to="/give" onClick={() => setOpen(false)}>
              Give <ArrowUpRight size={15} />
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div>
            <Link className="brand footer-brand" to="/">
              <div className="brand-logo-badge footer-badge">
                <img className="brand-logo" src="/images/city-harvest-logo.jpg" alt="City Harvest Church Coimbatore" />
              </div>
              <div className="brand-text light">
                <span className="brand-title">CITY HARVEST</span>
                <span className="brand-sub">CHURCH · COIMBATORE</span>
              </div>
            </Link>
            <p style={{ marginTop: '16px' }}>
              A house of hope for our city.<br />
              Come as you are.
            </p>
          </div>
          <div>
            <h4>Join us Sunday</h4>
            <p>
              8:30 AM & 10:30 AM<br />
              Coimbatore, Tamil Nadu
            </p>
          </div>
          <div>
            <h4>Stay connected</h4>
            <p className="footer-social-links">
              <a href="https://www.youtube.com/@CityHarvest.online" target="_blank" rel="noreferrer">YouTube</a> &nbsp;•&nbsp;
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a><br />
              <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a> &nbsp;•&nbsp;
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer">WhatsApp</a>
            </p>
          </div>
        </div>
        <div className="shell footer-bottom">
          © {new Date().getFullYear()} City Harvest Church. <span>Made to help people find their way home.</span>
        </div>
      </footer>
    </>
  )
}
