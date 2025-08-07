import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  Monitor, 
  Activity, 
  Waves, 
  UserCheck, 
  FileText,
  Clock,
  Shield,
  Award
} from 'lucide-react';

const ExamsSection = () => {
  const exams = [
    {
      icon: Search,
      title: 'Colonoscopia',
      description: 'Exame completo do intestino grosso com sedação',
      duration: '30-45 min',
      preparation: 'Preparo especial necessário'
    },
    {
      icon: Monitor,
      title: 'Endoscopia Digestiva Alta',
      description: 'Visualização do esôfago, estômago e duodeno',
      duration: '15-30 min',
      preparation: 'Jejum de 8 horas'
    },
    {
      icon: Activity,
      title: 'pHmetria Esofágica',
      description: 'Medição da acidez no esôfago por 24 horas',
      duration: '24 horas',
      preparation: 'Suspensão de medicamentos'
    },
    {
      icon: Waves,
      title: 'Manometria Esofágica',
      description: 'Avaliação da pressão e coordenação do esôfago',
      duration: '45-60 min',
      preparation: 'Jejum de 6 horas'
    },
    {
      icon: UserCheck,
      title: 'Consulta Especializada',
      description: 'Avaliação médica completa com especialista',
      duration: '45-60 min',
      preparation: 'Trazer exames anteriores'
    },
    {
      icon: FileText,
      title: 'Retossigmoidoscopia',
      description: 'Exame do reto e sigmóide com flexível',
      duration: '15-20 min',
      preparation: 'Enema evacuativo'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: 'Agendamento Rápido',
      description: 'Marcação em até 24h'
    },
    {
      icon: Shield,
      title: 'Segurança Total',
      description: 'Protocolos rigorosos'
    },
    {
      icon: Award,
      title: 'Equipamentos Modernos',
      description: 'Tecnologia de ponta'
    }
  ];

  return (
    <section id="exames" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medical font-bold text-primary mb-4">
            Exames e Procedimentos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Realizamos diversos exames com equipamentos modernos e protocolos 
            de segurança para seu diagnóstico preciso
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full hero-gradient flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-medical font-bold text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Exams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exams.map((exam, index) => (
            <Card 
              key={index} 
              className="group hover-lift card-gradient border-0 card-shadow overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg medical-gradient flex items-center justify-center group-hover:scale-110 transition-bounce">
                    <exam.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-medical font-bold text-primary">
                    {exam.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exam.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Duração:</span>
                    <span className="font-medium text-foreground">{exam.duration}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Preparo:</span>
                    <span className="font-medium text-foreground text-right max-w-32">
                      {exam.preparation}
                    </span>
                  </div>
                </div>

                <Button 
                  className="w-full medical-gradient hover:opacity-90 transition-smooth button-shadow"
                  asChild
                >
                  <a href="https://wa.me/552227721307?text=Olá! Gostaria de agendar um exame na Clínica Bockus.">
                    Agendar Exame
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-8 medical-shadow">
            <h3 className="text-2xl font-medical font-bold text-primary mb-4">
              Precisa de mais informações?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Nossa equipe está pronta para esclarecer todas as suas dúvidas sobre 
              os exames e procedimentos
            </p>
            <Button 
              size="lg"
              className="medical-gradient hover:opacity-90 transition-smooth button-shadow"
              asChild
            >
              <a href="https://wa.me/552227721307?text=Olá! Tenho dúvidas sobre os exames da Clínica Bockus.">
                Falar com Especialista
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamsSection;