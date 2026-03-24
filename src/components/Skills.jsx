import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const SkillCard = ({ icon, title, skills, colors }) => (
  <motion.div variants={itemVariants} className="p-8 glass-card border border-border/10 hover:shadow-2xl transition-all group overflow-hidden relative">
    <div className={`absolute top-0 right-0 w-32 h-32 ${colors.blobStatic} rounded-full blur-[50px] ${colors.blobHover} transition-all duration-500`}></div>
    <span className={`material-symbols-outlined text-5xl ${colors.text} mb-6 drop-shadow-md`} data-icon={icon}>{icon}</span>
    <h3 className="font-headline text-xl font-bold mb-6 tracking-tight text-foreground relative z-10">{title}</h3>
    <div className="flex flex-wrap gap-3 relative z-10">
      {skills.map((skill, index) => (
        <span key={index} className={`px-3 py-1.5 bg-background/50 backdrop-blur-sm text-muted-foreground font-mono text-[11px] rounded-md font-semibold border ${colors.border} ${colors.hoverBg} hover:text-foreground transition-colors cursor-default`}>
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section className="py-20 md:py-32 px-6 relative z-10" id="skills">
      {/* Background context */}
      <div className="absolute top-0 left-1/2 -ml-[300px] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4 text-primary uppercase font-mono tracking-widest text-xs font-semibold">
            <span className="w-8 h-[2px] bg-primary"></span> Tech Arsenal <span className="w-8 h-[2px] bg-primary"></span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground mb-4">Core Competencies</h2>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px", once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <SkillCard 
            icon="cloud" 
            title="Cloud & DevOps" 
            colors={{
              blobStatic: 'bg-primary/10',
              blobHover: 'group-hover:bg-primary/20',
              text: 'text-primary',
              border: 'border-primary/20',
              hoverBg: 'hover:bg-primary/10',
            }}
            skills={["AWS (EC2, LAMBDA)", "AZURE DEVOPS", "CI/CD", "GIT / TFS", "DOCKER", "KUBERNETES"]} 
          />
          <SkillCard 
            icon="database" 
            title="Backend" 
            colors={{
              blobStatic: 'bg-secondary/10',
              blobHover: 'group-hover:bg-secondary/20',
              text: 'text-secondary',
              border: 'border-secondary/20',
              hoverBg: 'hover:bg-secondary/10',
            }}
            skills={[".NET 6/7/8", "C#", "ASP.NET MVC", "WEB API / REST", "ENTITY FRAMEWORK", "LINQ"]} 
          />
          <SkillCard 
            icon="code" 
            title="Frontend" 
            colors={{
              blobStatic: 'bg-emerald-500/10',
              blobHover: 'group-hover:bg-emerald-500/20',
              text: 'text-emerald-500',
              border: 'border-emerald-500/20',
              hoverBg: 'hover:bg-emerald-500/10',
            }}
            skills={["REACT.JS", "JAVASCRIPT / ES6+", "JQUERY", "HTML5 / CSS3", "TAILWIND CSS"]} 
          />
          <SkillCard 
            icon="storage" 
            title="Database" 
            colors={{
              blobStatic: 'bg-amber-500/10',
              blobHover: 'group-hover:bg-amber-500/20',
              text: 'text-amber-500',
              border: 'border-amber-500/20',
              hoverBg: 'hover:bg-amber-500/10',
            }}
            skills={["SQL SERVER", "T-SQL", "DATABASE DESIGN", "QUERY OPTIMIZATION", "REDIS"]} 
          />
          <SkillCard 
            icon="account_tree" 
            title="Architecture" 
            colors={{
              blobStatic: 'bg-rose-500/10',
              blobHover: 'group-hover:bg-rose-500/20',
              text: 'text-rose-500',
              border: 'border-rose-500/20',
              hoverBg: 'hover:bg-rose-500/10',
            }}
            skills={["MICROSERVICES", "RESTFUL APIS", "MVC PATTERN", "SOLID PRINCIPLES", "CLEAN ARCHITECTURE"]} 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
