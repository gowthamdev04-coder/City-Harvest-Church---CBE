export const featuredSermon = {
  id: 'vSGA7lXByTU',
  slug: 'revival-night-day-3',
  title: 'Revival Night — Day 3',
  fullTitle: 'City Harvest Church Coimbatore | July 19 2026 | Revival Night Day - 3',
  speaker: 'Bro. Jublin Joseph',
  date: 'July 19, 2026',
  type: 'Revival Night',
  thumbnail: 'https://i.ytimg.com/vi/vSGA7lXByTU/hqdefault.jpg',
  summary: 'An empowering evening of prayer, spiritual renewal, and passionate pursuit of God’s presence.',
  transcriptStatus: 'Key message highlights and transcript outline available below.'
}

export const recentVideos = [
  { id: '0H03yTCHnG0', slug: 'ummai-arathinkidnrom-live', title: 'Ummai Arathinkidnrom Live', speaker: 'Sam Joel', type: 'Worship', thumbnail: 'https://i.ytimg.com/vi/0H03yTCHnG0/hqdefault.jpg', date: 'May 10, 2026' },
  { id: 's1JnsT4sJqY', slug: 'sunday-tamil-service', title: 'Sunday Tamil Service', speaker: 'Pastor Blesson Eliyesar', date: 'April 19, 2026', type: 'Sunday Service', thumbnail: 'https://i.ytimg.com/vi/s1JnsT4sJqY/hqdefault.jpg' },
  { id: '9O6E_lhHxVc', slug: 'en-aathumave-live', title: 'En Aathumave Live', speaker: 'Peter Paul', type: 'Worship', thumbnail: 'https://i.ytimg.com/vi/9O6E_lhHxVc/hqdefault.jpg', date: 'March 29, 2026' },
  { id: 'UxidJiHkaic', slug: 'uyarndhavarae-live', title: 'Uyarndhavarae Live', speaker: 'Peter Paul', type: 'Worship', thumbnail: 'https://i.ytimg.com/vi/UxidJiHkaic/hqdefault.jpg', date: 'March 15, 2026' },
  { id: 'tONNfB82YKE', slug: 'vetri-sirantharae-live', title: 'Vetri Sirantharae Live', speaker: 'Peter Paul', type: 'Worship', thumbnail: 'https://i.ytimg.com/vi/tONNfB82YKE/hqdefault.jpg', date: 'March 01, 2026' }
]

export const allSermons = [featuredSermon, ...recentVideos]

export function getSermonBySlug(slug) {
  return allSermons.find(s => s.slug === slug || s.id === slug) || featuredSermon
}
