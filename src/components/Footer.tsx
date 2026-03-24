import { motion } from 'motion/react';
import { Instagram, Facebook, Phone, MapPin, Mail, UtensilsCrossed } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/40 pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="text-somaq-gold w-8 h-8" />
              <span className="text-3xl font-serif font-bold tracking-widest uppercase text-white">Somaq</span>
            </div>
            <p className="text-white/60 leading-relaxed font-light">
              Authentic Persian cuisine recently opened in Dubai. 
              We bring the true flavors of Iran to your table with 
              passion and tradition.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-somaq-gold hover:text-somaq-red transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-somaq-gold hover:text-somaq-red transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-somaq-gold font-bold uppercase tracking-[0.2em] text-sm mb-8">Contact Us</h4>
            <ul className="space-y-6 text-white/70">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-somaq-gold shrink-0" />
                <span>Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-somaq-gold shrink-0" />
                <span>+971 50 123 4567</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-somaq-gold shrink-0" />
                <span>hello@somaqkitchen.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-somaq-gold font-bold uppercase tracking-[0.2em] text-sm mb-8">Opening Hours</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex justify-between">
                <span>Mon - Thu</span>
                <span className="text-white font-medium">12:00 PM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Fri - Sat</span>
                <span className="text-white font-medium">12:00 PM - 12:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white font-medium">1:00 PM - 11:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-somaq-gold font-bold uppercase tracking-[0.2em] text-sm mb-8">Newsletter</h4>
            <p className="text-white/60 mb-6 text-sm">Subscribe to receive updates and special offers.</p>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-somaq-gold transition-colors"
              />
              <button className="w-full bg-somaq-gold text-somaq-red font-bold py-3 rounded-xl hover:bg-white transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center text-white/30 text-xs uppercase tracking-[0.3em]">
          &copy; 2026 Somaq Kitchen Dubai. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
