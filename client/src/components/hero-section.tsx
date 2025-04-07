import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, slideUp } from "@/lib/animations";
import { Code, Monitor, Server, ShieldCheck } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjust for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-primary/5 to-[#8B5CF6]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Innovative</span>
              <span className="block text-primary">Software Solutions</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl">
              DevSphere.info is a full-service software development agency specializing in crafting custom web applications, mobile apps, and enterprise software solutions that drive business growth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all text-white shadow-sm"
              >
                Get in Touch
              </Button>
              <Button 
                onClick={() => scrollToSection("services")}
                variant="outline" 
                size="lg"
                className="bg-white hover:bg-gray-100 hover:scale-105 transition-all text-primary shadow-sm"
              >
                Our Services
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center text-primary">
                <Code className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Web Development</span>
              </div>
              <div className="flex items-center text-primary">
                <Monitor className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Mobile Apps</span>
              </div>
              <div className="flex items-center text-primary">
                <Server className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Cloud Solutions</span>
              </div>
              <div className="flex items-center text-primary">
                <ShieldCheck className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Web3 & Blockchain</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="mt-12 lg:mt-0 lg:w-1/2"
            initial="hidden"
            animate="visible"
            variants={slideUp}
          >
            <div className="w-full rounded-xl shadow-xl ring-1 ring-gray-200 overflow-hidden">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/10 to-[#8B5CF6]/10">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] bg-white/50 backdrop-blur-sm rounded-xl shadow-lg p-6 flex flex-col justify-center items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-2">Custom Software Development</h3>
                  <p className="text-gray-600 text-center">Tailored solutions for your unique business needs</p>
                  <div className="flex gap-3 mt-4">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Web</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Mobile</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Cloud</span>
                  </div>
                </div>
                
                {/* Background code-like elements */}
                <div className="absolute top-[20%] left-[10%] h-1 w-[30%] bg-primary/20 rounded"></div>
                <div className="absolute top-[25%] left-[15%] h-1 w-[20%] bg-primary/30 rounded"></div>
                <div className="absolute top-[30%] left-[8%] h-1 w-[40%] bg-primary/10 rounded"></div>
                
                <div className="absolute bottom-[20%] right-[10%] h-1 w-[30%] bg-primary/20 rounded"></div>
                <div className="absolute bottom-[25%] right-[15%] h-1 w-[20%] bg-primary/30 rounded"></div>
                <div className="absolute bottom-[30%] right-[8%] h-1 w-[40%] bg-primary/10 rounded"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
