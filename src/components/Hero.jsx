import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden pt-20">
      {/* Background Blobs for Glassmorphism Context */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob" style={{ animationDelay: '4s' }}></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10"
      >
        <div className="lg:col-span-8">
          <motion.div variants={itemVariants} className="inline-flex px-4 py-1.5 glass-card rounded-full mb-8 items-center gap-2 border-primary/30">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse w"></span>
            <span className="font-mono text-xs font-semibold tracking-wider text-primary">System.Init(Rahul_Maddheshiya)</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-black tracking-tighter text-foreground leading-[1] md:leading-[0.9] mb-8">
            ARCHITECTING <br className="hidden sm:block"/>
            <span className="text-gradient">DIGITAL</span> BACKBONES
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-muted-foreground text-base md:text-xl max-w-2xl font-body font-light leading-relaxed mb-10 border-l-2 border-primary/40 pl-6 py-2">
            Senior Full Stack .NET Developer specializing in high-performance enterprise systems, cloud-native architectures, and precision-engineered user experiences.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-6 py-4 bg-primary text-primary-foreground font-headline font-bold uppercase tracking-widest rounded-lg hover:glow-primary hover:-translate-y-1 transition-all shadow-lg text-center text-sm"
            >
              View Engineering Logs
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-6 py-4 bg-card border border-border text-foreground font-headline font-bold uppercase tracking-widest rounded-lg hover:bg-muted/50 hover:-translate-y-1 transition-all shadow-sm text-center text-sm"
            >
              Initiate Contact
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50, rotateX: 20 }}
          animate={{ opacity: 1, x: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="lg:col-span-4 relative hidden lg:block"
        >
          <div className="glass-card p-6 rounded-2xl w-full translate-x-4 shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)]">
            <div className="flex gap-2 mb-6 items-center border-b border-border pb-4">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
              <span className="ml-4 font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Rahul.cs</span>
            </div>
            
            <pre className="font-mono text-[11px] leading-relaxed text-foreground/80 overflow-hidden">
              <span className="text-secondary font-bold">public class</span> <span className="text-primary font-bold">SeniorDeveloper</span> {'{\n'}
              {'  '}<span className="text-secondary">public string</span> Name = <span className="text-emerald-500">"Rahul"</span>;{'\n'}
              {'  '}<span className="text-secondary">public int</span> Experience = <span className="text-amber-500">7</span>;{'\n'}
              {'  '}<span className="text-secondary">public string[]</span> Focus = {'{ \n'}
              {'    '}<span className="text-emerald-500">".NET Core"</span>, <span className="text-emerald-500">"AWS"</span>, <span className="text-emerald-500">"Microservices"</span>{'\n'} 
              {'  }'};{'\n\n'}
              {'  '}<span className="text-secondary">public void</span> DeploySolution() {'{\n'}
              {'    '}<span className="text-muted-foreground italic">// High-performance logic</span>{'\n'}
              {'  }'}{'\n'}
              {'}'}
            </pre>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
