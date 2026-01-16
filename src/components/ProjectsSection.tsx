import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Ruler, Plus } from "lucide-react";

const projects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    title: "Логистический комплекс",
    location: "г. Петропавловск",
    task: "Проектирование складского комплекса класса А",
    description: "Разработка проектной документации, инженерные сети",
    area: "12 500 м²",
    duration: "8 месяцев"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
    title: "Производственный цех",
    location: "г. Кокшетау",
    task: "Реконструкция производственного здания",
    description: "Усиление конструкций, новые инженерные системы",
    area: "8 200 м²",
    duration: "6 месяцев"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
    title: "Торговый центр",
    location: "г. Костанай",
    task: "Комплексное проектирование ТРЦ",
    description: "Архитектурные и конструктивные решения, МЭП",
    area: "25 000 м²",
    duration: "12 месяцев"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=800&h=600&fit=crop",
    title: "Административное здание",
    location: "г. Петропавловск",
    task: "Проектирование офисного центра",
    description: "Полный цикл проектирования, авторский надзор",
    area: "6 800 м²",
    duration: "5 месяцев"
  }
];

const ProjectsSection = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  const handleClick = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="industrial-projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Крупные промышленные и коммерческие проекты
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Реализованные объекты, демонстрирующие наш опыт в работе со сложными техническими задачами
          </p>
        </motion.div>

        {/* Desktop Accordion - Horizontal */}
        <div className="hidden lg:flex h-[500px] gap-2">
          {projects.map((project) => {
            const isActive = activeId === project.id;
            
            return (
              <motion.div
                key={project.id}
                onClick={() => handleClick(project.id)}
                className="relative cursor-pointer overflow-hidden rounded-2xl"
                animate={{
                  flex: isActive ? 4 : 1,
                }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 transition-all duration-500 ${
                    isActive 
                      ? 'bg-gradient-to-r from-primary/90 via-primary/70 to-transparent' 
                      : 'bg-primary/60 hover:bg-primary/50'
                  }`} />
                </div>

                {/* Collapsed State - Vertical Title */}
                <AnimatePresence>
                  {!isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex flex-col items-center justify-between py-8"
                    >
                      <Plus className="w-8 h-8 text-secondary" />
                      <div 
                        className="writing-vertical text-white font-bold text-xl tracking-wider"
                        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                      >
                        {project.title}
                      </div>
                      <span className="text-white/70 text-sm font-medium">0{project.id}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Expanded State - Full Content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="absolute inset-0 flex flex-col justify-end p-8"
                    >
                      <div className="max-w-md">
                        <motion.span 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-secondary font-semibold text-sm uppercase tracking-wider"
                        >
                          Проект 0{project.id}
                        </motion.span>
                        
                        <motion.h3 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.35 }}
                          className="text-white font-bold text-3xl mt-2 mb-3"
                        >
                          {project.title}
                        </motion.h3>
                        
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="flex items-center gap-2 text-white/80 mb-4"
                        >
                          <MapPin className="w-4 h-4" />
                          <span>{project.location}</span>
                        </motion.div>
                        
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.45 }}
                          className="text-secondary font-medium mb-2"
                        >
                          {project.task}
                        </motion.p>
                        
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="text-white/70 mb-6"
                        >
                          {project.description}
                        </motion.p>
                        
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.55 }}
                          className="flex gap-6"
                        >
                          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                            <Ruler className="w-5 h-5 text-secondary" />
                            <span className="text-white font-semibold">{project.area}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                            <Calendar className="w-5 h-5 text-secondary" />
                            <span className="text-white font-semibold">{project.duration}</span>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile/Tablet Accordion - Vertical */}
        <div className="lg:hidden space-y-3">
          {projects.map((project) => {
            const isActive = activeId === project.id;
            
            return (
              <motion.div
                key={project.id}
                onClick={() => handleClick(project.id)}
                className="relative cursor-pointer overflow-hidden rounded-xl"
                animate={{
                  height: isActive ? 'auto' : 80,
                }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Background */}
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-b from-primary/80 to-primary/90' 
                      : 'bg-primary/70'
                  }`} />
                </div>

                {/* Collapsed Header */}
                <div className="relative flex items-center justify-between p-5 min-h-[80px]">
                  <div className="flex items-center gap-4">
                    <span className="text-secondary font-bold text-lg">0{project.id}</span>
                    <h3 className="text-white font-bold text-lg">{project.title}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Plus className="w-6 h-6 text-secondary" />
                  </motion.div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative px-5 pb-5"
                    >
                      <div className="flex items-center gap-2 text-white/80 mb-3">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                      
                      <p className="text-secondary font-medium mb-2">
                        {project.task}
                      </p>
                      
                      <p className="text-white/70 mb-4">
                        {project.description}
                      </p>
                      
                      <div className="flex gap-4">
                        <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
                          <Ruler className="w-4 h-4 text-secondary" />
                          <span className="text-white font-medium text-sm">{project.area}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
                          <Calendar className="w-4 h-4 text-secondary" />
                          <span className="text-white font-medium text-sm">{project.duration}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
