import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Anchor } from 'lucide-react';
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    path: '/',
    label: 'Home'
  }, {
    path: '/about',
    label: 'About'
  }, {
    path: '/services',
    label: 'Services'
  }, {
    path: '/projects',
    label: 'Projects'
  }, {
    path: '/contact',
    label: 'Contact'
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Anchor className="h-8 w-8 text-primary" />
            <div>
              <div className="text-xl font-bold text-foreground">Luerssen Australia International

            </div>
              
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`font-medium transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
                {link.label}
              </Link>)}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden py-4 border-t border-border">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`block py-3 font-medium transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-foreground hover:text-primary'}`} onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </Link>)}
          </div>}
      </div>
    </nav>;
};
export default Navigation;