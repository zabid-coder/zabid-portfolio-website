import Link from "next/link";
import { ABOUT } from "@/data";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="w-full bg-footer text-background pt-24 pb-8 border-t-[8px] border-background">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24">
          
          <div className="lg:col-span-1">
            <Logo variant="dark" className="mb-8" />
            <p className="font-mono text-xs text-background/70 leading-relaxed max-w-sm">
              Visual storyteller and developer from Bangladesh. Video editor in DaVinci Resolve, AI Animation creator, and builder of Clip Assassin & EchoFlow.
            </p>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-12 font-mono text-xs">
            <div>
              <h4 className="text-background/50 tracking-[0.15em] uppercase mb-8">Navigate</h4>
              <ul className="flex flex-col gap-4 text-background/80">
                <li><Link href="/" className="hover:text-background transition-colors">Home</Link></li>
                <li><Link href="/projects" className="hover:text-background transition-colors">Work</Link></li>
                <li><Link href="/capabilities" className="hover:text-background transition-colors">Capabilities</Link></li>
                <li><Link href="/about" className="hover:text-background transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-background transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-background/50 tracking-[0.15em] uppercase mb-8">Capabilities</h4>
              <ul className="flex flex-col gap-4 text-background/80">
                <li>Video Editing (DaVinci)</li>
                <li>App Development</li>
                <li>Visual Storytelling</li>
                <li>AI Animation</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-background/50 tracking-[0.15em] uppercase mb-8">Contact</h4>
              <ul className="flex flex-col gap-4 text-background/80">
                <li><a href="mailto:zabidalmuttaki@gmail.com" className="hover:text-background transition-colors">Email</a></li>
                <li><a href="https://wa.me/8801516108203" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">WhatsApp (+8801516108203)</a></li>
                <li>Bangladesh</li>
              </ul>
            </div>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[10px] text-background/60 uppercase tracking-[0.15em]">
          <p>© {new Date().getFullYear()} ZABID AL MUTTAKI. VISUAL STORYTELLER & DEVELOPER.</p>
          <div className="flex gap-8">
            <a href="https://www.youtube.com/@zabidalmuttaki3482/playlists" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">YouTube</a>
            <a href="https://www.linkedin.com/in/zabidalmuttaki/" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">LinkedIn</a>
            <a href="https://github.com/zabid-coder" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
