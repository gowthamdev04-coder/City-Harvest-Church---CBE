import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  CalendarDays, 
  CheckCircle2, 
  Copy, 
  ExternalLink, 
  Heart, 
  MapPin, 
  Play, 
  Send, 
  ShieldCheck, 
  Users, 
  Clock, 
  BookOpen, 
  Sparkles, 
  MessageCircle, 
  HelpCircle,
  Headphones,
  Award
} from 'lucide-react'
import { 
  events, 
  ministries, 
  youtubeChannelUrl, 
  leadership, 
  coreBeliefs, 
  connectGroupsList, 
  impactMetrics, 
  givingFaqs 
} from '../data/content'
import { featuredSermon, recentVideos } from '../data/sermons'

const details = {
  about: {
    eyebrow: 'OUR STORY',
    title: 'A church for the city.',
    body: 'City Harvest Church is a Christ-centred community in Coimbatore committed to seeing people encounter Jesus and live out His love in every part of life.',
    image: 'about'
  },
  ministries: {
    eyebrow: 'FIND COMMUNITY',
    title: 'There is a place for you.',
    body: 'Every generation and every story matters. Find a community where you can grow in faith, serve others, and truly belong.',
    image: 'ministries'
  },
  events: {
    eyebrow: 'SAVE THE DATE',
    title: 'Life is better together.',
    body: 'From Sunday worship celebrations to midweek prayer and local outreach, there is always a way to connect with our community.',
    image: 'events'
  },
  sermons: {
    eyebrow: 'WATCH & LISTEN',
    title: 'Truth for every day.',
    body: 'Watch recent messages, revival nights, and Tamil worship sessions to be encouraged wherever you are.',
    image: 'sermons'
  },
  give: {
    eyebrow: 'GENEROSITY',
    title: 'Make a difference.',
    body: 'Your generosity helps us care for people, support families, and bring practical hope and God’s love to our city.',
    image: 'give'
  },
  contact: {
    eyebrow: 'COME AS YOU ARE',
    title: 'We can’t wait to meet you.',
    body: 'Planning your first visit? Let us know you’re coming and our welcome team will make your Sunday simple and welcoming.',
    image: 'contact'
  }
}

export default function ContentPage({ type }) {
  const page = details[type] || details.about

  useEffect(() => {
    const titles = {
      about: 'About Us | City Harvest Church Coimbatore',
      ministries: 'Ministries & Connect Groups | City Harvest Church Coimbatore',
      events: 'Events & Gatherings | City Harvest Church Coimbatore',
      sermons: 'Sermons & Media | City Harvest Church Coimbatore',
      give: 'Give & Generosity | City Harvest Church Coimbatore',
      contact: 'Contact & Plan Your Visit | City Harvest Church Coimbatore'
    }
    document.title = titles[type] || 'City Harvest Church'
  }, [type])

  return (
    <>
      <section className={`page-hero ${page.image}`}>
        <div className="page-shade" />
        <div className="shell">
          <p className="eyebrow light-eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p>{page.body}</p>
        </div>
      </section>
      <RenderPageSections type={type} />
    </>
  )
}

function RenderPageSections({ type }) {
  const [copied, setCopied] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [prayerSubmitted, setPrayerSubmitted] = useState(false)
  const [eventRegistered, setEventRegistered] = useState(null)
  const [selectedTopic, setSelectedTopic] = useState('All')
  const [giveAmount, setGiveAmount] = useState('1000')
  const [selectedFund, setSelectedFund] = useState('General Tithe')

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  // --- ABOUT PAGE SECTIONS ---
  if (type === 'about') {
    return (
      <>
        {/* Intro Story & Vision */}
        <section className="section shell">
          <div className="split-content">
            <div>
              <p className="eyebrow">OUR HEART</p>
              <h2 style={{ font: 'clamp(36px, 4vw, 52px)/1.05 "DM Serif Display"', margin: '12px 0 20px' }}>
                Building a house of hope for Coimbatore.
              </h2>
              <p className="lead">
                To be a welcoming, Christ-centred church where people encounter Jesus, grow in faith, and bring hope to Coimbatore and beyond.
              </p>
              <p style={{ lineHeight: 1.7, color: 'var(--muted)' }}>
                We gather every Sunday to worship, learn from Scripture, and care for one another as a spiritual family. Through the week, we scatter across homes, workplaces, and campuses to live out that love in our local neighborhoods.
              </p>
            </div>
            <aside className="info-card">
              <h3>Our Pillars</h3>
              <p><b>Jesus First</b><br />We keep the good news of the gospel central to all we do.</p>
              <p><b>People Matter</b><br />Everyone has a place to belong and a God-given purpose.</p>
              <p><b>Love in Action</b><br />Faith makes a tangible difference in our city.</p>
            </aside>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="soft-section section">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">MEET OUR TEAM</p>
                <h2>Pastoral & Ministry Leadership</h2>
              </div>
              <p className="section-aside">
                Dedicated leaders serving our church family and guiding our ministries in Coimbatore.
              </p>
            </div>
            <div className="team-grid">
              {leadership.map((person) => (
                <article key={person.name} className="team-card">
                  <div className="team-image" style={{ backgroundImage: `url(${person.image})` }} />
                  <div className="team-info">
                    <h3>{person.name}</h3>
                    <span className="team-role">{person.role}</span>
                    <p>{person.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Statement of Faith Section */}
        <section className="section shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT WE BELIEVE</p>
              <h2>Foundations of Our Faith</h2>
            </div>
          </div>
          <div className="beliefs-grid">
            {coreBeliefs.map((belief) => (
              <article key={belief.title} className="belief-card">
                <span className="belief-icon"><BookOpen size={20} /></span>
                <h3>{belief.title}</h3>
                <p>{belief.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="cta">
          <div className="shell">
            <p className="eyebrow light-eyebrow">JOIN OUR FAMILY</p>
            <h2>Experience City Harvest this Sunday.</h2>
            <p>Gatherings at 8:30 AM & 10:30 AM in Coimbatore.</p>
            <Link className="button primary" to="/contact">
              Plan your visit <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </>
    )
  }

  // --- MINISTRIES PAGE SECTIONS ---
  if (type === 'ministries') {
    return (
      <>
        {/* Ministries Deep Dive */}
        <section className="section shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">MINISTRY DEEP DIVE</p>
              <h2>Tailored spaces for every age and stage.</h2>
            </div>
          </div>
          <div className="ministry-grid full">
            {ministries.map((m) => (
              <article className="ministry-card enhanced-m-card" key={m.title}>
                <span className="ministry-icon">{m.icon}</span>
                <h3>{m.title}</h3>
                <p className="ministry-sub" style={{ color: '#a87119', fontWeight: 600, fontSize: '13px', marginBottom: '8px' }}>
                  {m.subtitle}
                </p>
                <p>{m.text}</p>
                <div className="m-schedule" style={{ background: '#f8f5ef', padding: '10px 14px', borderRadius: '4px', margin: '16px 0', fontSize: '13px', color: 'var(--ink)', fontWeight: 600 }}>
                  <Clock size={14} style={{ display: 'inline', marginRight: '6px', color: '#a87119' }} /> {m.schedule}
                </div>
                <ul className="card-checklist" style={{ margin: '0 0 20px', listStyle: 'none', padding: 0 }}>
                  {m.highlights.map((h) => (
                    <li key={h} style={{ fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                      <CheckCircle2 size={14} color="#a87119" /> {h}
                    </li>
                  ))}
                </ul>
                <Link className="text-link" to="/contact" style={{ marginTop: 'auto' }}>
                  Get connected <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Coimbatore Connect Groups Section */}
        <section className="soft-section section">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">MIDWEEK LIFE</p>
                <h2>Coimbatore Connect Groups</h2>
              </div>
              <p className="section-aside">
                Connect groups meet in homes across Coimbatore to study Scripture, pray together, and build life-giving friendships.
              </p>
            </div>
            <div className="connect-groups-grid">
              {connectGroupsList.map((cg) => (
                <article key={cg.area} className="group-location-card">
                  <div className="group-header">
                    <MapPin size={20} color="#a87119" />
                    <h3>{cg.area}</h3>
                  </div>
                  <span className="group-tag">{cg.type}</span>
                  <p><strong>Meeting Time:</strong> {cg.day}</p>
                  <p><strong>Hosts / Leaders:</strong> {cg.leader}</p>
                  <Link className="text-link" to="/contact" style={{ marginTop: '12px' }}>
                    Join this group <ArrowRight size={15} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </>
    )
  }

  // --- EVENTS PAGE SECTIONS ---
  if (type === 'events') {
    return (
      <>
        {/* Special Event Spotlight */}
        <section className="section shell">
          <div className="featured-event-spotlight">
            <div className="spotlight-tag">UPCOMING SPECIAL EVENT</div>
            <h2>Revival Night 2026 — Coimbatore</h2>
            <p className="spotlight-desc">
              Join us for a powerful evening of passionate worship, corporate intercession, and dynamic ministry of the Word. All are welcome!
            </p>
            <div className="spotlight-meta">
              <span><CalendarDays size={18} /> July 19 - 21, 2026</span>
              <span><Clock size={18} /> 6:30 PM Nightly</span>
              <span><MapPin size={18} /> City Harvest Main Campus</span>
            </div>
          </div>
        </section>

        {/* All Events List */}
        <section className="section shell" style={{ paddingTop: 0 }}>
          <div className="section-heading">
            <div>
              <p className="eyebrow">UPCOMING GATHERINGS</p>
              <h2>Mark Your Calendar</h2>
            </div>
          </div>
          <div className="events-list">
            {events.map((e) => (
              <article className="event-row" key={e.title}>
                <div className="date-box">
                  <b>{e.date}</b>
                  <span>{e.month}</span>
                </div>
                <div>
                  <span className="tag">{e.tag}</span>
                  <h3>{e.title}</h3>
                  <p>{e.time} · {e.location}</p>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '4px' }}>{e.description}</p>
                </div>
                {eventRegistered === e.title ? (
                  <span className="registered-badge" style={{ color: '#18302b', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={18} color="#a87119" /> Saved to calendar
                  </span>
                ) : (
                  <button className="button outline" onClick={() => setEventRegistered(e.title)}>
                    Register
                  </button>
                )}
              </article>
            ))}
          </div>
        </section>
      </>
    )
  }

  // --- SERMONS PAGE SECTIONS ---
  if (type === 'sermons') {
    const filteredVideos = selectedTopic === 'All' 
      ? recentVideos 
      : recentVideos.filter(v => v.type === selectedTopic)

    return (
      <div className="shell section">
        {/* Featured Sermon */}
        <section className="featured-video">
          <div className="featured-thumb">
            <img src={featuredSermon.thumbnail} alt={featuredSermon.title} />
            <span><Play fill="currentColor" size={20} /></span>
          </div>
          <div>
            <p className="eyebrow">FEATURED MESSAGE</p>
            <h2>{featuredSermon.title}</h2>
            <p className="lead">{featuredSermon.speaker} · {featuredSermon.date}</p>
            <p>{featuredSermon.summary}</p>
            <Link className="button dark" to={`/sermons/${featuredSermon.slug}`}>
              Watch & read notes <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        {/* Current Series Banner */}
        <div className="series-spotlight-box" style={{ background: '#18302b', color: '#fff', padding: '40px', borderRadius: '8px', margin: '60px 0' }}>
          <div style={{ maxWidth: '650px' }}>
            <span className="tag" style={{ background: '#e9bc5f', color: '#18302b', padding: '4px 10px', borderRadius: '4px' }}>TEACHING SERIES</span>
            <h2 style={{ font: '38px "DM Serif Display"', margin: '14px 0 10px' }}>The Way of Jesus</h2>
            <p style={{ color: '#dbe6de', lineHeight: 1.6, marginBottom: '20px' }}>
              A 4-week exploration of following Jesus in the modern world—discipleship, spiritual habits, and loving our neighbors.
            </p>
            <a className="button primary" href={youtubeChannelUrl} target="_blank" rel="noreferrer">
              Watch full series on YouTube <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Topic Filter Pills */}
        <div className="video-list-heading">
          <div>
            <p className="eyebrow">LATEST UPLOADS</p>
            <h2>From City Harvest Online</h2>
          </div>
          <div className="topic-pills" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {['All', 'Worship', 'Sunday Service'].map(topic => (
              <button
                key={topic}
                className={`button ${selectedTopic === topic ? 'dark' : 'outline'}`}
                onClick={() => setSelectedTopic(topic)}
                style={{ padding: '6px 14px', fontSize: '13px' }}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Videos Grid */}
        <div className="sermon-grid live-videos">
          {filteredVideos.map((video) => (
            <Link className="sermon-card" key={video.id} to={`/sermons/${video.slug}`}>
              <div className="sermon-art">
                <img src={video.thumbnail} alt={video.title} />
                <span><Play fill="currentColor" size={16} /></span>
              </div>
              <p className="eyebrow">{video.type.toUpperCase()}</p>
              <h3>{video.title}</h3>
              <p>{video.speaker}{video.date ? ` · ${video.date}` : ''}</p>
            </Link>
          ))}
        </div>

        {/* Podcast / Audio Streaming Section */}
        <div className="podcast-section" style={{ background: '#ebe4d9', padding: '40px', borderRadius: '8px', marginTop: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#a87119', fontWeight: 700, fontSize: '12px', letterSpacing: '1px' }}>
              <Headphones size={18} /> AUDIO MESSAGES
            </div>
            <h3 style={{ font: '30px "DM Serif Display"', margin: '8px 0' }}>Listen on the go.</h3>
            <p style={{ color: 'var(--muted)', margin: 0 }}>Stream our Sunday audio sermons on Spotify, Apple Podcasts, and Google Podcasts.</p>
          </div>
          <a className="button dark" href={youtubeChannelUrl} target="_blank" rel="noreferrer" style={{ flexShrink: 0 }}>
            Listen on YouTube Audio <ExternalLink size={16} />
          </a>
        </div>
      </div>
    )
  }

  // --- GIVE PAGE SECTIONS ---
  if (type === 'give') {
    return (
      <div className="shell section">
        <div className="split-content">
          <div>
            <h2>Generosity changes lives.</h2>
            <p className="lead">
              Thank you for partnering with City Harvest Church. Your giving directly impacts families, youth, and outreach programs across Coimbatore.
            </p>

            {/* Interactive Giving Amount Presets */}
            <div className="preset-calculator" style={{ background: '#fff', padding: '24px', border: '1px solid #d1c9bb', borderRadius: '8px', marginBottom: '24px' }}>
              <label style={{ fontWeight: 700, fontSize: '14px', display: 'block', marginBottom: '10px' }}>Select Giving Fund</label>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                {['General Tithe', 'Outreach & Missions', 'Building Fund'].map(fund => (
                  <button 
                    key={fund}
                    className={`button ${selectedFund === fund ? 'dark' : 'outline'}`}
                    onClick={() => setSelectedFund(fund)}
                    style={{ padding: '6px 12px', fontSize: '12px' }}
                  >
                    {fund}
                  </button>
                ))}
              </div>

              <label style={{ fontWeight: 700, fontSize: '14px', display: 'block', marginBottom: '10px' }}>Contribution Amount (₹ INR)</label>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                {['500', '1000', '2500', '5000'].map(amt => (
                  <button 
                    key={amt} 
                    className={`button ${giveAmount === amt ? 'primary' : 'outline'}`}
                    onClick={() => setGiveAmount(amt)}
                    style={{ padding: '8px 16px', fontWeight: 700 }}
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>
              <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>
                Selected: <strong>₹{giveAmount}</strong> toward <strong>{selectedFund}</strong>
              </p>
            </div>

            {/* Direct Bank / UPI Transfer Card */}
            <div className="give-methods-box" style={{ background: '#fff', padding: '28px', border: '1px solid #d1c9bb', borderRadius: '8px' }}>
              <h3 style={{ font: '24px "DM Serif Display"', marginTop: 0, marginBottom: '16px' }}>Bank & UPI Transfer Details</h3>
              
              <div style={{ background: '#f8f5ef', padding: '16px', borderRadius: '4px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 700, letterSpacing: '1px' }}>UPI ID</span>
                    <p style={{ margin: '4px 0 0', fontWeight: 700, fontSize: '18px' }}>cityharvest@upi</p>
                  </div>
                  <button className="button outline" onClick={() => copyToClipboard('cityharvest@upi')} style={{ padding: '8px 12px', fontSize: '13px' }}>
                    {copied ? <><CheckCircle2 size={15}/> Copied</> : <><Copy size={15}/> Copy UPI</>}
                  </button>
                </div>
              </div>

              <div style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.6 }}>
                <p style={{ margin: '0 0 6px' }}><strong>Bank:</strong> HDFC Bank Coimbatore Main Branch</p>
                <p style={{ margin: '0 0 6px' }}><strong>Account Name:</strong> City Harvest Church</p>
                <p style={{ margin: '0 0 6px' }}><strong>Account No:</strong> 50200012345678</p>
                <p style={{ margin: 0 }}><strong>IFSC Code:</strong> HDFC0001234</p>
              </div>
            </div>
          </div>

          <aside className="info-card">
            <Heart size={28} color="#a87119" />
            <h3>Ways to Give</h3>
            <p><b>UPI & Bank Transfer</b><br />Use the UPI ID or account details provided for instant transfer.</p>
            <p><b>In Person</b><br />Contribution envelopes are available during Sunday services.</p>

            <hr style={{ margin: '24px 0', borderColor: '#d1c9bb' }} />
            
            <h3>Transparency & Impact</h3>
            <ul style={{ paddingLeft: '18px', lineHeight: 1.8, color: 'var(--muted)', margin: 0, fontSize: '14px' }}>
              <li>Support local food relief programs in Coimbatore</li>
              <li>Fund Harvest Kids & Youth curriculum materials</li>
              <li>Maintain campus facilities and community outreach</li>
            </ul>
          </aside>
        </div>

        {/* Impact Metrics Grid */}
        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="section-heading">
            <div>
              <p className="eyebrow">OUR IMPACT</p>
              <h2>Where Your Giving Goes</h2>
            </div>
          </div>
          <div className="impact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {impactMetrics.map(metric => (
              <div key={metric.label} style={{ background: '#fff', padding: '24px', textAlign: 'center', border: '1px solid #d1c9bb', borderRadius: '8px' }}>
                <div style={{ font: '38px "DM Serif Display"', color: '#a87119', margin: '0 0 6px' }}>{metric.figure}</div>
                <p style={{ margin: 0, fontSize: '13px', fontWeight: 700, color: 'var(--ink)' }}>{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Giving FAQs */}
        <section className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">QUESTIONS ABOUT GIVING?</p>
              <h2>Giving FAQs</h2>
            </div>
          </div>
          <div className="faq-list">
            {givingFaqs.map(faq => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    )
  }

  // --- CONTACT PAGE SECTIONS ---
  if (type === 'contact') {
    return (
      <div className="shell section">
        <div className="split-content contact-layout">
          <div>
            <h2>Plan your visit.</h2>
            <p className="lead">
              Tell us a little about yourself and our team will prepare a warm welcome for you and your family!
            </p>

            {formSubmitted ? (
              <div className="form-success-card" style={{ background: '#fff', padding: '32px', border: '1px solid #d1c9bb', borderRadius: '8px' }}>
                <CheckCircle2 size={36} color="#a87119" style={{ marginBottom: '12px' }} />
                <h3 style={{ font: '28px "DM Serif Display"', margin: '0 0 10px' }}>We look forward to meeting you!</h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.6, margin: '0 0 20px' }}>
                  Thank you for letting us know! A member of our welcome team will be in touch with details for your visit.
                </p>
                <button className="button outline" onClick={() => setFormSubmitted(false)}>
                  Submit another request
                </button>
              </div>
            ) : (
              <form className="visit-form" onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
                <label>
                  Name
                  <input required placeholder="Your full name" />
                </label>
                <label>
                  Email Address
                  <input required type="email" placeholder="you@example.com" />
                </label>
                <label>
                  Phone / WhatsApp (Optional)
                  <input type="tel" placeholder="+91 98765 43210" />
                </label>
                <label>
                  How can we help?
                  <textarea placeholder="I’m planning to visit this Sunday with family..." rows="4" />
                </label>
                <button className="button dark">
                  Send message <Send size={16} />
                </button>
              </form>
            )}
          </div>

          <aside className="info-card">
            <MapPin size={24} />
            <h3>Location & Services</h3>
            <p>City Harvest Church<br />Coimbatore, Tamil Nadu, India</p>

            <CalendarDays size={24} style={{ marginTop: '20px' }} />
            <h3>Sunday Gatherings</h3>
            <p>First Service: 8:30 AM<br />Second Service: 10:30 AM</p>
          </aside>
        </div>

        {/* Dedicated Prayer Request Section */}
        <section className="section" style={{ marginTop: '60px', borderTop: '1px solid #d1c9bb' }}>
          <div className="split-content">
            <div>
              <p className="eyebrow">PRAYER REQUESTS</p>
              <h2 style={{ font: '36px "DM Serif Display"', margin: '8px 0 16px' }}>Need prayer? We stand with you.</h2>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Our pastoral and intercession team prays over every request received. You can share your request confidentially below.
              </p>
            </div>

            <div style={{ background: '#fff', padding: '28px', border: '1px solid #d1c9bb', borderRadius: '8px' }}>
              {prayerSubmitted ? (
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <CheckCircle2 size={32} color="#a87119" style={{ marginBottom: '8px' }} />
                  <h4 style={{ font: '24px "DM Serif Display"', margin: '0 0 8px' }}>Prayer Request Received</h4>
                  <p style={{ color: 'var(--muted)', fontSize: '14px', margin: 0 }}>Our prayer team will be standing with you in prayer this week.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setPrayerSubmitted(true); }}>
                  <label style={{ fontWeight: 700, fontSize: '13px', display: 'block', marginBottom: '8px' }}>
                    Your Prayer Request
                    <textarea required rows="3" placeholder="Share your prayer need..." style={{ display: 'block', width: '100%', padding: '10px', marginTop: '6px', border: '1px solid #cfc6b8', font: 'inherit' }} />
                  </label>
                  <button className="button dark" style={{ marginTop: '10px' }}>Submit Prayer Request</button>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    )
  }

  return null
}
