import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import teamMember1 from '@/assets/team-member-1.jpg';
import teamMember2 from '@/assets/team-member-2.jpg';
import teamMember3 from '@/assets/team-member-3.jpg';
import teamMember4 from '@/assets/team-member-4.jpg';

const TeamSection = () => {
  const team = [
    {
      name: 'Marcus Rivera',
      role: 'Project Manager',
      image: teamMember1,
    },
    {
      name: 'Emma Thompson',
      role: 'Lead Architect',
      image: teamMember2,
    },
    {
      name: 'David Martinez',
      role: 'Construction Lead',
      image: teamMember3,
    },
    {
      name: 'Jennifer Walsh',
      role: 'Design Director',
      image: teamMember4,
    },
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
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold uppercase tracking-wider">Our Team</span>
          <h2 className="section-title mt-2">
            Our Expert Team<br />Members Will Help You
          </h2>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full aspect-[3/4] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Social Icons */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-gold-dark transition-colors duration-300"
                    >
                      <Icon className="w-5 h-5 text-secondary-foreground" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-secondary font-medium">{member.role}</p>
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
              <p className="text-secondary-foreground/80 mb-1">Have any questions?</p>
              <a href="tel:8002503899" className="text-2xl font-bold text-secondary-foreground hover:underline">
                Call: 800 250 389
              </a>
            </div>
          </div>

          <div className="bg-primary rounded-2xl p-8 flex items-center gap-6">
            <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">✉️</span>
            </div>
            <div>
              <p className="text-primary-foreground/80 mb-1">Contact for getting quote</p>
              <a href="mailto:info@buildentia.com" className="text-2xl font-bold text-primary-foreground hover:underline">
                Get a Quote
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
