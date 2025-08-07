import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Award, GraduationCap, Star } from 'lucide-react';

const TeamSection = () => {
  const doctors = [
    {
      name: 'Dr. Carlos Bockus',
      specialty: 'Gastroenterologista',
      crm: 'CRM-RJ 12345',
      experience: '20 anos de experiência',
      education: 'Especialização em Hepatologia - UERJ',
      image: '/lovable-uploads/placeholder-doctor-1.jpg',
      specialties: ['Gastroenterologia', 'Hepatologia', 'Endoscopia']
    },
    {
      name: 'Dra. Maria Santos',
      specialty: 'Endoscopista',
      crm: 'CRM-RJ 67890',
      experience: '15 anos de experiência',
      education: 'Residência em Gastroenterologia - UFRJ',
      image: '/lovable-uploads/placeholder-doctor-2.jpg',
      specialties: ['Endoscopia Digestiva', 'Colonoscopia', 'Polipectomia']
    },
    {
      name: 'Dr. Roberto Lima',
      specialty: 'Cirurgião Digestivo',
      crm: 'CRM-RJ 11223',
      experience: '18 anos de experiência',
      education: 'Fellowship em Cirurgia Laparoscópica',
      image: '/lovable-uploads/placeholder-doctor-3.jpg',
      specialties: ['Cirurgia Digestiva', 'Laparoscopia', 'Proctologia']
    },
    {
      name: 'Dra. Ana Costa',
      specialty: 'Nutricionista',
      crm: 'CRN-RJ 4567',
      experience: '12 anos de experiência',
      education: 'Especialista em Nutrição Clínica',
      image: '/lovable-uploads/placeholder-doctor-4.jpg',
      specialties: ['Nutrição Clínica', 'Doenças Digestivas', 'Orientação Alimentar']
    }
  ];

  return (
    <section id="equipe" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medical font-bold text-primary mb-4">
            Equipe Multidisciplinar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossos especialistas são altamente qualificados e comprometidos 
            em oferecer o melhor atendimento para sua saúde
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <Card 
              key={index} 
              className="group hover-lift card-gradient border-0 card-shadow overflow-hidden"
            >
              <CardContent className="p-6 text-center">
                {/* Doctor Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-secondary to-accent p-1">
                    <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full medical-gradient flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">
                          {doctor.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-accent text-primary px-3 py-1 rounded-full text-xs font-medium">
                    {doctor.experience.split(' ')[0]} anos
                  </div>
                </div>

                {/* Doctor Info */}
                <h3 className="text-xl font-medical font-bold text-primary mb-2">
                  {doctor.name}
                </h3>
                <p className="text-secondary font-medium mb-1">{doctor.specialty}</p>
                <p className="text-sm text-muted-foreground mb-4">{doctor.crm}</p>

                {/* Education */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <GraduationCap className="w-4 h-4 text-accent" />
                  <p className="text-xs text-muted-foreground">{doctor.education}</p>
                </div>

                {/* Specialties */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {doctor.specialties.map((spec, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">5.0</span>
                </div>

                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                  asChild
                >
                  <a href="https://wa.me/552227721307?text=Olá! Gostaria de agendar uma consulta na Clínica Bockus.">
                    Ver Perfil Completo
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full hero-gradient flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-medical font-bold text-primary mb-2">
              Certificações
            </h3>
            <p className="text-muted-foreground">
              Todos os médicos possuem certificação pelos principais órgãos de classe
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full hero-gradient flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-medical font-bold text-primary mb-2">
              Formação
            </h3>
            <p className="text-muted-foreground">
              Especialistas formados pelas melhores universidades do país
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full hero-gradient flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-medical font-bold text-primary mb-2">
              Experiência Local
            </h3>
            <p className="text-muted-foreground">
              Conhecimento profundo das necessidades da região de Macaé
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;