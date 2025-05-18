import { HeroSection } from '@/app/components/hero';
import { Skills } from '@/app/components/skills';
import { Projects } from '@/app/components/projects';
import { Experience } from '@/app/components/experiences';
import { Contact } from '@/app/components/contact';

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <HeroSection />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}