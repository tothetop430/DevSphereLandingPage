import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeIn } from "@/lib/animations";

const testimonials = [
  {
    quote: "This tool has completely transformed how our team manages product development. The real-time collaboration features are game-changing.",
    author: "Sarah Johnson",
    role: "Product Manager, Tech Co.",
  },
  {
    quote: "I've used every product management tool out there, and this is by far the most intuitive and powerful solution I've found.",
    author: "Michael Chen",
    role: "CTO, Startup Inc.",
  },
  {
    quote: "The analytics features have given us insights we never had before. We're making better decisions faster than ever.",
    author: "Emily Rodriguez",
    role: "VP of Product, Enterprise Corp.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What Early Users Say</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from the people who've had early access to our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              custom={index * 0.1}
            >
              <div className="flex items-center mb-4">
                <div className="text-amber-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
