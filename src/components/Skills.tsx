import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90, color: "bg-primary" },
        { name: "JavaScript/ES6+", level: 85, color: "bg-primary" },
        { name: "HTML5 & CSS3", level: 95, color: "bg-primary" },
        { name: "Tailwind CSS", level: 88, color: "bg-primary" },
        { name: "TypeScript", level: 80, color: "bg-primary" }
      ]
    },
    {
      title: "Backend Development", 
      skills: [
        { name: "Node.js", level: 85, color: "bg-accent" },
        { name: "Express.js", level: 82, color: "bg-accent" },
        { name: "MongoDB", level: 80, color: "bg-accent" },
        { name: "RESTful APIs", level: 88, color: "bg-accent" },
        { name: "JWT Authentication", level: 75, color: "bg-accent" }
      ]
    },
    {
      title: "Design & Tools",
      skills: [
        { name: "Adobe Photoshop", level: 85, color: "bg-primary-glow" },
        { name: "UI/UX Design", level: 78, color: "bg-primary-glow" },
        { name: "Git & GitHub", level: 90, color: "bg-primary-glow" },
        { name: "VS Code", level: 95, color: "bg-primary-glow" },
        { name: "Data Entry", level: 95, color: "bg-primary-glow" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skill set covering full-stack development, design, and data management
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="p-8 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                          categoryIndex === 0 ? 'bg-primary' : 
                          categoryIndex === 1 ? 'bg-accent' : 'bg-primary-glow'
                        }`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${skillIndex * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'TypeScript',
              'Tailwind CSS', 'Git', 'Photoshop', 'REST APIs', 'JWT', 'Vite'
            ].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg border border-border/50 hover:border-primary transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;