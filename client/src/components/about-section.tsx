import { motion } from "framer-motion";
import { ArrowRight, Users, Award, Target, BarChart2 } from "lucide-react";
import { fadeIn, slideUp } from "@/lib/animations";

export function AboutSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const values = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Client Partnerships",
      description: "We form long-term partnerships with our clients based on trust and mutual growth."
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Excellence",
      description: "We maintain the highest standards of quality in everything we deliver."
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Innovation",
      description: "We constantly explore new technologies and approaches to solve complex problems."
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-primary" />,
      title: "Results-Driven",
      description: "We focus on delivering measurable business outcomes, not just code."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About DevSphere</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in digital transformation
          </p>
        </div>

        <div className="lg:flex lg:items-center lg:gap-16 mb-16">
          <motion.div
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideUp}
          >
            <div className="rounded-xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-br from-primary/20 to-white aspect-[4/3] flex items-center justify-center p-10">
                <div className="grid grid-cols-2 gap-6 w-full">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                      <span className="text-primary font-bold">8+</span>
                    </div>
                    <h4 className="font-medium text-gray-800">Years of Experience</h4>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                      <span className="text-primary font-bold">20+</span>
                    </div>
                    <h4 className="font-medium text-gray-800">Team Members</h4>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                      <span className="text-primary font-bold">100+</span>
                    </div>
                    <h4 className="font-medium text-gray-800">Projects Delivered</h4>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                      <span className="text-primary font-bold">12</span>
                    </div>
                    <h4 className="font-medium text-gray-800">Industries Served</h4>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="mt-12 lg:mt-0 lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold text-gray-900">Our Story</h3>
            <p className="mt-6 text-lg text-gray-600">
              Founded in 2017, DevSphere.info began with a team of passionate developers dedicated to creating high-quality software solutions for businesses of all sizes. Over the years, we've grown into a full-service agency with a track record of delivering exceptional results.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Our mission is to empower businesses through technology, creating innovative digital solutions that drive growth, improve efficiency, and enhance user experiences.
            </p>
            <div className="mt-8">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Get in touch with our team
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
                custom={index * 0.1}
              >
                <div className="mb-4">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900">{value.title}</h4>
                <p className="mt-2 text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
