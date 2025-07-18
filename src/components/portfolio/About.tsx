import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, GraduationCap, Briefcase } from "lucide-react";

export const About = () => {
  const skills = [
    "Django", "React", "TypeScript", "Python", "JavaScript", "PHP", "Java",
    "API Development", "Database Design", "VPS Management", "Dokploy", 
    "AI Automation", "n8n", "Data Analysis", "Project Management"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate full-stack developer with expertise in modern web technologies,
            database optimization, and AI-driven solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <div className="animate-slide-up">
            <Card className="p-8 bg-gradient-card border-primary/20 hover:shadow-elegant transition-smooth">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Personal Details</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Mombasa, Kenya</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Full-time Web Developer</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">BSC Computer Science, Maseno University</span>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Web Developer at Fairdeal Furniture</span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">English (Proficient)</Badge>
                  <Badge variant="secondary">Kiswahili (Fluent)</Badge>
                  <Badge variant="secondary">Dholuo (Native)</Badge>
                </div>
              </div>
            </Card>
          </div>

          {/* Experience & Skills */}
          <div className="animate-slide-in-right">
            <Card className="p-8 bg-gradient-card border-primary/20 hover:shadow-elegant transition-smooth mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Current Role</h3>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Web Developer & Administrator</h4>
                <p className="text-muted-foreground">Fairdeal Furniture (Present)</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Managing databases and VPS servers using Dokploy</li>
                  <li>Developing and maintaining e-commerce websites</li>
                  <li>Building custom CRM solutions</li>
                  <li>API development and testing</li>
                  <li>AI automation using n8n and Python</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-card border-primary/20 hover:shadow-elegant transition-smooth">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="outline"
                    className="hover:bg-gradient-primary hover:text-primary-foreground transition-smooth"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};