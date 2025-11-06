import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Team from './components/Team';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FadeInSection from './components/FadeInSection';

// Import all content
import {
  navigation,
  heroContent,
  servicesContent,
  projectsContent,
  teamContent,
  careersContent,
  contactContent,
  footerContent
} from './content';

function App() {
  return (
    <>
      <Navbar content={navigation} />
      <main>
        {/* Hero section doesn't fade in on scroll, it's right at the top */}
        <Hero content={heroContent} />

        {/* Other sections fade in as you scroll to them */}
        <FadeInSection>
          <Services content={servicesContent} />
        </FadeInSection>
        <FadeInSection>
          <Projects content={projectsContent} />
        </FadeInSection>
        <FadeInSection>
          <Team content={teamContent} />
        </FadeInSection>
        <FadeInSection>
          <Careers content={careersContent} />
        </FadeInSection>
        <FadeInSection>
          <Contact content={contactContent} />
        </FadeInSection>
      </main>
      <Footer content={footerContent} />
    </>
  );
}

export default App;