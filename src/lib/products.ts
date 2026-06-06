// Imagens reais dos óculos esportivos
import esportivoAstePretaVerde from "@/assets/AstePretaLenteVerde.jpeg";
import lenteVerdeTrás from "@/assets/LenteVerdeTrás.jpeg";
import esportivoAstePretaAzul from "@/assets/AstePretaLenteAzul.jpeg";
import lenteAzulTrás from "@/assets/LenteAzulTrás.jpeg";
import esportivoAstePretaLaranja from "@/assets/AstePretaLenteLaranja.jpeg";
import lenteLaranjaTrás from "@/assets/LenteLaranjaTrás.jpeg";
import esportivoAstePretaPreta from "@/assets/AstePretaLentePreta.jpeg";
import lentePretaTrás from "@/assets/LentePretaTrás.jpeg";
import lenteRosa from "@/assets/LenteRosa.jpeg";
import lenteRosaTrás from "@/assets/LenteRosaTrás.jpeg";
import coffe from "@/assets/Coffe.jpg";
import coffeTrás from "@/assets/CoffeTrás.jpg";
import originBlack from "@/assets/OriginBlack.jpg";
import originBlackTrás from "@/assets/OriginBlackTrás.jpg";
import originGrey from "@/assets/OriginGrey.jpg";
import originGreyTrás from "@/assets/OriginGreyTrás.jpg";
import aurora from "@/assets/Aurora.jpg";
import auroraTrás from "@/assets/AuroraTrás.jpg";
import tiger from "@/assets/Tiger.jpg";
import tigerTrás from "@/assets/TigerTrás.jpg"; 
import aviatorLeopard from "@/assets/AviatorLeopard.jpg";
import aviatorLeopardTrás from "@/assets/AviatorLeopardTrás.jpg";
import diamond from "@/assets/Diamond.jpg";
import diamondTrás from "@/assets/DiamondTrás.jpg";
import luxBlack from "@/assets/LuxBlack.jpg";
import luxBlackTrás from "@/assets/LuxBlackTrás.jpg";
import Premiun from "@/assets/Premiun.jpg";
import PremiunTrás from "@/assets/PremiunTrás.jpg";
import BonePreto from "@/assets/BonePreto.jpeg";
import BonePretoTrás from "@/assets/BonePretoTras.jpeg";



export const products = [
  // Social (5)
  {
    id: crypto.randomUUID(),
    name: "ZoomFitt Origin black",
    category: "Social",
    price: "R$ 69,90",
    image: originBlack,
    gallery: [originBlack, originBlackTrás],
    colors: ["#000000"]
  },
  {
    id: crypto.randomUUID(),
    name: " ZoomFitt Origin grey",
    category: "Social",
    price: "R$ 69,90",
    image: originGrey,
    gallery: [originGrey, originGreyTrás],
    colors: ["#c9c8c8","#000000"]
  },

  {
    id: crypto.randomUUID(),
    name: "ZoomFitt Coffe",
    category: "Social",
    price: "R$ 59,90",
    image: coffe,
    gallery: [coffe, coffeTrás],
    colors: ["#000000", "#8B4513"]
  },
  
  {
    id: crypto.randomUUID(),
    name: "ZoomFitt Tiger",
    category: "Social",
    price: "R$ 69,90",
    image: tiger,
    gallery: [tiger, tigerTrás],
    colors: ["#000000", "#af420f"]
  },

  {
    id: crypto.randomUUID(),
    name: "ZoomFitt Aurora",
    category: "Social",
    price: "R$ 59,90",
    image: aurora,
    gallery: [aurora, auroraTrás],
    colors: ["#D4AF37", "#000000"]
  },
  {
    id: crypto.randomUUID(),
    name: "ZoomFitt Aviator Leopard",
    category: "Social",
    price: "R$ 69,90",
    image: aviatorLeopard,
    gallery: [aviatorLeopard, aviatorLeopardTrás],
    colors: ["#000000", "#af420f"]
  },
  {
    id: crypto.randomUUID(),
    name: "ZoomFitt Diamond",
    category: "Social",
    price: "R$ 79,90",
    image: diamond,
    gallery: [diamond, diamondTrás],
    colors: ["#000000", "#D4AF37"]
  },
  {
    id: crypto.randomUUID(),
    name: "ZoomFitt Lux Black",
    category: "Social",
    price: "R$ 79,90",
    image: luxBlack,
    gallery: [luxBlack, luxBlackTrás],
    colors: ["#000000"]
  },
  {
    id: crypto.randomUUID(),
    name: " ZoomFitt Premium",
    category: "Social",
    price: "R$ 79,90",
    image: Premiun,
    gallery: [Premiun, PremiunTrás],
    colors: ["#c9c8c8","#000000"]
  },

  // Esportivo (5)

  {
    id: crypto.randomUUID(),
    name: "ZoomFitt Speed - Lente Espelhada Rosa (Hastes Branca/Preta)",
    category: "Esportivo",
    price: "R$ 89,90",
    image: lenteRosa,
    gallery: [lenteRosa, lenteRosaTrás],
    colors: ["#FFFFFF", "#FF69B4"]
  },
  {
    id: crypto.randomUUID(),
    name: "ZoomFitt Speed - Lente Espelhada Verde (Hastes Preto/Cinza)",
    category: "Esportivo",
    price: "R$ 89,90",
    image: esportivoAstePretaVerde,
    gallery: [esportivoAstePretaVerde, lenteVerdeTrás],
    colors: ["#000000", "#00FF00"]
  },
  {
    id: crypto.randomUUID(),
    name: "ZoomFitt Speed - Lente Espelhada Azul (Hastes Preto)",
    category: "Esportivo",
    price: "R$ 89,90",
    image: esportivoAstePretaAzul,
    gallery: [esportivoAstePretaAzul, lenteAzulTrás],
    colors: ["#000000", "#0000FF"]
  },
  {
    id: crypto.randomUUID(),
    name: "ZoomFitt Speed - Lente Espelhada Laranja (Hastes Preto/Vermelho)",
    category: "Esportivo",
    price: "R$ 89,90",
    image: esportivoAstePretaLaranja,
    gallery: [esportivoAstePretaLaranja, lenteLaranjaTrás],
    colors: ["#000000", "#ff7300"]
  },
  {
    id: crypto.randomUUID(),
    name: "ZoomFitt Speed - Lente Preta (Hastes Pretas)",
    category: "Esportivo",
    price: "R$ 89,90",
    image: esportivoAstePretaPreta,
    gallery: [esportivoAstePretaPreta, lentePretaTrás],
    colors: ["#000000"]
  },
  {
    id: crypto.randomUUID(),
    name: "ZoomFitt Speed Boné - Preto (Five Panel)",
    category: "Esportivo",
    price: "R$ 159,90",
    image: BonePreto,
    gallery: [BonePreto, BonePretoTrás],
    colors: ["#000000"]
  },
];