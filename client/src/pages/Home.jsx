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
import { events, ministries, serviceGallery, testimonials, faqs } from '../data/content'
import { featuredSermon } from '../data/sermons'

export default function Home() {


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
          poster="https://static.wixstatic.com/media/89d4bd_9bf05770d0ce495d9152ee1809ffc7e0~mv2.jpg/v1/fit/w_1389,h_700,q_90,enc_avif,quality_auto/89d4bd_9bf05770d0ce495d9152ee1809ffc7e0~mv2.jpg"
        >
          <source src="/media/hero-service.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay" />

        <div className="shell hero-content">
          <p className="eyebrow light-eyebrow">WELCOME HOME</p>

          <h1>
            There’s a place
            <br />
            <em>for you here.</em>
          </h1>

          <p className="hero-copy">
            A community learning to love God, love people, and bring hope to our city.
          </p>

          <div className="hero-actions">
            <Link className="button primary" to="/contact">
              Plan your visit <ArrowRight size={17} />
            </Link>
          </div>
        </div>

        <div className="service-bar">
          <div>
            <CalendarDays size={18} />
            <span>
              <b>Sunday Gatherings</b>
              8:30 AM &amp; 10:30 AM
            </span>
          </div>

          <div>
            <MapPin size={18} />
            <span>
              <b>Join Us</b>
              Coimbatore, Tamil Nadu
            </span>
          </div>

          <Link to="/contact">
            Get Directions <ArrowRight size={16} />
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

            {/* Floating Badge 1 */}
            <div className="glass-badge badge-top-right">
              <Clock size={20} color="#e9bc5f" />
              <div>
                <strong>8:30 AM & 10:30 AM</strong>
                <span>Two Sunday Services</span>
              </div>
            </div>

            {/* Floating Badge 2 */}
            <div className="glass-badge badge-bottom-left">
              <Users size={20} color="#e9bc5f" />
              <div>
                <strong>100% Welcome</strong>
                <span>Come as you are</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content & Key Pillars */}
          <div className="intro-narrative">
            <div className="eyebrow-accent-line" />
            <p className="eyebrow">WHO WE ARE</p>
            <h2>We believe church is more than a Sunday.</h2>
            <p className="lead">
              City Harvest is a vibrant family of ordinary people following an extraordinary God. Whether you’re full of faith, full of questions, or somewhere in between, you’re welcome here.
            </p>

            <div className="pillars-list">
              <div className="pillar-item">
                <div className="pillar-icon"><Sparkles size={20} /></div>
                <div>
                  <h4>Passion for God</h4>
                  <p>Inspirations from God's word, sincere worship, and transformational prayer.</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon"><HeartHandshake size={20} /></div>
                <div>
                  <h4>Love for People</h4>
                  <p>Building genuine relationships, multi-generational groups, and lifelong community.</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon"><BookOpen size={20} /></div>
                <div>
                  <h4>Hope for Coimbatore</h4>
                  <p>Serving our city with practical outreach, food drives, and God’s compassion.</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '32px' }}>
              <Link className="button dark" to="/about">
                Discover our full story <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Next Steps Visual Cards */}
      <section className="ways-visual-section section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">YOUR NEXT STEP</p>
            <h2>There’s room for your story.</h2>
          </div>
          <p className="section-aside">
            Whether you are exploring faith for the first time or looking for a spiritual home in Coimbatore, we’d love to walk with you.
          </p>
        </div>

        <div className="ways-cards-grid">
          <article className="visual-way-card">
            <div className="card-image-header" style={{ backgroundImage: `url(${serviceGallery[1].src})` }}>
              <span className="step-number">01</span>
            </div>
            <div className="card-body">
              <h3>Visit on Sunday</h3>
              <p>Experience a warm welcome, uplifting worship, and a practical biblically-based message for your week.</p>
              <ul className="card-checklist">
                <li><CheckCircle2 size={15} color="#a87119" /> Harvest Kids Programs</li>
                <li><CheckCircle2 size={15} color="#a87119" /> Free Coffee & Refreshments</li>
              </ul>
              <Link className="text-link card-link" to="/contact">
                Plan your visit <ArrowRight size={16} />
              </Link>
            </div>
          </article>

          <article className="visual-way-card">
            <div className="card-image-header" style={{ backgroundImage: `url(${serviceGallery[2].src})` }}>
              <span className="step-number">02</span>
            </div>
            <div className="card-body">
              <h3>Find your people</h3>
              <p>Join a connect group where you can ask questions, build friendships, and grow in faith together.</p>
              <ul className="card-checklist">
                <li><CheckCircle2 size={15} color="#a87119" /> Midweek Home Groups</li>
                <li><CheckCircle2 size={15} color="#a87119" /> Youth & Young Adults</li>
              </ul>
              <Link className="text-link card-link" to="/ministries">
                Find a group <ArrowRight size={16} />
              </Link>
            </div>
          </article>

          <article className="visual-way-card">
            <div className="card-image-header" style={{ backgroundImage: `url(${featuredSermon.thumbnail})` }}>
              <span className="step-number">03</span>
            </div>
            <div className="card-body">
              <h3>Make a difference</h3>
              <p>Use your unique gifts to serve our church family and bring practical hope to the wider community.</p>
              <ul className="card-checklist">
                <li><CheckCircle2 size={15} color="#a87119" /> Volunteer Team Opportunities</li>
                <li><CheckCircle2 size={15} color="#a87119" /> Local Coimbatore Outreach</li>
              </ul>
              <Link className="text-link card-link" to="/ministries">
                Start serving <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Ministries */}
      <section className="soft-section section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FIND YOUR PLACE</p>
              <h2>Growing happens together.</h2>
            </div>
            <Link className="text-link" to="/ministries">
              Explore ministries <ArrowRight size={16} />
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

      {/* Latest Message Feature */}
      <section className="feature section shell">
        <div
          className="feature-image"
          style={{ backgroundImage: `url(${featuredSermon.thumbnail})` }}
        />
        <div className="feature-copy">
          <p className="eyebrow">LATEST MESSAGE</p>
          <p className="kicker">{featuredSermon.type.toUpperCase()} · {featuredSermon.speaker.toUpperCase()}</p>
          <h2>{featuredSermon.title}</h2>
          <p>Catch up on our latest service message and be encouraged in your faith journey this week.</p>
          <Link className="button dark" to={`/sermons/${featuredSermon.slug}`}>
            Watch message & notes <CirclePlay size={17} />
          </Link>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A GLIMPSE OF SUNDAY</p>
            <h2>Worship, word and welcome.</h2>
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
            <p className="eyebrow">WHAT'S HAPPENING</p>
            <h2>Coming up at City Harvest.</h2>
          </div>
          <Link className="text-link" to="/events">
            View all events <ArrowRight size={16} />
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
            <p className="eyebrow">REAL PEOPLE. REAL STORIES.</p>
            <blockquote>“{testimonials[0].quote}”</blockquote>
            <p className="story-name">
              — {testimonials[0].name} <span>({testimonials[0].role})</span>
            </p>
            <Link className="text-link" to="/about">
              Read our story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq section shell">
        <div>
          <p className="eyebrow">FIRST TIME HERE?</p>
          <h2>Questions are welcome.</h2>
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
            Plan your first visit <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  )
}
