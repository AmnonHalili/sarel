import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Vision from './components/Vision';
import Projects from './components/Projects';
import Process from './components/Process';
import USP from './components/USP';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

import MediaGallery from './components/MediaGallery';

function App() {
  return (
    <Layout>
      <Hero />
      <Intro />
      <Vision />
      <Process />
      <Projects />
      <MediaGallery />
      <USP />
      <Testimonials />
      <Contact />
      <FAQ />
    </Layout>
  );
}

export default App;
