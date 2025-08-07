import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Lock, Clock } from 'lucide-react';

const ResultsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medical font-bold text-primary mb-4">
            Resultados de Exames
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acesse seus resultados de forma rápida e segura através 
            da nossa plataforma online
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center shrink-0">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-medical font-bold text-primary mb-2">
                    Acesso Seguro
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Seus resultados ficam protegidos com criptografia e acesso 
                    através de senha personalizada fornecida pela clínica.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-medical font-bold text-primary mb-2">
                    Disponível 24h
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Acesse seus resultados a qualquer hora do dia, 
                    de qualquer lugar, através do computador ou celular.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center shrink-0">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-medical font-bold text-primary mb-2">
                    Download Fácil
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Baixe seus resultados em PDF de alta qualidade para 
                    compartilhar com outros médicos ou guardar.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button 
                size="lg"
                className="medical-gradient hover:opacity-90 transition-smooth button-shadow mr-4"
                asChild
              >
                <a href="https://wa.me/552227721307?text=Olá! Gostaria de acessar meus resultados de exames.">
                  Solicitar Acesso
                </a>
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="hover:bg-primary hover:text-primary-foreground transition-smooth"
                asChild
              >
                <a href="https://wa.me/552227721307?text=Olá! Tenho dúvidas sobre como acessar meus resultados.">
                  Preciso de Ajuda
                </a>
              </Button>
            </div>
          </div>

          {/* Visual Card */}
          <div className="relative">
            <Card className="card-gradient border-0 card-shadow overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full medical-gradient flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-medical font-bold text-primary mb-2">
                    Portal de Resultados
                  </h3>
                  <p className="text-muted-foreground">
                    Sistema seguro e confiável
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Colonoscopia</span>
                      <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                        Disponível
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">15 Mar 2024</p>
                  </div>
                  
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Endoscopia</span>
                      <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                        Disponível
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">10 Mar 2024</p>
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-4 opacity-50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Consulta</span>
                      <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                        Processando
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">20 Mar 2024</p>
                  </div>
                </div>

                <Button 
                  className="w-full mt-6 medical-gradient hover:opacity-90 transition-smooth"
                  asChild
                >
                  <a href="https://wa.me/552227721307?text=Olá! Gostaria de acessar meus resultados online.">
                    Acessar Resultados Online
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium card-shadow">
              SSL Seguro
            </div>
            <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium card-shadow">
              24h Acesso
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;