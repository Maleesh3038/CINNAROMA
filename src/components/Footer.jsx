import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-yellow-500 text-xl font-serif mb-4 uppercase tracking-widest">Cinnaroma</h3>
          <p className="text-stone-500 max-w-sm leading-relaxed">
            Crafting the finest Ceylon cinnamon experiences since 2023. 
            From our gardens in Baddegama to the world's finest kitchens.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Explore</h4>
          <ul className="text-stone-500 space-y-2 text-sm">
            <li><a href="/shop" className="hover:text-yellow-500 transition-colors">Our Products</a></li>
            <li><a href="/blog" className="hover:text-yellow-500 transition-colors">Health Benefits</a></li>
            <li><a href="/contact" className="hover:text-yellow-500 transition-colors">Wholesale Inquiry</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Contact</h4>
          <p className="text-stone-500 text-sm italic">Baddegama, Galle, Sri Lanka</p>
          <p className="text-yellow-600 text-sm mt-2">info@cinnaroma.com</p>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600 uppercase tracking-widest">
        <p>© 2026 Cinnaroma. All Rights Reserved.</p>
        <p>Built with React & Tailwind</p>
      </div>
    </footer>
  );
};

export default Footer;