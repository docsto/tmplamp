import { motion } from 'framer-motion';
import { Pencil, FileText, Settings, Eye, Calculator, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const services = [
    {
      icon: Pencil,
      title: 'Эскизные проекты',
      description: 'Архитектурная концепция, планировочные решения, силистика объекта. 2D / 3D-визуализация для согласования на раннем этапе.',
      buttonText: 'Рабочие проекты',
    },
    {
      icon: FileText,
      title: 'Рабочие проекты',
      description: 'Рабочие чертежи, инженерные и экологические показатели, дата данные по материалам, сметы и планы выполнения работ.',
      buttonText: 'Рабочие проекти',
    },
    {
      icon: Settings,
      title: 'Инженерная инфраструктура',
      description: 'Проектирование инженерных систем: вентиляция, отопление, водоснабжение и канализация, электроснабжение, освещение, пожарная автоматика.',
      buttonText: 'Рабочие проекты',
    },
    {
      icon: Calculator,
      title: 'Сметная документация',
      description: 'Определяем, сколько средств понадобится для строительства. Планы бюджета и графики финансирования для поэтапной реализации проекта.',
      buttonText: null,
      isSmall: true,
    },
    {
      icon: Eye,
      title: 'Авторский надзор',
      description: 'Контроль точности соблюдения проекта в ходе строительства, приёмка работ, контроль бюджета. Снижает риски и гарантирует соответствие выполненного объектавдравому.',
      buttonText: null,
      isLarge: true,
      hasCta: true,
    },
  ];

  // Blueprint grid pattern as SVG
  const blueprintPattern = `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23CBD5E1' stroke-width='0.5' opacity='0.3'%3E%3Cpath d='M0 10h40M0 20h40M0 30h40M10 0v40M20 0v40M30 0v40'/%3E%3C/g%3E%3C/svg%3E")`;

  return (
    <section id="about" className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Полный цикл проектных работ
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            От концепции до авторского надзора. Работаем как комплексно, так и по отдельным этапам.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* First 3 cards */}
          {services.slice(0, 3).map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white rounded-2xl p-8 border border-slate-200 shadow-sm overflow-hidden"
              style={{ backgroundImage: blueprintPattern }}
            >
              {/* Icon */}
              <div className="w-14 h-14 border-2 border-secondary rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-secondary" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Button */}
              {service.buttonText && (
                <Button 
                  variant="outline" 
                  className="bg-slate-800 text-white border-slate-800 hover:bg-slate-700 hover:text-white"
                >
                  {service.buttonText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom row - 2 cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Сметная документация - small card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative bg-white rounded-2xl p-8 border border-slate-200 shadow-sm overflow-hidden"
            style={{ backgroundImage: blueprintPattern }}
          >
            {/* Icon */}
            <div className="w-14 h-14 border-2 border-secondary rounded-xl flex items-center justify-center mb-6">
              <Calculator className="w-6 h-6 text-secondary" strokeWidth={1.5} />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-foreground mb-4">Сметная документация</h3>

            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed">
              Определяем, сколько средств понадобится для строительства. Планы бюджета и графики финансирования для поэтапной реализации проекта.
            </p>
          </motion.div>

          {/* Авторский надзор - large card spanning 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 relative bg-white rounded-2xl p-8 border border-slate-200 shadow-sm overflow-hidden"
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23CBD5E1' stroke-width='0.5' opacity='0.4'%3E%3Cpath d='M0 25h100M0 50h100M0 75h100M25 0v100M50 0v100M75 0v100'/%3E%3Ccircle cx='50' cy='50' r='20'/%3E%3Cpath d='M30 50h40M50 30v40'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Icon and Title */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 border-2 border-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-secondary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground md:hidden">Авторский надзор</h3>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-4 hidden md:block">Авторский надзор</h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Контроль точности соблюдения проекта в ходе строительства, приёмка работ, контроль бюджета. Снижает риски и гарантирует соответствие выполненного объекта вдравому.
                </p>

                {/* CTA Button */}
                <a href="#contact" className="block">
                  <div className="bg-slate-800 text-white rounded-xl p-4 text-center hover:bg-slate-700 transition-colors">
                    <div className="flex items-center justify-center gap-2 font-semibold mb-1">
                      Обсудить проект
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <p className="text-sm text-slate-300">
                      Обсудим задачу и подскажем оптимальный формат работ
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
