import { motion } from 'motion/react';
import { UtensilsCrossed } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1512058560366-cd2427ff1141?auto=format&fit=crop&w=1920&q=80" 
          alt="Persian Feast" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-somaq-red/90 via-somaq-red/70 to-somaq-red"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-12"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 bg-somaq-red rounded-full flex items-center justify-center mx-auto shadow-2xl border-4 border-white mb-8">
              <span className="text-white font-serif font-bold text-xl md:text-2xl tracking-widest uppercase">Somaq</span>
            </div>
            <span className="text-somaq-gold uppercase tracking-[0.5em] text-xs font-bold block drop-shadow-lg">
              Experience the Soul of Persia
            </span>
          </motion.div>
          
          <h1 className="text-7xl md:text-[10rem] font-serif font-bold mb-8 leading-none tracking-tighter text-white drop-shadow-2xl">
            SOMAQ <br />
            <span className="serif-italic font-light text-somaq-gold italic">Kitchen</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-16 font-light leading-relaxed drop-shadow-md">
            Authentic Persian cuisine in the heart of Dubai. <br />
            <span className="text-white/60 text-lg italic">Where every dish is a masterpiece of tradition.</span>
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <button className="bg-somaq-gold text-somaq-red px-14 py-5 rounded-full text-sm font-bold tracking-[0.3em] uppercase hover:bg-white hover:scale-105 transition-all duration-500 shadow-2xl shadow-black/40">
              Explore Menu
            </button>
            <button className="border-2 border-white/40 px-14 py-5 rounded-full text-sm font-bold tracking-[0.3em] uppercase hover:border-somaq-gold hover:text-somaq-gold transition-all duration-500">
              Our Story
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-16 bg-gradient-to-b from-white to-transparent"
        ></motion.div>
      </div>
    </section>
  );
}
