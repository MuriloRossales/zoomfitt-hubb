import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-sky/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 animate-slide-up">
          Encontre o<br />
          <span className="text-sky">Óculos Perfeito</span>
        </h1>
        
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Descubra nossa coleção exclusiva de produtos que combinam 
          estilo, conforto e qualidade incomparável.
        </p>
        
        {/* Bloco do Botão e da Seta Centralizados */}
        <div className="flex flex-col items-center justify-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
          
          {/* A Seta agora fica aqui, logo acima do botão, pulando centralizada */}
          <div className="animate-bounce mb-3">
            <ArrowDown className="w-6 h-6 text-primary-foreground/80" />
          </div>

          <Button 
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-medium px-8 py-6 text-lg rounded-full shadow-elevated"
            onClick={() => document.getElementById('colecao')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Coleção
          </Button>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
