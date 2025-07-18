import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2, Code, Users, Database } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Web Developer & Administrator",
      company: "Fairdeal Furniture",
      location: "Kenya (Remote)",
      period: "Present",
      type: "Full-time",
      icon: Building2,
      responsibilities: [
        "Managing databases and VPS servers using Dokploy deployment platform",
        "Developing and maintaining multiple e-commerce websites and business platforms",
        "Building custom CRM solutions with Django and Python",
        "API development, testing, and integration for various client projects",
        "AI automation development using n8n workflows and Python scripts",
        "Database design and optimization for high-performance applications"
      ],
      technologies: ["Django", "Python", "Dokploy", "VPS Management", "API Development", "n8n", "AI Automation"]
    },
    {
      title: "Virtual Assistant",
      company: "Promack Solution",
      location: "South Carolina, USA (Remote)",
      period: "January 2023 - Present",
      type: "Remote",
      icon: Code,
      responsibilities: [
        "Website design, development, and management for multiple clients",
        "Created responsive, engaging websites tailored to client specifications",
        "Social media management across Facebook and Instagram platforms",
        "Email correspondence management and automation",
        "Performance analytics and strategy optimization",
        "Client collaboration for UX/UI improvements and e-commerce integration"
      ],
      technologies: ["WordPress", "PHP", "Social Media Management", "Email Automation", "Analytics", "UX/UI Design"]
    },
    {
      title: "Software Development Intern",
      company: "ICS College",
      location: "Kisumu, Kenya",
      period: "May 2022 - August 2022",
      type: "Internship",
      icon: Users,
      responsibilities: [
        "Collaborated with development team on software solutions",
        "Developed a comprehensive Library Management System for the institution",
        "Participated in code reviews and provided constructive feedback",
        "Assisted in troubleshooting and debugging software issues",
        "Ensured adherence to project timelines and quality standards"
      ],
      technologies: ["Java", "Database Design", "Software Testing", "Team Collaboration", "Project Management"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey in software development, from internships to leading full-stack projects
            and managing enterprise-level systems.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <Card 
                key={index}
                className="relative overflow-hidden bg-gradient-card border-primary/20 hover:shadow-elegant transition-smooth animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-primary" />
                
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gradient mb-2">
                          {exp.title}
                        </CardTitle>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Building2 className="h-4 w-4" />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                            <Badge variant="secondary" className="text-xs">
                              {exp.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline"
                          className="hover:bg-gradient-primary hover:text-primary-foreground transition-smooth"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};