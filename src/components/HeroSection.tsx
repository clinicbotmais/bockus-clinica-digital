import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Clock, Star } from 'lucide-react';
import heroImage from '@/assets/hero-medical.jpg';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-90" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-white/10 blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-white/5 blur-2xl float-animation" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <div className="flex items-center gap-1 bg-white/20 rounded-full px-3 py-1 backdrop-blur-sm">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-white text-sm font-medium">4.9/5 Avaliações</span>
              </div>
              <div className="flex items-center gap-1 bg-white/20 rounded-full px-3 py-1 backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium">Macaé/RJ</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medical font-bold text-white mb-6 leading-tight">
              Inovação e Tradição em
              <span className="block text-transparent bg-gradient-to-r from-white to-white/80 bg-clip-text">
                Gastroenterologia
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Com atendimento humanizado, exames modernos e localização privilegiada em Macaé. 
              Cuidamos da sua saúde digestiva com excelência médica.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Agendamento Rápido</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Star className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Equipe Especializada</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Convênios Aceitos</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 transition-smooth button-shadow pulse-glow text-lg px-8 py-6"
              >
                <a 
                  href="https://wa.me/552227721307?text=Olá! Gostaria de agendar uma consulta na Clínica Bockus."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Agendar Consulta Agora
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary transition-smooth text-lg px-8 py-6"
                asChild
              >
                <a href="#especialidades">
                  Conhecer Especialidades
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden medical-shadow">
              <img 
                src={heroImage} 
                alt="Gastroenterologia - Clínica Bockus" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 card-shadow max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full medical-gradient flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-primary">+15 anos</p>
                  <p className="text-sm text-muted-foreground">de experiência</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;