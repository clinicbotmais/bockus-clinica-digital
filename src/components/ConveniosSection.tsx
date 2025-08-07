import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Phone } from 'lucide-react';

const ConveniosSection = () => {
  const convenios = [
    { name: 'Unimed', logo: 'U' },
    { name: 'Cassi', logo: 'C' },
    { name: 'Amil', logo: 'A' },
    { name: 'Bradesco Saúde', logo: 'B' },
    { name: 'SulAmérica', logo: 'S' },
    { name: 'Golden Cross', logo: 'G' },
    { name: 'NotreDame', logo: 'N' },
    { name: 'Hapvida', logo: 'H' },
    { name: 'São Bernardo', logo: 'SB' },
    { name: 'Petrobras', logo: 'P' },
    { name: 'Geap', logo: 'G' },
    { name: 'Cabesp', logo: 'CB' }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medical font-bold text-primary mb-4">
            Convênios Atendidos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com os principais convênios médicos para facilitar 
            o seu atendimento e cuidado com a saúde
          </p>
        </div>

        {/* Convenios Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-12">
          {convenios.map((convenio, index) => (
            <Card 
              key={index} 
              className="hover-lift card-gradient border-0 card-shadow group"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full medical-gradient flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-bounce">
                  <span className="text-white font-bold text-lg">
                    {convenio.logo}
                  </span>
                </div>
                <h3 className="font-medium text-primary text-sm">
                  {convenio.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Particular */}
          <Card className="card-gradient border-0 card-shadow">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-medical font-bold text-primary">
                  Atendimento Particular
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Oferecemos também atendimento particular com valores acessíveis 
                e facilidades de pagamento para seu conforto.
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Agendamento prioritário</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Facilidades de pagamento</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Atendimento personalizado</span>
                </li>
              </ul>

              <Button 
                variant="outline"
                className="w-full hover:bg-primary hover:text-primary-foreground transition-smooth"
                asChild
              >
                <a href="https://wa.me/552227721307?text=Olá! Gostaria de saber sobre valores para atendimento particular.">
                  Consultar Valores
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Autorização */}
          <Card className="card-gradient border-0 card-shadow">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-medical font-bold text-primary">
                  Autorização de Convênios
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nossa equipe auxilia na autorização de exames e procedimentos 
                junto aos convênios de forma rápida e eficiente.
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Auxílio com autorizações</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Verificação de cobertura</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Atendimento especializado</span>
                </li>
              </ul>

              <Button 
                variant="outline"
                className="w-full hover:bg-primary hover:text-primary-foreground transition-smooth"
                asChild
              >
                <a href="https://wa.me/552227721307?text=Olá! Preciso de ajuda com autorização do meu convênio.">
                  Falar com Atendimento
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-8 medical-shadow">
            <h3 className="text-2xl font-medical font-bold text-primary mb-4">
              Não encontrou seu convênio?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Entre em contato conosco para verificar se atendemos 
              seu plano de saúde
            </p>
            <Button 
              size="lg"
              className="medical-gradient hover:opacity-90 transition-smooth button-shadow"
              asChild
            >
              <a href="https://wa.me/552227721307?text=Olá! Gostaria de verificar se atendem meu convênio.">
                Verificar Convênio
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConveniosSection;