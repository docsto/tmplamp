import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold text-primary-foreground">
                Build<span className="text-secondary">entia</span>
              </span>
            </a>
            <p className="text-primary-foreground/70 mb-6">
              Building your dreams into reality since 1999. We are committed to excellence 
              in construction and renovation services.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300 text-primary-foreground"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-primary-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Services', 'Projects', 'Our Team', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-primary-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {['Home Construction', 'Commercial Building', 'Renovation', 'Interior Design', 'Project Planning'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-primary-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <span className="text-primary-foreground/70">
                  123 Builder Street, Construction Ave,<br />New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <a href="tel:+18002503899" className="text-primary-foreground/70 hover:text-secondary transition-colors duration-300">
                  +1 800 250 389
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <a href="mailto:info@buildentia.com" className="text-primary-foreground/70 hover:text-secondary transition-colors duration-300">
                  info@buildentia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/70 text-sm">
            © {new Date().getFullYear()} Buildentia. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shadow-gold hover:bg-gold-dark transition-colors duration-300 z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6 text-secondary-foreground" />
      </button>
    </footer>
  );
};

export default Footer;
