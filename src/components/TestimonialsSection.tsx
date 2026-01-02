import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import teamMember1 from '@/assets/team-member-1.jpg';
import teamMember2 from '@/assets/team-member-2.jpg';
import teamMember3 from '@/assets/team-member-3.jpg';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Robert Johnson',
      role: 'Homeowner',
      image: teamMember1,
      content: 'Buildentia transformed our outdated house into our dream home. Their attention to detail and professionalism exceeded our expectations. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Sarah Williams',
      role: 'Business Owner',
      image: teamMember2,
      content: 'The team at Buildentia delivered our commercial project on time and within budget. Their expertise in construction management is unparalleled.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Property Developer',
      image: teamMember3,
      content: 'We have worked with many contractors, but Buildentia stands out. Their quality of work and customer service is exceptional. A trusted partner for all our projects.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 stripe-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-2">
            We Have Many Satisfied Clients
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-lg-custom relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 right-8">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-gold">
                  <Quote className="w-6 h-6 text-secondary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-secondary"
                />
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
