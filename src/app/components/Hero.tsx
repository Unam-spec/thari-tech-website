import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Business with Smart{' '}
              <span className="text-blue-600">Automation</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We help businesses scale efficiently by implementing cutting-edge CRM systems and
              intelligent automation solutions that save time, reduce costs, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium shadow-lg">
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-md border-2 border-gray-300 hover:border-gray-400 transition-colors font-medium">
                Learn More
              </a>
            </div>
            <div className="pt-8 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">24/7 Support</div>
                  <div className="text-sm text-gray-600">Always here to help you succeed</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1702047054352-cf264d3b1a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Modern technology automation office"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
