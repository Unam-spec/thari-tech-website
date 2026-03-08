import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:tharitechptyltd@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">
            Ready to transform your business? Let's discuss how we can help you streamline operations and accelerate growth
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="text-blue-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">tharitechptyltd@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="text-blue-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-600">(+27) 69 486 2579</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-blue-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                <p className="text-gray-600">Barend Street, Waterkloof Rif, Lephalale, Limpopo, South Africa</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="john@company.com" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                <input type="text" id="company" name="company" value={formData.company} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="Your Company" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your project..." />
              </div>
              <button type="submit" className="w-full px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2 font-medium">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
