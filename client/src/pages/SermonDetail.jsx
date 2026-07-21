import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Play, Calendar, Tag, BookOpen, CheckCircle2, Copy, MessageSquare } from 'lucide-react'
import { getSermonBySlug, recentVideos } from '../data/sermons'
import { youtubeChannelUrl } from '../data/content'

export default function SermonDetail() {
  const { slug } = useParams()
  const sermon = getSermonBySlug(slug)
  const [verseCopied, setVerseCopied] = useState(false)

  useEffect(() => {
    document.title = `${sermon.title} | City Harvest Church`
  }, [sermon])

  const handleCopyVerse = () => {
    navigator.clipboard.writeText("“The Lord is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters.” — Psalm 23:1-2")
    setVerseCopied(true)
    setTimeout(() => setVerseCopied(false), 2500)
  }

  return (
    <>
      <section className="message-hero">
        <div className="shell">
          <Link className="back-link" to="/sermons">
            <ArrowLeft size={16} /> All messages
          </Link>
          <p className="eyebrow light-eyebrow">{sermon.type.toUpperCase()}</p>
          <h1>{sermon.title}</h1>
          <p>
            {sermon.speaker} {sermon.date ? `· ${sermon.date}` : ''}
          </p>
        </div>
      </section>

      <section className="section shell message-layout">
        <div>
          <div className="video-frame">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${sermon.id}`}
              title={sermon.fullTitle || sermon.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="message-meta">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <Tag size={14} /> {sermon.type}
            </span>
            {sermon.date && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <Calendar size={14} /> {sermon.date}
              </span>
            )}
            <a
              href={`https://www.youtube.com/watch?v=${sermon.id}`}
              target="_blank"
              rel="noreferrer"
            >
              Watch on YouTube <ExternalLink size={14} />
            </a>
          </div>
        </div>

        <aside className="speaker-card">
          <p className="eyebrow">SPEAKER</p>
          <h2>{sermon.speaker}</h2>
          <p>{sermon.summary || 'Message shared at City Harvest Church Coimbatore.'}</p>
          <a className="text-link" href={youtubeChannelUrl} target="_blank" rel="noreferrer">
            Visit YouTube channel <ExternalLink size={15} />
          </a>
        </aside>
      </section>

      {/* Key Scripture Highlight Card */}
      <section className="shell" style={{ marginBottom: '40px' }}>
        <div style={{ background: '#fff', padding: '28px', border: '1px solid #d1c9bb', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#a87119', fontWeight: 700, fontSize: '12px', letterSpacing: '1px', marginBottom: '8px' }}>
              <BookOpen size={18} /> SCRIPTURE FOCUS
            </div>
            <blockquote style={{ font: '22px/1.4 "DM Serif Display"', margin: 0, color: 'var(--ink)' }}>
              “The Lord is my shepherd; I shall not want. He makes me lie down in green pastures.”
            </blockquote>
            <span style={{ color: 'var(--muted)', fontSize: '13px', fontWeight: 600, display: 'block', marginTop: '6px' }}>— Psalm 23:1-2</span>
          </div>
          <button className="button outline" onClick={handleCopyVerse} style={{ padding: '8px 14px', fontSize: '13px', flexShrink: 0 }}>
            {verseCopied ? <><CheckCircle2 size={15}/> Copied</> : <><Copy size={15}/> Copy Verse</>}
          </button>
        </div>
      </section>

      {/* Teaching Article & Connect Group Discussion Questions */}
      <section className="article-section">
        <article className="shell message-article">
          <p className="eyebrow">MESSAGE OUTLINE & REFLECTION</p>
          <h2>Key points from this message.</h2>
          <p className="article-lead">
            Review the scripture focus, practical takeaways, and reflection prompts from this message.
          </p>

          <div className="transcript-notice">
            <Play size={20} />
            <div>
              <b>Video & Teaching Guide</b>
              <p>{sermon.transcriptStatus || 'Full teaching outline available below.'}</p>
            </div>
          </div>

          <h3>Message Framework</h3>
          <ol>
            <li><strong>Encountering God in Worship:</strong> Opening our hearts to God’s presence and truth.</li>
            <li><strong>Biblical Perspective:</strong> Standing firm on the promises of Scripture in daily challenges.</li>
            <li><strong>Practical Takeaways:</strong> Living with purpose, prayer, and faith through the week.</li>
          </ol>

          {/* Group Discussion Questions */}
          <div style={{ background: '#fff', padding: '28px', borderRadius: '8px', marginTop: '40px', border: '1px solid #d1c9bb' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#a87119', fontWeight: 700, fontSize: '12px', letterSpacing: '1px', marginBottom: '12px' }}>
              <MessageSquare size={18} /> CONNECT GROUP DISCUSSION QUESTIONS
            </div>
            <ul style={{ paddingLeft: '20px', lineHeight: 1.8, color: 'var(--muted)', margin: 0 }}>
              <li>What stood out to you most from this message, and why?</li>
              <li>How does the key Scripture focus challenge or encourage your daily walk with God?</li>
              <li>What is one practical step of obedience you can take this week based on this message?</li>
            </ul>
          </div>
        </article>
      </section>

      {/* Recommended Messages to Watch Next */}
      <section className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CONTINUE WATCHING</p>
            <h2>More Messages & Worship</h2>
          </div>
          <Link className="text-link" to="/sermons">
            View all messages <ArrowLeft size={16} style={{ transform: 'rotate(180deg)' }} />
          </Link>
        </div>
        <div className="sermon-grid live-videos">
          {recentVideos.slice(0, 3).map((video) => (
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
      </section>
    </>
  )
}
