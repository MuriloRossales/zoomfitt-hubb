import { Glasses, MapPin, Phone, Mail, Facebook, InstagramIcon } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-primary-foreground/10">
                <Glasses className="w-6 h-6" />
              </div>
              <span className="font-display text-xl font-semibold">ZoomFitt</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Sua visão é nossa prioridade. Oferecemos os melhores produtos 
              com qualidade e estilo incomparáveis.
            </p>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4" />
                zoomfitt26@gmail.com.br
              </li>
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/zoomfitt" // Link para o seu perfil
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                {/* Usando o apelido que criamos no import (Instagram as Insta) */}
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-sm text-primary-foreground/50">
            © 2025 ZoomFitt. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
