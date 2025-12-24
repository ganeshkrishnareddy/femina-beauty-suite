import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Instagram, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    content: 'Shop No.06, Building No.1, Krishna Kunj Building, Andheri (E), MHADA Complex, Chandivali, Powai, Mumbai, Maharashtra 400072',
    action: {
      label: 'Get Directions',
      href: 'https://maps.app.goo.gl/RR7X492N4tJ3h67o9',
    },
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+91 98926 57380',
    action: {
      label: 'Call Now',
      href: 'tel:+919892657380',
    },
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: '10:30 AM – 9:00 PM (All Days)',
    action: null,
  },
  {
    icon: Instagram,
    title: 'Follow Us',
    content: '@feminamakeover1',
    action: {
      label: 'Follow on Instagram',
      href: 'https://instagram.com/feminamakeover1',
    },
  },
];

const Contact = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Femina Beauty Parlour 👋\nI'd like to get in touch with you."
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
              Get in Touch
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Have questions about our services or want to book an appointment? 
              We're here to help! Reach out to us through any of the channels below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-all duration-500 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {info.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                  {info.content}
                </p>
                {info.action && (
                  <a
                    href={info.action.href}
                    target={info.action.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <Button variant="outline" size="sm" className="w-full">
                      {info.action.label}
                    </Button>
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#25D366]/10 to-[#128C7E]/10 rounded-2xl p-8 md:p-12 text-center mb-16"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#25D366] flex items-center justify-center">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Quick Response via WhatsApp
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              For the fastest response, message us directly on WhatsApp. 
              We typically reply within minutes!
            </p>
            <Button variant="whatsapp" size="xl" onClick={handleWhatsApp}>
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </Button>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              badge="Location"
              title="Find Us Here"
              subtitle="Visit our salon in Andheri East, Mumbai. We're conveniently located in the MHADA Complex."
            />

            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3769.8458773431357!2d72.8973076!3d19.1144161!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c62b978ad0e1%3A0xe11b7eb479f1f5af!2sFemina%20Beauty%20Parlour%20%26%20academy!5e0!3m2!1sen!2sin!4v1766574400921!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Femina Beauty Parlour Location"
              />
            </div>
          </motion.div>
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
              Ready to Book Your Appointment?
            </h2>
            <p className="font-body text-lg text-background/70 mb-8 max-w-2xl mx-auto">
              Skip the wait and book your appointment online. Choose your preferred 
              date, time, and service.
            </p>
            <Button variant="gold" size="xl" asChild>
              <a href="/booking">Book Online Now</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
