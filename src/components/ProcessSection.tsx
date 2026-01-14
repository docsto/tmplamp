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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Четкий процесс — качественный результат
          </h2>
        </motion.div>

        {/* Project Manager Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-16 p-6 bg-secondary/10 rounded-2xl border border-secondary/20 max-w-4xl mx-auto"
        >
          <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
            <UserCheck className="w-7 h-7 text-secondary-foreground" />
          </div>
          <p className="text-lg md:text-xl text-foreground font-medium">
            Над всеми этапами стоит менеджер проекта. Он контролирует график, управляет коммуникацией и предоставляет вам регулярный отчёт.
          </p>
        </motion.div>

        {/* Desktop Layout - Horizontal */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-10 left-[8%] right-[8%] h-0.5 bg-border" />
            
            <div className="grid grid-cols-6 gap-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center relative"
                >
                  <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <span className="inline-block bg-secondary text-secondary-foreground w-8 h-8 rounded-full text-sm font-bold leading-8 mb-3">
                    {step.id}
                  </span>
                  <h3 className="text-base font-bold text-foreground mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout - Vertical */}
        <div className="lg:hidden">
          <div className="relative max-w-md mx-auto">
            {/* Connecting Line */}
            <div className="absolute top-0 bottom-0 left-10 w-0.5 bg-border" />
            
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 relative"
                >
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                      <step.icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="inline-block bg-secondary text-secondary-foreground w-7 h-7 rounded-full text-sm font-bold leading-7 mb-2">
                      {step.id}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
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
