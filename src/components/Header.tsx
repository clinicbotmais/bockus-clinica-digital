import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Exames', href: '#exames' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border medical-shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full medical-gradient flex items-center justify-center">
              <span className="text-white font-bold text-lg">CB</span>
            </div>
            <div>
              <h1 className="font-medical font-bold text-lg text-primary">Clínica Bockus</h1>
              <p className="text-xs text-muted-foreground -mt-1">Gastroenterologia</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* WhatsApp Button Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              asChild
              variant="default"
              className="medical-gradient hover:opacity-90 transition-smooth button-shadow"
            >
              <a 
                href="https://wa.me/552227721307?text=Olá! Gostaria de agendar uma consulta na Clínica Bockus."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Agendar WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-smooth font-medium px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                asChild
                variant="default"
                className="medical-gradient hover:opacity-90 transition-smooth mt-4 mx-2"
              >
                <a 
                  href="https://wa.me/552227721307?text=Olá! Gostaria de agendar uma consulta na Clínica Bockus."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Agendar WhatsApp
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;