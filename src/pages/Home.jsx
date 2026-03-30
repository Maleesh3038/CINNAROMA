import React from 'react';

const Home = () => {
  return (
    <div className="bg-black text-white">
      
      {/* 1. Hero Section - Branding and Main Message */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-b from-zinc-900 to-black border-b border-yellow-900/30">
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-yellow-500 mb-4 tracking-tight">
            CINNAROMA
          </h1>
          <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto mb-8 font-light italic">
            "The Golden Essence of Authentic Ceylon Cinnamon"
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-yellow-600 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full transition-all">
              Shop Now
            </button>
            <button className="border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black font-bold py-3 px-8 rounded-full transition-all">
              Our Story
            </button>
          </div>
        </div>
      </section>

      {/* 2. Featured Categories - Sticks, Powder, Tea */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-serif text-center mb-12 text-yellow-500">Our Premium Selection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Category Cards (Empty Shells) */}
          {['Cinnamon Sticks', 'Pure Powder', 'Cinnamon Tea'].map((cat) => (
            <div key={cat} className="group relative overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 p-8 hover:border-yellow-600/50 transition-all text-center">
              <div className="w-20 h-20 bg-yellow-600/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                {/* Icon Placeholder */}
                <div className="w-10 h-10 border-2 border-yellow-600 rounded-sm italic text-yellow-600 font-bold">C</div>
              </div>
              <h3 className="text-xl font-bold mb-2">{cat}</h3>
              <p className="text-stone-500 text-sm mb-4">Export quality authentic Sri Lankan {cat}.</p>
              <button className="text-yellow-600 font-semibold hover:underline">View Products →</button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. About / Article Teaser Section */}
      <section className="bg-zinc-950 py-20 border-y border-zinc-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="aspect-video bg-zinc-800 rounded-lg shadow-2xl flex items-center justify-center text-zinc-600 italic">
              [Image Placeholder: Cinnamon Plantation]
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-serif text-yellow-500 mb-6">Why CINNAROMA?</h2>
            <p className="text-stone-400 mb-6 leading-relaxed">
              Based in the heart of Southern Sri Lanka, we bring you the finest cinnamon with a legacy of quality. 
              Learn about the health benefits and our traditional processing methods.
            </p>
            <button className="text-white border-b-2 border-yellow-600 pb-1 hover:text-yellow-500 transition-colors">
              Read Our Blog Articles
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;