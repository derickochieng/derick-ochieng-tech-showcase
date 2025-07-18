import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">Derick.dev</h3>
            <p className="text-muted-foreground">
              Full-Stack Developer & Tech Innovator building exceptional digital experiences
              with modern technologies and AI-driven solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-muted-foreground hover:text-primary transition-smooth"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Let's Connect</h4>
            <div className="flex justify-center md:justify-start space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open('https://github.com/derickochieng', '_blank')}
                className="hover:bg-gradient-primary hover:text-primary-foreground"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open('https://www.linkedin.com/in/derick-ochieng-a6504b22b/', '_blank')}
                className="hover:bg-gradient-primary hover:text-primary-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open('mailto:ochiengderick12@gmail.com', '_blank')}
                className="hover:bg-gradient-primary hover:text-primary-foreground"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              <a 
                href="mailto:ochiengderick12@gmail.com"
                className="hover:text-primary transition-smooth"
              >
                ochiengderick12@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            © {currentYear} Derick Ochieng. Made with <Heart className="h-4 w-4 text-red-500" /> and modern tech.
          </p>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="mt-4 md:mt-0 group"
          >
            <ArrowUp className="h-4 w-4 mr-2 group-hover:animate-bounce-gentle" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};