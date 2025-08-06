import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-elegant' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#');
              }}
              className="text-2xl font-bold text-gradient hover:scale-105 transition-smooth"
            >
              Derick.dev
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-smooth hover:bg-muted/50"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center space-x-2">
            <Button
              variant="hero"
              size="sm"
              onClick={() => window.location.href = '/print-on-demand'}
              className="mr-4"
            >
              POD Platform
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open('https://github.com/derickochieng', '_blank')}
              className="hover:text-primary"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open('https://www.linkedin.com/in/derick-ochieng-a6504b22b/', '_blank')}
              className="hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open('mailto:ochiengderick12@gmail.com', '_blank')}
              className="hover:text-primary"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md rounded-lg mt-2 border border-border shadow-elegant">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-smooth hover:bg-muted/50"
                >
                  {item.name}
                </a>
              ))}
              
              {/* POD Platform Button */}
              <Button
                variant="hero"
                size="sm"
                onClick={() => window.location.href = '/print-on-demand'}
                className="w-full mb-2"
              >
                POD Platform
              </Button>
              
              {/* Mobile Social Links */}
              <div className="flex items-center justify-center space-x-2 pt-4 border-t border-border">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open('https://github.com/derickochieng', '_blank')}
                  className="hover:text-primary"
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open('https://www.linkedin.com/in/derick-ochieng-a6504b22b/', '_blank')}
                  className="hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open('mailto:ochiengderick12@gmail.com', '_blank')}
                  className="hover:text-primary"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};