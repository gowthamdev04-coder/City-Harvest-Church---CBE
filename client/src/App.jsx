import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import ContentPage from './pages/ContentPage'
import SermonDetail from './pages/SermonDetail'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<ContentPage type="about" />} />
          <Route path="/ministries" element={<ContentPage type="ministries" />} />
          <Route path="/events" element={<ContentPage type="events" />} />
          <Route path="/sermons" element={<ContentPage type="sermons" />} />
          <Route path="/sermons/:slug" element={<SermonDetail />} />
          <Route path="/give" element={<ContentPage type="give" />} />
          <Route path="/contact" element={<ContentPage type="contact" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
