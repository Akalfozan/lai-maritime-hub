import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Wrench, Shield, Clock, Package, Ship, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Ship,
    title: 'Vessel Repair & Modernization',
    description: 'Comprehensive repair, refurbishment, and modernization services for naval and commercial vessels.',
    features: [
      'Hull repairs and structural modifications',
      'System upgrades and retrofitting',
      'Combat system integration',
      'Compliance with international standards',
    ],
  },
  {
    icon: Shield,
    title: 'Preventive Maintenance & Lifecycle Support',
    description: 'Scheduled maintenance programs designed to maximize vessel lifespan and operational readiness.',
    features: [
      'Predictive maintenance planning',
      'Regular inspection protocols',
      'Performance optimization',
      'Lifecycle cost management',
    ],
  },
  {
    icon: Clock,
    title: 'Rapid Deployment / Emergency Repair Teams',
    description: '24/7 emergency response teams ready for critical maritime situations worldwide.',
    features: [
      'Global rapid response capability',
      'Mobile repair units',
      'Critical system diagnostics',
      'Temporary operational solutions',
    ],
  },
  {
    icon: Wrench,
    title: 'Defense Partnerships & Naval Support',
    description: 'Specialized support for defense forces and naval operations.',
    features: [
      'Military specification compliance',
      'Security-cleared personnel',
      'Classified project capability',
      'Strategic defense partnerships',
    ],
  },
  {
    icon: Package,
    title: 'Supply Chain & Spare Parts Logistics',
    description: 'Complete supply chain management and genuine spare parts availability.',
    features: [
      'Global parts sourcing',
      'Inventory management',
      'Just-in-time delivery',
      'OEM partnerships',
    ],
  },
];

const Services = () => {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-ocean text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl opacity-90">
                Comprehensive maritime solutions tailored to defense and commercial requirements
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className={index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}>
                      <div className="flex items-center space-x-3 mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                        <h2 className="text-3xl font-bold text-foreground">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-lg text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}>
                      <Card className="p-8 bg-gradient-to-br from-card to-card-hover shadow-xl">
                        <Icon className="h-24 w-24 text-primary/20 mb-4" />
                        <div className="text-4xl font-bold text-primary mb-2">
                          {index === 0 ? '500+' : index === 1 ? '99.9%' : index === 2 ? '24/7' : index === 3 ? '50+' : '10K+'}
                        </div>
                        <div className="text-muted-foreground">
                          {index === 0 ? 'Vessels Serviced' : index === 1 ? 'Uptime Rate' : index === 2 ? 'Availability' : index === 3 ? 'Defense Projects' : 'Parts in Stock'}
                        </div>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center bg-gradient-primary rounded-lg p-12 text-primary-foreground">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Enhance Your Maritime Operations?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Contact our team for a comprehensive assessment and tailored solution
              </p>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;