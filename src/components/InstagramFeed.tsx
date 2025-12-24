import { motion } from 'framer-motion';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';

import insta1 from '@/assets/insta-1.jpg';
import insta2 from '@/assets/insta-2.jpg';
import insta3 from '@/assets/insta-3.jpg';
import insta4 from '@/assets/insta-4.jpg';
import insta5 from '@/assets/insta-5.jpg';
import insta6 from '@/assets/insta-6.jpg';

const instaPosts = [
  { image: insta1, likes: 234, comments: 18, caption: 'Bridal Makeup ✨' },
  { image: insta2, likes: 189, comments: 12, caption: 'Party Glam 💄' },
  { image: insta3, likes: 312, comments: 24, caption: 'Hair Styling 💐' },
  { image: insta4, likes: 156, comments: 9, caption: 'Nail Art 💅' },
  { image: insta5, likes: 278, comments: 21, caption: 'Academy Class 📚' },
  { image: insta6, likes: 445, comments: 32, caption: 'Festive Look 🪔' },
];

const InstagramFeed = () => {
  return (
    <section className="section-padding bg-gradient-hero">
      <div className="container-wide">
        <SectionHeading
          badge="Follow Us"
          title="@feminamakeover1"
          subtitle="Follow us on Instagram for daily beauty inspiration, tutorials, and behind-the-scenes content."
        />

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {instaPosts.map((post, index) => (
            <motion.a
              key={index}
              href="https://instagram.com/feminamakeover1"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-square rounded-xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                {/* Stats */}
                <div className="flex items-center gap-6 text-background">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 fill-background" />
                    <span className="font-body font-semibold">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-body font-semibold">{post.comments}</span>
                  </div>
                </div>
                
                {/* Caption */}
                <p className="font-body text-sm text-background/90 text-center px-4">
                  {post.caption}
                </p>
              </div>

              {/* Instagram Icon Badge */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink className="w-4 h-4 text-background" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://instagram.com/feminamakeover1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default" size="lg" className="gap-2">
              <Instagram className="w-5 h-5" />
              Follow @feminamakeover1
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed;
