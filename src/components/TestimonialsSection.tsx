import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Star, Quote, User } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      age: '45 anos',
      city: 'Macaé/RJ',
      rating: 5,
      text: 'Excelente atendimento! Dr. Carlos me acompanha há 3 anos e sempre muito atencioso. A colonoscopia foi tranquila e sem dor. Recomendo a todos!',
      procedure: 'Colonoscopia',
      date: 'Março 2024'
    },
    {
      name: 'João Santos',
      age: '52 anos', 
      city: 'Rio das Ostras/RJ',
      rating: 5,
      text: 'Clínica moderna e organizada. O agendamento pelo WhatsApp é muito prático. Fiz endoscopia e o resultado saiu no mesmo dia. Parabéns pela eficiência!',
      procedure: 'Endoscopia Digestiva',
      date: 'Fevereiro 2024'
    },
    {
      name: 'Ana Costa',
      age: '38 anos',
      city: 'Macaé/RJ', 
      rating: 5,
      text: 'Estava com refluxo há meses. Dra. Maria foi muito cuidadosa no diagnóstico e o tratamento funcionou perfeitamente. Hoje estou curada!',
      procedure: 'Consulta Gastroenterologia',
      date: 'Janeiro 2024'
    },
    {
      name: 'Roberto Lima',
      age: '48 anos',
      city: 'Campos/RJ',
      rating: 5,
      text: 'Precisei fazer uma cirurgia de vesícula por laparoscopia. Dr. Roberto foi excepcional, recuperação rápida e sem complicações. Muito profissional!',
      procedure: 'Cirurgia Laparoscópica',
      date: 'Dezembro 2023'
    },
    {
      name: 'Carla Mendes',
      age: '41 anos',
      city: 'Macaé/RJ',
      rating: 5,
      text: 'O acompanhamento nutricional foi fundamental para melhorar minha digestão. Dra. Ana é muito dedicada e o plano alimentar foi perfeito para mim.',
      procedure: 'Consulta Nutricional',
      date: 'Março 2024'
    },
    {
      name: 'Pedro Oliveira',
      age: '55 anos',
      city: 'Cabo Frio/RJ',
      rating: 5,
      text: 'Clínica com ótima infraestrutura e profissionais qualificados. O atendimento é humanizado e os equipamentos são modernos. Voltarei sempre!',
      procedure: 'pHmetria Esofágica',
      date: 'Fevereiro 2024'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medical font-bold text-primary mb-4">
            O que nossos pacientes dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais de 1.000 pacientes atendidos com excelência. Confira os depoimentos 
            de quem já cuidou da saúde conosco
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <Card className="h-full card-gradient border-0 card-shadow overflow-hidden group hover-lift">
                    <CardContent className="p-6 h-full flex flex-col">
                      {/* Quote Icon */}
                      <div className="flex justify-between items-start mb-4">
                        <Quote className="w-8 h-8 text-secondary opacity-60" />
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-foreground leading-relaxed mb-6 flex-grow italic">
                        "{testimonial.text}"
                      </blockquote>

                      {/* Procedure Info */}
                      <div className="mb-4 p-3 bg-secondary/10 rounded-lg">
                        <p className="text-sm font-medium text-secondary mb-1">
                          {testimonial.procedure}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.date}
                        </p>
                      </div>

                      {/* Patient Info */}
                      <div className="flex items-center gap-3 pt-4 border-t border-border">
                        <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.age} • {testimonial.city}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-secondary/30 hover:bg-secondary hover:text-secondary-foreground" />
            <CarouselNext className="hidden md:flex -right-12 border-secondary/30 hover:bg-secondary hover:text-secondary-foreground" />
          </Carousel>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <p className="text-muted-foreground">Pacientes atendidos</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <p className="text-muted-foreground">Avaliação média</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <p className="text-muted-foreground">Anos de experiência</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 medical-shadow max-w-2xl mx-auto">
            <h3 className="text-2xl font-medical font-bold text-primary mb-4">
              Junte-se aos nossos pacientes satisfeitos
            </h3>
            <p className="text-muted-foreground mb-6">
              Agende sua consulta agora e experimente o atendimento de excelência 
              que já conquistou centenas de pacientes em Macaé e região
            </p>
            <Button 
              size="lg"
              className="medical-gradient hover:opacity-90 transition-smooth button-shadow pulse-glow"
              asChild
            >
              <a href="https://wa.me/552227721307?text=Olá! Vi os depoimentos no site e gostaria de agendar uma consulta na Clínica Bockus.">
                Agendar Minha Consulta
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;