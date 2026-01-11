import { motion } from "framer-motion";
import { MapPin, Calendar, Ruler } from "lucide-react";

const projects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    title: "Логистический комплекс",
    location: "г. Петропавловск",
    task: "Проектирование складского комплекса класса А",
    description: "Разработка проектной документации, инженерные сети",
    area: "12 500 м²",
    duration: "8 месяцев"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    title: "Производственный цех",
    location: "г. Кокшетау",
    task: "Реконструкция производственного здания",
    description: "Усиление конструкций, новые инженерные системы",
    area: "8 200 м²",
    duration: "6 месяцев"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
    title: "Торговый центр",
    location: "г. Костанай",
    task: "Комплексное проектирование ТРЦ",
    description: "Архитектурные и конструктивные решения, МЭП",
    area: "25 000 м²",
    duration: "12 месяцев"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=600&h=400&fit=crop",
    title: "Административное здание",
    location: "г. Петропавловск",
    task: "Проектирование офисного центра",
    description: "Полный цикл проектирования, авторский надзор",
    area: "6 800 м²",
    duration: "5 месяцев"
  }
];

const ProjectsSection = () => {
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
            Крупные промышленные и коммерческие проекты
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Реализованные объекты, демонстрирующие наш опыт в работе со сложными техническими задачами
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white font-bold text-lg">{project.title}</h3>
                  <div className="flex items-center gap-1 text-white/80 text-sm">
                    <MapPin className="w-3 h-3" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-primary font-medium text-sm mb-2">
                  {project.task}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between text-sm border-t border-border pt-3">
                  <div className="flex items-center gap-1 text-foreground">
                    <Ruler className="w-4 h-4 text-secondary" />
                    <span className="font-semibold">{project.area}</span>
                  </div>
                  <div className="flex items-center gap-1 text-foreground">
                    <Calendar className="w-4 h-4 text-secondary" />
                    <span className="font-semibold">{project.duration}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
