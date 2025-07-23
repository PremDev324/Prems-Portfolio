import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  // Sample projects - replace with your actual projects
  const projects = [
    {
      title: "E-Commerce MERN App",
      description: "Full-stack e-commerce platform with user authentication, payment integration, and admin dashboard. Built with React, Node.js, MongoDB, and Express.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack"
    },
    {
      title: "Task Management Dashboard",
      description: "Modern task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend"
    },
    {
      title: "Social Media API",
      description: "RESTful API for social media platform with user management, post creation, comments, and real-time messaging functionality.",
      image: "https://images.unsplash.com/photo-1611116436617-2c7b5be1f7d0?w=600&h=400&fit=crop",
      technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Backend"
    },
    {
      title: "Brand Identity Design",
      description: "Complete brand identity package including logo design, business cards, and marketing materials created with Photoshop.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop",
      technologies: ["Photoshop", "Illustrator", "Brand Design"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Design"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for data visualization and analysis with automated data entry and processing capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React", "Chart.js", "Excel Integration", "Data Processing"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Data Entry"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website with dark theme, smooth animations, and modern design principles.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Vite"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend"
    }
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend", "Design", "Data Entry"];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work across web development, design, and data management
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button 
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="overflow-hidden bg-gradient-card border-border/50 hover:shadow-primary transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Project Links Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="secondary" size="sm">
                    <Eye size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="secondary" size="sm">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;