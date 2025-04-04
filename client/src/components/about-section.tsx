import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeIn, slideUp } from "@/lib/animations";

export function AboutSection() {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist");
    if (waitlistSection) {
      const offset = 80;
      const elementPosition = waitlistSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="about" className="py-16 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-12">
          <motion.div
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideUp}
          >
            <div className="rounded-xl shadow-xl overflow-hidden">
              <svg
                className="w-full h-auto"
                viewBox="0 0 800 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="800" height="600" fill="#f8fafc" />
                <rect x="100" y="100" width="600" height="400" rx="8" fill="#f1f5f9" />
                
                {/* People silhouettes */}
                <circle cx="250" cy="200" r="60" fill="#3b82f6" opacity="0.8" />
                <rect x="220" y="280" width="60" height="120" rx="20" fill="#3b82f6" opacity="0.8" />
                
                <circle cx="400" cy="200" r="60" fill="#3b82f6" opacity="0.6" />
                <rect x="370" y="280" width="60" height="120" rx="20" fill="#3b82f6" opacity="0.6" />
                
                <circle cx="550" cy="200" r="60" fill="#3b82f6" opacity="0.4" />
                <rect x="520" y="280" width="60" height="120" rx="20" fill="#3b82f6" opacity="0.4" />
                
                {/* Connection lines */}
                <line x1="260" y1="230" x2="380" y2="230" stroke="#3b82f6" strokeWidth="4" />
                <line x1="420" y1="230" x2="540" y2="230" stroke="#3b82f6" strokeWidth="4" />
                
                {/* Table/desk */}
                <rect x="150" y="420" width="500" height="20" rx="2" fill="#cbd5e1" />
                <rect x="200" y="440" width="20" height="60" fill="#cbd5e1" />
                <rect x="580" y="440" width="20" height="60" fill="#cbd5e1" />
              </svg>
            </div>
          </motion.div>
          <motion.div
            className="mt-12 lg:mt-0 lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Our Mission</h2>
            <p className="mt-6 text-lg text-gray-600">
              We started with a simple idea: what if product management could be made simpler, more intuitive, and more collaborative? After years of struggling with the limitations of existing tools, our team set out to build the solution we always wanted.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Our mission is to empower product teams around the world with the tools they need to build amazing products faster and more efficiently than ever before.
            </p>
            <div className="mt-8">
              <button
                onClick={scrollToWaitlist}
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Join our journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
