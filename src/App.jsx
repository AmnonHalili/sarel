import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Process from './components/Process';
import USP from './components/USP';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Intro />
      <Process />
      <USP />
      <Testimonials />
      <FAQ />
      <Contact />
    </Layout>
  );
}

export default App;
