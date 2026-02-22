import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Courses from './components/Courses';
import WhyChooseUs from './components/WhyChooseUs';
import SuccessStories from './components/SuccessStories';
import LearningPath from './components/LearningPath';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  return (
    <div className="grain">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <TrustedBy />
      <Courses />
      <WhyChooseUs />
      <LearningPath />
      <SuccessStories />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
