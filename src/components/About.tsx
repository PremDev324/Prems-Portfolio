import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Code, Palette, Database, Award } from 'lucide-react';
import CertificatesModal from './CertificatesModal';

const About = () => {
  const [isCertificatesOpen, setIsCertificatesOpen] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/sample-cv.pdf';
    link.download = 'John_Doe_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate full-stack developer with expertise in MERN technologies, 
            design skills, and precision in data management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Ready to Launch Your Freelancing Career
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              As a dedicated MERN stack developer, I specialize in creating full-stack web applications 
              using MongoDB, Express.js, React, and Node.js. My passion for clean code and user-centered 
              design drives me to deliver exceptional digital experiences.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Beyond development, I bring creative design skills with Photoshop and maintain high 
              standards in data entry and management. I'm excited to start my freelancing journey 
              and help businesses bring their digital visions to life.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" onClick={handleDownloadCV}>
                <Download className="mr-2" size={18} />
                Download CV
              </Button>
              <Button variant="outline" size="lg" onClick={() => setIsCertificatesOpen(true)}>
                View Certificates
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                  <Code className="text-primary" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-foreground">MERN Development</h4>
              </div>
              <p className="text-muted-foreground">
                Full-stack web development using MongoDB, Express.js, React, and Node.js 
                to create scalable and modern web applications.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                  <Palette className="text-accent" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-foreground">Design & Photoshop</h4>
              </div>
              <p className="text-muted-foreground">
                Creative design solutions, photo manipulation, and visual content 
                creation to enhance your brand identity.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-glow/20 rounded-lg flex items-center justify-center mr-4">
                  <Database className="text-primary-glow" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-foreground">Data Entry</h4>
              </div>
              <p className="text-muted-foreground">
                Accurate and efficient data entry services with attention to detail 
                and quick turnaround times.
              </p>
            </Card>
          </div>
        </div>
      </div>
      
      <CertificatesModal 
        isOpen={isCertificatesOpen} 
        onClose={() => setIsCertificatesOpen(false)} 
      />
    </section>
  );
};

export default About;