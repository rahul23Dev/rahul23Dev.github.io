import React from 'react';
import { motion } from 'framer-motion';

const Metrics = () => {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="absolute inset-0 bg-muted/50 skew-y-[-2deg] origin-top-left -z-10 shadow-sm border-y border-border/40"></div>
      
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-4 text-primary uppercase font-mono tracking-widest text-xs font-semibold">
              <span className="w-8 h-[2px] bg-primary"></span> Education
            </div>
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-12 text-foreground">Academic Pedigree</h2>
            <div className="space-y-10">
              <div className="flex gap-6 items-start group">
                <div className="p-5 bg-card border border-border rounded-2xl shadow-sm group-hover:border-primary/50 group-hover:shadow-glow transition-all duration-300">
                  <span className="material-symbols-outlined text-primary text-3xl" data-icon="school">school</span>
                </div>
                <div>
                  <h4 className="font-headline text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">MCA — Computer Applications</h4>
                  <p className="text-secondary font-mono text-[11px] font-bold uppercase tracking-wider mb-3">IGNOU | 2013 - 2017</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">Graduated with a focus on enterprise application development and advanced database management systems.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start group">
                <div className="p-5 bg-card border border-border rounded-2xl shadow-sm group-hover:border-secondary/50 group-hover:shadow-[0_0_20px_rgba(208,188,255,0.3)] transition-all duration-300">
                  <span className="material-symbols-outlined text-secondary text-3xl" data-icon="history_edu">history_edu</span>
                </div>
                <div>
                  <h4 className="font-headline text-2xl font-bold text-foreground mb-1 group-hover:text-secondary transition-colors">BCA — Computer Applications</h4>
                  <p className="text-secondary font-mono text-[11px] font-bold uppercase tracking-wider mb-3">IGNOU | 2011 - 2014</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">Foundational excellence in software development methodologies, algorithms, and core computing concepts.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-10 lg:p-14 rounded-3xl border-l-8 border-l-primary shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[60px] pointer-events-none"></div>
            
            <div className="inline-flex items-center gap-2 mb-4 text-foreground/50 uppercase font-mono tracking-widest text-xs font-semibold">
              <span className="w-8 h-[2px] bg-foreground/20"></span> Statistics
            </div>
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-12 text-foreground">Key Metrics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="glass-card hover:bg-muted/30 p-6 rounded-2xl border-none">
                <div className="text-5xl font-headline font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary/40 mb-3">70%</div>
                <div className="text-foreground font-mono font-bold text-[11px] uppercase tracking-widest mb-2">Efficiency Gain</div>
                <p className="text-muted-foreground text-sm opacity-80 leading-relaxed">Achieved through automated testing and CI/CD optimization.</p>
              </div>
              <div className="glass-card hover:bg-muted/30 p-6 rounded-2xl border-none">
                <div className="text-5xl font-headline font-black text-transparent bg-clip-text bg-gradient-to-br from-secondary to-secondary/40 mb-3">99.9%</div>
                <div className="text-foreground font-mono font-bold text-[11px] uppercase tracking-widest mb-2">System Uptime</div>
                <p className="text-muted-foreground text-sm opacity-80 leading-relaxed">Maintained across enterprise production environments.</p>
              </div>
              <div className="glass-card hover:bg-muted/30 p-6 rounded-2xl border-none">
                <div className="text-5xl font-headline font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-emerald-400/40 mb-3">0.5s</div>
                <div className="text-foreground font-mono font-bold text-[11px] uppercase tracking-widest mb-2">Load Latency</div>
                <p className="text-muted-foreground text-sm opacity-80 leading-relaxed">Average response time for optimized high-traffic APIs.</p>
              </div>
              <div className="glass-card hover:bg-muted/30 p-6 rounded-2xl border-none">
                <div className="text-5xl font-headline font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-400 to-amber-400/40 mb-3">12k+</div>
                <div className="text-foreground font-mono font-bold text-[11px] uppercase tracking-widest mb-2">Code Commits</div>
                <p className="text-muted-foreground text-sm opacity-80 leading-relaxed">Contributions across major enterprise repositories.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Metrics;
