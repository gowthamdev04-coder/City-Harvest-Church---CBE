import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CalendarDays,
  CirclePlay,
  MapPin,
  Users,
  Sparkles,
  HeartHandshake,
  BookOpen,
  Clock,
  CheckCircle2
} from 'lucide-react'
import { events, ministries, serviceGallery, testimonials, faqs, churchWithoutWallsProjects, discipleshipClasses } from '../data/content'
import { featuredSermon } from '../data/sermons'
import { useLanguage } from '../context/LanguageContext'

export default function Home() {
  const { t } = useLanguage()

  useEffect(() => {
    document.title = 'City Harvest Church | Coimbatore'
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://i.ytimg.com/vi/vSGA7lXByTU/hqdefault.jpg"
        >
          <source src="/media/hero-service.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay" />

        {/* Floating Sacred Cross Badge on Banner */}
        <div className="hero-cross-floating-badge">
          <div className="cross-badge-icon">
            <svg width="18" height="24" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0H14V10H24V14H14V32H10V14H0V10H10V0Z" fill="#18302b" />
            </svg>
          </div>
          <div>
            <strong>Faith · Hope · Love</strong>
            <span>Worship Jesus Together</span>
          </div>
        </div>

        <div className="shell hero-content">
          <p className="eyebrow light-eyebrow">{t('welcomeHome')}</p>

          <h1>
            {t('heroTitleLine1')}
            <br />
            <em>{t('heroTitleLine2')}</em>
          </h1>

          <p className="hero-copy">
            {t('heroCopy')}
          </p>

          <div className="hero-actions">
            <Link className="button primary" to="/contact">
              {t('planVisit')} <ArrowRight size={17} />
            </Link>
          </div>
        </div>

        <div className="service-bar">
          <div>
            <CalendarDays size={18} />
            <span>
              <b>{t('sundayGatherings')}</b>
              8:30 AM &amp; 10:30 AM
            </span>
          </div>

          <div>
            <MapPin size={18} />
            <span>
              <b>{t('joinUsInPerson')}</b>
              {t('coimbatoreTN')}
            </span>
          </div>

          <Link to="/contact">
            {t('getDirections')} <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Enhanced Visual Intro Section */}
      <section className="visual-intro-section section">
        <div className="shell">
          <div className="section-break-line" />
        </div>
        <div className="shell visual-intro-grid">
          {/* Left Column: Visual Media Stack with Glassmorphic Badges */}
          <div className="intro-media-wrapper">
            <div
              className="intro-main-image"
              style={{ backgroundImage: `url(${serviceGallery[0].src})` }}
            >
              <div className="media-overlay-gradient" />
            </div>
          </div>

          {/* Right Column: Narrative Content & Key Pillars */}
          <div className="intro-narrative">
            <div className="eyebrow-accent-line" />
            <p className="eyebrow">{t('whoWeAre')}</p>
            <h2>{t('introHeading')}</h2>
            <p className="lead">
              {t('introLead')}
            </p>

            <div className="pillars-list">
              <div className="pillar-item">
                <div className="pillar-icon"><Sparkles size={20} /></div>
                <div>
                  <h4>{t('pillar1Title')}</h4>
                  <p>{t('pillar1Desc')}</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon"><HeartHandshake size={20} /></div>
                <div>
                  <h4>{t('pillar2Title')}</h4>
                  <p>{t('pillar2Desc')}</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon"><BookOpen size={20} /></div>
                <div>
                  <h4>{t('pillar3Title')}</h4>
                  <p>{t('pillar3Desc')}</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '32px' }}>
              <Link className="button dark" to="/about">
                {t('discoverStory')} <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Next Steps Visual Cards */}
      <section className="ways-visual-section section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t('yourNextStep')}</p>
            <h2>{t('roomForStory')}</h2>
          </div>
          <p className="section-aside">
            {t('nextStepAside')}
          </p>
        </div>

        <div className="ways-cards-grid">
          <article className="visual-way-card">
            <div className="card-image-header" style={{ backgroundImage: `url(${serviceGallery[1].src})` }}>
              <span className="step-number">01</span>
            </div>
            <div className="card-body">
              <h3>{t('step1Title')}</h3>
              <p>{t('step1Desc')}</p>
              <ul className="card-checklist">
                <li><CheckCircle2 size={15} color="#a87119" /> Harvest Kids Programs</li>
                <li><CheckCircle2 size={15} color="#a87119" /> Free Coffee & Refreshments</li>
              </ul>
              <Link className="text-link card-link" to="/contact">
                {t('planVisit')} <ArrowRight size={16} />
              </Link>
            </div>
          </article>

          <article className="visual-way-card">
            <div className="card-image-header" style={{ backgroundImage: `url(${serviceGallery[2].src})` }}>
              <span className="step-number">02</span>
            </div>
            <div className="card-body">
              <h3>{t('step2Title')}</h3>
              <p>{t('step2Desc')}</p>
              <ul className="card-checklist">
                <li><CheckCircle2 size={15} color="#a87119" /> Midweek Home Groups</li>
                <li><CheckCircle2 size={15} color="#a87119" /> Youth & Young Adults</li>
              </ul>
              <Link className="text-link card-link" to="/ministries">
                {t('exploreMinistries')} <ArrowRight size={16} />
              </Link>
            </div>
          </article>

          <article className="visual-way-card">
            <div className="card-image-header" style={{ backgroundImage: `url(${featuredSermon.thumbnail})` }}>
              <span className="step-number">03</span>
            </div>
            <div className="card-body">
              <h3>{t('step3Title')}</h3>
              <p>{t('step3Desc')}</p>
              <ul className="card-checklist">
                <li><CheckCircle2 size={15} color="#a87119" /> Volunteer Team Opportunities</li>
                <li><CheckCircle2 size={15} color="#a87119" /> Local Coimbatore Outreach</li>
              </ul>
              <Link className="text-link card-link" to="/ministries">
                {t('exploreMinistries')} <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Church Without Walls — Community Outreach Section */}
      <section className="cww-section section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t('cwwEyebrow')}</p>
            <h2>{t('cwwHeading')}</h2>
          </div>
          <p className="section-aside">
            {t('cwwAside')}
          </p>
        </div>

        <div className="cww-projects-grid">
          {churchWithoutWallsProjects.map((project) => (
            <article key={project.title} className="cww-card">
              <div className="cww-image" style={{ backgroundImage: `url(${project.image})` }}>
                <span className="tag">
                  {project.category}
                </span>
              </div>
              <div className="cww-card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Link className="text-link" to="/ministries">
                  {t('learnOutreach')} <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Ministries */}
      <section className="soft-section section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t('findYourPlace')}</p>
              <h2>{t('growingTogether')}</h2>
            </div>
            <Link className="text-link" to="/ministries">
              {t('exploreMinistries')} <ArrowRight size={16} />
            </Link>
          </div>
          <div className="ministry-grid">
            {ministries.map((m) => (
              <article className="ministry-card" key={m.title}>
                <span className="ministry-icon">{m.icon}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
                <Link to="/ministries" aria-label={`Learn about ${m.title}`}>
                  <ArrowRight size={19} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Discipleship & School of Theology Section */}
      <section className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t('equippingSaints')}</p>
            <h2>{t('sotHeading')}</h2>
          </div>
          <p className="section-aside">
            {t('sotAside')}
          </p>
        </div>
        <div className="discipleship-grid">
          {discipleshipClasses.map((item) => (
            <div key={item.code} className="discipleship-card">
              <span className="class-meta">{item.code} · {item.duration}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="tag">Format: {item.format}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Message Feature */}
      <section className="feature section shell">
        <div
          className="feature-image"
          style={{ backgroundImage: `url(${featuredSermon.thumbnail})` }}
        />
        <div className="feature-copy">
          <p className="eyebrow">{t('latestMessage')}</p>
          <p className="kicker">{featuredSermon.type.toUpperCase()} · {featuredSermon.speaker.toUpperCase()}</p>
          <h2>{featuredSermon.title}</h2>
          <p>Catch up on our latest service message and be encouraged in your faith journey this week.</p>
          <Link className="button dark" to={`/sermons/${featuredSermon.slug}`}>
            {t('watchMessageNotes')} <CirclePlay size={17} />
          </Link>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t('glimpseSunday')}</p>
            <h2>{t('worshipWordWelcome')}</h2>
          </div>
          <p className="section-aside">
            Moments of worship, reflection, and community fellowship from our gatherings at City Harvest Coimbatore.
          </p>
        </div>
        <div className="service-gallery">
          {serviceGallery.map((photo) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <figcaption>{photo.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t('whatsHappening')}</p>
            <h2>{t('comingUp')}</h2>
          </div>
          <Link className="text-link" to="/events">
            {t('viewAllEvents')} <ArrowRight size={16} />
          </Link>
        </div>
        <div className="events-list">
          {events.map((event) => (
            <article className="event-row" key={event.title}>
              <div className="date-box">
                <b>{event.date}</b>
                <span>{event.month}</span>
              </div>
              <div>
                <span className="tag">{event.tag}</span>
                <h3>{event.title}</h3>
                <p>{event.time} · {event.location}</p>
              </div>
              <Link to="/events" aria-label={`View ${event.title}`}>
                <ArrowRight size={21} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials / Stories */}
      <section className="stories">
        <div className="shell stories-grid">
          <div className="story-image" />
          <div className="story-copy">
            <p className="eyebrow">{t('realStories')}</p>
            <blockquote>“{testimonials[0].quote}”</blockquote>
            <p className="story-name">
              — {testimonials[0].name} <span>({testimonials[0].role})</span>
            </p>
            <Link className="text-link" to="/about">
              {t('discoverStory')} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq section shell">
        <div>
          <p className="eyebrow">{t('firstTimeHere')}</p>
          <h2>{t('questionsWelcome')}</h2>
          <p className="lead">
            Here are a few common answers to help you feel right at home on your first Sunday visit.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <details key={faq.question} defaultOpen={idx === 0}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="shell">
          <p className="eyebrow light-eyebrow">NEW HERE?</p>
          <h2>We’d love to meet you.</h2>
          <p>Come as you are. We’ll save a seat for you this Sunday.</p>
          <Link className="button primary" to="/contact">
            {t('planVisit')} <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  )
}
