import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

const objectTypes = [
  { value: '', label: 'Выберите тип объекта' },
  { value: 'industrial', label: 'Промышленный' },
  { value: 'commercial', label: 'Коммерческий' },
  { value: 'residential', label: 'Частный дом' },
  { value: 'renovation', label: 'Реконструкция' }
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    objectType: '',
    comment: ''
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyAccepted) {
      alert('Пожалуйста, примите политику конфиденциальности');
      return;
    }
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Готовы обсудить ваш проект?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="bg-card rounded-xl p-6 shadow-lg space-y-6">
              {/* Phone */}
              <a 
                href="tel:+77053210526" 
                className="flex items-center gap-4 group hover:bg-muted/50 p-3 -m-3 rounded-lg transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Телефон</p>
                  <p className="text-foreground font-semibold text-lg group-hover:text-primary transition-colors">
                    8-705-321-05-26
                  </p>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:amp_sko@mail.ru" 
                className="flex items-center gap-4 group hover:bg-muted/50 p-3 -m-3 rounded-lg transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Email</p>
                  <p className="text-foreground font-semibold text-lg group-hover:text-primary transition-colors">
                    amp_sko@mail.ru
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-4 p-3 -m-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Адрес</p>
                  <p className="text-foreground font-semibold">
                    г. Петропавловск, ул. Пушкина, д. 134А
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-4 p-3 -m-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Режим работы</p>
                  <p className="text-foreground font-semibold">
                    Пн - Пт: 09:00 - 18:00
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-border">
                <p className="text-muted-foreground text-sm mb-3">Мы в соцсетях</p>
                <div className="flex gap-3">
                  <a 
                    href="https://wa.me/77053210526" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#25D366] rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                  >
                    <MessageCircle className="w-5 h-5 text-white" />
                  </a>
                  <a 
                    href="https://t.me/+77053210526" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#0088cc] rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                  >
                    <Send className="w-5 h-5 text-white" />
                  </a>
                  <a 
                    href="mailto:amp_sko@mail.ru"
                    className="w-10 h-10 bg-[#FF6600] rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-card rounded-xl overflow-hidden shadow-lg h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.5!2d69.1567!3d54.8756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43afd95a0e4f0001%3A0x1234567890abcdef!2z0YPQuy4g0J_Rg9GI0LrQuNC90LAsINC00L7QvCAxMzTQkCwg0J_QtdGC0YDQvtC_0LDQstC70L7QstGB0Lo!5e0!3m2!1sru!2skz!4v1635959481000!5m2!1sru!2skz"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Офис АртМонолитПроект"
              />
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-primary rounded-xl p-8 lg:p-10 shadow-lg h-full">
              <h3 className="text-2xl font-bold text-primary-foreground mb-6">
                Получите предварительную оценку проекта
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-primary-foreground/80 text-sm mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:border-secondary focus:outline-none transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-primary-foreground/80 text-sm mb-2">
                    Телефон <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (___) ___-__-__"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:border-secondary focus:outline-none transition-colors"
                  />
                </div>

                {/* Object Type */}
                <div>
                  <label className="block text-primary-foreground/80 text-sm mb-2">
                    Тип объекта
                  </label>
                  <select
                    name="objectType"
                    value={formData.objectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 focus:border-secondary focus:outline-none transition-colors appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      backgroundSize: '1.5rem'
                    }}
                  >
                    {objectTypes.map(type => (
                      <option 
                        key={type.value} 
                        value={type.value}
                        className="bg-primary text-primary-foreground"
                      >
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Comment */}
                <div>
                  <label className="block text-primary-foreground/80 text-sm mb-2">
                    Комментарий
                  </label>
                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Опишите ваш проект..."
                    className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:border-secondary focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Privacy Policy */}
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="privacy"
                    checked={privacyAccepted}
                    onCheckedChange={(checked) => setPrivacyAccepted(checked as boolean)}
                    className="mt-0.5 border-primary-foreground/30 data-[state=checked]:bg-secondary data-[state=checked]:border-secondary"
                  />
                  <label 
                    htmlFor="privacy" 
                    className="text-primary-foreground/70 text-sm leading-relaxed cursor-pointer"
                  >
                    Я согласен с{' '}
                    <a href="#" className="text-secondary hover:underline">
                      политикой конфиденциальности
                    </a>{' '}
                    и даю согласие на обработку персональных данных
                  </label>
                </div>

                {/* Submit Button */}
                <Button 
                  variant="hero" 
                  size="lg" 
                  type="submit" 
                  className="w-full mt-6"
                  disabled={!privacyAccepted}
                >
                  Заказать проект
                  <Send className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
