import { motion } from "framer-motion";
import { 
  Globe, Smartphone, Cloud, PenTool, Database, BarChart3, 
  ShieldCheck, Code, Laptop, Settings, Terminal, RefreshCw 
} from "lucide-react";
import { fadeIn } from "@/lib/animations";

const services = [
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Web Development",
    description:
      "Custom responsive websites and progressive web applications built with modern frameworks and technologies.",
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
  },
  {
    icon: <Cloud className="h-10 w-10" />,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure, deployment, and management services using AWS, Azure, or Google Cloud.",
  },
  {
    icon: <PenTool className="h-10 w-10" />,
    title: "UI/UX Design",
    description:
      "User-centered design that combines aesthetics with functionality to create engaging digital experiences.",
  },
  {
    icon: <Database className="h-10 w-10" />,
    title: "Database Architecture",
    description:
      "Robust database design, optimization, and management for reliable data storage and retrieval.",
  },
  {
    icon: <BarChart3 className="h-10 w-10" />,
    title: "Analytics & Business Intelligence",
    description:
      "Data-driven insights and visualization tools that help you make informed business decisions.",
  },
];

const technologies = [
  { name: "React", icon: <Code className="h-6 w-6" /> },
  { name: "Node.js", icon: <Terminal className="h-6 w-6" /> },
  { name: "Python", icon: <Terminal className="h-6 w-6" /> },
  { name: "AWS", icon: <Cloud className="h-6 w-6" /> },
  { name: "Docker", icon: <RefreshCw className="h-6 w-6" /> },
  { name: "MongoDB", icon: <Database className="h-6 w-6" /> },
  { name: "Angular", icon: <Code className="h-6 w-6" /> },
  { name: "Vue.js", icon: <Code className="h-6 w-6" /> },
];

export function FeaturesSection() {
  return (
    <section id="services" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of software development services to help your business thrive in the digital era.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              custom={index * 0.1}
            >
              <div className="text-primary mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-8 mt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900">Technologies We Work With</h3>
            <p className="mt-2 text-gray-600">
              Our team is proficient in a wide range of modern technologies and frameworks
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
                custom={index * 0.05}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <div className="text-primary">{tech.icon}</div>
                </div>
                <span className="text-sm font-medium text-gray-700">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
