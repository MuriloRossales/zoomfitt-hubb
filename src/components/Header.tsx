import { Glasses } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-primary">
              <Glasses className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
            <h1 className="font-display text-xl font-semibold text-foreground">
              ZoomFitt
            </h1>
            <p className="text-xs text-muted-foreground">Estilo que encaixa com você</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#colecao" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Coleção
            </a>
            <a href="#categorias" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Categorias
            </a>
            <a href="#sobre" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Sobre
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
