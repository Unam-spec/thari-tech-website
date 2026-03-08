import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-3">
              <img src="/logo.jpg" alt="Thari Tech" className="h-10 w-auto" />
              <p>Logo test</p>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Get Started
            </a>
          </div>
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a
                href="#services"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
