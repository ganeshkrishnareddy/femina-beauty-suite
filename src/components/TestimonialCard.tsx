import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  review: string;
  rating: number;
  service: string;
  delay?: number;
}

const TestimonialCard = ({ name, review, rating, service, delay = 0 }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-500"
    >
      {/* Quote Icon */}
      <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
        <Quote className="w-5 h-5 text-primary-foreground" />
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? 'fill-gold text-gold' : 'text-muted-foreground/30'
            }`}
          />
        ))}
      </div>

      {/* Review */}
      <p className="font-body text-foreground/80 leading-relaxed mb-6 italic">
        "{review}"
      </p>

      {/* Author */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-foreground">{name}</p>
          <p className="font-body text-sm text-muted-foreground">{service}</p>
        </div>
      </div>

      {/* Decorative */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-full" />
    </motion.div>
  );
};

export default TestimonialCard;
