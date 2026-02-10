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
const slides: Slide[] = [{
  type: 'image',
  src: heroImage1,
  alt: 'Строительная площадка'
}, {
  type: 'video',
  src: heroVideo
}, {
  type: 'image',
  src: heroImage2,
  alt: 'Строительный объект'
}];
const stats = [{
  icon: CheckCircle2,
  value: '13',
  label: 'лет на рынке'
}, {
  icon: Building2,
  value: '350+',
  label: 'проектов'
}, {
  icon: CheckCircle2,
  value: '100%',
  label: 'положительных экспертиз'
}];
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
      setCurrentSlide(prev => (prev + 1) % slides.length);
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
    setCurrentSlide(prev => (prev + dir + slides.length) % slides.length);
    resetTimer();
  }, [resetTimer]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0
    })
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Slide backgrounds */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div key={currentSlide} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{
          duration: 0.7,
          ease: [0.4, 0, 0.2, 1]
        }} className="absolute inset-0">
          {slides[currentSlide].type === 'image' ? (
            <img src={slides[currentSlide].src} alt={slides[currentSlide].alt || ''} className="absolute inset-0 w-full h-full object-cover" />
          ) : (
            <video ref={videoRef} src={slides[currentSlide].src} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Blueprint overlay */}
      <div className="absolute inset-0 blueprint-overlay z-[1]" />
      <div className="absolute inset-0 blueprint-grid opacity-[0.12] z-[1]" />

      {/* Slide navigation arrows */}
      <button onClick={() => goToSlide(-1)} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 group" aria-label="Предыдущий слайд">
        <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>
      <button onClick={() => goToSlide(1)} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 group" aria-label="Следующий слайд">
        <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, index) => (
          <button key={index} onClick={() => {
            setDirection(index > currentSlide ? 1 : -1);
            setCurrentSlide(index);
            resetTimer();
          }} className={`h-1.5 rounded-full transition-all duration-500 ${index === currentSlide ? 'w-10 bg-secondary' : 'w-4 bg-primary-foreground/40 hover:bg-primary-foreground/60'}`} aria-label={`Слайд ${index + 1}`} />
        ))}
      </div>

      {/* Content — positioned 10px right of the left slider arrow */}
      <div className="relative z-10 py-16 lg:py-0 pl-[70px] md:pl-[86px] pr-4 sm:pr-6 lg:pr-8">
        <div className="max-w-2xl">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl text-primary-foreground leading-[1.1] mb-0 font-bold text-left lg:text-4xl"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Проектируем как надо<br />
            <span className="font-bold text-secondary">Чтобы строить уверенно</span>
          </motion.h1>

          {/* Glass horizontal line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="origin-center max-w-md my-5 relative"
            style={{ height: '2px' }}
          >
            <div className="absolute inset-0 rounded-full" style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 15%, rgba(255,255,255,0.7) 45%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.7) 55%, rgba(255,255,255,0.15) 85%, transparent 100%)',
            }} />
            <div className="absolute inset-0 rounded-full" style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 20%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.4) 55%, rgba(255,255,255,0.05) 80%, transparent 100%)',
              filter: 'blur(4px)',
            }} />
            <div className="absolute rounded-full" style={{
              top: '-2px', left: '30%', right: '30%', height: '6px',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.15) 70%, transparent)',
              filter: 'blur(6px)',
            }} />
          </motion.div>

          {/* Subtitle */}
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="text-primary-foreground/80 text-base sm:text-lg max-w-lg leading-relaxed font-medium mb-6">
            Создаём проекты, которые понятны, продуманы
            и доведены до результата в срок.
          </motion.p>

          {/* Guarantee line */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="flex items-start gap-3 mb-6">
            <ShieldCheck className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
            <p className="text-primary-foreground/90 text-sm sm:text-base font-medium leading-snug">
              Гарантируем системный контроль и полную
              <br className="hidden sm:block" />
              прозрачность на каждом этапе
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="flex flex-wrap items-center gap-x-0 gap-y-3 mb-7">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center">
                <div className="flex items-center gap-2">
                  <stat.icon className="w-5 h-5 text-secondary flex-shrink-0" />
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-primary-foreground font-extrabold text-xl sm:text-2xl leading-none">{stat.value}</span>
                    <span className="text-primary-foreground/70 text-xs sm:text-sm font-medium">{stat.label}</span>
                  </div>
                </div>
                {index < stats.length - 1 && <div className="w-px h-6 bg-primary-foreground/25 mx-4 sm:mx-5" />}
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }} className="flex flex-col sm:flex-row gap-3">
            <Button variant="gold" size="xl" asChild>
              <a href="#contact">
                <Calendar className="w-5 h-5" />
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
