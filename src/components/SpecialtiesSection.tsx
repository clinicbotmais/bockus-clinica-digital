import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Stethoscope, 
  Heart, 
  Eye, 
  Activity, 
  Scissors, 
  Apple 
} from 'lucide-react';

const SpecialtiesSection = () => {
  const specialties = [
    {
      icon: Stethoscope,
      title: 'Gastroenterologia',
      description: 'Diagnóstico e tratamento de doenças do sistema digestivo',
      features: ['Consultas especializadas', 'Tratamento de refluxo', 'Doenças intestinais']
    },
    {
      icon: Heart,
      title: 'Hepatologia',
      description: 'Especialista em doenças do fígado e vias biliares',
      features: ['Hepatites', 'Cirrose', 'Esteatose hepática']
    },
    {
      icon: Eye,
      title: 'Endoscopia',
      description: 'Exames endoscópicos com equipamentos modernos',
      features: ['Endoscopia digestiva', 'Colonoscopia', 'Polipectomia']
    },
    {
      icon: Activity,
      title: 'Proctologia',
      description: 'Tratamento especializado de doenças anorretais',
      features: ['Hemorroidas', 'Fissuras anais', 'Fístulas']
    },
    {
      icon: Scissors,
      title: 'Cirurgia Digestiva',
      description: 'Procedimentos cirúrgicos minimamente invasivos',
      features: ['Laparoscopia', 'Cirurgia bariátrica', 'Vesícula biliar']
    },
    {
      icon: Apple,
      title: 'Nutrição',
      description: 'Orientação nutricional especializada',
      features: ['Dietas terapêuticas', 'Reeducação alimentar', 'Acompanhamento']
    }
  ];

  return (
    <section id="especialidades" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medical font-bold text-primary mb-4">
            Nossas Especialidades
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos um atendimento completo com especialistas qualificados 
            em todas as áreas da gastroenterologia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <Card 
              key={index} 
              className="group hover-lift card-gradient border-0 card-shadow overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg medical-gradient flex items-center justify-center group-hover:scale-110 transition-bounce">
                    <specialty.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-medical font-bold text-primary">
                    {specialty.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {specialty.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {specialty.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                  asChild
                >
                  <a href="https://wa.me/552227721307?text=Olá! Gostaria de saber mais sobre especialidade em gastroenterologia.">
                    Saiba Mais
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;