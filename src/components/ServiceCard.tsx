import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  delay?: number;
  onBook?: () => void;
}

const ServiceCard = ({ title, description, icon: Icon, image, delay = 0, onBook }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500"
    >
      {/* Image */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-1">
              {title}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={onBook}
          className="w-full mt-2 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
        >
          Book Now
        </Button>
      </div>

      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
    </motion.div>
  );
};

export default ServiceCard;
