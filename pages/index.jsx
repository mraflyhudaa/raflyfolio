import Navbar from '@/components/Navbar';
import HeroSection from '@/modules/HeroSection';
import ProjectSection from '@/modules/ProjectSection';
import SkillSection from '@/modules/SkillSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SkillSection />
      <ProjectSection />
    </>
  );
}
