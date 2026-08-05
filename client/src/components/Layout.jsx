import { useState, useEffect } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Menu, X, ArrowUpRight, Radio, HeartHandshake, PlayCircle, Globe, ChevronDown } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Layout() {
  const [open, setOpen] = useState(false)
  const [showQuickWidget, setShowQuickWidget] = useState(true)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const [ministriesDropdownOpen, setMinistriesDropdownOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        setAboutDropdownOpen(false)
        setMinistriesDropdownOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleNavClick = () => {
    setOpen(false)
    setAboutDropdownOpen(false)
    setMinistriesDropdownOpen(false)
  }

  return (
    <>
      {/* Top Live Broadcast & Announcement Ticker Bar */}
      <div className="top-announcement-bar">
        <div className="shell announcement-content">
          <span className="ticker-live-badge">
            <Radio size={13} className="pulse-icon" /> {t('tickerLive')}
          </span>
          <span className="ticker-text">
            {t('tickerText')}
          </span>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px' }}>
            <a 
              href="https://www.youtube.com/@CityHarvest.online" 
              target="_blank" 
              rel="noreferrer" 
              className="ticker-link"
            >
              {t('watchOnline')} <PlayCircle size={13} />
            </a>

            {/* Language Switcher in Ticker */}
            <div className="lang-switcher-ticker">
              <Globe size={13} />
              <button 
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
              >
                EN
              </button>
              <span>|</span>
              <button 
                className={`lang-btn ${lang === 'ta' ? 'active' : ''}`}
                onClick={() => setLang('ta')}
              >
                தமிழ்
              </button>
            </div>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="shell nav-wrap">
          <Link className="brand" to="/" onClick={handleNavClick}>
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
          {open && <div className="nav-backdrop" onClick={handleNavClick} />}

          <nav className={open ? 'nav open' : 'nav'}>
            <NavLink to="/" onClick={handleNavClick}>
              {t('navHome')}
            </NavLink>

            {/* About Dropdown */}
            <div 
              className="nav-item-dropdown"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <NavLink 
                to="/about" 
                onClick={handleNavClick}
                className="dropdown-trigger-link"
              >
                {t('navAbout')} <ChevronDown size={14} />
              </NavLink>

              <div className={`dropdown-menu ${aboutDropdownOpen ? 'show' : ''}`}>
                <Link to="/about#founders-history" onClick={handleNavClick}>
                  {t('navFoundersHistory')}
                </Link>
                <Link to="/about#leadership" onClick={handleNavClick}>
                  {t('navLeadership')}
                </Link>
                <Link to="/about#vision-mission" onClick={handleNavClick}>
                  {t('navVisionMission')}
                </Link>
              </div>
            </div>

            <NavLink to="/location" onClick={handleNavClick}>
              {t('navLocation')}
            </NavLink>

            {/* Ministries Dropdown */}
            <div 
              className="nav-item-dropdown"
              onMouseEnter={() => setMinistriesDropdownOpen(true)}
              onMouseLeave={() => setMinistriesDropdownOpen(false)}
            >
              <NavLink 
                to="/ministries" 
                onClick={handleNavClick}
                className="dropdown-trigger-link"
              >
                {t('navMinistries')} <ChevronDown size={14} />
              </NavLink>

              <div className={`dropdown-menu ${ministriesDropdownOpen ? 'show' : ''}`}>
                <Link to="/ministries?cat=bible-study" onClick={handleNavClick}>
                  {t('navBibleStudy')}
                </Link>
                <Link to="/ministries?cat=church-without-walls" onClick={handleNavClick}>
                  {t('navChurchWithoutWalls')}
                </Link>
                <Link to="/ministries?cat=healthcare" onClick={handleNavClick}>
                  {t('navHealthcare')}
                </Link>
                <Link to="/ministries?cat=education" onClick={handleNavClick}>
                  {t('navEducation')}
                </Link>
                <Link to="/ministries?cat=community-services" onClick={handleNavClick}>
                  {t('navCommunityServices')}
                </Link>
              </div>
            </div>

            <NavLink to="/events" onClick={handleNavClick}>
              {t('navEvents')}
            </NavLink>

            <NavLink to="/sermons" onClick={handleNavClick}>
              {t('navSermons')}
            </NavLink>

            <NavLink to="/contact" onClick={handleNavClick}>
              {t('navContact')}
            </NavLink>

            {/* Mobile / Nav Language Switcher */}
            <div className="lang-switcher-nav">
              <Globe size={14} />
              <button 
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
              >
                EN
              </button>
              <button 
                className={`lang-btn ${lang === 'ta' ? 'active' : ''}`}
                onClick={() => setLang('ta')}
              >
                தமிழ்
              </button>
            </div>

            <Link className="nav-give" to="/give" onClick={handleNavClick}>
              {t('navGive')} <ArrowUpRight size={15} />
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      {/* Floating Quick Action Bar */}
      {showQuickWidget && (
        <div className="floating-quick-bar">
          <Link to="/contact" className="quick-action-btn primary-action">
            <HeartHandshake size={16} /> {t('requestPrayer')}
          </Link>
          <a href="https://www.youtube.com/@CityHarvest.online" target="_blank" rel="noreferrer" className="quick-action-btn secondary-action">
            <Radio size={16} /> {t('watchLive')}
          </a>
          <button onClick={() => setShowQuickWidget(false)} className="quick-close-btn" aria-label="Close widget">
            <X size={14} />
          </button>
        </div>
      )}

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
              {t('footerTagline')}
            </p>
          </div>
          <div>
            <h4>{t('joinUsSundayFooter')}</h4>
            <p>
              8:30 AM & 10:30 AM<br />
              Coimbatore, Tamil Nadu
            </p>
          </div>
          <div>
            <h4>{t('stayConnected')}</h4>
            <p className="footer-social-links">
              <a href="https://www.youtube.com/@CityHarvest.online" target="_blank" rel="noreferrer">YouTube</a> &nbsp;•&nbsp;
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a><br />
              <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a> &nbsp;•&nbsp;
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer">WhatsApp</a>
            </p>
          </div>
        </div>
        <div className="shell footer-bottom">
          {t('copyright')}
        </div>
      </footer>
    </>
  )
}
