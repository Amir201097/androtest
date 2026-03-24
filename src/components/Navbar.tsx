import { motion } from 'motion/react';
import { UtensilsCrossed } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-somaq-red/95 backdrop-blur-md px-8 py-4 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-14 h-14 bg-somaq-red rounded-full flex items-center justify-center shadow-lg border-2 border-white">
            <span className="text-white font-serif font-bold text-xs tracking-tighter uppercase">Somaq</span>
          </div>
          <span className="text-3xl font-serif font-bold tracking-[0.1em] uppercase text-white drop-shadow-md">Somaq</span>
        </motion.div>
        
        <div className="hidden md:flex gap-10 items-center text-[11px] uppercase tracking-[0.3em] font-bold">
          <a href="#about" className="text-white/80 hover:text-somaq-gold transition-colors">About</a>
          <a href="#menu" className="text-white/80 hover:text-somaq-gold transition-colors">Menu</a>
          <a href="#reviews" className="text-white/80 hover:text-somaq-gold transition-colors">Reviews</a>
          <a href="#contact" className="text-white/80 hover:text-somaq-gold transition-colors">Contact</a>
          <button className="bg-somaq-gold text-somaq-red px-10 py-3 rounded-full hover:bg-white transition-all duration-300 shadow-xl ml-4">
            Order Now
          </button>
        </div>
      </div>
    </nav>
  );
}
