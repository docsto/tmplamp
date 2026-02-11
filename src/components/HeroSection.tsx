import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, Briefcase, CheckCircle2, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage1 from '@/assets/hero-construction-site.jpg';
import heroImage2 from '@/assets/hero-construction.jpg';

const textSlides = [
  {
    line1: '\u00A0\u00A0Проектируем как надо',
    line2: 'Чтобы строить уверенно',
  },
  {
    line1: 'Создаём проекты, которые',
    line2: 'понятны, продуманы и\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0доведены до результата в срок',
  },
  {
    line1: 'Гарантируем системный',
    line2: 'контроль и полную прозрачность на каждом этапе',
  },
];

const stats = [
  { icon: CheckCircle2, value: 13, suffix: '', label: 'лет на рынке' },
  { icon: Building2, value: 350, suffix: '+', label: 'проектов' },
  { icon: CheckCircle2, value: 100, suffix: '%', label: 'экспертиз' },
];

const SLIDE_INTERVAL = 6000;

// Blueprint SVG paths — architectural drawing elements
const blueprintPaths = [
  // Building outline
  'M 80 420 L 80 180 L 200 120 L 320 180 L 320 420',
  'M 80 420 L 320 420',
  // Roof
  'M 60 180 L 200 100 L 340 180',
  // Windows
  'M 120 220 L 180 220 L 180 280 L 120 280 Z',
  'M 220 220 L 280 220 L 280 280 L 220 280 Z',
  // Door
  'M 170 420 L 170 330 L 230 330 L 230 420',
  // Floor lines
  'M 80 320 L 320 320',
  // Dimension lines
  'M 60 440 L 340 440',
  'M 60 435 L 60 445',
  'M 340 435 L 340 445',
  // Second building (background)
  'M 380 420 L 380 240 L 480 200 L 580 240 L 580 420',
  'M 380 420 L 580 420',
  'M 360 240 L 480 180 L 600 240',
  // Windows second building
  'M 410 270 L 450 270 L 450 310 L 410 310 Z',
  'M 510 270 L 550 270 L 550 310 L 510 310 Z',
  'M 410 340 L 450 340 L 450 380 L 410 380 Z',
  'M 510 340 L 550 340 L 550 380 L 510 380 Z',
  // Crane
  'M 500 420 L 500 60',
  'M 460 60 L 650 60',
  'M 500 60 L 500 40 L 510 40 L 510 60',
  'M 640 60 L 620 120',
  // Ground line
  'M 20 420 L 680 420',
  // Dimension annotations
  'M 200 450 L 200 460',
  'M 120 450 L 120 460',
  'M 280 450 L 280 460',
];

const blueprintLabels = [
  { x: 190, y: 475, text: '12.0m' },
  { x: 140, y: 300, text: 'A-1' },
  { x: 250, y: 300, text: 'A-2' },
  { x: 470, y: 300, text: 'B-1' },
  { x: 190, y: 145, text: '∠35°' },
  { x: 500, y: 50, text: 'КР-1' },
];

const CountUp = ({ value, suffix = '', duration = 2000 }: { value: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [blueprintPhase, setBlueprintPhase] = useState<'drawing' | 'transforming' | 'photo'>('drawing');
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-cycle text slides
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % textSlides.length);
    }, SLIDE_INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  // Blueprint animation phases
  useEffect(() => {
    // Phase 1: lines draw (0-2.5s)
    // Phase 2: transform to photo (2.5-4s)
    // Phase 3: photo visible
    const t1 = setTimeout(() => setBlueprintPhase('transforming'), 2500);
    const t2 = setTimeout(() => setBlueprintPhase('photo'), 4000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-[hsl(var(--navy-dark))]">
      {/* FULL BACKGROUND — Construction photo */}
      <div className="absolute inset-0 z-[0]">
        <img
          src={heroImage1}
          alt="Строительный объект"
          className="w-full h-full object-cover"
        />
        {/* Slight dark overlay for text readability */}
        <div className="absolute inset-0 bg-[hsl(var(--navy-dark))]/30" />
      </div>

      {/* LEFT SIDE — Blueprint overlay with diagonal clip */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          clipPath: 'polygon(0 0, 60% 0, 40% 100%, 0 100%)',
        }}
      >
        {/* Blue tint over photo */}
        <div className="absolute inset-0 bg-[hsl(220,65%,18%)]/85" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              'linear-gradient(hsl(200 80% 60% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(200 80% 60% / 0.3) 1px, transparent 1px), linear-gradient(hsl(200 80% 60% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(200 80% 60% / 0.1) 1px, transparent 1px)',
            backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
          }}
        />

        {/* SVG Blueprint drawing */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ opacity: blueprintPhase === 'photo' ? 0.25 : 1 }}
          transition={{ duration: 1.5 }}
        >
          <svg viewBox="0 0 700 520" className="w-full max-w-[600px] h-auto px-8" fill="none">
            {blueprintPaths.map((d, i) => (
              <motion.path
                key={i}
                d={d}
                stroke="hsl(200, 80%, 65%)"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: blueprintPhase === 'photo' ? 0.3 : 0.9 }}
                transition={{
                  pathLength: { duration: 2, delay: i * 0.08, ease: 'easeInOut' },
                  opacity: { duration: 0.5, delay: i * 0.08 },
                }}
              />
            ))}
            {blueprintLabels.map((label, i) => (
              <motion.text
                key={i}
                x={label.x}
                y={label.y}
                fill="hsl(200, 80%, 70%)"
                fontSize="12"
                fontFamily="monospace"
                textAnchor="middle"
                initial={{ opacity: 0 }}
                animate={{ opacity: blueprintPhase === 'photo' ? 0.2 : 0.7 }}
                transition={{ duration: 0.5, delay: 1.5 + i * 0.15 }}
              >
                {label.text}
              </motion.text>
            ))}
          </svg>
        </motion.div>

        {/* Photo bleeding through on left after transform */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: blueprintPhase === 'photo' ? 0.6 : blueprintPhase === 'transforming' ? 0.3 : 0 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src={heroImage2}
            alt="Строительный процесс"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[hsl(220,65%,18%)]/50" />
        </motion.div>
      </div>

      {/* Diagonal edge glow line */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: 'linear-gradient(to right, transparent 39%, hsl(200 80% 70% / 0.08) 44%, hsl(200 80% 75% / 0.25) 49.5%, hsl(200 80% 80% / 0.4) 50%, hsl(200 80% 75% / 0.25) 50.5%, hsl(200 80% 70% / 0.08) 56%, transparent 61%)',
          clipPath: 'polygon(40% 0, 60% 0, 40% 100%, 20% 100%)',
        }}
      />

      {/* TEXT OVERLAY */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-2xl">
          {/* Animated text slides */}
          <div className="min-h-[140px] sm:min-h-[160px] mb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl text-primary-foreground leading-[1.15] font-bold"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {textSlides[currentSlide].line1}
                  <br />
                  <span style={{ color: '#C4F4FF' }}>
                    {textSlides[currentSlide].line2}
                  </span>
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Glass line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="origin-left max-w-md mb-8 relative"
            style={{ height: '2px' }}
          >
            <div className="absolute inset-0 rounded-full" style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 15%, rgba(255,255,255,0.7) 45%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.7) 55%, rgba(255,255,255,0.15) 85%, transparent 100%)',
            }} />
            <div className="absolute inset-0 rounded-full" style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 20%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.4) 55%, rgba(255,255,255,0.05) 80%, transparent 100%)',
              filter: 'blur(4px)',
            }} />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button variant="gold" size="xl" asChild>
              <a href="#contact">
                <Calendar className="w-5 h-5" />
                Рассчитать проект
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#industrial-projects">
                <Briefcase className="w-5 h-5" />
                Смотреть кейсы
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM STATS BAR */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute bottom-0 left-0 right-0 z-10 bg-[hsl(var(--navy-dark))]/80 backdrop-blur-md border-t border-white/10"
      >
        <div className="px-6 sm:px-10 md:px-16 lg:px-24 py-4">
          <div className="flex flex-wrap items-center gap-x-0 gap-y-3">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center">
                <div className="flex items-center gap-2">
                  <stat.icon className="w-5 h-5 text-secondary flex-shrink-0" />
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-primary-foreground font-extrabold text-xl sm:text-2xl leading-none">
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    </span>
                    <span className="text-primary-foreground/70 text-xs sm:text-sm font-medium">{stat.label}</span>
                  </div>
                </div>
                {index < stats.length - 1 && <div className="w-px h-6 bg-primary-foreground/25 mx-4 sm:mx-5" />}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Slide indicators */}
      <div className="absolute bottom-20 left-6 sm:left-10 md:left-16 lg:left-24 z-20 flex gap-2.5">
        {textSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              if (timerRef.current) clearInterval(timerRef.current);
              timerRef.current = setInterval(() => {
                setCurrentSlide(prev => (prev + 1) % textSlides.length);
              }, SLIDE_INTERVAL);
            }}
            className={`h-1.5 rounded-full transition-all duration-500 ${index === currentSlide ? 'w-10 bg-secondary' : 'w-4 bg-primary-foreground/40 hover:bg-primary-foreground/60'}`}
            aria-label={`Слайд ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
