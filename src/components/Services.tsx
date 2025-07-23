import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Palette,
  Database,
  Globe,
  Smartphone,
  Search,
} from "lucide-react";
import techPattern from "@/assets/tech-pattern.jpg";

const Services = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const services = [
    {
      icon: <Code2 className="text-primary" size={32} />,
      title: "Full Stack Web Development",
      description:
        "Complete MERN stack applications with modern UI/UX, RESTful APIs, and database integration.",
      features: [
        "React.js Frontend",
        "Node.js Backend",
        "MongoDB Database",
        "Express.js APIs",
      ],
      price: "Starting at $500",
    },
    {
      icon: <Globe className="text-accent" size={32} />,
      title: "Frontend Development",
      description:
        "Responsive and interactive user interfaces using React, TypeScript, and modern CSS frameworks.",
      features: [
        "React Applications",
        "Responsive Design",
        "Performance Optimization",
        "Cross-browser Support",
      ],
      price: "Starting at $300",
    },
    {
      icon: <Smartphone className="text-primary-glow" size={32} />,
      title: "Backend Development",
      description:
        "Robust server-side solutions with secure authentication, data management, and API development.",
      features: [
        "RESTful APIs",
        "Database Design",
        "Authentication",
        "Server Deployment",
      ],
      price: "Starting at $400",
    },
    {
      icon: <Palette className="text-primary" size={32} />,
      title: "UI/UX Design & Photoshop",
      description:
        "Creative design solutions, photo manipulation, and visual content creation for your brand.",
      features: [
        "Logo Design",
        "Photo Editing",
        "UI Mockups",
        "Brand Identity",
      ],
      price: "Starting at $150",
    },
    {
      icon: <Database className="text-accent" size={32} />,
      title: "Data Entry Services",
      description:
        "Accurate and efficient data entry with quick turnaround times and attention to detail.",
      features: [
        "Data Processing",
        "Excel/Spreadsheets",
        "Web Research",
        "Quality Assurance",
      ],
      price: "Starting at $5/hour",
    },
    {
      icon: <Search className="text-primary-glow" size={32} />,
      title: "Website Maintenance",
      description:
        "Ongoing support, updates, and optimization to keep your website running smoothly.",
      features: [
        "Bug Fixes",
        "Performance Updates",
        "Security Patches",
        "Content Updates",
      ],
      price: "Starting at $100/month",
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `url(${techPattern})` }}
      />
      <div className="absolute inset-0 bg-gradient-dark" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Services I Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, I provide comprehensive solutions for
            your digital needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="p-8 bg-gradient-card border-border/50 hover:shadow-primary transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <h4 className="text-foreground font-semibold">
                  What's Included:
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border/50 pt-6 mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-primary font-bold text-lg">
                    {service.price}
                  </span>
                </div>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  Get Quote
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Need a custom solution? Let's discuss your project requirements.
          </p>
          <Button
            variant="hero"
            size="lg"
            onClick={() => scrollToSection("#contact")}
            className="text-white"
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
