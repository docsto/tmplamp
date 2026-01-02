import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const plans = [
    {
      name: 'Basic Plan',
      price: '49',
      description: 'Perfect for small renovation projects',
      features: [
        'Initial Consultation',
        'Basic Project Planning',
        'Standard Materials',
        'Email Support',
        'Weekly Updates',
      ],
      featured: false,
    },
    {
      name: 'Standard Plan',
      price: '99',
      description: 'Ideal for medium-sized projects',
      features: [
        'Detailed Consultation',
        'Advanced Project Planning',
        'Premium Materials',
        'Priority Support',
        'Daily Updates',
        '3D Visualization',
      ],
      featured: true,
    },
    {
      name: 'Enterprise Plan',
      price: '199',
      description: 'For large-scale construction projects',
      features: [
        'Full-Service Consultation',
        'Complete Project Management',
        'Luxury Materials',
        '24/7 Support',
        'Real-Time Updates',
        'VR Walkthroughs',
        'Dedicated Team',
      ],
      featured: false,
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold uppercase tracking-wider">Pricing Plans</span>
          <h2 className="section-title mt-2">
            You Will Get A Good<br />Pricing From Us
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.featured 
                  ? 'bg-primary text-primary-foreground shadow-lg-custom scale-105' 
                  : 'bg-card shadow-card'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-xl font-bold mb-2 ${plan.featured ? 'text-primary-foreground' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.featured ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-5xl font-bold ${plan.featured ? 'text-secondary' : 'text-secondary'}`}>
                    ${plan.price}
                  </span>
                  <span className={plan.featured ? 'text-primary-foreground/70' : 'text-muted-foreground'}>
                    /month
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.featured ? 'bg-secondary' : 'bg-secondary/20'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.featured ? 'text-secondary-foreground' : 'text-secondary'}`} />
                    </div>
                    <span className={plan.featured ? 'text-primary-foreground' : 'text-foreground'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.featured ? 'hero' : 'navy'} 
                size="lg" 
                className="w-full"
              >
                Choose Plan
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
