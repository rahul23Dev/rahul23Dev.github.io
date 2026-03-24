import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Briefcase, Monitor, Code2, Database } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full relative py-16 mt-20 z-10 overflow-hidden bg-card/10 backdrop-blur-xl border-t border-border">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="text-2xl font-black text-foreground font-headline uppercase tracking-tighter mb-4 flex items-center gap-3">
              RAHUL <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm font-body">
              Architecting secure, high-performance backbones for modern global enterprises. Scaling logic from databases to the client interface.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono text-[10px] text-foreground font-bold uppercase tracking-widest mb-6">Capabilities</h4>
            <div className="space-y-3 flex flex-col font-body text-sm text-muted-foreground">
              <span className="flex items-center gap-2 hover:text-primary transition-colors cursor-default"><Monitor size={14}/> Full Stack Architecture</span>
              <span className="flex items-center gap-2 hover:text-secondary transition-colors cursor-default"><Database size={14}/> Database Design</span>
              <span className="flex items-center gap-2 hover:text-emerald-500 transition-colors cursor-default"><Code2 size={14}/> Cross-platform Solutions</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-mono text-[10px] text-foreground font-bold uppercase tracking-widest mb-6">Contact</h4>
            <div className="flex gap-4">
              <motion.a 
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all shadow-sm"
                href="https://github.com/rahul23Dev" target="_blank" rel="noreferrer" title="GitHub"
              >
                <Terminal size={18} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-secondary/20 hover:text-secondary hover:border-secondary/50 transition-all shadow-sm"
                href="https://www.linkedin.com/in/rahul-maddheshiya-0601b714b" target="_blank" rel="noreferrer" title="LinkedIn"
              >
                <Briefcase size={18} />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground font-mono text-xs tracking-widest uppercase text-center md:text-left">
            © {new Date().getFullYear()} Rahul Maddheshiya. All Rights Reserved.
          </div>
          <div className="text-muted-foreground font-mono text-[10px] tracking-widest uppercase">
            Built with React, Vite &amp; Framer Motion
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
