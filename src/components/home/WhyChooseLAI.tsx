import { CheckCircle2, Globe2, Users, Award } from 'lucide-react';
import shipyardImage from '@/assets/shipyard.jpg';

const features = [
  {
    icon: Award,
    title: 'Lürssen Heritage',
    description: 'Backed by over 140 years of global shipbuilding and repair excellence',
  },
  {
    icon: Users,
    title: 'Expert Teams',
    description: 'Experienced multinational teams with defense-grade certifications',
  },
  {
    icon: Globe2,
    title: 'Regional Presence',
    description: 'Strong operational footprint across GCC and international markets',
  },
];

const WhyChooseLAI = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose LAI
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              When operational readiness and asset reliability are mission-critical, 
              partner with the maritime industry's most trusted name.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary mt-1" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Naval Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support Ready</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Compliance Rate</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={shipyardImage}
              alt="LAI Shipyard Operations"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
              <div className="text-4xl font-bold">140+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseLAI;