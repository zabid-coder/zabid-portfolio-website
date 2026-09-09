'use client';

import Image from 'next/image';
import BracketFrame from '@/components/BracketFrame';
import { ABOUT, EDUCATION, EXPERIENCE, AWARDS, CLIENT_LOGOS } from '@/data';
import { CheckCircle2, ArrowRight, ShieldCheck, Terminal, Clapperboard, Award, GraduationCap, Briefcase } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const activeApps = [
    {
      name: 'Clip Assassin v2',
      badge: 'Python / React',
      desc: 'A specialized DaVinci Resolve automation toolkit engineered to eliminate repetitive timeline tasks and speed up post-production pipelines.'
    },
    {
      name: 'EchoFlow',
      badge: 'Next.js / Cloud',
      desc: 'A streamlined multi-channel publishing dashboard built to simplify digital video distribution for creators.'
    },
    {
      name: 'Trading Flow',
      badge: 'TypeScript / Analytics',
      desc: 'A real-time market intelligence and algorithmic flow analytics platform built with modern web standards.'
    }
  ];

  return (
    <div className="min-h-screen w-full max-w-[1440px] mx-auto px-4 md:px-8 pt-36 lg:pt-40 pb-32">
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        {/* Left Sticky Portrait Column */}
        <div className="lg:col-span-5 relative lg:sticky top-32 mb-8 lg:mb-0 w-full">
          <BracketFrame className="p-4 lg:p-6 mx-auto w-full max-w-md bg-foreground/[0.02]" bracketColor="border-foreground" offset={0}>
            <div className="relative aspect-[4/5] w-full bg-foreground/5 border border-foreground/10 overflow-hidden rounded-sm">
              <Image 
                src="/zabid_about_portrait.jpg"
                unoptimized
                alt="Zabid Al Muttaki - Senior Video Editor & Developer"
                fill
                priority
                className="object-cover object-top transition-all duration-700"
              />
            </div>

            {/* Quick Credentials Card below image */}
            <div className="mt-4 pt-4 border-t border-foreground/10 font-mono text-xs space-y-2">
              <div className="flex justify-between text-secondary">
                <span>ROLE</span>
                <span className="font-bold text-foreground">Senior Video Editor & Developer</span>
              </div>
              <div className="flex justify-between text-secondary">
                <span>AFFILIATION</span>
                <span className="font-bold text-foreground">Drik Picture Library Ltd.</span>
              </div>
              <div className="flex justify-between text-secondary">
                <span>FELLOWSHIP</span>
                <span className="font-bold text-accent">NEWF x Drik Fellow (2024-25)</span>
              </div>
              <div className="flex justify-between text-secondary">
                <span>LOCATION</span>
                <span className="font-bold text-foreground">Dhaka, Bangladesh</span>
              </div>
            </div>
          </BracketFrame>
        </div>

        {/* Right Content Column */}
        <div className="lg:col-span-7">
          <div>
            <div className="text-[10px] font-mono tracking-widest text-secondary uppercase mb-4">03 — WHO I AM</div>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter uppercase mb-8 leading-[0.9] text-foreground">
              THE MECHANICS<br />OF STORY.
            </h1>

            {/* Credible, Grounded Lead Paragraph */}
            <div className="space-y-6 max-w-3xl mb-12">
              <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground">
                I am Zabid Al Muttaki — a <strong className="font-bold">Senior Video Editor</strong> and <strong className="font-bold">Full-Stack Software Developer</strong> from Bangladesh. With over 5 years of post-production experience at <strong className="font-bold text-foreground">Drik Picture Library</strong>, I specialize in crafting high-impact visual narratives for international development organizations and global brands.
              </p>
              
              <div className="font-mono text-xs md:text-sm text-secondary leading-relaxed space-y-5">
                <p>
                  I approach editing as the ultimate rewrite of a story. Working deeply across <span className="text-foreground font-bold">DaVinci Resolve Studio</span>, <span className="text-foreground font-bold">Adobe Premiere Pro</span>, and <span className="text-foreground font-bold">After Effects</span>, my work is grounded in intentional pacing, emotional resonance, broadcast-grade color grading, and surgical sound design. Over the years, I have edited campaigns and documentary films for partners including <strong className="text-foreground">UNICEF, WaterAid, World Bank, UNOPS, Swisscontact, GIZ, and Coca-Cola</strong>.
                </p>

                <p>
                  Holding a <strong className="text-foreground">B.Sc in Computer Science & Engineering</strong>, I uniquely combine creative intuition with technical problem-solving. Instead of accepting manual bottlenecks in creative workflows, I build dedicated software and automation scripts to solve them.
                </p>

                {/* Software Tooling Box */}
                <div className="pt-6 border-t border-foreground/10">
                  <div className="text-xs font-bold uppercase text-foreground tracking-wider mb-4 flex items-center gap-2">
                    <Terminal size={15} className="text-accent" />
                    Active Software & Automation Tools
                  </div>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {activeApps.map((app, i) => (
                      <div key={i} className="p-3.5 bg-foreground/[0.03] border border-foreground/10 rounded-sm">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-foreground text-xs uppercase tracking-tight">{app.name}</span>
                          <span className="text-[10px] text-accent font-mono">{app.badge}</span>
                        </div>
                        <p className="text-xs text-secondary leading-normal">{app.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shadorittu AI Storytelling Mention */}
                <div className="p-4 bg-foreground/[0.03] border-l-2 border-accent rounded-sm mt-4">
                  <div className="text-xs font-bold uppercase text-foreground tracking-wider mb-1 flex items-center gap-2">
                    <Clapperboard size={14} className="text-accent" />
                    Creator of Shadorittu (Original AI Narrative Series)
                  </div>
                  <p className="text-xs text-secondary leading-relaxed">
                    Pioneering Bangladeshi folklore and nostalgia-driven AI animated storytelling (9+ episodes), blending Midjourney, Runway, and DaVinci Resolve into atmospheric visual worlds.
                  </p>
                </div>
              </div>
            </div>

            {/* Grounded Stats Strip */}
            <div className="border-y-2 border-foreground py-8 mb-16">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center sm:text-left">
                <div>
                  <div className="text-3xl lg:text-4xl font-black text-foreground mb-1">5+</div>
                  <div className="text-[10px] font-mono tracking-widest text-secondary uppercase">YEARS IN POST-PROD</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-black text-foreground mb-1">200+</div>
                  <div className="text-[10px] font-mono tracking-widest text-secondary uppercase">VIDEOS & CAMPAIGNS</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-black text-foreground mb-1">20+</div>
                  <div className="text-[10px] font-mono tracking-widest text-secondary uppercase">GLOBAL CLIENTS</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-black text-foreground mb-1">3</div>
                  <div className="text-[10px] font-mono tracking-widest text-secondary uppercase">SOFTWARE PLATFORMS</div>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div id="experience" className="mb-16">
              <div className="flex items-center gap-3 mb-8 border-b border-foreground pb-4">
                <Briefcase size={20} className="text-accent" />
                <h3 className="text-2xl font-bold tracking-tight uppercase">Professional Experience</h3>
              </div>
              
              <div className="flex flex-col gap-8 font-mono">
                {EXPERIENCE.map((exp, idx) => (
                  <BracketFrame key={idx} className="p-6 md:p-8 bg-foreground/[0.02] border-transparent" bracketColor="border-foreground">
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-foreground uppercase tracking-tight">{exp.role}</h4>
                        <div className="text-xs text-accent font-bold tracking-wider uppercase mt-0.5">{exp.company}</div>
                      </div>
                      <div className="text-xs font-bold tracking-widest text-foreground shrink-0 mt-1 md:mt-0">
                        {exp.duration}
                      </div>
                    </div>
                    
                    <p className="text-xs text-secondary leading-relaxed max-w-3xl mb-4">
                      {exp.description}
                    </p>
                    
                    <ul className="flex flex-col gap-2.5 text-xs text-secondary max-w-3xl">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <span className="text-accent shrink-0 font-bold">→</span>
                          <span className="leading-relaxed text-foreground/90">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </BracketFrame>
                ))}
              </div>
            </div>

            {/* Awards & Fellowships */}
            <div id="awards" className="mb-16">
              <div className="flex items-center gap-3 mb-8 border-b border-foreground pb-4">
                <Award size={20} className="text-accent" />
                <h3 className="text-2xl font-bold tracking-tight uppercase">Awards & Fellowships</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono">
                {AWARDS.map((award, idx) => (
                  <BracketFrame key={idx} className="p-6 bg-foreground/[0.03] border-transparent flex flex-col justify-between" bracketColor="border-foreground">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-bold tracking-widest text-accent uppercase">{award.date}</span>
                      </div>
                      <h4 className="text-sm font-bold text-foreground uppercase tracking-tight mb-1">{award.title}</h4>
                      <div className="text-[10px] text-secondary tracking-widest uppercase mb-3">{award.organization}</div>
                      <p className="text-xs text-secondary leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </BracketFrame>
                ))}
              </div>
            </div>

            {/* Education & Credentials */}
            <div id="education" className="mb-20">
              <div className="flex items-center gap-3 mb-8 border-b border-foreground pb-4">
                <GraduationCap size={20} className="text-accent" />
                <h3 className="text-2xl font-bold tracking-tight uppercase">Education & Technical Certifications</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="p-4 bg-foreground/[0.02] border border-foreground/10 rounded-sm flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-foreground mb-1">{edu.degree}</h4>
                      <div className="text-[10px] text-secondary tracking-wider uppercase">{edu.institution}</div>
                    </div>
                    <div className="text-[10px] font-bold text-accent tracking-widest mt-3">
                      {edu.year}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact CTA */}
            <div className="pt-12 border-t-2 border-foreground text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-2xl font-black tracking-tight uppercase text-foreground">Have a project in mind?</h3>
                <p className="font-mono text-xs text-secondary mt-1">Let's discuss how I can bring your narrative to life.</p>
              </div>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 text-xs font-mono font-bold tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors shrink-0"
              >
                Start a Conversation
                <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
