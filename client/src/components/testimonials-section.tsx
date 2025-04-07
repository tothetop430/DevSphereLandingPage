import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { fadeIn } from "@/lib/animations";

const testimonials = [
  {
    quote: "DevSphere.info transformed our outdated ordering system into a sleek, modern web application. Their team delivered on time and exceeded our expectations in terms of functionality and design.",
    author: "Sarah Johnson",
    role: "COO, GourmetEats",
    stars: 5,
    project: "E-commerce Platform"
  },
  {
    quote: "We hired DevSphere to develop a custom CRM solution for our real estate agency. The system they built has streamlined our workflows and increased our lead conversion rates by 35%.",
    author: "Michael Chen",
    role: "CTO, PrimeProperties",
    stars: 5,
    project: "Custom CRM Development"
  },
  {
    quote: "The mobile app DevSphere created for our healthcare startup has received outstanding feedback from users. Their expertise in UI/UX design and development is truly impressive.",
    author: "Emily Rodriguez",
    role: "Founder, MediConnect",
    stars: 5,
    project: "Mobile App Development"
  },
  {
    quote: "DevSphere's cloud migration services helped us modernize our infrastructure and reduce operational costs by 40%. Their team provided excellent support throughout the entire process.",
    author: "David Patel",
    role: "IT Director, Innovex Solutions",
    stars: 5,
    project: "Cloud Migration"
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Client Success Stories</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with DevSphere.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -top-10 -left-10 text-primary/10">
            <Quote className="h-20 w-20" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md border border-gray-100 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
                custom={index * 0.1}
              >
                <div className="flex items-center mb-3">
                  <div className="text-amber-400 flex">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">{testimonial.quote}</p>
                <div className="flex justify-between items-end">
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
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
                  <div>
                    <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      {testimonial.project}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="absolute -bottom-10 -right-10 text-primary/10">
            <Quote className="h-20 w-20 transform rotate-180" />
          </div>
        </div>
      </div>
    </section>
  );
}
