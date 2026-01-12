import { motion } from 'framer-motion';
import { ClipboardList, FileCheck, Palette, PenTool, CheckCircle, HardHat, UserCheck } from 'lucide-react';

const processSteps = [
  {
    id: 1,
    icon: ClipboardList,
    title: 'Запрос и анализ',
    description: 'Вы оставляете заявку, мы изучаем задачу и участок.'
  },
  {
    id: 2,
    icon: FileCheck,
    title: 'Техническое задание',
    description: 'Фиксируем все требования и согласовываем с вами.'
  },
  {
    id: 3,
    icon: Palette,
    title: 'Эскиз и 3D-модель',
    description: 'Разрабатываем концепцию и утверждаем с вами визуально.'
  },
  {
    id: 4,
    icon: PenTool,
    title: 'Рабочее проектирование',
    description: 'Создаем полный комплект чертежей и спецификаций.'
  },
  {
    id: 5,
    icon: CheckCircle,
    title: 'Проверка и выдача',
    description: 'Согласуем документацию внутри компании и передаем вам.'
  },
  {
    id: 6,
    icon: HardHat,
    title: 'Сопровождение',
    description: 'Подключаем авторский и технический надзор для контроля реализации на стройплощадке.'
  }
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Четкий процесс — качественный результат
          </h2>
          
          {/* Manager highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-xl px-6 py-4 mb-12"
          >
            <UserCheck className="h-6 w-6 text-primary flex-shrink-0" />
            <p className="text-foreground font-medium text-left">
              Над всеми этапами стоит менеджер проекта. Он контролирует график, управляет коммуникацией и предоставляет вам регулярный отчёт.
            </p>
          </motion.div>
        </motion.div>

        {/* Desktop horizontal layout */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-16 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
            
            <div className="grid grid-cols-6 gap-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Step number circle */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 shadow-lg">
                    <step.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  
                  {/* Step number badge */}
                  <div className="absolute top-0 right-1/2 translate-x-8 -translate-y-1 w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                    {step.id}
                  </div>
                  
                  <h3 className="text-sm font-bold text-foreground mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet vertical layout */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical connection line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20" />
            
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-4 pl-0"
                >
                  {/* Step circle */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <step.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  
                  {/* Step number badge */}
                  <div className="absolute left-8 -top-1 w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                    {step.id}
                  </div>
                  
                  <div className="pt-1">
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
