import { useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent',
      description: 'Thank you for contacting LAI. We will respond within 24 hours.',
    });
    setFormData({ name: '', email: '', organization: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-ocean text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl opacity-90">
                Get in touch with our team for maritime solutions and support
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                          className="mt-2"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="organization">Organization</Label>
                      <Input
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Your company or organization"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your maritime requirements..."
                        rows={6}
                        className="mt-2"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full group">
                      Send Message
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Direct Contact
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:info@lai.com"
                      className="flex items-start space-x-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-5 w-5 mt-0.5" />
                      <div>
                        <div className="font-medium text-foreground">Email</div>
                        <div>info@lai.com</div>
                      </div>
                    </a>
                    <a
                      href="tel:+61000000000"
                      className="flex items-start space-x-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="h-5 w-5 mt-0.5" />
                      <div>
                        <div className="font-medium text-foreground">Phone</div>
                        <div>+61 XXX XXX XXX</div>
                      </div>
                    </a>
                    <div className="flex items-start space-x-3 text-muted-foreground">
                      <Clock className="h-5 w-5 mt-0.5" />
                      <div>
                        <div className="font-medium text-foreground">Support Hours</div>
                        <div>24/7 Emergency Response</div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Office Locations
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium text-foreground">Australia HQ</div>
                        <div className="text-sm text-muted-foreground">
                          Henderson, Western Australia
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                      <div>
                        <div className="font-medium text-foreground">Middle East</div>
                        <div className="text-sm text-muted-foreground">
                          Riyadh, Saudi Arabia
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-primary text-primary-foreground">
                  <h3 className="text-lg font-semibold mb-2">
                    Emergency Support
                  </h3>
                  <p className="text-sm opacity-90 mb-4">
                    For urgent maritime emergencies requiring immediate assistance
                  </p>
                  <Button variant="outline" size="sm" className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                    Call Emergency Hotline
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;