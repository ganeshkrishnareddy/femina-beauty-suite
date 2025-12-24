import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  children?: ReactNode;
}

const SectionHeading = ({ badge, title, subtitle, centered = true, children }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full font-body text-sm font-medium mb-4">
          {badge}
        </span>
      )}
      
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      
      {subtitle && (
        <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      
      {children}
      
      {/* Decorative line */}
      <div className="flex items-center justify-center gap-2 mt-6">
        <span className="w-12 h-px bg-primary/30" />
        <span className="w-2 h-2 rounded-full bg-gold" />
        <span className="w-12 h-px bg-primary/30" />
      </div>
    </motion.div>
  );
};

export default SectionHeading;
