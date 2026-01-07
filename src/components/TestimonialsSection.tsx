import { motion } from 'framer-motion';
import { User, Clock, FileCheck, Shield } from 'lucide-react';

const TestimonialsSection = () => {
  const features = [
    {
      icon: User,
      title: 'Единый ответственный контакт',
      description: 'Светлана — ваш главный контакт для решения любых вопросов. Вам не нужно взаимодействовать с десятком специалистов.',
    },
    {
      icon: Clock,
      title: 'Контроль сроков по плану',
      description: 'Менеджер проекта ведёт работу по чёткому графику этапов, предупреждает о изменениях и гарантирует соблюдение дедлайнов.',
    },
    {
      icon: FileCheck,
      title: 'Прозрачность и отчётность',
      description: 'Вы получаете регулярные сводки о статусе работ. Все решения и согласования проходят через единый канал.',
    },
    {
      icon: Shield,
      title: 'Стандарт для любого масштаба',
      description: 'Мы обеспечиваем одинаково высокие стандарты коммуникации и контроля как для крупного завода, так и для частного дома.',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-primary relative overflow-hidden scroll-mt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 stripe-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ваш проект ведёт не только инженер, но и менеджер проекта
          </h2>
          <p className="text-primary-foreground/80 max-w-4xl mx-auto text-lg leading-relaxed">
            Мы внедрили отдельную систему контроля. Пока инженеры работают над чертежами, 
            менеджер проекта гарантирует соблюдение сроков, управляет коммуникацией и держит вас 
            в курсе на каждом этапе. Это ваша уверенность в предсказуемом результате.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-lg-custom"
            >
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-4 shadow-gold">
                <feature.icon className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
