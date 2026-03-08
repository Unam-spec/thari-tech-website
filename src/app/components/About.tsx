import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Increase efficiency by up to 60%',
  'Reduce operational costs significantly',
  'Improve customer satisfaction scores',
  'Scale your business without adding headcount',
  'Get real-time insights and analytics',
  'Seamless integration with existing tools',
];

export function About() {
  return (
    <section id="about" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Business team collaboration"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-gray-900">Why Choose Thari Tech</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Thari Tech, we don't just implement technology—we transform businesses. Our team
              of experts combines deep technical knowledge with strategic business insight to
              deliver solutions that drive real results.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={24} />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <a href="#contact" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium">
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
