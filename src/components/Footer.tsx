import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  Instagram, 
  Globe,
  Heart
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Exames', href: '#exames' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'Contato', href: '#contato' },
  ];

  const services = [
    'Gastroenterologia',
    'Hepatologia', 
    'Endoscopia',
    'Proctologia',
    'Cirurgia Digestiva',
    'Nutrição Clínica'
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white font-bold text-xl">CB</span>
              </div>
              <div>
                <h3 className="font-medical font-bold text-xl text-white">Clínica Bockus</h3>
                <p className="text-white/80 text-sm">Gastroenterologia em Macaé</p>
              </div>
            </div>
            
            <p className="text-white/90 mb-6 leading-relaxed max-w-md">
              Há mais de 15 anos cuidando da saúde digestiva em Macaé e região, 
              oferecendo atendimento humanizado com tecnologia de ponta.
            </p>

            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="sm"
                className="border-white/30 text-white hover:bg-white hover:text-primary"
                asChild
              >
                <a href="https://instagram.com/clinicabockus" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="border-white/30 text-white hover:bg-white hover:text-primary"
                asChild
              >
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  <Globe className="w-4 h-4 mr-2" />
                  Google Meu Negócio
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medical font-bold text-lg text-white mb-6">
              Navegação
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-white transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medical font-bold text-lg text-white mb-6">
              Especialidades
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/80 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-white/80 mt-1 shrink-0" />
              <div>
                <h5 className="font-medium text-white mb-1">Endereço</h5>
                <p className="text-white/80 text-sm">
                  Rua Dr. Bueno, 123<br />
                  Centro - Macaé/RJ<br />
                  CEP: 27913-100
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-white/80 mt-1 shrink-0" />
              <div>
                <h5 className="font-medium text-white mb-1">Telefones</h5>
                <p className="text-white/80 text-sm">
                  (22) 2772-1307<br />
                  WhatsApp: (22) 2772-1307
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-white/80 mt-1 shrink-0" />
              <div>
                <h5 className="font-medium text-white mb-1">Horário</h5>
                <p className="text-white/80 text-sm">
                  Segunda a Sexta: 8h às 18h<br />
                  Sábado: 8h às 12h
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-white/80 mt-1 shrink-0" />
              <div>
                <h5 className="font-medium text-white mb-1">Email</h5>
                <p className="text-white/80 text-sm">
                  contato@clinicabockus.com.br<br />
                  agendamento@clinicabockus.com.br
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency CTA */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="bg-white/10 rounded-xl p-6 text-center">
            <h4 className="font-medical font-bold text-xl text-white mb-2">
              Precisa agendar urgente?
            </h4>
            <p className="text-white/90 mb-4">
              Entre em contato agora mesmo via WhatsApp
            </p>
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 transition-smooth button-shadow"
              asChild
            >
              <a 
                href="https://wa.me/552227721307?text=Olá! Preciso agendar uma consulta urgente na Clínica Bockus."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Falar Agora no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-6 bg-primary/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1 text-white/80 text-sm">
              <span>© 2024 Clínica Bockus. Todos os direitos reservados.</span>
            </div>
            
            <div className="flex items-center gap-1 text-white/80 text-sm">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-400 fill-current mx-1" />
              <span>para sua saúde em Macaé/RJ</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;