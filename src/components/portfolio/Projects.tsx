import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Database, ShoppingCart, Dumbbell, Palette, Building2, Users, CreditCard, Newspaper, Activity } from "lucide-react";
import webDevImage from "@/assets/web-dev-illustration.jpg";
import backendImage from "@/assets/backend-illustration.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "Fairdeal Furniture E-commerce",
      description: "Full-stack e-commerce platform with inventory management, payment integration, and admin dashboard",
      tech: ["WordPress", "WooCommerce", "PHP", "MySQL", "Payment Gateway"],
      link: "https://fairdealfurniture.co.ke/",
      github: null,
      icon: ShoppingCart,
      image: webDevImage,
      category: "E-commerce"
    },
    {
      title: "Mr & Mrs Fitness Center",
      description: "Dynamic fitness center website with membership management and class scheduling",
      tech: ["WordPress", "Custom PHP", "Responsive Design", "SEO Optimization"],
      link: "https://mrandmrsfitnesscenter.co.ke/",
      github: null,
      icon: Dumbbell,
      image: webDevImage,
      category: "Business Website"
    },
    {
      title: "Ximi Vogue Store",
      description: "Modern e-commerce platform for fashion and beauty products with advanced filtering",
      tech: ["WordPress", "WooCommerce", "Custom CSS", "Payment Integration"],
      link: "https://ximivogue.co.ke/",
      github: null,
      icon: Palette,
      image: webDevImage,
      category: "E-commerce"
    },
    {
      title: "Corporate Bay",
      description: "Corporate services platform showcasing business solutions and consultation services",
      tech: ["React", "Tailwind CSS", "Responsive Design", "Modern UI/UX"],
      link: "https://corporatebay.netlify.app/",
      github: "https://github.com/derickochieng",
      icon: Building2,
      image: webDevImage,
      category: "Corporate"
    },
    {
      title: "Juhudi Platform",
      description: "Community platform for project collaboration and resource sharing",
      tech: ["React", "Node.js", "Database Integration", "User Management"],
      link: "https://juhudi.netlify.app/",
      github: "https://github.com/derickochieng",
      icon: Users,
      image: webDevImage,
      category: "Community Platform"
    },
    {
      title: "Fairdeal CRM System",
      description: "Custom CRM solution for managing customer relationships, sales, and inventory",
      tech: ["Django", "Python", "PostgreSQL", "REST API", "Dashboard Analytics"],
      link: "https://crm.fairdealfurniture.co.ke/",
      github: null,
      icon: Database,
      image: backendImage,
      category: "CRM/Enterprise"
    },
    {
      title: "PAM Kenya",
      description: "Professional association website with member management and event coordination",
      tech: ["React", "Tailwind CSS", "Form Handling", "Content Management"],
      link: "https://pamkenya.netlify.app/",
      github: "https://github.com/derickochieng",
      icon: CreditCard,
      image: webDevImage,
      category: "Association"
    },
    {
      title: "Didack Media",
      description: "Digital media agency website showcasing services and portfolio",
      tech: ["WordPress", "Custom Theme", "Portfolio Management", "SEO"],
      link: "https://didackmedia.com/",
      github: null,
      icon: Newspaper,
      image: webDevImage,
      category: "Media Agency"
    },
    {
      title: "SOTE 2022",
      description: "Conference website with event management and registration system",
      tech: ["WordPress", "Event Management", "Registration System", "Responsive Design"],
      link: "https://sote2022.org/",
      github: null,
      icon: Activity,
      image: webDevImage,
      category: "Event Platform"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work spanning e-commerce platforms, business websites,
            and custom enterprise solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title}
                className="group hover:shadow-elegant transition-smooth hover:scale-105 bg-gradient-card border-primary/20 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-hero opacity-60" />
                  <div className="absolute top-4 right-4">
                    <IconComponent className="h-8 w-8 text-white drop-shadow-lg" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-gradient transition-smooth">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://github.com/derickochieng', '_blank')}
            className="group"
          >
            <Github className="mr-2 h-5 w-5 group-hover:animate-bounce-gentle" />
            View More on GitHub
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};