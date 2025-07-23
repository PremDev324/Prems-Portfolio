import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Award, ExternalLink } from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  credentialUrl?: string;
}

interface CertificatesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CertificatesModal = ({ isOpen, onClose }: CertificatesModalProps) => {
  const certificates: Certificate[] = [
    {
      id: '1',
      title: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      date: '2023',
      description: 'Comprehensive course covering MERN stack development, RESTful APIs, and modern web technologies.',
      skills: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      credentialUrl: 'https://freecodecamp.org/certification/sample'
    },
    {
      id: '2',
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: '2023',
      description: 'Advanced JavaScript concepts, ES6+, functional programming, and problem-solving techniques.',
      skills: ['JavaScript', 'ES6+', 'Algorithms', 'Data Structures']
    },
    {
      id: '3',
      title: 'Adobe Photoshop CC',
      issuer: 'Adobe Certified Expert',
      date: '2022',
      description: 'Professional certification in Adobe Photoshop for graphic design and photo manipulation.',
      skills: ['Photoshop', 'Graphic Design', 'Photo Editing'],
      credentialUrl: 'https://adobe.com/certification/sample'
    },
    {
      id: '4',
      title: 'Data Entry Specialist',
      issuer: 'Microsoft Office Specialist',
      date: '2022',
      description: 'Certification in data management, Excel proficiency, and accurate data entry techniques.',
      skills: ['Excel', 'Data Entry', 'Data Management']
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            My Certificates & Credentials
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-6 mt-6">
          {certificates.map((cert) => (
            <Card key={cert.id} className="p-6 bg-gradient-card border-border/50">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{cert.title}</h3>
                    <p className="text-primary font-medium">{cert.issuer}</p>
                    <div className="flex items-center text-muted-foreground text-sm mt-1">
                      <Calendar size={14} className="mr-1" />
                      {cert.date}
                    </div>
                  </div>
                </div>
                {cert.credentialUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} className="mr-1" />
                      View Credential
                    </a>
                  </Button>
                )}
              </div>
              
              <p className="text-muted-foreground mb-4">{cert.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CertificatesModal;