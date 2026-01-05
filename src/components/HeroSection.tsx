import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase } from 'lucide-react';
import heroVideo from '@/assets/hero-construction-video.mp4';

const HeroSection = () => {
  const stats = [
    { value: '150+', label: 'Проектов завершено' },
    { value: '5021+', label: 'Довольных клиентов' },
    { value: '201+', label: 'Экспертов в команде' },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
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
              Проектная компания №1
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Проектируем как надо. <span className="text-secondary">Чтобы строить уверенно</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg">
              Создаём проекты, которые понятны, продуманы и доведены до результата в срок. Гарантируем системный контроль и полную прозрачность на каждом этапе — от частного строительства до промышленных объектов.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">
                  Рассчитать проект
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#why-choose-us">
                  <Briefcase className="w-5 h-5" />
                  Смотреть кейсы
                </a>
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
