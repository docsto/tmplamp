import { motion } from 'framer-motion';
import { Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary rounded-2xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            {/* Map/Image Side */}
            <div className="relative min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1635959481000!5m2!1sen!2s"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Location map"
              />
              <div className="absolute inset-0 bg-primary/20" />
            </div>

            {/* Form Side */}
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                Contact us for any kind of help at any time...
              </h3>
              <p className="text-primary-foreground/70 mb-8">
                We are here to answer any questions you may have about our services.
              </p>

              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:border-secondary focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:border-secondary focus:outline-none transition-colors"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:border-secondary focus:outline-none transition-colors"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:border-secondary focus:outline-none transition-colors resize-none"
                />
                <Button variant="hero" size="lg" type="submit" className="w-full sm:w-auto">
                  Send Message
                  <Send className="w-5 h-5" />
                </Button>
              </form>

              {/* Contact Info */}
              <div className="grid sm:grid-cols-2 gap-6 mt-8 pt-8 border-t border-primary-foreground/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/70 text-sm">Phone</p>
                    <p className="text-primary-foreground font-semibold">+1 800 250 389</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/70 text-sm">Email</p>
                    <p className="text-primary-foreground font-semibold">info@buildentia.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
