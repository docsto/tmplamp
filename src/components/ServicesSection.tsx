import { motion } from 'framer-motion';
import { Building2, Hammer, Home, HardHat, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import serviceRenovation from '@/assets/service-renovation.jpg';
import serviceConstruction from '@/assets/service-construction.jpg';
import servicePlanning from '@/assets/service-planning.jpg';

const ServicesSection = () => {
  const services = [
    {
      icon: Hammer,
      title: 'Renovation',
      description: 'Complete home and commercial renovation services with attention to detail and quality craftsmanship.',
      image: serviceRenovation,
    },
    {
      icon: Building2,
      title: 'Construction',
      description: 'Full-scale commercial and residential construction from foundation to final touches.',
      image: serviceConstruction,
    },
    {
      icon: Home,
      title: 'Planning & Design',
      description: 'Expert architectural planning and design services to bring your vision to life.',
      image: servicePlanning,
    },
  ];

  const serviceAreas = [
    {
      icon: Hammer,
      title: 'Builder Demolition',
      description: 'Safe and efficient demolition services with proper waste management and site cleanup.',
    },
    {
      icon: Home,
      title: 'Laminate Flooring',
      description: 'Professional flooring installation with premium materials and expert craftsmanship.',
    },
    {
      icon: HardHat,
      title: 'House Renovation',
      description: 'Transform your living space with our comprehensive renovation solutions.',
    },
    {
      icon: Building2,
      title: 'General Contracting',
      description: 'End-to-end project management for all your construction needs.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold uppercase tracking-wider">Our Services</span>
          <h2 className="section-title mt-2">
            We Will Satisfy You By<br />Our Servicing Plan
          </h2>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card rounded-lg overflow-hidden shadow-card hover:shadow-lg-custom transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors duration-300" />
              </div>
              <div className="p-6">
                <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center -mt-12 mb-4 relative z-10 shadow-gold">
                  <service.icon className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <a href="#" className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all duration-300">
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Areas */}
        <motion.div
          id="why-choose-us"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-muted rounded-2xl p-8 md:p-12 scroll-mt-24"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary font-semibold uppercase tracking-wider">Why Choose Us</span>
              <h2 className="section-title mt-2 mb-6">
                We Have Many Areas Of Servicing Sector
              </h2>
              <p className="text-muted-foreground mb-8">
                With decades of experience and a team of skilled professionals, we provide 
                comprehensive construction and renovation services tailored to your needs.
              </p>
              <Button variant="navy" size="lg">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-xl shadow-card hover:shadow-lg-custom transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors duration-300">
                    <area.icon className="w-6 h-6 text-secondary group-hover:text-secondary-foreground transition-colors duration-300" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{area.title}</h4>
                  <p className="text-muted-foreground text-sm">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
