import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Server, Smartphone, Brain, BarChart3 } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Smartphone,
      skills: [
        { name: "React/TypeScript", level: 90 },
        { name: "JavaScript/ES6+", level: 95 },
        { name: "HTML5/CSS3", level: 98 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Responsive Design", level: 95 }
      ],
      color: "text-blue-500"
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Django/Python", level: 95 },
        { name: "PHP", level: 90 },
        { name: "RESTful APIs", level: 93 },
        { name: "Node.js", level: 75 },
        { name: "Java", level: 80 }
      ],
      color: "text-green-500"
    },
    {
      title: "Database & DevOps",
      icon: Database,
      skills: [
        { name: "MySQL/PostgreSQL", level: 90 },
        { name: "Database Design", level: 88 },
        { name: "VPS Management", level: 85 },
        { name: "Dokploy", level: 92 },
        { name: "Server Optimization", level: 83 }
      ],
      color: "text-purple-500"
    },
    {
      title: "AI & Automation",
      icon: Brain,
      skills: [
        { name: "AI Agent Development", level: 87 },
        { name: "n8n Workflows", level: 90 },
        { name: "Python Automation", level: 88 },
        { name: "Data Processing", level: 85 },
        { name: "API Integration", level: 93 }
      ],
      color: "text-orange-500"
    },
    {
      title: "Data & Analytics",
      icon: BarChart3,
      skills: [
        { name: "Data Analysis", level: 85 },
        { name: "Data Visualization", level: 80 },
        { name: "Performance Analytics", level: 88 },
        { name: "SEO Optimization", level: 82 },
        { name: "User Analytics", level: 85 }
      ],
      color: "text-pink-500"
    },
    {
      title: "Tools & Platforms",
      icon: Code2,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "WordPress", level: 95 },
        { name: "Project Management", level: 88 },
        { name: "Asana/Trello", level: 85 },
        { name: "Testing/Debugging", level: 87 }
      ],
      color: "text-indigo-500"
    }
  ];

  const certifications = [
    "Django Full-Stack Development",
    "API Development & Testing",
    "Database Design & Optimization",
    "AI Automation Workflows",
    "Server Management & DevOps"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the full development stack, from frontend design
            to backend architecture and AI automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title}
                className="bg-gradient-card border-primary/20 hover:shadow-elegant transition-smooth animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                      <IconComponent className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Professional Interests */}
        <Card className="bg-gradient-card border-primary/20 hover:shadow-elegant transition-smooth">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Professional <span className="text-gradient">Interests</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="p-4 rounded-full bg-primary/10 border border-primary/20 w-16 h-16 mx-auto flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Data-Driven Decision Making</h3>
                <p className="text-muted-foreground text-sm">
                  Leveraging analytics and data insights to drive strategic technical decisions
                </p>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-full bg-primary/10 border border-primary/20 w-16 h-16 mx-auto flex items-center justify-center">
                  <Code2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Full-Stack Development</h3>
                <p className="text-muted-foreground text-sm">
                  Building end-to-end solutions from database design to user interface
                </p>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-full bg-primary/10 border border-primary/20 w-16 h-16 mx-auto flex items-center justify-center">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Database Optimization</h3>
                <p className="text-muted-foreground text-sm">
                  Designing efficient, scalable database architectures for optimal performance
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};