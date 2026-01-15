import { useState } from 'react';
import { motion } from 'framer-motion';
import { Ruler, MapPin, ArrowRight } from 'lucide-react';

const privateProjects = [
  {
    id: 1,
    title: 'Загородный дом «Сосновый бор»',
    task: 'Проектирование инженерных систем',
    description: 'Разработка схемы отопления, водоснабжения и электроснабжения',
    area: '280 м²',
    location: 'Московская обл.',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    title: 'Коттедж в пос. Луговое',
    task: 'Полный цикл проектирования',
    description: 'Архитектурный проект и инженерные сети под ключ',
    area: '350 м²',
    location: 'Ленинградская обл.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    title: 'Частный дом «Альпийский»',
    task: 'Проект отопления и вентиляции',
    description: 'Энергоэффективная система с рекуперацией тепла',
    area: '420 м²',
    location: 'Краснодарский край',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop'
  },
  {
    id: 4,
    title: 'Таунхаус «Речной»',
    task: 'Реконструкция инженерных сетей',
    description: 'Модернизация устаревших систем коммуникаций',
    area: '180 м²',
    location: 'Новосибирск',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop'
  }
];

const PrivateProjectsSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Проекты частных домов и малых объектов
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Примеры наших работ для частных заказчиков, где важны детали, комфорт и индивидуальный подход
          </p>
        </motion.div>

        {/* Desktop Accordion - Horizontal */}
        <div className="hidden md:flex h-[500px] gap-2 rounded-xl overflow-hidden">
          {privateProjects.map((project, index) => {
            const isHovered = hoveredId === project.id;
            const hasHover = hoveredId !== null;
            
            return (
              <motion.div
                key={project.id}
                className="relative h-full cursor-pointer overflow-hidden"
                initial={false}
                animate={{
                  flex: isHovered ? 4 : hasHover ? 0.5 : 1
                }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div 
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      isHovered 
                        ? 'bg-gradient-to-t from-black/80 via-black/40 to-transparent' 
                        : 'bg-black/50'
                    }`}
                  />
                </div>

                {/* Collapsed State - Vertical Title */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ opacity: isHovered ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="transform -rotate-90 whitespace-nowrap">
                    <span className="text-white font-bold text-lg tracking-wide">
                      {project.title}
                    </span>
                  </div>
                </motion.div>

                {/* Expanded State - Full Content */}
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.4, delay: isHovered ? 0.2 : 0 }}
                >
                  <div className="max-w-md">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-3">
                        {project.task}
                      </span>
                    </motion.div>

                    <motion.h3
                      className="text-white text-2xl font-bold mb-3"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.4, delay: 0.15 }}
                    >
                      {project.title}
                    </motion.h3>

                    <motion.p
                      className="text-white/80 text-sm mb-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      {project.description}
                    </motion.p>

                    <motion.div
                      className="flex items-center gap-4 text-white/90 text-sm"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.4, delay: 0.25 }}
                    >
                      <div className="flex items-center gap-1.5">
                        <Ruler className="h-4 w-4" />
                        <span>{project.area}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                      </div>
                    </motion.div>

                    <motion.div
                      className="mt-4 flex items-center gap-2 text-primary font-medium text-sm"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      <span>Подробнее</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Project Number */}
                <div className="absolute top-4 left-4 text-white/60 text-sm font-medium">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Accordion - Vertical */}
        <div className="md:hidden flex flex-col gap-2">
          {privateProjects.map((project, index) => {
            const isHovered = hoveredId === project.id;
            
            return (
              <motion.div
                key={project.id}
                className="relative overflow-hidden rounded-lg cursor-pointer"
                initial={false}
                animate={{
                  height: isHovered ? 350 : 80
                }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                onClick={() => setHoveredId(isHovered ? null : project.id)}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div 
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      isHovered 
                        ? 'bg-gradient-to-t from-black/80 via-black/40 to-transparent' 
                        : 'bg-black/60'
                    }`}
                  />
                </div>

                {/* Collapsed State */}
                <motion.div
                  className="absolute inset-0 flex items-center px-4"
                  animate={{ opacity: isHovered ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-4 w-full">
                    <span className="text-white/60 text-sm font-medium">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-white font-bold text-lg flex-1">
                      {project.title}
                    </span>
                    <div className="text-white/60 text-sm">
                      {project.area}
                    </div>
                  </div>
                </motion.div>

                {/* Expanded State */}
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.4, delay: isHovered ? 0.2 : 0 }}
                >
                  <span className="inline-block w-fit bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {project.task}
                  </span>

                  <h3 className="text-white text-xl font-bold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-white/80 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 text-white/90 text-sm">
                    <div className="flex items-center gap-1.5">
                      <Ruler className="h-4 w-4" />
                      <span>{project.area}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PrivateProjectsSection;
