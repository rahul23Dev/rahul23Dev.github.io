import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/MyProfilePic.png';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const About = () => {
  return (
    <section className="py-20 md:py-24 px-6 relative z-10" id="about">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-100px", once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
      >
        <motion.div variants={fadeIn} className="relative group perspective-1000">
          <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-xl group-hover:bg-primary/30 group-hover:blur-2xl transition-all duration-500"></div>
          
          <div className="relative z-10 w-full h-[400px] md:h-[550px] overflow-hidden rounded-2xl glass-panel p-2">
            <img 
              alt="Rahul Maddheshiya - Senior Full Stack .NET Developer Portrait" 
              className="w-full h-full object-cover rounded-xl filter grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100" 
              src={profilePic} 
            />
          </div>

          <div className="absolute -bottom-6 -right-6 md:-right-8 z-20 glass-card p-4 md:p-6 rounded-2xl border-white/10 shadow-glass border transform translate-z-[20px] group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500">
            <div className="flex items-center gap-4">
              <div className="font-headline text-4xl md:text-5xl font-black text-primary drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">7+</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-foreground font-bold leading-relaxed">
                Years of <br/> Engineering <br/> Excellence
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeIn} className="flex flex-col justify-center h-full pt-10 lg:pt-0">
          <div className="inline-flex items-center gap-2 mb-6 text-secondary uppercase font-mono tracking-widest text-xs font-semibold">
            <span className="w-1 h-3 bg-secondary rounded-full"></span> Personnel Profile
          </div>
          <h2 className="font-headline text-4xl lg:text-5xl font-bold mb-8 uppercase tracking-tighter text-foreground">
            Bridging Logic <br/> &amp; Execution
          </h2>
          
          <div className="space-y-6 text-muted-foreground font-body leading-relaxed text-lg">
            <p className="bg-muted/10 p-5 rounded-xl border-l-4 border-primary shadow-sm">
              Driven by architectural elegance and code efficiency, I have spent nearly a decade crafting robust software solutions for global enterprises. My approach combines the precision of a structural engineer with the creativity of a digital artisan.
            </p>
            <p className="px-5">
              I specialize in bridging the gap between complex business logic and high-performance technical execution, ensuring scalability remains a core tenet of every build in modern and scalable architectures.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mt-12">
            <motion.div 
              whileHover={{ y: -5 }} 
              className="p-6 glass-card rounded-2xl border-b-4 border-primary shadow-lg"
            >
              <div className="text-secondary font-mono text-xs mb-2 uppercase tracking-wider font-bold">Deployments</div>
              <div className="text-3xl font-headline font-bold text-foreground">50+ Projects</div>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }} 
              className="p-6 glass-card rounded-2xl border-b-4 border-secondary shadow-lg"
            >
              <div className="text-primary font-mono text-xs mb-2 uppercase tracking-wider font-bold">Performance</div>
              <div className="text-3xl font-headline font-bold text-foreground">70% Boost</div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
