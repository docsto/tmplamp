import { motion } from 'framer-motion';
import { Pencil, FileText, Settings, Eye, Calculator, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const services = [
    {
      icon: Pencil,
      title: 'Эскизные проекты',
      description: 'Дает возможность в сжатые сроки наглядно представить и согласовать принципиальные решения по стилистике, архитектуре, функциональности и планировке объекта, дополняется 2D/3D визуализацией.',
    },
    {
      icon: FileText,
      title: 'Рабочие проекты',
      description: 'Включает в себя все рабочие чертежи, архитектурные и градостроительные показатели, технические, инженерные и экологические данные, ведомости по материалам, сметы и план выполнения работ.',
    },
    {
      icon: Settings,
      title: 'Инженерная инфраструктура',
      description: 'Включает проектирование всех инженерных систем: вентиляция и кондиционирование, отопление, водоснабжение и канализация, сети связи, внутренние и наружные электрические сети, освещение и пожарная автоматика.',
    },
    {
      icon: Eye,
      title: 'Авторский надзор',
      description: 'Позволяет своевременно избежать ошибок в процессе реализации проекта, а также не допустить случаев отступления подрядчиками от проектной документации и СНиП во время строительства, что существенно сохраняет бюджет Заказчика.',
    },
    {
      icon: Calculator,
      title: 'Сметная документация',
      description: 'Определяет, сколько средств понадобится для строительства объекта, позволяет спланировать бюджет для поэтапной реализации проекта, а также позволяет принимать участие в программах субсидирования.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted">
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

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl shadow-card hover:shadow-lg-custom transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-secondary group-hover:text-secondary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
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
