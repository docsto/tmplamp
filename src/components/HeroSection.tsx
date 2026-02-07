import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Calendar, Building2, CheckCircle2, AlertTriangle, FolderOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-construction-site.jpg';

const stats = [
  { icon: Calendar, value: '13', label: 'лет на рынке' },
  { icon: Building2, value: '350+', label: 'проектов' },
  { icon: CheckCircle2, value: '100%', label: 'положительных экспертиз' },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Строительная площадка"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Blueprint overlay — left side */}
      <div className="absolute inset-0 blueprint-overlay" />

      {/* Blueprint grid pattern */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.12]" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left content column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-extrabold text-primary-foreground leading-[1.1]">
              Проектируем как надо.
              <br />
              <span className="text-secondary">Чтобы строить уверенно</span>
            </h1>

            {/* Subtitle */}
            <p className="text-primary-foreground/80 text-base sm:text-lg max-w-lg leading-relaxed">
              Создаём проекты, которые понятны, продуманы
              и доведены до результата в срок.
            </p>

            {/* Guarantee line */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-start gap-3 bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-lg p-4"
            >
              <ShieldCheck className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
              <p className="text-primary-foreground/90 text-sm sm:text-base font-medium">
                Гарантируем системный контроль и полную прозрачность на каждом этапе
              </p>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-lg px-4 py-3"
                >
                  <stat.icon className="w-5 h-5 text-secondary flex-shrink-0" />
                  <div>
                    <span className="text-primary-foreground font-extrabold text-lg sm:text-xl leading-none">
                      {stat.value}
                    </span>
                    <span className="text-primary-foreground/70 text-xs sm:text-sm ml-1.5">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">
                  <Calendar className="w-5 h-5" />
                  Получить расчёт проекта за 24 часа
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#why-choose-us">
                  <FolderOpen className="w-5 h-5" />
                  Посмотреть реализованные объекты
                </a>
              </Button>
            </motion.div>

            {/* Warning block */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex items-start gap-3 pt-2"
            >
              <AlertTriangle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                <span className="text-secondary font-bold">90% проблем</span> на стройке — из-за ошибок в проекте.
                <br className="hidden sm:block" />
                Мы устраняем их до начала строительства.
              </p>
            </motion.div>
          </motion.div>

          {/* Right side is empty — shows through to the construction photo */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
