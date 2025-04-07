import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

const stats = [
  { number: "100+", label: "Completed Projects", delay: 0.1 },
  { number: "95%", label: "Client Satisfaction", delay: 0.2 },
  { number: "8+", label: "Years of Experience", delay: 0.3 },
  { number: "20+", label: "Skilled Developers", delay: 0.4 },
];

export function StatsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Our Track Record</h2>
          <p className="mt-2 text-lg text-gray-600">Delivering excellence in every project</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm border border-gray-100"
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
