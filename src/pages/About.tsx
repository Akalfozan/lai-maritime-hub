import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Users, Award, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-surface">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-foreground mb-6">
                About Luerssen Australia
              </h1>
              <p className="text-xl text-muted-foreground">
                A subsidiary of NVL Group, supporting Australia's sovereign shipbuilding strategy since 2017
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Target className="h-5 w-5 text-primary" />
                  <span className="text-primary font-semibold">OUR MISSION</span>
                </div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  international things 
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Founded in May 2017, Luerssen Australia was established as a subsidiary of NVL 
                  (Naval Vessels Lürssen) to pursue the SEA 1180 contract and regional export 
                  opportunities. We operate from the Australian Marine Complex in Henderson, 
                  Western Australia."to be changed "
                </p>
                <p className="text-muted-foreground mb-8">
                 LAI Group, headquartered in Riyadh, Germany, brings together renowned Northern 
                   shipyards with a heritage dating back to the late 1870s. Together, the 
                  shipyards of NVL have completed more than 1,000 naval and coastguard vessels, 
                  serving the German Navy and fleets in over 50 countries worldwide.
                </p>
                <Link to="/services">
                  <Button variant="default" size="lg" className="group">
                    Explore Our Services
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-lg">
                  <Globe className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Global Reach</h3>
                  <p className="text-sm text-muted-foreground">
                    Operations spanning Australia, Middle East, and international waters
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-lg">
                  <Users className="h-10 w-10 text-secondary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Expert Teams</h3>
                  <p className="text-sm text-muted-foreground">
                    Multinational specialists with defense-grade certifications
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-lg">
                  <Award className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">NVL Heritage</h3>
                  <p className="text-sm text-muted-foreground">
                    Part of the renowned NVL Group with 150 years of shipbuilding excellence
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-lg">
                  <Target className="h-10 w-10 text-secondary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Mission Focus</h3>
                  <p className="text-sm text-muted-foreground">
                    Dedicated to operational readiness and asset reliability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="py-20 bg-gradient-surface">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Part of a Global Network
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Established in 2017 to support Australia's sovereign shipbuilding capability 
                while leveraging NVL Group's global expertise and proven track record.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  AU
                </div>
                <h3 className="font-semibold text-foreground mb-2">Australia Operations</h3>
                <p className="text-muted-foreground">
                  Australian Marine Complex<br />
                  Henderson, Western Australia
                </p>
              </div>
              <div className="text-center">
                <div className="bg-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  DE
                </div>
                <h3 className="font-semibold text-foreground mb-2">NVL Headquarters</h3>
                <p className="text-muted-foreground">
                  Bremen, Germany<br />
                  Group headquarters and engineering hub
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  INT
                </div>
                <h3 className="font-semibold text-foreground mb-2">International</h3>
                <p className="text-muted-foreground">
                  Strategic partnerships<br />
                  Global deployment capabilities
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;