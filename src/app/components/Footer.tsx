import { Linkedin, Instagram } from "lucide-react";
import logoImage from "../../assets/logo.jpg";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <img
              src={logoImage}
              alt="Thari Tech"
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering businesses with intelligent CRM systems and automation
              solutions that drive efficiency, growth, and success.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/thari-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/thari.tech?igsh=N3dtN21yenhpMzQ4&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>tharitechptyltd@gmail.com</li>
              <li>(+27) 69 486 2579</li>
              <li>Lephalale, Limpopo, South Africa</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Thari Tech. All rights reserved.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <img src={logoImage} alt="Thari Tech" className="h-12 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
}
