import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/Prem-Profile.png";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-dark" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      {/* Main Content */}
      <div className="container mx-auto my-10 px-4 relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center">
          <div className=" flex flex-col md:flex-row items-center justify-center md:gap-44">
            {/* LEFT: Text Content */}
            <div className="text-center md:text-left max-w-xl">
              {/* RIGHT: Profile Image */}
              <div className="w-full md:w-auto flex md:hidden justify-center mt-4">
                <img
                  src={profileImage}
                  alt="Prem Kumar"
                  className="w-64 h-80 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary shadow-lg animate-fade-in"
                />
              </div>
              <div className="mb-4 mt-2">
                <span className="text-primary text-lg font-medium">
                  Hello, I'm
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-slide-in">
                PREM KUMAR
              </h1>

              <p
                className="text-xl md:text-2xl text-muted-foreground mb-6 animate-slide-in"
                style={{ animationDelay: "0.2s" }}
              >
                Full Stack Developer | Designer | Data Entry Specialist
              </p>

              <p
                className="text-lg text-foreground/80 mb-8 animate-slide-in"
                style={{ animationDelay: "0.4s" }}
              >
                I create stunning web applications using the MERN stack, design
                beautiful user interfaces with Photoshop, and provide precise
                data entry services for your business needs.
              </p>

              {/* Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4 mb-8 animate-slide-in"
                style={{ animationDelay: "0.6s" }}
              >
                <Button
                  variant="hero"
                  size="xl"
                  onClick={() => scrollToSection("#projects")}
                  className="text-white"
                >
                  View My Work
                </Button>
                <Button
                  variant="glow"
                  size="xl"
                  onClick={() => scrollToSection("#contact")}
                >
                  Get In Touch
                </Button>
              </div>

              {/* Social Icons */}
              <div
                className="flex justify-center md:justify-start space-x-6 mb-8 animate-slide-in"
                style={{ animationDelay: "0.8s" }}
              >
                <a href="https://github.com/Prem324" target="_blank">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Github size={24} />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/prem324" target="_blank">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Linkedin size={24} />
                  </Button>
                </a>
                <a href="mailto:rpremkumar324@gmail.com">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Mail size={24} />
                  </Button>
                </a>
              </div>
            </div>

            {/* RIGHT: Profile Image */}
            <div className="w-full md:w-auto hidden sm:block justify-center">
              <img
                src={profileImage}
                alt="Prem Kumar"
                className="w-64 h-64 md:w-80 md:h-96 rounded-full object-cover border-4 border-primary shadow-lg animate-fade-in"
              />
            </div>
          </div>
          {/* Scroll Down Icon */}
          <button
            onClick={() => scrollToSection("#about")}
            className="animate-bounce text-primary hover:text-primary-glow transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
