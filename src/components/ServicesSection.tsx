import { motion } from 'framer-motion';
import { Building2, Home, ArrowRight, Factory, Warehouse, ShoppingBag, Building, Wrench, Leaf, House, Store, Hammer, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const b2bExamples = [
    { icon: Factory, label: 'Заводы и производства' },
    { icon: Warehouse, label: 'Склады и логистические центры' },
    { icon: ShoppingBag, label: 'Торговые центры и коммерческие здания' },
    { icon: Building, label: 'Административные комплексы' },
    { icon: Wrench, label: 'Объекты ЖКХ и инженерной инфраструктуры' },
    { icon: Leaf, label: 'Тепличные хозяйства' },
  ];

  const b2cExamples = [
    { icon: House, label: 'Индивидуальные жилые дома (ИЖС)' },
    { icon: Home, label: 'Таунхаусы и дуплексы' },
    { icon: Store, label: 'Небольшие коммерческие объекты (магазины, кафе)' },
    { icon: Hammer, label: 'Реконструкции и пристройки' },
    { icon: Car, label: 'Гаражи, мастерские, бани' },
    { icon: Building2, label: 'Легализация перепланировок' },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold uppercase tracking-wider">Наши услуги</span>
          <h2 className="section-title mt-2">
            Проектируем для вашего масштаба
          </h2>
        </motion.div>

        {/* Two Service Blocks */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* B2B Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 shadow-card hover:shadow-lg-custom transition-all duration-300 border-t-4 border-secondary"
          >
            <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-6 shadow-gold">
              <Building2 className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Для бизнеса и производственных компаний
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Комплексное проектирование сложных объектов: разработка проектной и рабочей документации, 
              сопровождение согласований и экспертизы, авторский надзор. Подготавливаем документацию, 
              готовую к прохождению экспертизы и реализации проекта.
            </p>
            
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">Примеры объектов</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {b2bExamples.map((example, index) => (
                  <div key={index} className="flex items-center gap-3 text-muted-foreground">
                    <example.icon className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-sm">{example.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="navy" size="lg" asChild>
              <a href="#contact">
                Рассчитать проект
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>

          {/* B2C Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 shadow-card hover:shadow-lg-custom transition-all duration-300 border-t-4 border-primary"
          >
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
              <Home className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Для частных заказчиков и малого бизнеса
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Четкие и экономичные проекты, готовые для получения разрешения и строительства. 
              Учитываем все ваши пожелания по планировке, материалам и бюджету.
            </p>
            
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Примеры объектов</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {b2cExamples.map((example, index) => (
                  <div key={index} className="flex items-center gap-3 text-muted-foreground">
                    <example.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{example.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="outline" size="lg" asChild>
              <a href="#contact">
                Обсудить проект
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
