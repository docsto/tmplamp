import { motion } from 'framer-motion';
import { Pencil, FileText, Settings, Eye, Calculator, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const AboutSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Pencil,
      title: 'Эскизные проекты',
      description: 'Дает возможность в сжатые сроки наглядно представить и согласовать принципиальные решения по стилистике, архитектуре, функциональности и планировке объекта, дополняется 2D/3D визуализацией.',
      tags: ['Концепция', 'Планировка', '3D визуализация', 'Согласование'],
    },
    {
      icon: FileText,
      title: 'Рабочие проекты',
      description: 'Включает в себя все рабочие чертежи, архитектурные и градостроительные показатели, технические, инженерные и экологические данные, ведомости по материалам, сметы и план выполнения работ.',
      tags: ['Чертежи', 'Документация', 'СНиП', 'Экспертиза'],
    },
    {
      icon: Settings,
      title: 'Инженерная инфраструктура',
      description: 'Включает проектирование всех инженерных систем: вентиляция и кондиционирование, отопление, водоснабжение и канализация, сети связи, внутренние и наружные электрические сети, освещение и пожарная автоматика.',
      tags: ['Вентиляция', 'Отопление', 'Электрика', 'Водоснабжение'],
    },
    {
      icon: Eye,
      title: 'Авторский надзор',
      description: 'Позволяет своевременно избежать ошибок в процессе реализации проекта, а также не допустить случаев отступления подрядчиками от проектной документации и СНиП во время строительства, что существенно сохраняет бюджет Заказчика.',
      tags: ['Контроль', 'Качество', 'Соответствие', 'Экономия'],
    },
    {
      icon: Calculator,
      title: 'Сметная документация',
      description: 'Определяет, сколько средств понадобится для строительства объекта, позволяет спланировать бюджет для поэтапной реализации проекта, а также позволяет принимать участие в программах субсидирования.',
      tags: ['Бюджет', 'Расчёты', 'Субсидии', 'Планирование'],
    },
  ];

  // Random positions for tag cloud effect
  const getTagPosition = (tagIndex: number, totalTags: number) => {
    const positions = [
      { x: -10, y: -15, scale: 1.1, rotate: -5 },
      { x: 15, y: -8, scale: 0.95, rotate: 3 },
      { x: -5, y: 10, scale: 1.05, rotate: -2 },
      { x: 20, y: 5, scale: 0.9, rotate: 4 },
      { x: 5, y: 15, scale: 1, rotate: -3 },
    ];
    return positions[tagIndex % positions.length];
  };

  return (
    <section id="about" className="py-20 bg-muted overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">
            От эскиза до надзора: полный цикл услуг
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Оказываем как комплексные услуги, так и выполняем отдельные этапы работ. 
            Вы получаете именно тот результат, который нужен для вашей задачи.
          </p>
        </motion.div>

        {/* Services Tag Cloud Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Main Card */}
              <motion.div
                className="relative bg-card/80 backdrop-blur-sm border border-border/50 p-6 rounded-2xl transition-all duration-500 cursor-pointer z-10"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 20px 40px -15px hsl(var(--primary) / 0.2)',
                }}
              >
                {/* Icon */}
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/70 rounded-2xl flex items-center justify-center mb-5 shadow-lg"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-8 h-8 text-secondary-foreground" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>

                {/* Description - visible when not hovered */}
                <motion.p 
                  className="text-muted-foreground text-sm leading-relaxed"
                  animate={{ 
                    opacity: hoveredIndex === index ? 0 : 1,
                    height: hoveredIndex === index ? 0 : 'auto',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {service.description}
                </motion.p>

                {/* Tags Cloud - visible when hovered */}
                <motion.div 
                  className="flex flex-wrap gap-2 mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    height: hoveredIndex === index ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {service.tags.map((tag, tagIndex) => {
                    const pos = getTagPosition(tagIndex, service.tags.length);
                    return (
                      <motion.span
                        key={tag}
                        className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium text-sm rounded-full border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                        initial={{ opacity: 0, x: 0, y: 0, scale: 0.8 }}
                        animate={hoveredIndex === index ? {
                          opacity: 1,
                          x: pos.x,
                          y: pos.y,
                          scale: pos.scale,
                          rotate: pos.rotate,
                        } : {
                          opacity: 0,
                          x: 0,
                          y: 0,
                          scale: 0.8,
                        }}
                        transition={{ 
                          duration: 0.4, 
                          delay: tagIndex * 0.05,
                          type: 'spring',
                          stiffness: 200,
                        }}
                        whileHover={{ 
                          scale: 1.15,
                          rotate: 0,
                          zIndex: 10,
                        }}
                      >
                        {tag}
                      </motion.span>
                    );
                  })}
                </motion.div>
              </motion.div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-2 -right-2 w-20 h-20 bg-secondary/10 rounded-full blur-xl"
                animate={{
                  scale: hoveredIndex === index ? 1.5 : 1,
                  opacity: hoveredIndex === index ? 0.8 : 0.3,
                }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="absolute -bottom-3 -left-3 w-16 h-16 bg-primary/10 rounded-full blur-xl"
                animate={{
                  scale: hoveredIndex === index ? 1.3 : 1,
                  opacity: hoveredIndex === index ? 0.6 : 0.2,
                }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button variant="navy" size="lg" asChild>
            <a href="#contact">
              Обсудить проект
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
