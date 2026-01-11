import { Phone, Mail, ArrowUp } from 'lucide-react';
import logo from '@/assets/logo.svg';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Услуги', href: '#services' },
    { label: 'Портфолио', href: '#portfolio' },
    { label: 'Процесс', href: '#process' },
    { label: 'Контакты', href: '#contact' },
  ];

  return (
    <footer className="bg-primary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center mb-4">
              <img src={logo} alt="АртМонолитПроект" className="h-8 w-auto brightness-0 invert" />
            </a>
            <p className="text-secondary font-medium text-lg mb-4">
              Проектируем как надо
            </p>
            <p className="text-primary-foreground/70">
              Проектная организация первой категории. Полный цикл проектирования для бизнеса и частных клиентов.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-bold text-primary-foreground mb-6">Навигация</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-secondary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-primary-foreground mb-6">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <a 
                  href="tel:+77053210526" 
                  className="text-primary-foreground/70 hover:text-secondary transition-colors duration-300"
                >
                  8-705-321-05-26
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <a 
                  href="mailto:amp_sko@mail.ru" 
                  className="text-primary-foreground/70 hover:text-secondary transition-colors duration-300"
                >
                  amp_sko@mail.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-primary-foreground/70 text-sm text-center">
            © 2026 ТОО «АртМонолитПроект». Все права защищены.
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shadow-gold hover:bg-gold-dark transition-colors duration-300 z-50"
        aria-label="Наверх"
      >
        <ArrowUp className="w-6 h-6 text-secondary-foreground" />
      </button>
    </footer>
  );
};

export default Footer;
