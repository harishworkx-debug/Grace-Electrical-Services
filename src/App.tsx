import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCallButton from '@/components/FloatingCallButton';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import ServiceAreas from '@/pages/ServiceAreas';
import DynamicPage from '@/pages/DynamicPage';
import About from '@/pages/About';
import Reviews from '@/pages/Reviews';
import Contact from '@/pages/Contact';
import FAQ from '@/pages/FAQ';
import Sitemap from '@/pages/Sitemap';
import Guides from '@/pages/Guides';
import NotFound from '@/pages/NotFound';
import { Navigate } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/resources" element={<Navigate to="/guides" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/:slug" element={<DynamicPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingCallButton />
      </div>
    </BrowserRouter>
  );
}
