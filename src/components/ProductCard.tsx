import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Instagram } from "lucide-react";

interface ProductCardProps {
  name: string;
  category: string;
  price: string;
  image: string;
  gallery?: string[]; // Adicionamos a galeria aqui
  isNew?: boolean;
  colors?: string[];
}

const ProductCard = ({ name, category, price, image, gallery, isNew, colors }: ProductCardProps) => {
  // Estado para a imagem que está sendo exibida no Modal
  const [selectedImage, setSelectedImage] = useState(image);

  // Criamos uma lista de imagens para a galeria (imagem principal + fotos extras)
  const allImages = gallery && gallery.length > 0 ? gallery : [image];

  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* O card agora é clicável */}
        <div className="group card-hover bg-card rounded-2xl overflow-hidden shadow-card cursor-pointer">
          {/* Image container */}
          <div className="relative aspect-square bg-ice p-6 flex items-center justify-center overflow-hidden">
            {isNew && (
              <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                Novo
              </Badge>
            )}
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
          </div>
          
          {/* Content */}
          <div className="p-5">
            <span className="text-xs font-medium text-accent uppercase tracking-wider">
              {category}
            </span>
            <h3 className="font-display text-lg font-semibold text-foreground mt-1 mb-2">
              {name}
            </h3>
            
            {colors && colors.length > 0 && (
              <div className="flex gap-2 mb-3">
                {colors.map((color, index) => (
                  <span 
                    key={index}
                    className="w-4 h-4 rounded-full border-2 border-border"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            )}
            
            <p className="text-xl font-semibold text-primary">
              {price}
            </p>
          </div>
        </div>
      </DialogTrigger>

      {/* Conteúdo do Modal que abre ao clicar */}
      <DialogContent className="max-w-4xl w-[95vw] p-0 overflow-y-auto max-h-[95vh] bg-card border-none sm:rounded-3xl custom-close-button">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Galeria de Fotos (Esquerda) */}
          <div className="p-6 bg-ice flex flex-col items-center justify-center">
            <div className="aspect-square w-full max-w-[400px] flex items-center justify-center">
              <img 
                src={selectedImage} 
                alt={name} 
                className="w-full h-full object-contain transition-all duration-300" 
              />
            </div>
            
            {/* Miniaturas embaixo da foto grande */}
            {allImages.length > 1 && (
              <div className="flex gap-2 mt-6 overflow-x-auto pb-2 w-full justify-center">
                {allImages.map((img, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setSelectedImage(img)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 flex-shrink-0 bg-white p-1 transition-all ${selectedImage === img ? 'border-primary shadow-md' : 'border-transparent opacity-70'}`}
                  >
                    <img src={img} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Informações do Óculos (Direita) */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="text-sm font-medium text-accent uppercase tracking-widest mb-2">{category}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">{name}</h2>
            <p className="text-2xl font-semibold text-primary mb-6">{price}</p>
            
           <div className="space-y-4 mb-8 text-muted-foreground">
  {category.toLowerCase().includes("boné") || category.toLowerCase().includes("bone") ? (
    <>
      <p>• Material de alta qualidade e resistência.</p>
      <p>• Aba curva com ajuste confortável na parte traseira.</p>
      <p>• Perfeito para treinos e uso no dia a dia.</p>
    </>
  ) : (
    <>
      <p>• Proteção UV400 contra raios solares.</p>
      <p>• Lentes de policarbonato resistentes.</p>
      <p>• Acompanha estojo e flanela da ZoomFitt.</p>
    </>
  )}
</div>

            <a 
                href="https://ig.me/m/zoomfitt"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-slate-100 text-slate-900 py-6 rounded-xl font-bold flex flex-col items-center justify-center gap-2 hover:bg-slate-200 transition-colors shadow-sm border border-slate-200"
              >
                <Instagram className="w-6 h-6 mb-1" /> 
                <span className="text-sm uppercase tracking-wide">Chamar na DM do Instagram</span>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductCard;