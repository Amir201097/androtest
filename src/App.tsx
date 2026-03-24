/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import ReviewSection from './components/ReviewSection';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <AnimatePresence>
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-somaq-red text-white selection:bg-somaq-gold selection:text-somaq-red"
      >
        <Navbar />
        <Hero />
        
        {/* About Section / Intro */}
        <section id="about" className="py-32 bg-white text-somaq-red relative overflow-hidden">
          {/* Subtle Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-somaq-red to-transparent opacity-5"></div>
          <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-8xl font-serif font-bold mb-10 leading-tight tracking-tight">
                A Taste of <span className="serif-italic text-somaq-red/40">Persia</span> <br />
                in the Heart of Dubai
              </h2>
              <p className="text-xl md:text-2xl text-somaq-red/70 leading-relaxed font-light mb-16 max-w-3xl mx-auto">
                Somaq Kitchen is more than just a restaurant; it's a celebration of Persian culture. 
                Our chefs use only the finest ingredients, from hand-picked saffron to the freshest 
                herbs, to create authentic dishes that have been perfected over generations.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                <div className="space-y-3 group">
                  <span className="text-5xl font-serif text-somaq-red block group-hover:scale-110 transition-transform">100%</span>
                  <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-somaq-red/40">Authentic</span>
                </div>
                <div className="space-y-3 group">
                  <span className="text-5xl font-serif text-somaq-red block group-hover:scale-110 transition-transform">Fresh</span>
                  <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-somaq-red/40">Ingredients</span>
                </div>
                <div className="space-y-3 group">
                  <span className="text-5xl font-serif text-somaq-red block group-hover:scale-110 transition-transform">Fast</span>
                  <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-somaq-red/40">Delivery</span>
                </div>
                <div className="space-y-3 group">
                  <span className="text-5xl font-serif text-somaq-red block group-hover:scale-110 transition-transform">Dubai</span>
                  <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-somaq-red/40">Location</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <MenuSection />
        <ReviewSection />

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-white text-somaq-red">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-none">Visit <br /><span className="serif-italic text-somaq-red/40 font-light">Us</span></h2>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-somaq-red/40 mb-2">Location</h4>
                    <p className="text-xl font-light">Downtown Dubai, UAE <br />Sheikh Mohammed bin Rashid Blvd</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-somaq-red/40 mb-2">Hours</h4>
                    <p className="text-xl font-light">Mon - Sun: 12:00 PM - 12:00 AM</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-somaq-red/40 mb-2">Contact</h4>
                    <p className="text-xl font-light">+971 4 123 4567 <br />hello@somaqkitchen.com</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80" 
                  alt="Restaurant Interior" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-somaq-gold/10"></div>
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl md:text-8xl font-serif font-bold mb-12">Ready to Taste <br /> Perfection?</h2>
            <button className="bg-somaq-gold text-somaq-red px-12 py-5 rounded-full text-xl font-bold hover:bg-white hover:scale-105 transition-all shadow-2xl shadow-black/40">
              Order Now for Delivery
            </button>
          </div>
        </section>

        <Footer />
      </motion.main>
    </AnimatePresence>
  );
}
