import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, Scissors, Palette, Droplets, Sun, Eye, Flower2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import serviceBridal from '@/assets/service-bridal.jpg';
import serviceParty from '@/assets/service-party.jpg';
import serviceHair from '@/assets/service-hair.jpg';
import serviceNails from '@/assets/service-nails.jpg';
import serviceSkin from '@/assets/service-skin.jpg';
import serviceFacial from '@/assets/service-facial.jpg';
import serviceEye from '@/assets/service-eye.jpg';
import serviceBody from '@/assets/service-body.jpg';

const services = [
  {
    title: 'Bridal Makeup',
    description: 'Your wedding day deserves perfection. Our signature bridal packages include HD makeup, airbrush techniques, and complete styling for your special day.',
    icon: Heart,
    features: ['HD & Airbrush Makeup', 'Saree/Lehenga Draping', 'Complete Styling', 'Touch-up Kit'],
    image: serviceBridal,
  },
  {
    title: 'Party Makeup',
    description: 'Look stunning for any occasion with our glamorous party makeup looks, from subtle elegance to bold and dramatic.',
    icon: Sparkles,
    features: ['Evening Glam', 'Cocktail Look', 'Reception Makeup', 'Photo Shoot Ready'],
    image: serviceParty,
  },
  {
    title: 'Hair Styling',
    description: 'Expert cuts, coloring, and styling services for all hair types. From trendy cuts to intricate bridal hairstyles.',
    icon: Scissors,
    features: ['Haircuts & Styling', 'Hair Coloring', 'Bridal Updo', 'Hair Treatments'],
    image: serviceHair,
  },
  {
    title: 'Nail Art',
    description: 'Express yourself with creative nail designs. From classic manicures to elaborate nail art and gel extensions.',
    icon: Palette,
    features: ['Manicure & Pedicure', 'Gel Extensions', 'Nail Art', 'French Tips'],
    image: serviceNails,
  },
  {
    title: 'Skin Treatments',
    description: 'Rejuvenate your skin with our professional facial treatments and skincare solutions.',
    icon: Droplets,
    features: ['Deep Cleansing Facial', 'Anti-Aging Treatment', 'Gold Facial', 'Hydra Facial'],
    image: serviceSkin,
  },
  {
    title: 'Cleanup & Facials',
    description: 'Regular skincare maintenance with our range of cleanup and facial services for glowing skin.',
    icon: Sun,
    features: ['Basic Cleanup', 'Fruit Facial', 'Pearl Facial', 'Diamond Facial'],
    image: serviceFacial,
  },
  {
    title: 'Eye Treatments',
    description: 'Enhance your eyes with professional threading, tinting, and eyelash extensions.',
    icon: Eye,
    features: ['Eyebrow Threading', 'Eyelash Extensions', 'Brow Tinting', 'Eye Makeup'],
    image: serviceEye,
  },
  {
    title: 'Body Treatments',
    description: 'Pamper yourself with our luxurious body treatments including waxing, massages, and body polishing.',
    icon: Flower2,
    features: ['Full Body Wax', 'Body Polish', 'Spa Massage', 'Bleach & D-tan'],
    image: serviceBody,
  },
];

const Services = () => {
  const handleBookService = (serviceName: string) => {
    const message = encodeURIComponent(
      `Hello Femina Beauty Parlour 👋\nI'd like to book an appointment for ${serviceName}.`
    );
    window.open(`https://wa.me/919892657380?text=${message}`, '_blank');
  };

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
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Luxury Beauty Services
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              From bridal transformations to everyday beauty treatments, we offer a complete range 
              of professional services tailored to make you look and feel your absolute best.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                  </div>
                  {/* Decorative Element */}
                  <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-2xl bg-primary/10" />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="font-body text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <ul className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 font-body text-sm text-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-4">
                    <Button
                      variant="gold"
                      size="lg"
                      onClick={() => handleBookService(service.title)}
                    >
                      Book via WhatsApp
                    </Button>
                    <Link to="/booking">
                      <Button variant="outline" size="lg">
                        Schedule Online
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Can't Find What You're Looking For?
            </h2>
            <p className="font-body text-lg text-background/70 mb-8 max-w-2xl mx-auto">
              We offer many more services! Contact us directly and we'll be happy to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+919892657380">
                <Button variant="gold" size="lg">
                  Call Us Now
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="heroOutline" size="lg" className="text-background border-background/40 hover:bg-background/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Services;
