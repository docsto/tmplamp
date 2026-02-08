import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Calendar, Building2, CheckCircle2, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage1 from '@/assets/hero-construction-site.jpg';
import heroVideo from '@/assets/hero-construction-video.mp4';
import heroImage2 from '@/assets/hero-construction.jpg';

type Slide = {
  type: 'image' | 'video';
  src: string;
  alt?: string;
};

const slides: Slide[] = [
  { type: 'image', src: heroImage1, alt: 'Строительная площадка' },
  { type: 'video', src: heroVideo },
  { type: 'image', src: heroImage2, alt: 'Строительный объект' },
];

const stats = [
  { icon: Calendar, value: '13', label: 'лет на рынке' },
  { icon: Building2, value: '350+', label: 'проектов' },
  { icon: CheckCircle2, value: '100%', label: 'положительных экспертиз' },
];

const AUTOPLAY_INTERVAL = 7000;

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_INTERVAL);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const goToSlide = useCallback((dir: 1 | -1) => {
    setDirection(dir);
    setCurrentSlide((prev) => (prev + dir + slides.length) % slides.length);
    resetTimer();
  }, [resetTimer]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Slide backgrounds */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          {slides[currentSlide].type === 'image' ? (
            <img
              src={slides[currentSlide].src}
              alt={slides[currentSlide].alt || ''}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <video
              ref={videoRef}
              src={slides[currentSlide].src}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Blueprint overlay — left side */}
      <div className="absolute inset-0 blueprint-overlay z-[1]" />

      {/* Blueprint grid pattern */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.12] z-[1]" />

      {/* Slide navigation arrows */}
      <button
        onClick={() => goToSlide(-1)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 group"
        aria-label="Предыдущий слайд"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={() => goToSlide(1)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 group"
        aria-label="Следующий слайд"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
              resetTimer();
            }}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? 'w-10 bg-secondary'
                : 'w-4 bg-primary-foreground/40 hover:bg-primary-foreground/60'
            }`}
            aria-label={`Слайд ${index + 1}`}
          />
        ))}
      </div>

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
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.1]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Проектируем как надо. <span className="text-secondary">Чтобы строить уверенно</span>
            </h1>

            {/* Subtitle */}
            <p className="text-primary-foreground/80 text-base sm:text-lg max-w-lg leading-relaxed font-medium">
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
                    <span className="text-primary-foreground/70 text-xs sm:text-sm ml-1.5 font-medium">
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
            </motion.div>
          </motion.div>

          {/* Right side is empty — shows through to the background */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
