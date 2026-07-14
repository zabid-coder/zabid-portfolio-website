"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-foreground text-foreground">
      <div className="max-w-[1440px] mx-auto px-8 py-4 flex justify-between items-center text-[10px] font-mono tracking-[0.15em] uppercase">
        <Logo />
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 text-secondary">
          <Link href="/projects" className={`transition-colors ${pathname === '/projects' ? 'text-foreground font-bold' : 'hover:text-foreground'}`}>Work</Link>
          <Link href="/capabilities" className={`transition-colors ${pathname === '/capabilities' ? 'text-foreground font-bold' : 'hover:text-foreground'}`}>Capabilities</Link>
          <Link href="/about" className={`transition-colors ${pathname === '/about' ? 'text-foreground font-bold' : 'hover:text-foreground'}`}>About</Link>
          <Link href="/contact" className={`transition-colors ${pathname === '/contact' ? 'text-foreground font-bold' : 'hover:text-foreground'}`}>Contact</Link>
        </div>

        <a href="/contact" className="hidden md:block bg-accent text-background px-6 py-2 hover:bg-foreground transition-colors">
          Start a Project
        </a>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-background flex flex-col items-center justify-center gap-8 text-2xl font-black uppercase tracking-tighter z-40">
          <Link 
            href="/projects" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`transition-colors ${pathname === '/projects' ? 'text-accent' : 'text-foreground hover:text-accent'}`}
          >
            Work
          </Link>
          <Link 
            href="/capabilities" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`transition-colors ${pathname === '/capabilities' ? 'text-accent' : 'text-foreground hover:text-accent'}`}
          >
            Capabilities
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`transition-colors ${pathname === '/about' ? 'text-accent' : 'text-foreground hover:text-accent'}`}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`transition-colors ${pathname === '/contact' ? 'text-accent' : 'text-foreground hover:text-accent'}`}
          >
            Contact
          </Link>
          <a 
            href="/contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 bg-accent text-background px-8 py-4 text-sm font-mono tracking-widest hover:bg-foreground transition-colors"
          >
            Start a Project
          </a>
        </div>
      )}
    </nav>
  );
}
