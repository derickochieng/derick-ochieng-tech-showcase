import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.png";

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0 bg-background/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-slide-up">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={profilePhoto}
                alt="Derick Ochieng"
                className="w-32 h-32 rounded-full border-4 border-white/20 shadow-elegant animate-float"
              />
              <div className="absolute inset-0 rounded-full animate-pulse-glow" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            <span className="block">Hi, I'm</span>
            <span className="text-gradient block animate-bounce-gentle">
              Derick Ochieng
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Full-Stack Developer & Tech Innovator specializing in{" "}
            <span className="text-gradient-secondary font-semibold">Django</span>,{" "}
            <span className="text-gradient-secondary font-semibold">React</span>,{" "}
            <span className="text-gradient-secondary font-semibold">API Development</span>, and{" "}
            <span className="text-gradient-secondary font-semibold">AI Automation</span>
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
            <Button
              variant="outline"
              size="lg"
              className="group"
              onClick={() => window.open('https://github.com/derickochieng', '_blank')}
            >
              <Github className="mr-2 h-5 w-5 group-hover:animate-bounce-gentle" />
              GitHub
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group"
              onClick={() => window.open('https://www.linkedin.com/in/derick-ochieng-a6504b22b/', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5 group-hover:animate-bounce-gentle" />
              LinkedIn
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group"
              onClick={() => window.open('mailto:ochiengderick12@gmail.com', '_blank')}
            >
              <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce-gentle" />
              Contact
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToProjects}
              className="group"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:animate-bounce-gentle" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => window.open('mailto:ochiengderick12@gmail.com', '_blank')}
            >
              Let's Collaborate
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <ArrowDown className="h-6 w-6 text-white/60" />
        </div>
      </div>
    </section>
  );
};