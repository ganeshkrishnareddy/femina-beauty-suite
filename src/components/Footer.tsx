import { Link } from 'react-router-dom';
import { Instagram, Phone, MapPin, Clock, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-3xl font-bold text-background">
                Femina
              </span>
            </Link>
            <p className="text-background/70 font-body text-sm leading-relaxed mb-6">
              Your destination for bridal makeup, beauty services & professional beauty courses in Mumbai.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/feminamakeover1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="tel:+919892657380"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Academy', path: '/academy' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Book Appointment', path: '/booking' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary transition-colors font-body text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Bridal Makeup',
                'Party Makeup',
                'Hair Styling',
                'Skin Treatments',
                'Nail Art',
              ].map((service) => (
                <li key={service}>
                  <span className="text-background/70 font-body text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/70 font-body text-sm">
                  Shop No.06, Building No.1, Krishna Kunj Building,
                  Andheri (E), MHADA Complex, Chandivali, Powai,
                  Mumbai, Maharashtra 400072
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+919892657380"
                  className="text-background/70 hover:text-primary transition-colors font-body text-sm"
                >
                  +91 98926 57380
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-background/70 font-body text-sm">
                  10:30 AM – 9:00 PM (All days)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/50 font-body text-sm text-center md:text-left">
              © {new Date().getFullYear()} Femina Beauty Parlour & Academy. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-background/50 font-body text-sm">⭐ 4.7</span>
                <span className="text-background/30">|</span>
                <span className="text-background/50 font-body text-sm">237+ Reviews</span>
              </div>
              <span className="text-background/30">|</span>
              <a 
                href="https://progvision.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/50 hover:text-primary transition-colors font-body text-sm"
              >
                Developed by ProgVision
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
