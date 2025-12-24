import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Academy', path: '/academy' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Only use light variant on homepage when not scrolled
  const isHomepage = location.pathname === '/';
  const useLightVariant = isHomepage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-lg shadow-elegant py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Logo variant={useLightVariant ? 'light' : 'default'} />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-sm font-medium link-underline transition-colors ${
                  useLightVariant 
                    ? location.pathname === link.path
                      ? 'text-gold'
                      : 'text-background/90 hover:text-gold'
                    : location.pathname === link.path
                      ? 'text-primary'
                      : 'text-foreground/80 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://instagram.com/feminamakeover1"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${useLightVariant ? 'text-background/80 hover:text-gold' : 'text-foreground/70 hover:text-primary'}`}
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="tel:+919892657380" 
              className={`transition-colors ${useLightVariant ? 'text-background/80 hover:text-gold' : 'text-foreground/70 hover:text-primary'}`}
            >
              <Phone className="w-5 h-5" />
            </a>
            <Link to="/booking">
              <Button variant="gold" size="default">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 ${useLightVariant ? 'text-background' : 'text-foreground'}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background/98 backdrop-blur-lg border-t border-border"
          >
            <div className="container-wide py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`block py-2 font-body text-lg font-medium transition-colors ${
                        location.pathname === link.path
                          ? 'text-primary'
                          : 'text-foreground/80 hover:text-primary'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="pt-4 border-t border-border"
                >
                  <Link to="/booking" className="block">
                    <Button variant="gold" className="w-full">
                      Book Appointment
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
