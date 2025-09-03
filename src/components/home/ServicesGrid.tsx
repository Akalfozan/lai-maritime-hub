import { Wrench, Shield, Clock, Package } from 'lucide-react';
import { Card } from '@/components/ui/card';
const services = [{
  icon: Wrench,
  title: 'Naval & Defense Vessel Repair',
  description: 'Comprehensive repair and refurbishment services for military and defense vessels.',
  color: 'text-primary'
}, {
  icon: Shield,
  title: 'Preventive Maintenance Programs',
  description: 'Scheduled maintenance to ensure optimal performance and extend vessel lifespan.',
  color: 'text-secondary'
}, {
  icon: Clock,
  title: 'Emergency Deployment Teams',
  description: '24/7 rapid response teams ready for critical maritime emergencies worldwide.',
  color: 'text-primary'
}, {
  icon: Package,
  title: 'Spare Parts & Logistics Support',
  description: 'Complete supply chain management and genuine spare parts availability.',
  color: 'text-secondary'
}];
const ServicesGrid = () => {
  return <section className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Key Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">To be added </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
          const Icon = service.icon;
          return <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-card">
                <div className={`mb-4 ${service.color}`}>
                  <Icon className="h-12 w-12" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                
              </Card>;
        })}
        </div>
      </div>
    </section>;
};
export default ServicesGrid;