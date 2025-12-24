import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import heroBridal from '@/assets/hero-bridal.jpg';
import academyImg from '@/assets/academy.jpg';
import founderImg from '@/assets/founder.jpg';

const categories = ['All', 'Bridal', 'Makeup', 'Hair', 'Nails', 'Academy'];

const galleryItems = [
  { src: heroBridal, category: 'Bridal', title: 'Bridal Makeup Session' },
  { src: gallery1, category: 'Bridal', title: 'Traditional Bridal Look' },
  { src: gallery2, category: 'Hair', title: 'Elegant Updo' },
  { src: gallery3, category: 'Nails', title: 'Creative Nail Art' },
  { src: academyImg, category: 'Academy', title: 'Training Session' },
  { src: founderImg, category: 'Makeup', title: 'Glamour Makeup' },
  { src: gallery1, category: 'Makeup', title: 'Party Makeup' },
  { src: gallery2, category: 'Hair', title: 'Hair Styling' },
  { src: heroBridal, category: 'Bridal', title: 'Bridal Preparation' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full font-body text-sm font-medium mb-4">
              Our Work
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Beauty Gallery
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Browse through our portfolio of stunning transformations, bridal looks, 
              and creative artistry. Each image tells a story of beauty and confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container-wide">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={`${item.title}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative aspect-square rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant cursor-pointer"
                  onClick={() => setSelectedImage(item.src)}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-gold/90 text-gold-foreground rounded-full text-xs font-medium mb-2">
                      {item.category}
                    </span>
                    <p className="font-display text-xl font-semibold text-background">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 bg-foreground">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-background mb-6">
              Follow Us on Instagram
            </h2>
            <p className="font-body text-lg text-background/70 mb-8 max-w-2xl mx-auto">
              Stay updated with our latest work, behind-the-scenes, and beauty tips.
            </p>
            <a
              href="https://instagram.com/feminamakeover1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-xl font-body font-semibold hover:opacity-90 transition-opacity"
            >
              @feminamakeover1
            </a>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Gallery preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-background/70 hover:text-background text-4xl"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Gallery;
