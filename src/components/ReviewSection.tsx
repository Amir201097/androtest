import { motion } from 'motion/react';
import { reviews } from '../data';
import { Star } from 'lucide-react';

export default function ReviewSection() {
  return (
    <section id="reviews" className="py-32 bg-somaq-red relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-somaq-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block"
          >
            Guest Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif font-bold text-white leading-none"
          >
            What Our <span className="serif-italic font-light text-somaq-gold">Guests</span> Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-3xl relative group hover:bg-white/10 transition-all duration-500 shadow-2xl"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-somaq-gold text-somaq-gold" />
                ))}
              </div>
              
              <p className="text-2xl md:text-3xl text-white/90 leading-snug mb-12 font-serif font-light tracking-tight italic">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-somaq-gold/20 flex items-center justify-center text-somaq-gold font-bold text-2xl border border-somaq-gold/30">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-[0.3em] text-xs">{review.author}</h4>
                  <span className="text-[10px] text-somaq-gold uppercase tracking-[0.2em] font-bold">Verified Guest</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
