import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-vessel.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Naval vessel at sea"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6">
            <Shield className="h-5 w-5 text-secondary" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              NVL GROUP - NAVAL VESSELS LÜRSSEN
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Engineering Excellence for Australia's Naval Future
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
            Supporting sovereign shipbuilding capability with world-class maritime solutions backed by NVL's heritage of 1,000+ vessels delivered globally.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/services">
              <Button variant="hero" size="lg" className="group">
                Discover Our Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20">
                Contact Our Team
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-secondary" />
              <span className="text-primary-foreground/80 text-sm">Global Operations</span>
            </div>
            <div className="text-primary-foreground/80 text-sm">
              Since 2017
            </div>
            <div className="text-primary-foreground/80 text-sm">
              24/7 Support
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;