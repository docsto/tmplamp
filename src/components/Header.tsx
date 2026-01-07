import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Для бизнеса', href: '#why-choose-us' },
    { label: 'Частным клиентам', href: '#testimonials' },
    { label: 'Услуги', href: '#services' },
    { label: 'Процесс', href: '#about' },
    { label: 'Контакты', href: '#contact' },
  ];

  return (
    <header className="w-full z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-secondary" />
              <span>+1 800 250 389</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-secondary" />
              <span>info@buildentia.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-secondary" />
              <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-secondary" />
              <span>123 Builder Street, NY</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background shadow-card py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <img src={logo} alt="Логотип" className="h-10 w-auto" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground font-medium hover:text-secondary transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button variant="hero" size="lg">
                Get a Quote
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-primary p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4 border-t border-border"
            >
              <div className="flex flex-col gap-4 pt-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-foreground font-medium hover:text-secondary transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button variant="hero" size="lg" className="mt-4">
                  Get a Quote
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
