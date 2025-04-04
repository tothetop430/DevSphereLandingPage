import { motion } from "framer-motion";
import { CheckCircle, Zap, ChartBarStacked, Lock, Clock, MessageSquare } from "lucide-react";
import { fadeIn } from "@/lib/animations";

const features = [
  {
    icon: <CheckCircle className="h-10 w-10" />,
    title: "Seamless Integration",
    description:
      "Connect with your favorite tools and services for a smooth workflow.",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Real-time Collaboration",
    description:
      "Work together with your team in real-time, no matter where they are.",
  },
  {
    icon: <ChartBarStacked className="h-10 w-10" />,
    title: "Advanced Analytics",
    description:
      "Gain valuable insights with our powerful analytics and reporting tools.",
  },
  {
    icon: <Lock className="h-10 w-10" />,
    title: "Enterprise Security",
    description:
      "Your data is protected with bank-level security and encryption.",
  },
  {
    icon: <Clock className="h-10 w-10" />,
    title: "Automation",
    description:
      "Save time by automating repetitive tasks and workflows.",
  },
  {
    icon: <MessageSquare className="h-10 w-10" />,
    title: "Smart Notifications",
    description:
      "Stay informed with customizable alerts and notifications.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 bg-gray-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Key Features</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how our platform can transform your workflow and enhance your team's productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              custom={index * 0.1}
            >
              <div className="text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
