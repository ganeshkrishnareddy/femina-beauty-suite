import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Award, Users, Calendar, Sparkles, Heart, Scissors, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import heroBridal from '@/assets/hero-bridal.jpg';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import founderImg from '@/assets/founder.jpg';

const services = [
  {
    title: 'Bridal Makeup',
    description: 'Look stunning on your special day with our signature bridal looks.',
    icon: Heart,
  },
  {
    title: 'Party Makeup',
    description: 'Glamorous looks for any occasion, from casual to red carpet.',
    icon: Sparkles,
  },
  {
    title: 'Hair Styling',
    description: 'Expert cuts, colors, and styling for all hair types.',
    icon: Scissors,
  },
  {
    title: 'Nail Art',
    description: 'Creative nail designs from classic to contemporary.',
    icon: Palette,
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    review: 'Premaa did my bridal makeup and I looked absolutely stunning! Everyone at the wedding couldn\'t stop complimenting me. Highly recommend!',
    rating: 5,
    service: 'Bridal Makeup',
  },
  {
    name: 'Ananya Patel',
    review: 'The beauty courses here are amazing. I learned so much and now I\'m confident to start my own career as a makeup artist.',
    rating: 5,
    service: 'Makeup Course',
  },
  {
    name: 'Ritu Mehta',
    review: 'Best salon experience in Mumbai! The staff is so professional and the results are always perfect.',
    rating: 5,
    service: 'Hair Styling',
  },
];

const stats = [
  { icon: Users, value: '5000+', label: 'Happy Clients' },
  { icon: Award, value: '10+', label: 'Years Experience' },
  { icon: Star, value: '4.7', label: 'Google Rating' },
  { icon: Calendar, value: '500+', label: 'Bridal Makeovers' },
];

const Index = () => {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBridal}
            alt="Bridal Makeup by Femina"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-wide py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 backdrop-blur-sm rounded-full">
                <Star className="w-4 h-4 text-gold fill-gold" />
                <span className="text-background/90 font-body text-sm font-medium">
                  4.7 Rating • 237+ Reviews
                </span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-background mb-6 leading-tight"
            >
              Bridal Makeup
              <span className="block text-gradient-gold">Beauty Services</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-medium mt-2">
                & Professional Courses
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-lg md:text-xl text-background/80 mb-10 leading-relaxed max-w-xl"
            >
              Transform your beauty journey with Mumbai's premier beauty parlour & academy. 
              Expert bridal makeup, luxurious treatments, and certified courses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/booking">
                <Button variant="gold" size="xl">
                  Book Appointment
                </Button>
              </Link>
              <Link to="/academy">
                <Button variant="heroOutline" size="xl" className="text-background border-background/40 hover:bg-background/10">
                  View Courses
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 rounded-full border-2 border-background/40 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 rounded-full bg-background"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-hero border-y border-border">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="font-body text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            badge="Our Services"
            title="Luxury Beauty Treatments"
            subtitle="From bridal makeup to everyday beauty, we offer a complete range of services tailored to your needs."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 0.1}
                onBook={() => window.location.href = '/booking'}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-gradient-blush">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={founderImg}
                alt="Premaa - Founder & Makeup Artist"
                className="w-full max-w-md mx-auto rounded-2xl shadow-elegant"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold text-gold-foreground px-6 py-4 rounded-xl shadow-gold">
                <p className="font-display text-2xl font-bold">10+</p>
                <p className="font-body text-sm">Years Experience</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full font-body text-sm font-medium mb-4">
                About Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Meet Premaa – Your Beauty Expert
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                With over a decade of experience in the beauty industry, Premaa has transformed 
                thousands of brides and trained hundreds of aspiring makeup artists. Her passion 
                for beauty and education has made Femina Beauty Parlour & Academy a trusted name 
                in Mumbai.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                From celebrity weddings to professional beauty courses, we bring artistry, 
                expertise, and personalized care to every client.
              </p>
              <Link to="/contact">
                <Button variant="default" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            badge="Our Work"
            title="Beauty Gallery"
            subtitle="Browse through our portfolio of stunning transformations and artistry."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {[gallery1, gallery2, gallery3].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500"
              >
                <img
                  src={img}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/gallery">
              <Button variant="outline" size="lg">
                View Full Gallery
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-wide">
          <SectionHeading
            badge="Testimonials"
            title="What Our Clients Say"
            subtitle="Don't just take our word for it – hear from our happy clients."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                {...testimonial}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container-narrow relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6">
              Ready to Transform Your Look?
            </h2>
            <p className="font-body text-lg text-background/70 mb-10 max-w-2xl mx-auto">
              Book your appointment today and experience the magic of professional beauty services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/booking">
                <Button variant="gold" size="xl">
                  Book Appointment
                </Button>
              </Link>
              <a href="tel:+919892657380">
                <Button variant="heroOutline" size="xl" className="text-background border-background/40 hover:bg-background/10">
                  Call Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
