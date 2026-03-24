import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section className="py-20 md:py-32 px-6 relative z-10" id="projects">
      {/* Background glow for depth */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-4 text-primary uppercase font-mono tracking-widest text-xs font-semibold">
              <span className="w-8 h-[2px] bg-primary"></span> Enterprise Suite
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground">Project Repository</h2>
          </div>
          <div className="font-mono text-xs text-muted-foreground max-w-sm text-left md:text-right border-l md:border-l-0 md:border-r 2 border-primary/20 pl-4 md:pl-0 md:pr-4 py-2 opacity-80 backdrop-blur-sm bg-muted/5 rounded-sm">
            All deployments built with zero-trust security and horizontal scalability as standard protocol.
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Large Project */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 group relative overflow-hidden glass-card rounded-2xl hover:shadow-[0_20px_50px_rgba(56,189,248,0.15)] focus:outline-none"
          >
            <div className="absolute inset-0 bg-background/20 z-10 pointer-events-none"></div>
            <img 
              alt="Flight and Hotel Booking Platform UI built with .NET Core and React" 
              className="w-full h-64 sm:h-80 md:h-[500px] object-cover filter brightness-75 grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAet8zgwVQ80xmqnZVNTWeaXrXuHXgOjiS8lp3tYRy0bJx4opDitoOMiLkArnzwrOx6FGI1xiwGwB6AU-uXp6p_HLfNWbVjdq1PBCcd_9OX3kKxIDbfU3dEnKr1FNhrRAbuU3gzhdU3v1nKMd_vSnAdF2taagP61BdPOljqsbVVW2iKx_2nlxKn2VVYfFswzHJjp-YJKZvEevDefd6dzkJImjfC8PBTw3gqbPz5bPwrl7NBPJYvBqkLUSL5E342rjQ2Ay_SexAzw3E" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent p-12 flex flex-col justify-end z-20">
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 bg-primary/20 backdrop-blur-md text-primary font-mono text-[10px] rounded-full uppercase tracking-widest border border-primary/20 font-bold">Hospitality</span>
                <span className="px-3 py-1 bg-primary/20 backdrop-blur-md text-primary font-mono text-[10px] rounded-full uppercase tracking-widest border border-primary/20 font-bold">Travel</span>
              </div>
              <h3 className="font-headline text-2xl md:text-4xl font-bold mb-4 uppercase text-foreground">FLIGHT &amp; HOTEL BOOKING PLATFORM</h3>
              <p className="text-muted-foreground text-xs md:text-sm max-w-xl mb-8 leading-relaxed">A high-performance booking engine built with .NET Core and React.js using microservices architecture. Integrated Stripe and PayPal for global payments.</p>
              <button className="w-fit px-8 py-4 bg-primary/10 backdrop-blur-md border border-primary/50 text-foreground font-mono font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all">
                Examine Architecture
              </button>
            </div>
          </motion.div>

          {/* Small Project 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 group glass-panel rounded-2xl p-8 flex flex-col justify-between hover:border-secondary/30 transition-all hover:shadow-[0_20px_50px_rgba(208,188,255,0.1)] hover:-translate-y-1"
          >
            <div>
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 bg-secondary/20 backdrop-blur-md text-secondary font-mono text-[10px] rounded-full uppercase tracking-widest border border-secondary/20 font-bold">Mobile</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 uppercase tracking-tight text-foreground">MOBILE PAYROLL APP</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Cross-platform Android/iOS payroll companion with IRS compliance and secure ACH payment processing for employees.</p>
            </div>
            <div className="mt-12 pt-8 border-t border-border/50">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-secondary font-mono text-[10px] bg-muted/50 px-2 py-1 rounded">REACT NATIVE</span>
                <span className="text-secondary font-mono text-[10px] bg-muted/50 px-2 py-1 rounded">.NET API</span>
              </div>
              <button className="text-foreground font-mono font-bold text-xs uppercase tracking-widest flex items-center gap-3 hover:text-secondary group-hover:translate-x-2 transition-transform">
                DETAILS <span className="material-symbols-outlined text-sm bg-secondary/10 p-1.5 rounded-full" data-icon="arrow_forward">arrow_forward</span>
              </button>
            </div>
          </motion.div>

          {/* Small Project 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4 group glass-panel rounded-2xl p-8 flex flex-col justify-between hover:border-emerald-500/30 transition-all hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)] hover:-translate-y-1"
          >
            <div>
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 bg-emerald-500/20 backdrop-blur-md text-emerald-500 font-mono text-[10px] rounded-full uppercase tracking-widest border border-emerald-500/20 font-bold">Healthcare</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 uppercase tracking-tight text-foreground">VITALCORE EHR</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">HL7-compliant Electronic Health Record system with end-to-end patient data encryption and real-time medical charting.</p>
            </div>
            <div className="mt-12 pt-8 border-t border-border/50">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-emerald-500 font-mono text-[10px] bg-muted/50 px-2 py-1 rounded">ANGULAR</span>
                <span className="text-emerald-500 font-mono text-[10px] bg-muted/50 px-2 py-1 rounded">SQL SERVER</span>
              </div>
              <button className="text-foreground font-mono font-bold text-xs uppercase tracking-widest flex items-center gap-3 hover:text-emerald-500 group-hover:translate-x-2 transition-transform">
                DETAILS <span className="material-symbols-outlined text-sm bg-emerald-500/10 p-1.5 rounded-full" data-icon="arrow_forward">arrow_forward</span>
              </button>
            </div>
          </motion.div>

          {/* Large Project 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-8 group relative overflow-hidden glass-card rounded-2xl focus:outline-none"
          >
            <div className="absolute inset-0 bg-background/30 z-10 pointer-events-none"></div>
            <img 
              alt="Global Payroll Engine System Architecture Visualization" 
              className="w-full h-64 sm:h-80 md:h-[400px] object-cover filter brightness-50 group-hover:scale-105 transition-all duration-700 ease-out" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1nC0qQzbqAaQV-OuvB-7ARsDqMxHio9PK_2M-FvxXNrT3NO-EyaX8ZQ5XAS-3vKqvEY_85_XD4_uKeULSeWkbzA30QZObkaDzf5qrTsRV-daC1HgpW3iw4WASw_9Xr7T8n8vCsuvs2XSR0qhvcDg6RdfMhulCv-vevR9SANujv51_HT-MGmXIl0C8-v0yeCzyW8zzTR7tr6HNt88Vpw7RN8PJ_wdeldVCXZshhuNMNKGY4t1n-uR-STIbA7gd_kaBnE1l2lb2BV8" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent p-12 flex flex-col justify-end z-20">
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 bg-foreground/10 backdrop-blur-md text-foreground font-mono text-[10px] rounded-full uppercase tracking-widest border border-border font-bold">Enterprise</span>
              </div>
              <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4 uppercase text-foreground">GLOBAL PAYROLL ENGINE</h3>
              <p className="text-muted-foreground text-xs md:text-sm max-w-lg mb-8 leading-relaxed">A distributed payroll processing system handling 100k+ monthly transactions with multi-currency support and automated tax compliance.</p>
              <button className="w-fit px-8 py-4 bg-background/50 backdrop-blur-xl border border-border text-foreground font-mono font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-background hover:-translate-y-1 transition-all shadow-sm">
                VIEW LOGS 
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
