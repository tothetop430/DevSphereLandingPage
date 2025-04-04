import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

const stats = [
  { number: "500+", label: "Early Adopters", delay: 0.1 },
  { number: "30%", label: "Productivity Boost", delay: 0.2 },
  { number: "24/7", label: "Customer Support", delay: 0.3 },
];

export function StatsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={stat.delay}
            >
              <p className="text-4xl font-bold text-primary">{stat.number}</p>
              <p className="mt-2 text-lg font-medium text-gray-700">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
