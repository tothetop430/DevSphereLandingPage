import { Link } from "wouter";
import { Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">ProductName</div>
            <p className="text-gray-300 mb-4 max-w-md">
              Revolutionizing product management with intuitive tools designed for modern teams.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#">
                  <a className="text-gray-300 hover:text-white transition-colors">Documentation</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-gray-300 hover:text-white transition-colors">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-gray-300 hover:text-white transition-colors">Guides</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-gray-300 hover:text-white transition-colors">Support</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#">
                  <a className="text-gray-300 hover:text-white transition-colors">About</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-gray-300 hover:text-white transition-colors">Careers</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-gray-300 hover:text-white transition-colors">Privacy</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-gray-300 hover:text-white transition-colors">Terms</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} ProductName. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
