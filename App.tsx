import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Industries from './components/Industries';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import Parallax from './components/Parallax';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-background text-text selection:bg-primary/30 selection:text-white relative overflow-x-hidden">
      
      {/* Global Background Parallax Layer */}
      {/* Changed from fixed to absolute within Parallax to allow movement */}
      <Parallax speed={0.5} maxOffset={200} className="absolute top-0 left-0 w-full h-[140vh] z-0 pointer-events-none overflow-hidden">
         {/* Urthly Ambient Glows (Green/Zinc) */}
         <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] animate-blob"></div>
         <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
         <div className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] bg-zinc-800/10 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
      </Parallax>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Industries />
          <Features />
          <Pricing />
          <Testimonials />
          <FAQ />
          <BookingForm />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;