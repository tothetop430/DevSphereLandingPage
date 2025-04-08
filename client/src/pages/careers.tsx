import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, slideUp } from "@/lib/animations";
import {
  ArrowUpRight,
  Briefcase,
  Code,
  Database,
  Globe,
  Server,
} from "lucide-react";

// Job position data
const jobPositions = [
  {
    title: "Senior Full Stack Engineer",
    location: "Lafayette, CO (Remote Available)",
    type: "Full-time",
    description:
      "We're looking for an experienced Full Stack Engineer to help build and maintain high-quality web applications. You'll work across the entire stack, from database design to UI implementation.",
    requirements: [
      "5+ years of experience in full stack development",
      "Proficiency in React, Node.js, and modern JavaScript",
      "Experience with cloud services (AWS, GCP, or Azure)",
      "Strong understanding of database design and optimization",
      "Experience with DevOps practices and CI/CD pipelines",
    ],
    icon: <Code className="h-8 w-8" />,
  },
  {
    title: "Lead Engineer",
    location: "Lafayette, CO (Remote Available)",
    type: "Full-time",
    description:
      "As a Lead Engineer, you'll provide technical leadership to our development teams, architect solutions, and help set our technical direction while mentoring other developers.",
    requirements: [
      "7+ years of software development experience",
      "Strong leadership and mentoring skills",
      "Experience architecting complex software systems",
      "Excellent communication and collaboration abilities",
      "Track record of delivering large-scale projects",
    ],
    icon: <Briefcase className="h-8 w-8" />,
  },
  {
    title: "Frontend Engineer",
    location: "Lafayette, CO (Remote Available)",
    type: "Full-time",
    description:
      "We're seeking a talented Frontend Engineer to create responsive, intuitive user interfaces. You'll collaborate with designers and backend developers to deliver exceptional user experiences.",
    requirements: [
      "3+ years of experience with modern JavaScript frameworks (React preferred)",
      "Strong HTML, CSS, and UI/UX skills",
      "Experience with state management solutions",
      "Knowledge of frontend testing frameworks",
      "Passion for creating accessible, performant interfaces",
    ],
    icon: <Globe className="h-8 w-8" />,
  },
  {
    title: "Backend Engineer",
    location: "Lafayette, CO (Remote Available)",
    type: "Full-time",
    description:
      "Join our team as a Backend Engineer to build robust APIs, services, and data integrations. You'll help ensure our applications are scalable, secure, and performant.",
    requirements: [
      "3+ years of experience in backend development",
      "Proficiency in Node.js, Python, or similar technologies",
      "Experience with database design and optimization",
      "Knowledge of RESTful API design principles",
      "Familiarity with cloud services and containerization",
    ],
    icon: <Server className="h-8 w-8" />,
  },
];

export default function Careers() {
  return (
    <div className="min-h-screen pt-16">
      {/* Header section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-[#8B5CF6]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Join Our Team
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Build your career at DevSphere.info and help us create innovative
              software solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Jobs listing section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Open Positions</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our current opportunities and find your perfect role
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {jobPositions.map((job, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg border border-gray-100 transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
                custom={index * 0.1}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <div className="text-primary">{job.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {job.title}
                </h3>
                <div className="flex flex-wrap gap-3 mt-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {job.location}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    {job.type}
                  </span>
                </div>
                <p className="mt-4 text-gray-600">{job.description}</p>
                <div className="mt-4">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Requirements:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="text-sm">
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <Button className="bg-primary hover:bg-primary/90 text-white shadow-sm group">
                    Apply Now
                    <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company culture section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Culture</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              At DevSphere.info, we foster a collaborative and innovative
              environment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={0.1}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                We embrace new technologies and approaches, encouraging creative
                solutions and continuous learning.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={0.2}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Collaboration
              </h3>
              <p className="text-gray-600">
                We work together across disciplines, valuing diverse
                perspectives and supporting each other.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={0.3}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Growth
              </h3>
              <p className="text-gray-600">
                We provide opportunities for professional development,
                mentorship, and career advancement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Application Process
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our hiring process is designed to be transparent, efficient, and
              respectful of your time
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <motion.div
                className="flex gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={0.1}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Application Review
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Our team carefully reviews your application, resume, and
                    portfolio to assess your qualifications and experience.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={0.2}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Initial Interview
                  </h3>
                  <p className="mt-2 text-gray-600">
                    A conversation with our hiring manager to discuss your
                    experience, skills, and aspirations, as well as provide more
                    details about the role.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={0.3}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Technical Assessment
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Depending on the role, you may be asked to complete a
                    technical challenge or practical exercise to demonstrate
                    your skills.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={0.4}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Team Interview
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Meet with potential teammates and colleagues to ensure a
                    good fit with our team culture and working style.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={0.5}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Offer & Onboarding
                  </h3>
                  <p className="mt-2 text-gray-600">
                    If selected, you'll receive an offer and our team will guide
                    you through the onboarding process to set you up for
                    success.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Don't See the Perfect Role?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We're always looking for talented individuals to join our team.
              Send us your resume and we'll keep you in mind for future
              opportunities.
            </p>
            <Button
              className="mt-8 bg-primary hover:bg-primary/90 text-white shadow-sm"
              size="lg"
            >
              Submit General Application
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
