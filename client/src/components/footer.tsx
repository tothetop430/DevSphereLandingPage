import { Link } from "wouter";
import { Twitter, Linkedin, Github, Facebook, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <span className="text-2xl font-bold text-white">DevSphere<span className="text-primary">.info</span></span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Creating innovative software solutions for businesses worldwide. We specialize in web development, mobile applications, cloud solutions, and more.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Github"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary transition-colors">Web Development</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary transition-colors">Mobile Applications</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary transition-colors">Cloud Solutions</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary transition-colors">UI/UX Design</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary transition-colors">Database Architecture</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-primary transition-colors">Testimonials</a>
              </li>
              <li>
                <Link href="#">
                  <a className="text-gray-400 hover:text-primary transition-colors">Careers</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-gray-400 hover:text-primary transition-colors">Blog</a>
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <p>&copy; {new Date().getFullYear()} DevSphere.info. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex gap-6">
              <Link href="#">
                <a className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a>
              </Link>
              <Link href="#">
                <a className="text-gray-400 hover:text-primary transition-colors">Terms of Service</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
