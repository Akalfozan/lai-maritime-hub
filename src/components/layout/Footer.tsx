import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Anchor } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Anchor className="h-8 w-8" />
              <div>
                <div className="text-xl font-bold">Luerssen Australia</div>
                <div className="text-xs opacity-80">Part of NVL Group</div>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Supporting Australia's sovereign shipbuilding strategy with world-class maritime solutions backed by NVL's heritage of over 1,000 naval vessels delivered globally.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'About', 'News', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Offices */}
          <div>
            <h3 className="font-semibold mb-4">Global Offices</h3>
            <div className="space-y-3">
              <div className="text-sm">
                <p className="font-medium">Australia</p>
                <p className="opacity-90">Australian Marine Complex</p>
                <p className="opacity-90">Henderson, WA</p>
              </div>
              <div className="text-sm">
                <p className="font-medium">NVL Headquarters</p>
                <p className="opacity-90">Bremen, Germany</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@lai.com"
                className="flex items-center space-x-2 text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                <Mail className="h-4 w-4" />
                <span>info@lai.com</span>
              </a>
              <a
                href="tel:+61000000000"
                className="flex items-center space-x-2 text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                <Phone className="h-4 w-4" />
                <span>+61 XXX XXX XXX</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-light/20 text-center text-sm opacity-80">
          <p>© {new Date().getFullYear()} Luerssen Australia Pty Ltd. Part of NVL Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;