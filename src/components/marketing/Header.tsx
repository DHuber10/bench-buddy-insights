
import { Button } from "@/components/ui/button";
import { ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo />
          <span className="text-xl font-semibold text-gray-900">SmartBench</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-600 hover:text-smartbench-blue transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-smartbench-blue transition-colors">How It Works</a>
          <a href="#pricing" className="text-gray-600 hover:text-smartbench-blue transition-colors">Pricing</a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" onClick={() => window.location.href = '/signin'}>Sign In</Button>
          <Button onClick={() => window.location.href = '/signup'}>
            Get Started
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b animate-fade-in">
          <div className="container py-4 flex flex-col space-y-4">
            <a href="#features" className="px-4 py-2 text-gray-600 hover:text-smartbench-blue" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="px-4 py-2 text-gray-600 hover:text-smartbench-blue" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
            <a href="#pricing" className="px-4 py-2 text-gray-600 hover:text-smartbench-blue" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <hr className="my-2" />
            <div className="flex flex-col space-y-2">
              <Button variant="outline" onClick={() => window.location.href = '/signin'}>Sign In</Button>
              <Button onClick={() => window.location.href = '/signup'}>
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <div className="flex items-center justify-center w-8 h-8 rounded-md bg-smartbench-blue text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M3 3v18h18" />
        <path d="m7 17 4-4 4 4 6-6" />
      </svg>
    </div>
  );
}
