"use client";

import Image from "next/image";
import BracketFrame from "@/components/BracketFrame";
import { ABOUT, EDUCATION, EXPERIENCE, AWARDS } from "@/data";

export default function About() {
  return (
    <div className="min-h-screen w-full max-w-[1440px] mx-auto px-8 pt-28 lg:pt-40 pb-32">
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        <div className="lg:col-span-5 relative lg:sticky top-32 mb-12 lg:mb-0 w-full">
           <BracketFrame className="p-4 lg:p-8 mx-auto w-full max-w-lg" bracketColor="border-foreground" offset={0}>
             <div className="relative aspect-[4/5] w-full bg-foreground/5 border border-foreground/10 overflow-hidden">
               <Image 
                  src="/Zabid%20Al%20Muttaki.png"
                  alt="Zabid - About"
                  fill
                  className="object-cover object-top transition-all duration-700"
               />
             </div>
           </BracketFrame>
        </div>

        <div className="lg:col-span-7">
          <div>
            <div className="text-[10px] font-mono tracking-widest text-secondary uppercase mb-4">03 — WHO I AM</div>
            <h1 className="text-6xl md:text-[80px] font-black tracking-tighter uppercase mb-12 leading-[0.9]">
              THE MECHANICS<br />OF STORY
            </h1>

            <div className="space-y-8 max-w-2xl mb-16">
              <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground">
                I'm Zabid Al Muttaki — a visual storyteller and developer from Bangladesh. I live in <span className="font-bold">DaVinci Resolve</span>, cutting narratives and grading footage until every frame hits right. But storytelling doesn't stop at the timeline for me.
              </p>
              
              <div className="font-mono text-xs text-secondary leading-loose space-y-6">
                <p>
                  My work spans into AI-assisted animation utilizing <span className="text-foreground font-bold">Stable Diffusion</span>, generating entirely new visual landscapes. Meanwhile, my background in development allows me to bridge the gap between creative vision and technical execution.
                </p>
                
                <div className="pt-4 border-t border-foreground/10">
                  <p className="mb-4">I am currently building two applications:</p>
                  
                  <div className="space-y-4">
                    <div>
                      <span className="inline-block border border-foreground/20 px-3 py-1 rounded-sm bg-foreground/5 text-foreground font-bold mr-3 mb-2 md:mb-0">Clip Assassin</span> 
                      <span>A professional Python/React toolkit that drastically reduces repetitive tasks in DaVinci Resolve.</span>
                    </div>
                    
                    <div>
                      <span className="inline-block border border-foreground/20 px-3 py-1 rounded-sm bg-foreground/5 text-foreground font-bold mr-3 mb-2 md:mb-0">EchoFlow</span> 
                      <span>A cross-platform upload dashboard designed for content creators.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t-2 border-b-2 border-foreground py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-black mb-1">5+</div>
                  <div className="text-[10px] font-mono tracking-widest text-secondary uppercase">YEARS EDITING</div>
                </div>
                <div>
                  <div className="text-3xl font-black mb-1">200+</div>
                  <div className="text-[10px] font-mono tracking-widest text-secondary uppercase">PROJECTS CUT</div>
                </div>
                <div>
                  <div className="text-3xl font-black mb-1">2</div>
                  <div className="text-[10px] font-mono tracking-widest text-secondary uppercase">APPS IN DEVELOPMENT</div>
                </div>
              </div>
            </div>



            <div id="experience" className="mt-16 pt-16 border-t border-foreground">
              <h3 className="text-2xl font-bold tracking-tight uppercase mb-12">Experience</h3>
              
              <div className="flex flex-col gap-12 font-mono">
                {EXPERIENCE.map((exp, idx) => (
                  <div key={idx} className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-1 uppercase tracking-tight">{exp.role}</h4>
                        <div className="text-[10px] text-accent font-bold tracking-widest uppercase">{exp.company}</div>
                      </div>
                      <div className="text-[10px] font-bold tracking-widest text-foreground shrink-0 mt-2 md:mt-0">
                        {exp.duration}
                      </div>
                    </div>
                    
                    <p className="text-xs text-secondary leading-relaxed max-w-3xl mt-2">
                      {exp.description}
                    </p>
                    
                    <ul className="flex flex-col gap-3 mt-4 text-xs text-secondary max-w-3xl">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3">
                           <span className="text-foreground shrink-0">→</span>
                           <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div id="awards" className="mt-16 pt-16 border-t border-foreground">
              <h3 className="text-2xl font-bold tracking-tight uppercase mb-12">Awards</h3>
              
              <div className="flex flex-col gap-8 font-mono">
                {AWARDS.map((award, idx) => (
                  <BracketFrame key={idx} className="p-6 bg-foreground/5 border-transparent" bracketColor="border-foreground">
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-4">
                      <h4 className="text-sm font-bold text-foreground uppercase tracking-widest">{award.title}</h4>
                      <div className="text-[10px] font-bold tracking-widest text-accent shrink-0">
                        {award.date}
                      </div>
                    </div>
                    <div className="text-[10px] text-secondary tracking-widest uppercase mb-4">{award.organization}</div>
                    <p className="text-xs text-foreground/80 leading-relaxed">
                      {award.description}
                    </p>
                  </BracketFrame>
                ))}
              </div>
            </div>

            <div id="education" className="mt-16 pt-16 border-t border-foreground">
              <h3 className="text-2xl font-bold tracking-tight uppercase mb-12">Education & Training</h3>
              
              <div className="flex flex-col gap-8 font-mono">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-foreground/10 pb-8 last:border-0">
                    <div className="max-w-xl">
                      <h4 className="text-sm font-bold text-foreground mb-2">{edu.degree}</h4>
                      <div className="text-[10px] text-secondary tracking-widest uppercase">{edu.institution}</div>
                    </div>
                    <div className="text-[10px] font-bold tracking-widest text-foreground shrink-0 mt-2 md:mt-0">
                      {edu.year}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-24 pt-16 border-t border-foreground text-center">
              <h3 className="text-3xl md:text-5xl font-black tracking-tight uppercase mb-8">Ready to collaborate?</h3>
              <a href="/contact" className="inline-block bg-accent text-white px-10 py-5 text-sm font-mono font-bold tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors border border-accent hover:border-foreground">
                Start a Project
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
