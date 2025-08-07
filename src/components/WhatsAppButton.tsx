import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 pulse-glow animate-bounce"
        asChild
      >
        <a
          href="https://wa.me/552227721307?text=Olá! Gostaria de agendar uma consulta na Clínica Bockus."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
          aria-label="Entrar em contato via WhatsApp"
        >
          <MessageCircle className="w-8 h-8" />
        </a>
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-20 right-0 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Fale conosco no WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
      </div>
    </div>
  );
};

export default WhatsAppButton;