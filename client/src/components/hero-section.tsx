import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, slideUp } from "@/lib/animations";

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
              <span className="block">The Future of</span>
              <span className="block text-primary">Product Management</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl">
              Our revolutionary platform streamlines your workflow, boosts productivity, and helps teams collaborate more effectively. Be the first to experience it.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("waitlist")}
                size="lg"
                className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all text-white shadow-sm"
              >
                Join the Waitlist
              </Button>
              <Button 
                onClick={() => scrollToSection("features")}
                variant="outline" 
                size="lg"
                className="bg-white hover:bg-gray-100 hover:scale-105 transition-all text-primary shadow-sm"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="mt-12 lg:mt-0 lg:w-1/2"
            initial="hidden"
            animate="visible"
            variants={slideUp}
          >
            <div className="w-full rounded-xl shadow-xl ring-1 ring-gray-200 overflow-hidden">
              <svg
                className="w-full h-auto"
                viewBox="0 0 800 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="800" height="600" fill="#f8fafc" />
                <rect x="50" y="50" width="700" height="60" rx="4" fill="#e2e8f0" />
                <rect x="70" y="70" width="150" height="20" rx="2" fill="#94a3b8" />
                <rect x="600" y="70" width="120" height="20" rx="2" fill="#3b82f6" />
                
                <rect x="50" y="140" width="300" height="400" rx="4" fill="#e2e8f0" />
                <rect x="70" y="160" width="260" height="20" rx="2" fill="#94a3b8" />
                <rect x="70" y="200" width="260" height="320" rx="2" fill="#f1f5f9" />
                
                <rect x="380" y="140" width="370" height="180" rx="4" fill="#e2e8f0" />
                <rect x="400" y="160" width="150" height="20" rx="2" fill="#94a3b8" />
                <rect x="400" y="200" width="330" height="100" rx="2" fill="#f1f5f9" />
                
                <rect x="380" y="340" width="370" height="200" rx="4" fill="#e2e8f0" />
                <rect x="400" y="360" width="150" height="20" rx="2" fill="#94a3b8" />
                <circle cx="430" cy="430" r="80" fill="#3b82f6" fillOpacity="0.2" />
                <circle cx="430" cy="430" r="60" fill="#3b82f6" fillOpacity="0.4" />
                <circle cx="430" cy="430" r="40" fill="#3b82f6" fillOpacity="0.6" />
                <circle cx="430" cy="430" r="20" fill="#3b82f6" />
                
                <rect x="550" y="400" width="180" height="15" rx="2" fill="#94a3b8" />
                <rect x="550" y="430" width="140" height="15" rx="2" fill="#94a3b8" />
                <rect x="550" y="460" width="160" height="15" rx="2" fill="#94a3b8" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
