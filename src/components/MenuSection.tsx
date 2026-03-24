import { motion } from 'motion/react';
import { menuItems } from '../data';
import { ShoppingBag } from 'lucide-react';

export default function MenuSection() {
  return (
    <section id="menu" className="py-32 bg-somaq-red text-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/40 uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block"
          >
            Discover Our Flavors
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif font-bold leading-none mb-6"
          >
            Signature <span className="serif-italic font-light text-somaq-gold">Menu</span>
          </motion.h2>
          <div className="w-24 h-1 bg-somaq-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-somaq-gold/20 transition-all duration-500 border border-white/10"
            >
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-somaq-red/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-bold tracking-tight text-white">{item.name}</h3>
                  <span className="text-sm font-bold text-somaq-gold">{item.price}</span>
                </div>
                <p className="text-xs text-white/60 leading-relaxed font-light line-clamp-2 mb-4">
                  {item.description}
                </p>
                <button className="w-full py-2 border border-somaq-gold/40 rounded-lg text-[10px] uppercase tracking-widest font-bold text-somaq-gold hover:bg-somaq-gold hover:text-somaq-red transition-all duration-300">
                  Add to Order
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
