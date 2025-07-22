import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import CrashCourse from './components/CrashCourse';
import DemoVideos from './components/DemoVideos';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Courses />
      <CrashCourse />
      <Stats />
      <DemoVideos />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;