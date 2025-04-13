import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  DollarSign, 
  BookOpen, 
  Brain, 
  Zap, 
  TrendingUp, 
  Check, 
  ShieldCheck, 
  Download,
  BarChart3,
  Award,
  Star,
  Lock
} from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';
import TestimonialCard from '../components/TestimonialCard';
import FeatureCard from '../components/FeatureCard';
import FAQItem from '../components/FAQItem';
import { toast } from "sonner";

const Index = () => {
  // Set target date for countdown (1 week from now)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);
  
  // For floating effect on scroll
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // State for visitor count 
  const [visitorCount, setVisitorCount] = useState(42);
  
  useEffect(() => {
    // Random increment to visitor count between 1-3 every 30 seconds
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Handle buy button click
  const handleBuyClick = () => {
    window.location.href = "https://pay.kiwify.com.br/p3D33er";
  };

  return (
    <div className="min-h-screen bg-ai-dark text-white">
      {/* Navigation Bar */}
      <nav className="sticky top-0 bg-ai-dark/90 backdrop-blur-sm z-50 border-b border-muted">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <div className="font-montserrat font-bold text-xl">
            <span className="text-ai-gold">100</span> <span className="text-ai-teal">AI</span>
          </div>
          <a 
            href="https://pay.kiwify.com.br/p3D33er" 
            className="bg-ai-gold text-ai-dark px-4 py-2 rounded-full font-montserrat font-semibold hover:brightness-110 transition-all"
          >
            COMPRAR AGORA
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-hero-pattern py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
              <span className="text-gradient">100 MANEIRAS</span> DE GANHAR DINHEIRO COM IA
            </h1>
            
            <p className="text-xl md:text-2xl mb-6 text-ai-light opacity-90">
              Descubra ideias práticas, escaláveis e lucrativas para transformar inteligência artificial em renda real — mesmo que você esteja começando do zero!
            </p>
            
            <div className="bg-ai-dark/70 border border-ai-teal/30 rounded-xl p-5 md:p-8 mb-8 backdrop-blur-sm">
              <div className="flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-ai-gold mr-2" />
                <h2 className="text-2xl md:text-3xl font-bold">Por apenas <span className="text-ai-gold">R$ 9,90</span></h2>
              </div>
              <p className="text-sm opacity-80 mt-2">Oferta por tempo limitado</p>
              
              <div className="my-5">
                <p className="font-medium mb-2 text-ai-teal">A oferta termina em:</p>
                <CountdownTimer targetDate={targetDate} />
              </div>
              
              <a 
                href="https://pay.kiwify.com.br/p3D33er" 
                className="button-glow w-full md:w-auto text-center font-bold text-lg uppercase"
              >
                BAIXAR AGORA
              </a>
              
              <div className="mt-4 flex items-center justify-center gap-2 text-sm opacity-80">
                <Lock className="w-4 h-4" />
                <span>Pagamento 100% seguro e protegido</span>
              </div>
            </div>
            
            <div className="text-sm">
              <p className="text-ai-teal animate-pulse">
                <span className="font-bold">{visitorCount} pessoas</span> estão vendo esta página agora!
              </p>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div 
          className="absolute right-0 top-1/4 w-64 h-64 bg-ai-blue/20 blur-[100px] rounded-full"
          style={{ transform: `translateY(${offset * 0.2}px)` }}
        />
        <div 
          className="absolute left-10 bottom-1/3 w-40 h-40 bg-ai-gold/10 blur-[80px] rounded-full"
          style={{ transform: `translateY(${offset * -0.1}px)` }}
        />
      </section>

      {/* Problem & Solution Section */}
      <section className="py-16 bg-gradient-to-b from-ai-dark to-ai-dark/95">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              O Mundo da IA Está <span className="text-gradient">Revolucionando</span> Como Ganhamos Dinheiro
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-ai-teal pl-4">
                <h3 className="text-xl font-semibold mb-2">O Problema:</h3>
                <p className="opacity-80">Muitas pessoas ainda não sabem como aproveitar a revolução da inteligência artificial para gerar renda. As oportunidades estão em toda parte, mas falta um guia prático e objetivo para começar.</p>
              </div>
              
              <div className="border-l-4 border-ai-gold pl-4">
                <h3 className="text-xl font-semibold mb-2">A Solução:</h3>
                <p className="opacity-80">Um guia abrangente com 100 maneiras específicas e detalhadas de como utilizar tecnologias de IA para criar negócios, serviços e produtos lucrativos — do básico ao avançado, adaptado para qualquer nível de experiência.</p>
              </div>
            </div>
            
            <div className="mt-12 flex justify-center">
              <a href="#comprar" className="flex items-center text-ai-teal hover:text-ai-gold transition-colors">
                Quero ver as oportunidades 
                <ChevronDown className="ml-2 w-5 h-5 animate-bounce" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-ai-dark/90">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            O Que Você Vai <span className="text-gradient">Descobrir</span>
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-12 opacity-80">
            100 ideias práticas e lucrativas que você pode começar a implementar hoje mesmo, organizadas por categoria e nível de dificuldade.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Negócios Escaláveis"
              description="Modelos de negócios com IA que escalam de zero a milhares de clientes sem aumentar drasticamente seus custos operacionais."
              icon={TrendingUp}
            />
            <FeatureCard
              title="Oportunidades por Nicho"
              description="Ideias organizadas por setor, permitindo que você encontre oportunidades alinhadas com suas habilidades e interesses específicos."
              icon={BarChart3}
            />
            <FeatureCard
              title="Ferramentas Recomendadas"
              description="Lista de ferramentas e plataformas de IA para cada método, muitas gratuitas ou de baixo custo, otimizadas para maximizar resultados."
              icon={Zap}
            />
            <FeatureCard
              title="Exemplos de Sucesso"
              description="Casos reais de pessoas que estão lucrando com cada método, incluindo detalhes sobre como começaram e escalaram seus resultados."
              icon={Award}
            />
            <FeatureCard
              title="Guia Passo a Passo"
              description="Instruções detalhadas para implementar cada estratégia, do planejamento inicial até a monetização e escalabilidade."
              icon={BookOpen}
            />
            <FeatureCard
              title="Conhecimento Acessível"
              description="Explicações claras e sem jargão técnico, permitindo que qualquer pessoa, mesmo sem experiência prévia, possa começar imediatamente."
              icon={Brain}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-ai-dark/90 to-ai-dark/95">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            O Que Nossos <span className="text-gradient">Leitores</span> Dizem
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-12 opacity-80">
            Veja como nosso guia está ajudando pessoas reais a transformarem conhecimento em renda extra.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard 
              name="Carlos Silva"
              role="Empreendedor Digital"
              content="Em apenas 2 semanas, implementei 3 das ideias do guia e já comecei a gerar meus primeiros R$1.500 com serviços de IA. O investimento se pagou mais de 100 vezes!"
              stars={5}
            />
            <TestimonialCard 
              name="Ana Ferreira"
              role="Profissional Autônoma"
              content="Nunca pensei que pudesse entrar no mercado de IA sem ser programadora. Com este guia, encontrei 5 nichos onde posso atuar como intermediária, usando ferramentas prontas."
              stars={5}
            />
            <TestimonialCard 
              name="Roberto Almeida"
              role="Estudante Universitário"
              content="Estou usando as ideias do guia para gerar uma renda extra nos fins de semana. Já estou faturando mais com isso do que em meu estágio de meio período!"
              stars={5}
            />
            <TestimonialCard 
              name="Juliana Mendes"
              role="Designer Gráfica"
              content="Implementei apenas uma das ideias voltadas para criação de conteúdo com IA e consegui aumentar minha renda mensal em mais de 30%. Material incrível!"
              stars={5}
            />
            <TestimonialCard 
              name="Márcio Oliveira"
              role="Aposentado"
              content="Aos 62 anos, pensei que a tecnologia de IA seria muito complicada para mim. Este guia provou que eu estava errado. Estou gerando uma renda extra considerável."
              stars={5}
            />
            <TestimonialCard 
              name="Patricia Costa"
              role="Mãe e Empreendedora"
              content="Como mãe de 3 filhos, precisava de algo flexível. Encontrei 7 ideias no guia que posso trabalhar nos horários que tenho disponíveis, gerando uma renda extra significativa."
              stars={5}
            />
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-16 bg-ai-dark/90">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              O Que Está <span className="text-gradient">Incluído</span>
            </h2>
            
            <div className="bg-muted rounded-xl p-6 md:p-8 shadow-lg border border-ai-teal/30">
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/ea89553a-b352-43b8-b98e-b29732284ed7.png" 
                    alt="100 Maneiras de Ganhar Dinheiro com IA" 
                    className="max-w-full h-auto rounded-lg shadow-xl animate-float" 
                    width={300}
                  />
                  <div className="absolute -right-4 -top-4 bg-ai-gold text-ai-dark font-montserrat font-bold rounded-full p-3 text-sm transform rotate-12">
                    R$ 9,90
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-center">E-book Digital em PDF: "100 Maneiras de Ganhar Dinheiro com IA"</h3>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-ai-gold mr-2 mt-1 flex-shrink-0" />
                  <span>100 estratégias detalhadas para gerar renda com inteligência artificial</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-ai-gold mr-2 mt-1 flex-shrink-0" />
                  <span>Categorização por nível de complexidade: iniciante, intermediário e avançado</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-ai-gold mr-2 mt-1 flex-shrink-0" />
                  <span>Guias passo a passo para implementação de cada estratégia</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-ai-gold mr-2 mt-1 flex-shrink-0" />
                  <span>Lista de ferramentas e recursos necessários para cada método</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-ai-gold mr-2 mt-1 flex-shrink-0" />
                  <span>Exemplos reais de pessoas que aplicaram cada estratégia com sucesso</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-ai-gold mr-2 mt-1 flex-shrink-0" />
                  <span>Estimativas de investimento inicial e potencial de ganho para cada método</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-ai-gold mr-2 mt-1 flex-shrink-0" />
                  <span>Dicas de marketing e crescimento para maximizar seus resultados</span>
                </li>
              </ul>
              
              <div className="flex justify-center">
                <a 
                  href="#comprar" 
                  className="button-glow text-center font-bold text-lg uppercase"
                  onClick={handleBuyClick}
                >
                  Quero Este Conteúdo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA Section */}
      <section id="comprar" className="py-16 bg-gradient-to-b from-ai-dark/95 to-ai-dark">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-muted to-ai-dark/80 rounded-xl p-6 md:p-10 border border-ai-teal">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-center">
              INVESTIMENTO ÚNICO DE 
              <div className="text-ai-gold text-4xl md:text-6xl my-2">R$ 9,90</div>
            </h2>
            
            <div className="text-center mb-8">
              <div className="flex justify-center items-center gap-2">
                <Star className="w-5 h-5 fill-ai-gold text-ai-gold" />
                <Star className="w-5 h-5 fill-ai-gold text-ai-gold" />
                <Star className="w-5 h-5 fill-ai-gold text-ai-gold" />
                <Star className="w-5 h-5 fill-ai-gold text-ai-gold" />
                <Star className="w-5 h-5 fill-ai-gold text-ai-gold" />
              </div>
              <p className="mt-2 opacity-80">Mais de 1.500 clientes satisfeitos</p>
            </div>
            
            <div className="mb-8">
              <p className="text-center font-montserrat font-medium mb-2 text-ai-teal">
                A oferta termina em:
              </p>
              <CountdownTimer targetDate={targetDate} />
            </div>
            
            <div className="flex flex-col items-center space-y-6">
              <button
                onClick={handleBuyClick}
                className="button-glow w-full sm:w-auto text-center font-bold text-xl uppercase px-12 py-5"
              >
                BAIXAR AGORA
                <Download className="ml-2 w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" 
                  alt="Pagamento seguro" 
                  className="h-10"
                />
                <div className="flex flex-col">
                  <span className="font-medium">Pagamento 100% Seguro</span>
                  <span className="text-xs opacity-80">Ambiente protegido e criptografado</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm opacity-80">
                <ShieldCheck className="w-4 h-4 text-ai-teal" />
                <span>Garantia de 7 dias ou seu dinheiro de volta</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-ai-dark">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Perguntas <span className="text-gradient">Frequentes</span>
            </h2>
            
            <div className="space-y-2">
              <FAQItem 
                question="Preciso ter conhecimentos técnicos para aplicar os métodos do guia?"
                answer="Não! O guia foi desenvolvido para ser acessível a todos os níveis de conhecimento. As 100 estratégias estão classificadas por nível de dificuldade, e muitas delas foram projetadas especificamente para pessoas sem experiência técnica."
              />
              <FAQItem 
                question="Quanto tempo leva para começar a ver resultados?"
                answer="Isso varia de acordo com o método escolhido e o tempo dedicado. Alguns leitores relatam ganhos já na primeira semana implementando estratégias mais simples, enquanto métodos mais avançados podem levar algumas semanas para gerar resultados significativos."
              />
              <FAQItem 
                question="Qual o investimento inicial necessário para começar?"
                answer="Muitas das estratégias podem ser iniciadas com zero ou pouquíssimo investimento, utilizando ferramentas gratuitas ou de baixo custo. O guia indica claramente o investimento inicial estimado para cada método."
              />
              <FAQItem 
                question="Como recebo o material após a compra?"
                answer="Imediatamente após a confirmação do pagamento, você receberá um e-mail com o link para download do e-book em formato PDF, que pode ser lido em qualquer dispositivo."
              />
              <FAQItem 
                question="Existe garantia de satisfação?"
                answer="Sim! Oferecemos garantia incondicional de 7 dias. Se você não ficar satisfeito com o conteúdo, basta solicitar o reembolso total dentro deste período."
              />
              <FAQItem 
                question="O conteúdo recebe atualizações?"
                answer="Sim! O campo da IA evolui rapidamente, e nos comprometemos a manter o conteúdo atualizado. Compradores têm acesso a todas as atualizações futuras sem custo adicional."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-b from-ai-dark to-ai-dark/90">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Não Perca Esta <span className="text-gradient">Oportunidade</span>
          </h2>
          <p className="max-w-2xl mx-auto mb-8 opacity-80">
            Transforme seu conhecimento em renda real com as ferramentas corretas de IA. Comece agora mesmo!
          </p>
          
          <div className="mb-8">
            <p className="font-medium mb-2 text-ai-teal">A oferta termina em:</p>
            <CountdownTimer targetDate={targetDate} />
          </div>
          
          <button
            onClick={handleBuyClick}
            className="button-glow text-center font-bold text-xl uppercase"
          >
            BAIXAR AGORA POR APENAS R$ 9,90
            <Download className="ml-2 w-5 h-5" />
          </button>
          
          <p className="mt-6 text-sm opacity-80">
            *Os resultados podem variar de acordo com o esforço, dedicação e implementação de cada pessoa.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-ai-dark border-t border-muted">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm opacity-60">
                © 2024 • 100 Maneiras de Ganhar Dinheiro com IA • Todos os direitos reservados
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Termos de Uso</a>
              <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Floating Buy Button */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a
          href="https://pay.kiwify.com.br/p3D33er"
          className="bg-ai-gold text-ai-dark px-4 py-3 rounded-full font-montserrat font-bold shadow-lg flex items-center"
        >
          <DollarSign className="w-4 h-4 mr-1" />
          R$ 9,90
        </a>
      </div>
      
      {/* Visitor Counter Floating */}
      <div className="fixed bottom-6 left-6 z-50 bg-ai-dark/80 backdrop-blur-sm border border-ai-teal/30 px-3 py-2 rounded-full text-xs hidden md:block">
        <p className="text-ai-teal">
          <span className="font-bold">{visitorCount} pessoas</span> estão vendo esta página agora!
        </p>
      </div>
    </div>
  );
};

export default Index;
