import { motion } from 'framer-motion';
import { Award, Calendar, CheckCircle } from 'lucide-react';
import teamMember1 from '@/assets/team-member-1.jpg';
import teamMember2 from '@/assets/team-member-2.jpg';
import teamMember3 from '@/assets/team-member-3.jpg';
import teamMember4 from '@/assets/team-member-4.jpg';

const TeamSection = () => {
  const team = [
    { name: 'Наталья Александровна', image: teamMember1 },
    { name: 'Ксения Геннадьевна', image: teamMember2 },
    { name: 'Татьяна Дмитриевна', image: teamMember3 },
    { name: 'Светлана Александровна', image: teamMember4 },
    { name: 'Елена Владимировна', image: teamMember1 },
    { name: 'Евгений Владимирович', image: teamMember2 },
    { name: 'Даниил Андреевич', image: teamMember3 },
    { name: 'Владислав Алексеевич', image: teamMember4 },
    { name: 'Татьяна Андреевна', image: teamMember1 },
    { name: 'Нина Викторовна', image: teamMember2 },
  ];

  const stats = [
    { icon: Calendar, value: '13', label: 'лет на рынке' },
    { icon: Award, value: '350+', label: 'проектов' },
    { icon: CheckCircle, value: '100%', label: 'положительных экспертиз' },
  ];

  return (
    <section id="team" className="py-20 bg-background">
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
            Создаём проекты, которые работают
          </h2>
          <p className="text-muted-foreground max-w-4xl mx-auto text-lg leading-relaxed">
            Наша миссия — создавать проекты, которые понятны, продуманы и доведены до результата в срок, 
            с прозрачной коммуникацией на каждом этапе. Для этого мы внедрили роль менеджера проекта — 
            внутреннего гаранта, который следит, чтобы процесс для заказчика был предсказуемым и комфортным, 
            независимо от масштаба задачи. За 13 лет этот подход доказал свою эффективность в более чем 
            350 реализованных проектах.
          </p>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-colors duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl mb-3">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="text-center">
                <h3 className="text-sm md:text-base font-semibold text-foreground leading-tight">{member.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid md:grid-cols-2 gap-6"
        >
          <div className="bg-secondary rounded-2xl p-8 flex items-center gap-6">
            <div className="w-16 h-16 bg-secondary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">📞</span>
            </div>
            <div>
              <p className="text-secondary-foreground/80 mb-1">Есть вопросы?</p>
              <a href="tel:+79001234567" className="text-xl md:text-2xl font-bold text-secondary-foreground hover:underline">
                +7 (900) 123-45-67
              </a>
            </div>
          </div>

          <div className="bg-primary rounded-2xl p-8 flex items-center gap-6">
            <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">✉️</span>
            </div>
            <div>
              <p className="text-primary-foreground/80 mb-1">Получить консультацию</p>
              <a href="mailto:info@company.ru" className="text-xl md:text-2xl font-bold text-primary-foreground hover:underline">
                Оставить заявку
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
