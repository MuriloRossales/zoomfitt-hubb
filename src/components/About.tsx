import { Eye, Award, Heart, Sparkles } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Qualidade Óptica",
    description: "Lentes de alta precisão com tratamentos premium para sua visão."
  },
  {
    icon: Award,
    title: "Garantia",
    description: "Caso o produto apresente defeito de fabricação, o cliente poderá solicitar troca em até 15 dias após o recebimento."
  },
  {
    icon: Heart,
    title: "Atendimento", 
    description: "Equipe especializada pronta para encontrar o óculos ideal."
  },
  {
    icon: Sparkles,
    title: "Design Único",
    description: "Modelos exclusivos que combinam tendência e sofisticação."
  }
];

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-ice">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Sobre Nós
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Tradição e Inovação em Cada Detalhe
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Quem Somos
A ZoomFitt nasceu para quem não aceita o comum.

Somos uma marca focada em unir performance, estilo e proteção em um único acessório. Acreditamos que um óculos não é apenas um detalhe, ele é presença, atitude e confiança.

Criamos modelos esportivos e casuais pensados para acompanhar seu ritmo, seja no treino, na corrida, no pedal ou no dia a dia. Todos com proteção UV, conforto e design marcante.

Nosso compromisso é entregar qualidade, identidade e uma experiência que vá além da compra.

 

ZoomFitt é para quem se movimenta.
Para quem evolui.
Para quem vai além.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-4 rounded-xl bg-card shadow-soft"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
            <div className="relative bg-gradient-to-br from-primary to-navy rounded-3xl p-8 shadow-elevated">
              <img 
                src="/LogoQuadradoBranco.jpeg"
                alt="Logo da ZoomFitt Branco"
                className="w-full rounded-2xl shadow-card"
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
