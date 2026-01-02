import { motion } from 'framer-motion';
import { Play, Award, Users, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import aboutWorker from '@/assets/about-worker.jpg';

const AboutSection = () => {
  const features = [
    'Professional & Experienced Team',
    'Quality Materials & Craftsmanship',
    'On-Time Project Delivery',
    'Competitive Pricing',
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg-custom">
              <img 
                src={aboutWorker} 
                alt="Construction worker" 
                className="w-full h-auto object-cover"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center shadow-gold animate-pulse-soft"
                >
                  <Play className="w-8 h-8 text-secondary-foreground ml-1" />
                </motion.button>
              </div>
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-2xl shadow-gold"
            >
              <div className="text-4xl font-bold">25+</div>
              <div className="text-sm font-medium">Years Experience</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-semibold uppercase tracking-wider">About Us</span>
            <h2 className="section-title mt-2 mb-6">
              We Are Giving You A Chance To Build Your Dream
            </h2>
            <p className="text-muted-foreground mb-6">
              For over 25 years, we have been transforming visions into reality. Our team of 
              skilled professionals combines traditional craftsmanship with modern techniques 
              to deliver exceptional construction solutions.
            </p>
            <p className="text-muted-foreground mb-8">
              Whether it's a residential renovation or a commercial development, we approach 
              every project with dedication, precision, and an unwavering commitment to quality.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Learn More About Us
            </Button>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 bg-primary rounded-2xl p-8"
        >
          {[
            { icon: Award, value: '150+', label: 'Awards Won' },
            { icon: Users, value: '5000+', label: 'Happy Clients' },
            { icon: Clock, value: '25+', label: 'Years Experience' },
            { icon: CheckCircle, value: '500+', label: 'Projects Done' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-10 h-10 text-secondary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary-foreground mb-1">{stat.value}</div>
              <div className="text-primary-foreground/70 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
