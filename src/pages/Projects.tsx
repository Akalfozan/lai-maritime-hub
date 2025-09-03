import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Shield } from 'lucide-react';

const projects = [
  {
    title: 'Naval Fleet Modernization Program',
    client: 'Confidential Defense Client',
    location: 'Persian Gulf',
    date: '2024',
    type: 'Defense',
    description: 'Complete modernization of naval patrol vessel fleet including combat systems upgrade and hull life extension.',
    status: 'Ongoing',
  },
  {
    title: 'Emergency Repair - Commercial Tanker',
    client: 'International Shipping Corp',
    location: 'Indian Ocean',
    date: '2024',
    type: 'Commercial',
    description: 'Rapid deployment for critical propulsion system repair, minimizing operational downtime.',
    status: 'Completed',
  },
  {
    title: 'Frigate Maintenance Contract',
    client: 'Regional Navy',
    location: 'Australia',
    date: '2023-2024',
    type: 'Defense',
    description: 'Comprehensive maintenance program for frigate squadron including preventive and corrective maintenance.',
    status: 'Ongoing',
  },
  {
    title: 'Offshore Patrol Vessel Refit',
    client: 'Coast Guard Authority',
    location: 'Middle East',
    date: '2023',
    type: 'Government',
    description: 'Major refit including engine overhaul, electronics upgrade, and structural reinforcement.',
    status: 'Completed',
  },
];

const news = [
  {
    date: 'December 2024',
    title: 'LAI Secures Major Defense Contract',
    description: 'New multi-year agreement for naval vessel maintenance in the Indo-Pacific region.',
  },
  {
    date: 'November 2024',
    title: 'Expansion of Middle East Operations',
    description: 'Opening of new facility in Saudi Arabia to support growing regional demand.',
  },
  {
    date: 'October 2024',
    title: 'ISO Certification Achievement',
    description: 'LAI receives ISO 9001:2015 certification for quality management systems.',
  },
];

const Projects = () => {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-surface">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Projects & News
              </h1>
              <p className="text-xl text-muted-foreground">
                Track record of excellence in maritime asset support
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Recent Projects</h2>
              <p className="text-muted-foreground">
                A selection of our recent engagements demonstrating our capabilities across defense and commercial sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center space-x-1">
                          <Shield className="h-4 w-4" />
                          <span>{project.client}</span>
                        </div>
                      </div>
                    </div>
                    <Badge 
                      variant={project.status === 'Completed' ? 'secondary' : 'default'}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{project.date}</span>
                    </div>
                    <Badge variant="outline">{project.type}</Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-20 bg-gradient-surface">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Latest News</h2>
              <p className="text-muted-foreground">
                Stay updated with our latest developments and achievements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {news.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-sm text-primary font-medium mb-2">
                    {item.date}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;