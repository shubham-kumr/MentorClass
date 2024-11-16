import { Navbar } from '@/components/layout/navbar';
import { Hero } from '@/components/sections/hero';
import { FeaturedMentors } from '@/components/sections/featured-mentors';
import { HowItWorks } from '@/components/sections/how-it-works';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="layout-container">
      <main className="main-content">
        <Hero />
        <FeaturedMentors />
        <HowItWorks />
      </main>
    </div>
  );
}