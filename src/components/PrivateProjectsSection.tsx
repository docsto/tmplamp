import { motion } from 'framer-motion';
import { Home, Ruler } from 'lucide-react';

const privateProjects = [
  {
    id: 1,
    title: 'Загородный дом «Сосновый бор»',
    task: 'Проектирование инженерных систем',
    description: 'Разработка схемы отопления, водоснабжения и электроснабжения',
    area: '280 м²',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    title: 'Коттедж в пос. Луговое',
    task: 'Полный цикл проектирования',
    description: 'Архитектурный проект и инженерные сети под ключ',
    area: '350 м²',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    title: 'Частный дом «Альпийский»',
    task: 'Проект отопления и вентиляции',
    description: 'Энергоэффективная система с рекуперацией тепла',
    area: '420 м²',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop'
  },
  {
    id: 4,
    title: 'Таунхаус «Речной»',
    task: 'Реконструкция инженерных сетей',
    description: 'Модернизация устаревших систем коммуникаций',
    area: '180 м²',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop'
  }
];

const PrivateProjectsSection = () => {
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
          <div className="flex items-center justify-center gap-2 mb-4">
            <Home className="h-6 w-6 text-primary" />
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Частные объекты
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Проекты частных домов и малых объектов
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Примеры наших работ для частных заказчиков, где важны детали, комфорт и индивидуальный подход
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {privateProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-1">
                  {project.title}
                </h3>
                
                <p className="text-primary font-medium text-sm mb-2">
                  {project.task}
                </p>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                    <Ruler className="h-4 w-4" />
                    <span className="font-medium">{project.area}</span>
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

export default PrivateProjectsSection;
