'use client';

import { motion } from 'framer-motion';
import BracketFrame from '@/components/BracketFrame';
import { 
  Film, 
  Smartphone, 
  Layers, 
  Code, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Target, 
  Cpu, 
  ArrowRight,
  ShieldCheck,
  Wrench
} from 'lucide-react';
import Link from 'next/link';

export default function Capabilities() {
  const services = [
    {
      id: 'documentary',
      icon: Film,
      badge: '01 / NARRATIVE & IMPACT',
      title: 'Documentary & Impact Storytelling',
      problemSolved: 'NGOs and international organizations need to communicate complex socio-environmental stories with raw authenticity and emotional depth.',
      description: 'Over 5 years of cutting long-form and short-form documentaries for global development leaders like UNICEF, WaterAid, UNOPS, and World Bank. I treat editing as the ultimate rewrite of a story—meticulously structuring interviews, B-roll rhythm, and human moments.',
      deliverables: [
        'Multi-cam timeline assembly & story arc pacing',
        'Broadcast-standard DaVinci Resolve color grading',
        'Atmospheric sound design, audio cleaning & Foley',
        'Multi-language subtitling, translation & SRT delivery',
        'Master 4K ProRes 422 HQ & web-optimized delivery'
      ],
      idealFor: 'UN Agencies, International NGOs, Environmental Foundations, Independent Film Festivals',
      toolkit: ['DaVinci Resolve Studio', 'Fairlight Audio', 'Blackmagic Fusion', 'Premiere Pro', 'iZotope RX']
    },
    {
      id: 'social-shorts',
      icon: Smartphone,
      badge: '02 / SHORT-FORM & SOCIAL',
      title: 'Commercials & High-Retention Shorts (9:16)',
      problemSolved: 'Brands and creators struggle to capture attention in saturated social feeds and suffer from high drop-off in the first 3 seconds.',
      description: 'Engineered for viral retention and audience engagement across YouTube Shorts, Instagram Reels, and TikTok. Combining fast-paced narrative hooks, micro-animations, kinetic typography, and punchy sound design to maximize watch time and conversion.',
      deliverables: [
        'First-3-second hook optimization & retention pacing',
        'Native 9:16 vertical framing with punch-ins & camera moves',
        'Kinetic animated captions & custom typography',
        'Sound FX impact hits, whooshes, and music sync',
        'High-converting thumbnail frames & platform exports'
      ],
      idealFor: 'Growth Brands, Content Creators, E-Commerce, Ad Agencies, Tech Startups',
      toolkit: ['Premiere Pro', 'DaVinci Resolve', 'After Effects', 'CapCut Pro', 'Photoshop']
    },
    {
      id: 'motion-vfx',
      icon: Layers,
      badge: '03 / MOTION & VISUALS',
      title: 'Motion Graphics, 2D/3D & Broadcast VFX',
      problemSolved: 'Static presentations and plain footage fail to convey high-tech concepts, technical diagrams, and corporate milestones.',
      description: 'Bringing graphic design to life with clean, intentional motion. From sleek corporate logo reveals and explainer graphics to broadcast name scrolls and HUD screen replacements, I build visual clarity into every pixel.',
      deliverables: [
        'Custom logo stings, intros & outro sequences',
        '2D explainer animations & infographic motion',
        'Broadcast lower-thirds, name plates & title cards',
        'Screen replacement, rotoscoping & visual cleanup',
        'Kinetic typography for multilingual video translations'
      ],
      idealFor: 'Corporate Brand Launches, Software Demo Videos, Broadcast Media, YouTube Channels',
      toolkit: ['Adobe After Effects', 'Adobe Illustrator', 'Photoshop', 'Fusion VFX', 'Bodymovin/Lottie']
    },
    {
      id: 'web-software',
      icon: Code,
      badge: '04 / CODE & SOFTWARE',
      title: 'Full-Stack Web & Software Engineering',
      problemSolved: 'Businesses and creative teams lose money on clunky websites, slow load times, and repetitive manual production workflows.',
      description: 'Bridging the gap between aesthetic design and robust software architecture. I develop blazing-fast Next.js websites, conversion-optimized landing pages, and custom Python automation tools (like Clip Assassin v2) that save editors hundreds of hours.',
      deliverables: [
        'Custom Next.js / React interactive websites & portfolios',
        'High-converting landing pages with SEO & speed optimization',
        'Full-stack dashboards & SaaS frontend platforms',
        'Python desktop automation apps for DaVinci Resolve',
        'Responsive mobile-first UI with brutalist & modern design'
      ],
      idealFor: 'Tech Startups, Creative Studios, E-commerce, Trading Teams, Video Agencies',
      toolkit: ['Next.js / React', 'TypeScript', 'Tailwind CSS', 'Python', 'Node.js', 'Supabase', 'Git']
    },
    {
      id: 'ai-animation',
      icon: Sparkles,
      badge: '05 / AI & EXPERIMENTAL',
      title: 'Generative AI Animation & Creative Pipelines',
      problemSolved: 'High production costs and logistics often block ambitious cinematic concepts and nostalgia-driven visual worlds from being produced.',
      description: 'Creator of the acclaimed Shadorittu AI storytelling channel (9+ episodes). I combine Stable Diffusion, Midjourney, and Runway with traditional timeline editing and color grading to produce atmospheric, cinematic animation at a fraction of traditional studio timelines.',
      deliverables: [
        'AI concept generation, character consistency & keyframing',
        'Generative video motion interpolation & enhancement',
        'AI voice generation matching & atmospheric ambient soundscapes',
        'Automated script-to-timeline editing workflows via Python',
        'Custom prompt engineering & multi-model fusion pipelines'
      ],
      idealFor: 'Creative Directors, Music Videos, World-Building Projects, Conceptual Campaigns',
      toolkit: ['Stable Diffusion', 'Midjourney', 'Runway Gen-2', 'ElevenLabs', 'Suno AI', 'Python API']
    }
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Brief & Alignment',
      description: 'We align on project goals, audience demographics, reference videos, deliverables, and timeline milestones before a single cut is made.'
    },
    {
      step: '02',
      title: 'Assembly & Rough Draft',
      description: 'Rapid turnaround of the first structural cut or interactive code prototype to lock down the story arc, pacing, and core layout.'
    },
    {
      step: '03',
      title: 'Surgical Polish',
      description: 'Deep refinement: DaVinci Resolve color grading, multi-layer sound design, kinetic typography, motion graphics, and code performance tuning.'
    },
    {
      step: '04',
      title: 'Master Delivery & Launch',
      description: 'Delivery of full 4K ProRes master files, social vertical cuts, caption files, or live web deployment with complete source handover.'
    }
  ];

  const valueProps = [
    {
      icon: Clock,
      title: 'Reliable Turnarounds',
      desc: 'Clear communication, predictable milestones, and zero missed deadlines.'
    },
    {
      icon: Target,
      title: 'Retention-First Craft',
      desc: 'Every frame and cut is designed to maintain viewer curiosity and engagement.'
    },
    {
      icon: Cpu,
      title: 'The Hybrid Advantage',
      desc: 'Storyteller artistry backed by software engineering logic and workflow automation.'
    },
    {
      icon: ShieldCheck,
      title: 'Client-Grade Standards',
      desc: 'Broadcast-compliant audio levels, color calibration, and clean, scalable code.'
    }
  ];

  return (
    <div className="w-full min-h-screen pt-36 md:pt-40 pb-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 w-full">
        
        {/* Header Section */}
        <div className="mb-20 md:mb-24">
          <div className="text-[10px] font-mono tracking-widest text-secondary uppercase mb-4">02 — CLIENT SOLUTIONS & CAPABILITIES</div>
          <motion.h1 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter uppercase mb-6 leading-[0.9]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            SOLUTIONS BUILT<br />FOR CLIENT IMPACT.
          </motion.h1>
          <motion.p 
            className="font-mono text-xs md:text-sm text-secondary leading-relaxed max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Translating complex narratives into high-retention video assets and high-performance digital products for international organizations, growth brands, and tech teams.
          </motion.p>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <a 
              href="#services" 
              className="bg-accent text-white px-6 py-3 text-xs font-mono font-bold tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
            >
              Explore All Services
            </a>
            <a 
              href="#process" 
              className="border-2 border-foreground text-foreground px-6 py-3 text-xs font-mono font-bold tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
            >
              The 4-Step Process
            </a>
          </div>
        </div>

        {/* Why Clients Choose Zabid Section */}
        <div className="mb-24 py-12 border-y-2 border-foreground">
          <div className="text-center mb-10">
            <div className="text-[10px] font-mono tracking-widest text-secondary uppercase mb-2">THE VALUE PROPOSITION</div>
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight">Why Global & Local Clients Hire Me</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((prop, idx) => {
              const Icon = prop.icon;
              return (
                <BracketFrame key={idx} className="p-6 bg-foreground/5 border-transparent h-full flex flex-col justify-between" bracketColor="border-foreground">
                  <div>
                    <Icon size={26} className="text-accent mb-4" />
                    <h4 className="font-bold text-sm uppercase tracking-tight mb-2 text-foreground">{prop.title}</h4>
                    <p className="font-mono text-xs text-secondary leading-relaxed">{prop.desc}</p>
                  </div>
                </BracketFrame>
              );
            })}
          </div>
        </div>

        {/* Detailed Services Breakdown */}
        <div id="services" className="flex flex-col gap-20 mb-32">
          <div className="border-b-2 border-foreground pb-4 flex justify-between items-end">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Core Disciplines & Deliverables</h2>
            <span className="font-mono text-xs text-secondary hidden sm:inline-block">[5 CORE DISCIPLINES]</span>
          </div>

          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch border-b border-foreground/10 pb-20 last:border-0"
              >
                {/* Left Col: Header, Problem Solved, & Description */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-accent font-mono text-xs font-bold uppercase tracking-widest mb-3">
                      <Icon size={16} />
                      {service.badge}
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight uppercase mb-5 text-foreground leading-[1.05]">
                      {service.title}
                    </h3>
                    
                    {/* Problem Solved Box */}
                    <div className="bg-foreground/[0.04] p-4 border-l-2 border-accent rounded-sm mb-6">
                      <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-foreground mb-1.5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        Problem Solved:
                      </div>
                      <p className="font-mono text-xs text-secondary leading-relaxed">{service.problemSolved}</p>
                    </div>

                    <p className="font-mono text-xs md:text-sm text-secondary leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Ideal For Footer */}
                  <div className="pt-4 border-t border-foreground/10 text-[11px] font-mono text-secondary">
                    <span className="font-bold text-foreground uppercase tracking-wider block mb-1">Ideal For:</span>
                    <span className="leading-relaxed">{service.idealFor}</span>
                  </div>
                </div>
                
                {/* Right Col: UNIFIED Bracket Frame Container */}
                <div className="lg:col-span-7 flex flex-col h-full">
                  <BracketFrame className="p-6 md:p-8 bg-foreground/[0.03] border-transparent h-full flex flex-col justify-between" bracketColor="border-foreground">
                    
                    {/* Top: Exact Client Deliverables */}
                    <div>
                      <div className="flex items-center justify-between border-b border-foreground/10 pb-4 mb-6">
                        <h4 className="text-xs md:text-sm font-bold text-foreground uppercase tracking-widest flex items-center gap-2.5">
                          <CheckCircle2 size={16} className="text-accent" />
                          Exact Client Deliverables
                        </h4>
                        <span className="text-[10px] font-mono text-accent font-bold uppercase tracking-widest">
                          [Verified Output]
                        </span>
                      </div>

                      <ul className="flex flex-col gap-3.5 font-mono text-xs">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-accent font-bold mt-0.5 shrink-0">✓</span>
                            <span className="leading-relaxed text-foreground/90 font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom: Production Toolkit & Software */}
                    <div className="mt-8 pt-6 border-t border-foreground/10">
                      <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-secondary uppercase tracking-widest mb-3">
                        <Wrench size={12} className="text-accent" />
                        Production Toolkit & Software
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {service.toolkit.map((tool, i) => (
                          <span 
                            key={i} 
                            className="font-mono text-[11px] px-3 py-1.5 bg-background border border-foreground/15 rounded-sm text-foreground hover:border-accent transition-colors"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                  </BracketFrame>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 4-Step Process Section */}
        <div id="process" className="mb-32 py-16 border-t-2 border-foreground">
          <div className="text-center mb-16">
            <div className="text-[10px] font-mono tracking-widest text-secondary uppercase mb-2">FRICTIONLESS COLLABORATION</div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">The 4-Step Client Workflow</h2>
            <p className="font-mono text-xs text-secondary max-w-xl mx-auto mt-4">
              Structured, transparent, and iterative. You are always in control of the creative direction and timeline milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, idx) => (
              <BracketFrame key={idx} className="p-6 bg-foreground/5 border-transparent flex flex-col justify-between h-full" bracketColor="border-foreground">
                <div>
                  <div className="text-3xl font-black text-accent font-mono mb-4">{step.step}</div>
                  <h4 className="text-lg font-bold uppercase tracking-tight mb-3 text-foreground">{step.title}</h4>
                  <p className="font-mono text-xs text-secondary leading-relaxed">{step.description}</p>
                </div>
              </BracketFrame>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <motion.div 
          className="p-8 md:p-16 border-2 border-foreground text-center bg-foreground text-background"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[10px] font-mono tracking-widest text-background/70 uppercase mb-4">START YOUR NEXT PROJECT</div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase mb-6 leading-tight">
            Ready to elevate your story<br className="hidden md:block"/> or build your platform?
          </h2>
          <p className="font-mono text-xs md:text-sm text-background/80 max-w-xl mx-auto mb-10 leading-relaxed">
            Whether you need a full documentary edit, viral short-form social campaigns, motion graphics, or a custom full-stack web application—let's build it right.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 text-xs font-mono font-bold tracking-widest uppercase hover:bg-background hover:text-foreground transition-colors"
            >
              Start a Project
              <ArrowRight size={16} />
            </Link>
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-3 border-2 border-background text-background px-8 py-4 text-xs font-mono font-bold tracking-widest uppercase hover:bg-background hover:text-foreground transition-colors"
            >
              Explore Client Archive
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
