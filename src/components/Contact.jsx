import React from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const handleStartProject = () => {
    toast.success('System Initialized', {
      description: 'Communication link established. I will respond to your query shortly.',
      icon: <CheckCircle2 className="text-primary" size={18} />,
      style: {
        background: 'hsl(var(--card))',
        color: 'hsl(var(--foreground))',
        borderColor: 'hsl(var(--border))',
      },
    });
  };

  return (
    <section className="py-20 md:py-32 px-6 relative z-10" id="contact">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-panel p-8 md:p-20 lg:p-24 rounded-[2rem] md:rounded-[3rem] relative overflow-hidden text-center shadow-2xl"
        >
          {/* Animated Background Gradients */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-blob"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '3s' }}></div>
          
          <div className="relative z-20 flex flex-col items-center">
            <div className="p-4 bg-primary/10 rounded-2xl mb-8 border border-primary/20 backdrop-blur-sm">
              <Send size={40} className="text-primary" strokeWidth={1.5} />
            </div>
            
            <h2 className="font-headline text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-tight text-foreground drop-shadow-md">
              Ready to <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Scale</span> Your Infrastructure?
            </h2>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl font-body font-light leading-relaxed mb-12">
              Currently available for senior-level opportunities and high-impact technical consulting across global enterprises. Let's engineer exactly what you need.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16 w-full max-w-2xl bg-card/60 p-6 rounded-3xl border border-border shadow-sm">
              <div className="flex-1 text-center md:border-r border-border md:pr-6">
                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-3 font-bold">Direct Channels</div>
                <div className="space-y-1">
                  <a className="block text-xl font-headline font-bold text-foreground hover:text-primary transition-colors" href="mailto:rjmaddeshiya@gmail.com">rjmaddeshiya@gmail.com</a>
                  <a className="block text-lg font-headline font-bold text-foreground hover:text-primary transition-colors" href="tel:+918299710048">+91-8299710048</a>
                </div>
              </div>
              <div className="w-px h-12 bg-border hidden md:block mx-2"></div>
              <div className="flex-1 text-center md:pl-6">
                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-3 font-bold">Operational Base</div>
                <div className="text-xl font-headline font-bold text-foreground">Noida, India</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleStartProject}
                className="w-full sm:w-auto px-10 py-5 bg-foreground text-background font-mono font-bold text-xs uppercase tracking-widest rounded-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all cursor-pointer dark:hover:shadow-glow flex justify-center items-center gap-3"
              >
                START PROJECT <span className="material-symbols-outlined text-[16px]">bolt</span>
              </motion.button>
              
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto justify-center px-10 py-5 bg-card/50 backdrop-blur-md border border-border text-foreground font-mono font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-muted transition-all flex items-center gap-3 shadow-sm hover:border-primary/50" 
                href="https://www.linkedin.com/in/rahul-maddheshiya-0601b714b" 
                target="_blank" 
                rel="noreferrer"
              >
                LinkedIn Network <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
