import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/modules/Footer';
import HeroSection from '@/modules/HeroSection';
import ProjectSection from '@/modules/ProjectSection';
import SkillSection from '@/modules/SkillSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <HeroSection />
      <SkillSection />
      <ProjectSection />
      <Footer />
    </>
  );
}
