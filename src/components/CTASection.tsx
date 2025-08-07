import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Clock, MapPin } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-white/10 blur-xl animate-pulse" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medical font-bold text-white mb-6">
            Não espere! Agende sua consulta
            <span className="block">agora mesmo.</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Nossa equipe está pronta para cuidar da sua saúde digestiva. 
            Entre em contato e garante seu atendimento com especialistas.
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Clock className="w-8 h-8 text-white mx-auto mb-3" />
            <h3 className="font-medical font-bold text-white mb-2">Horário</h3>
            <p className="text-white/90 text-sm">
              Seg-Sex: 8h às 18h<br />
              Sáb: 8h às 12h
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <MapPin className="w-8 h-8 text-white mx-auto mb-3" />
            <h3 className="font-medical font-bold text-white mb-2">Localização</h3>
            <p className="text-white/90 text-sm">
              Centro de Macaé/RJ<br />
              Fácil acesso
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <MessageCircle className="w-8 h-8 text-white mx-auto mb-3" />
            <h3 className="font-medical font-bold text-white mb-2">WhatsApp</h3>
            <p className="text-white/90 text-sm">
              Resposta rápida<br />
              Atendimento personalizado
            </p>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-white/90 transition-smooth text-xl px-12 py-8 button-shadow pulse-glow mb-6"
            asChild
          >
            <a 
              href="https://wa.me/552227721307?text=Olá! Gostaria de agendar uma consulta na Clínica Bockus."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Phone className="w-6 h-6" />
              Falar com a Clínica no WhatsApp
            </a>
          </Button>
          
          <p className="text-white/80 text-sm">
            Clique no botão acima e será direcionado para nosso WhatsApp com uma mensagem pronta
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-12 pt-8 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div>
              <h4 className="font-medical font-bold text-white mb-2">Telefone Fixo</h4>
              <p className="text-white/90">(22) 2772-1307</p>
            </div>
            <div>
              <h4 className="font-medical font-bold text-white mb-2">WhatsApp</h4>
              <p className="text-white/90">(22) 2772-1307</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;