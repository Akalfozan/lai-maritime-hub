import { CheckCircle2, Globe2, Users, Award } from 'lucide-react';
import shipyardImage from '@/assets/shipyard.jpg';
const features = [{
  icon: Award,
  title: 'NVL Heritage',
  description: 'Part of NVL Group with 1,000+ naval and coastguard vessels completed since 1870s'
}, {
  icon: Users,
  title: 'Expert Teams',
  description: 'Local Australian expertise backed by German engineering excellence'
}, {
  icon: Globe2,
  title: 'Strategic Location',
  description: 'Operating from Australian Marine Complex in Henderson, Western Australia'
}];
const WhyChooseLAI = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose Luerssen Australia
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Combining Australian sovereign capability with NVL Group's proven expertise in 
              delivering maritime solutions to over 50 countries worldwide.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => {
              const Icon = feature.icon;
              return;
            })}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary">50+ex</div>
                <div className="text-sm text-muted-foreground">Naval Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7ex</div>
                <div className="text-sm text-muted-foreground">Support Ready</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%ex</div>
                <div className="text-sm text-muted-foreground">Compliance Rate</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img src={shipyardImage} alt="LAI Shipyard Operations" className="rounded-lg shadow-2xl" />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
              <div className="text-4xl font-bold">1,000+</div>
              <div className="text-sm">Vessels Delivered</div>
              <div className="text-xs opacity-80 mt-1">NVL Group</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default WhyChooseLAI;