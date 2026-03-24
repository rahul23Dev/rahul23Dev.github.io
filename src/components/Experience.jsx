import React from 'react';
import { motion } from 'framer-motion';

const ExperienceItem = ({ role, duration, company, points, color, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ delay, duration: 0.6 }}
    className="relative pl-12 md:pl-0"
  >
    {/* Timeline Line */}
    <div className="absolute left-[20px] top-8 bottom-[-3rem] w-px bg-border md:left-1/2 md:-ml-px hidden md:block"></div>
    <div className="absolute left-[20px] top-8 bottom-[-3rem] w-px bg-border md:hidden"></div>

    <div className="md:grid md:grid-cols-12 md:gap-8 items-start relative">
      {/* Node Marker */}
      <div className="absolute left-[15px] md:left-1/2 md:-ml-[5px] top-1 w-3 h-3 rounded-full bg-background border-2 z-10 shadow-[0_0_10px_rgba(var(--primary),0.5)]" style={{ borderColor: `var(--${color})`, background: `var(--${color})` }}></div>
      <div className={`absolute left-[11px] md:left-1/2 md:-ml-[9px] top-0 w-5 h-5 rounded-full z-0 opacity-20`} style={{ background: `var(--${color})` }}></div>

      <div className="md:col-span-5 md:text-right mt-1 md:mt-0 mb-4 md:mb-0 pr-0 md:pr-10">
        <h3 className="font-headline text-2xl font-bold text-foreground mb-1">{role}</h3>
        <div className="text-secondary font-bold text-sm uppercase tracking-widest mb-3 opacity-90">{company}</div>
        <span className="font-mono text-[10px] text-muted-foreground bg-muted/30 px-3 py-1.5 uppercase tracking-widest rounded-md border border-border inline-block shadow-sm">
          {duration}
        </span>
      </div>

      <div className="col-span-2 hidden md:block"></div>

      <div className="md:col-span-5 pl-0 md:pl-10 pb-16">
        <div className="glass-panel p-6 rounded-2xl border-white/5 hover:border-white/10 transition-colors">
          <ul className="text-muted-foreground leading-relaxed list-none space-y-4 text-sm font-body">
            {points.map((pt, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-primary mt-1 opacity-60 flex-shrink-0">▹</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div >
  </motion.div>
);

const Experience = () => {
  return (
    <section className="py-20 md:py-32 px-6 relative z-10" id="experience">
      {/* Gradient Context */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4 text-secondary uppercase font-mono tracking-widest text-xs font-semibold">
            <span className="w-8 h-[2px] bg-secondary"></span> Operational Timeline <span className="w-8 h-[2px] bg-secondary"></span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground mb-4">Service History</h2>
        </motion.div>

        <div className="space-y-4 relative">
          <ExperienceItem 
            role="Senior Developer"
            company="Code Cyper Pvt. Ltd"
            duration="JUL 2023 — PRESENT"
            color="primary"
            delay={0.1}
            points={[
              <><strong className="text-foreground">Cloud Deployment:</strong> Architected and deployed a US Payroll Web Application on AWS, utilizing EC2 for hosting and S3 for secure storage of tax documents.</>,
              <><strong className="text-foreground">Serverless Integration:</strong> Integrated AWS Lambda to handle background event-driven tasks such as automated notifications.</>,
              <><strong className="text-foreground">Database Management:</strong> Managed high-availability data environments using Amazon RDS (SQL Server), ensuring 99.9% accuracy.</>,
              <><strong className="text-foreground">Security:</strong> Built RESTful APIs with JWT authentication and RBAC for secure payroll data management.</>
            ]}
          />
          <ExperienceItem 
            role="Software Engineer"
            company="Chetu Inc."
            duration="JUL 2021 — JUL 2023"
            color="secondary"
            delay={0.2}
            points={[
              <><strong className="text-foreground">Property Management:</strong> Developed a comprehensive Property Management System managing 5,000+ rental listings.</>,
              <><strong className="text-foreground">CRM Application:</strong> Enhanced a custom CRM application leading to a 30% improvement in sales rep efficiency.</>,
              <><strong className="text-foreground">DevOps:</strong> Established Azure DevOps CI/CD pipelines, reducing manual deployment errors by 45%.</>
            ]}
          />
          <ExperienceItem 
            role="Associate Developer"
            company="Esperanza Innovation Pvt. Ltd"
            duration="JUL 2020 — JUL 2021"
            color="muted-foreground"
            delay={0.3}
            points={[
              <><strong className="text-foreground">School Management:</strong> Built a scalable School Management Application supporting 2,000+ students.</>,
              <><strong className="text-foreground">Test Engine:</strong> Developed a robust MCQ-based test engine with a 70% reduction in evaluation time.</>,
              <><strong className="text-foreground">UI Optimization:</strong> Improved overall application responsiveness by 35% through front-end refactoring.</>
            ]}
          />
          <ExperienceItem 
            role="Junior Web Developer"
            company="Hashchain Fintech Pvt Ltd"
            duration="JUN 2019 — JUL 2020"
            color="muted-foreground"
            delay={0.4}
            points={[
              <><strong className="text-foreground">Fintech Software:</strong> Contributed to the development of core accounting software for fintech clients.</>,
              <><strong className="text-foreground">Efficiency:</strong> Implemented automated report generation tools that drove a 35% efficiency improvement.</>
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
