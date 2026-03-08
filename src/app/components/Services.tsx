import { Database, Workflow, BarChart3, Users, Settings } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'CRM Implementation',
    description: 'Custom CRM solutions tailored to your business needs. We implement and configure systems like Salesforce, HubSpot, and custom solutions.',
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'Streamline your workflows with intelligent automation. Eliminate repetitive tasks and focus on what matters most.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Transform your data into actionable insights with custom dashboards and automated reporting systems.',
  },
  {
    icon: Users,
    title: 'Training & Support',
    description: 'Comprehensive training programs and ongoing support to ensure your team maximizes the potential of new systems.',
  },
  {
    icon: Settings,
    title: 'System Optimization',
    description: 'Continuous improvement and optimization of your existing systems to adapt to your growing business needs.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            Complete CRM & automation solutions to transform your business operations
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
