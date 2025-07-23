import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-muted-foreground">
              Full Stack MERN Developer specializing in modern web applications and creative design solutions.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Github size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Linkedin size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Mail size={20} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Services</h4>
            <div className="space-y-2">
              {['Web Development', 'UI/UX Design', 'Backend APIs', 'Data Entry'].map((service) => (
                <p key={service} className="text-muted-foreground">
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">your.email@example.com</p>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
              <p className="text-muted-foreground">Your City, Country</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm flex items-center">
              © {currentYear} Made with <Heart className="text-red-500 mx-1" size={16} /> by Your Name
            </p>
            
            <div className="flex items-center space-x-4">
              <p className="text-muted-foreground text-sm">Available for freelance work</p>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-primary"
              >
                <ArrowUp size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;