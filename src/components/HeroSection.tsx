import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-construction.jpg';

const HeroSection = () => {
  const stats = [
    { value: '150+', label: 'Projects Completed' },
    { value: '5021+', label: 'Happy Clients' },
    { value: '201+', label: 'Expert Workers' },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      {/* Diagonal Stripe Pattern */}
      <div className="absolute inset-0 stripe-pattern opacity-20" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              #1 Builder Company
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Building Your <span className="text-secondary">Dreams</span> Into Reality
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg">
              We analyze each plan and offer optimal solutions. With 25+ years of experience, 
              we deliver world-class construction services that exceed expectations.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button variant="hero" size="xl">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                <Play className="w-5 h-5" />
                Watch Video
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/70 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Diagonal Shape */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" 
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} 
      />
    </section>
  );
};

export default HeroSection;
