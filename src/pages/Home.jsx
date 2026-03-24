import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Metrics from '../components/Metrics';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Metrics />
      <Contact />
    </>
  );
};

export default Home;
