export const navigation = [
  { label: "Início", href: "/" },
  { label: "Cookies", href: "/cookies" },
  { label: "Bolos", href: "/bolos" },
  { label: "Cheesecake", href: "/cheesecake" },
  { label: "Presentear", href: "/presentear" },
  { label: "Encomendas", href: "/encomendas" },
  { label: "Sobre", href: "/sobre" },
];

export const categories = [
  {
    slug: "cookies",
    name: "Cookies",
    tagline: "Artesanais e personalizados",
    description:
      "Assados diariamente com ingredientes selecionados. Cada mordida é uma experiência de sabor e textura irresistível.",
    href: "/cookies",
    cta: "Ver cookies",
    image: "/images/product-tin.png",
    icon: "Cookie",
  },
  {
    slug: "bolos",
    name: "Bolos",
    tagline: "Em fatias ou inteiros",
    description:
      "Receitas autorais que combinam massa fofinha, recheios cremosos e coberturas delicadas para celebrar com elegância.",
    href: "/bolos",
    cta: "Ver bolos",
    image: "/images/gateau-chocolat.png",
    icon: "Cake",
  },
  {
    slug: "cheesecake",
    name: "Cheesecake",
    tagline: "Cremosos e irresistíveis",
    description:
      "Equilíbrio perfeito entre leveza e cremosidade, com coberturas que encantam os olhos antes mesmo do paladar.",
    href: "/cheesecake",
    cta: "Ver cheesecakes",
    image: "/images/tranche-gateau.png",
    icon: "UtensilsCrossed",
  },
  {
    slug: "presentear",
    name: "Presentes",
    tagline: "Monte o presente perfeito",
    description:
      "Latas presenteáveis com cookies artesanais. Escolha os sabores, adicione um cartão e surpreenda quem você ama.",
    href: "/presentear",
    cta: "Montar agora",
    image: "/images/product-tin.png",
    icon: "Gift",
  },
];

export const products = [
  // --- COOKIES ---
  {
    slug: "cookie-classico",
    name: "Cookie Clássico",
    category: "cookies",
    tagline: "O equilíbrio perfeito entre crocante e macio",
    description:
      "Feito com manteiga de qualidade, açúcar mascavo e baunilha pura. Crocante por fora, macio por dentro — um clássico que nunca decepciona.",
    price: 12.0,
    priceFormatted: "R$ 12,00",
    unit: "unidade",
    image: "/images/product-tin.png",
    featured: false,
    tags: ["Clássico"],
  },
  {
    slug: "cookie-chocolate-belga",
    name: "Cookie Chocolate Belga",
    category: "cookies",
    tagline: "Intensidade de sabor em cada mordida",
    description:
      "Gotas de chocolate belga 70% cacau derretendo em uma massa rica e aromática. Para os amantes do chocolate verdadeiro.",
    price: 14.0,
    priceFormatted: "R$ 14,00",
    unit: "unidade",
    image: "/images/product-tin.png",
    featured: true,
    tags: ["Favorito"],
  },
  {
    slug: "cookie-red-velvet",
    name: "Cookie Red Velvet",
    category: "cookies",
    tagline: "Sofisticação em cor e sabor",
    description:
      "A delicadeza do red velvet em formato de cookie. Massa aveludada com cream cheese e um toque de cacau.",
    price: 15.0,
    priceFormatted: "R$ 15,00",
    unit: "unidade",
    image: "/images/product-tin.png",
    featured: true,
    tags: ["Especial"],
  },
  {
    slug: "cookie-churros-doce-de-leite",
    name: "Cookie Churros com Doce de Leite",
    category: "cookies",
    tagline: "Sabor brasileiro com elegância",
    description:
      "A combinação perfeita de canela, açúcar e um generoso recheio de doce de leite artesanal. Um abraço em forma de cookie.",
    price: 14.0,
    priceFormatted: "R$ 14,00",
    unit: "unidade",
    image: "/images/product-tin.png",
    featured: false,
    tags: [],
  },
  {
    slug: "cookie-beijinho-coco",
    name: "Cookie Beijinho de Coco",
    category: "cookies",
    tagline: "Delicado e inesquecível",
    description:
      "Inspirado no clássico brigadeiro branco, com coco ralado tostado e leite condensado. Textura única, sabor afetivo.",
    price: 13.0,
    priceFormatted: "R$ 13,00",
    unit: "unidade",
    image: "/images/product-tin.png",
    featured: false,
    tags: [],
  },
  {
    slug: "cookie-personalizado",
    name: "Cookie Personalizado",
    category: "cookies",
    tagline: "Com a sua marca, no seu estilo",
    description:
      "Cookies com decoração personalizada para eventos, empresas e datas especiais. Perfeito para brindes corporativos e lembranças marcantes.",
    price: 18.0,
    priceFormatted: "A partir de R$ 18,00",
    unit: "unidade",
    image: "/images/product-tin.png",
    featured: false,
    tags: ["Personalizado"],
  },

  // --- BOLOS ---
  {
    slug: "bolo-chocolate-fatia",
    name: "Bolo de Chocolate",
    category: "bolos",
    tagline: "Camadas de prazer em cada fatia",
    description:
      "Camadas de massa fofinha, recheio cremoso de ganache e cobertura delicada. Para quem aprecia o chocolate em toda a sua plenitude.",
    price: 22.0,
    priceFormatted: "R$ 22,00",
    unit: "fatia",
    image: "/images/gateau-chocolat.png",
    featured: true,
    tags: ["Destaque"],
  },
  {
    slug: "bolo-baunilha-fatia",
    name: "Bolo de Baunilha",
    category: "bolos",
    tagline: "Clássico e atemporal",
    description:
      "Massa delicada com aroma de baunilha pura, recheio de chantilly e frutas frescas da estação. Elegância em cada fatia.",
    price: 20.0,
    priceFormatted: "R$ 20,00",
    unit: "fatia",
    image: "/images/gateau-chocolat.png",
    featured: false,
    tags: [],
  },
  {
    slug: "bolo-red-velvet-fatia",
    name: "Bolo Red Velvet",
    category: "bolos",
    tagline: "Beleza e sabor numa só fatia",
    description:
      "O icônico red velvet com sua massa aveludada e cobertura de cream cheese. Uma experiência visual e gustativa sofisticada.",
    price: 24.0,
    priceFormatted: "R$ 24,00",
    unit: "fatia",
    image: "/images/gateau-chocolat.png",
    featured: false,
    tags: ["Premium"],
  },
  {
    slug: "bolo-chocolate-inteiro",
    name: "Bolo de Chocolate (Inteiro)",
    category: "bolos",
    tagline: "Para celebrar com generosidade",
    description:
      "O mesmo bolo que encanta em cada fatia, agora para compartilhar. Perfeito para aniversários e celebrações especiais.",
    price: 180.0,
    priceFormatted: "R$ 180,00",
    unit: "bolo inteiro",
    image: "/images/gateau-chocolat.png",
    featured: false,
    tags: ["Encomenda"],
  },
  {
    slug: "bolo-baunilha-inteiro",
    name: "Bolo de Baunilha (Inteiro)",
    category: "bolos",
    tagline: "Elegância para celebrar",
    description:
      "Toda a delicadeza do nosso bolo de baunilha em formato completo. Disponível para encomenda com personalização.",
    price: 160.0,
    priceFormatted: "R$ 160,00",
    unit: "bolo inteiro",
    image: "/images/gateau-chocolat.png",
    featured: false,
    tags: ["Encomenda"],
  },

  // --- CHEESECAKE ---
  {
    slug: "cheesecake-frutas-vermelhas-fatia",
    name: "Cheesecake de Frutas Vermelhas",
    category: "cheesecake",
    tagline: "Equilíbrio perfeito de cremosidade e frescor",
    description:
      "Cremoso, leve e com o equilíbrio perfeito de sabor. Base amanteigada, recheio sedoso de cream cheese e calda de frutas vermelhas frescas.",
    price: 24.0,
    priceFormatted: "R$ 24,00",
    unit: "fatia",
    image: "/images/tranche-gateau.png",
    featured: true,
    tags: ["Favorito"],
  },
  {
    slug: "cheesecake-maracuja-fatia",
    name: "Cheesecake de Maracujá",
    category: "cheesecake",
    tagline: "Tropical e sofisticado",
    description:
      "A acidez delicada do maracujá fresco equilibrando a cremosidade do cheesecake. Uma combinação que surpreende e encanta.",
    price: 24.0,
    priceFormatted: "R$ 24,00",
    unit: "fatia",
    image: "/images/tranche-gateau.png",
    featured: false,
    tags: [],
  },
  {
    slug: "cheesecake-classico-fatia",
    name: "Cheesecake Clássico",
    category: "cheesecake",
    tagline: "A pureza do original nova-iorquino",
    description:
      "Receita clássica com cream cheese de qualidade, base de biscoito amanteigado e um toque de baunilha. Simples, perfeito, irresistível.",
    price: 22.0,
    priceFormatted: "R$ 22,00",
    unit: "fatia",
    image: "/images/tranche-gateau.png",
    featured: false,
    tags: ["Clássico"],
  },
  {
    slug: "cheesecake-frutas-vermelhas-inteiro",
    name: "Cheesecake Frutas Vermelhas (Inteiro)",
    category: "cheesecake",
    tagline: "Para compartilhar momentos especiais",
    description:
      "O cheesecake completo para encantar em festas e celebrações. Disponível com personalização de cobertura.",
    price: 190.0,
    priceFormatted: "R$ 190,00",
    unit: "cheesecake inteiro",
    image: "/images/tranche-gateau.png",
    featured: false,
    tags: ["Encomenda"],
  },

  // --- LATAS ---
  {
    slug: "lata-dourada-4-cookies",
    name: "Lata Dourada — 4 Cookies",
    category: "presentear",
    tagline: "A perfeita dose de carinho para pequenos momentos",
    description:
      "Lata dourada com 4 cookies artesanais sortidos. Perfeita para um mimo delicado, com apresentação que impressiona antes mesmo de abrir.",
    price: 68.0,
    priceFormatted: "R$ 68,00",
    unit: "lata",
    image: "/images/product-tin.png",
    featured: true,
    tags: ["Presenteável"],
    cookieCount: 4,
  },
  {
    slug: "lata-vermelha-6-cookies",
    name: "Lata Vermelha — 6 Cookies",
    category: "presentear",
    tagline: "Mais sabor para dividir com quem você ama",
    description:
      "Lata vermelha elegante com 6 cookies artesanais à sua escolha. Ideal para presentear com estilo e generosidade.",
    price: 98.0,
    priceFormatted: "R$ 98,00",
    unit: "lata",
    image: "/images/product-tin.png",
    featured: true,
    tags: ["Mais Pedido"],
    cookieCount: 6,
  },
  {
    slug: "kit-3-latas-12-cookies",
    name: "Kit 3 Latas — 12 Cookies",
    category: "presentear",
    tagline: "Para presentear com generosidade e encantar em cada detalhe",
    description:
      "Três latas coordenadas com 12 cookies sortidos. O presente definitivo para quem merece o melhor em cada detalhe.",
    price: 260.0,
    priceFormatted: "R$ 260,00",
    unit: "kit",
    image: "/images/product-tin.png",
    featured: true,
    tags: ["Kit Especial"],
    cookieCount: 12,
  },
];

export const addons = [
  {
    slug: "teddy-bear",
    name: "Teddy Bear",
    description: "Um companheiro fofo para acompanhar seu presente.",
    longDescription:
      "Um urso de pelúcia premium para tornar o presente ainda mais especial. Disponível em cores neutras para combinar com qualquer ocasião.",
    price: 59.0,
    priceFormatted: "R$ 59,00",
    image: "/images/teddy-bear.png",
    icon: "Heart",
  },
  {
    slug: "cartao-mensagem",
    name: "Cartão com Mensagem",
    description: "Escreva um recado especial. Nós cuidamos da entrega.",
    longDescription:
      "Cartão premium com a identidade visual da Baunilha do Cerrado. Personalize com sua mensagem e transforme o gesto em algo inesquecível.",
    price: 15.0,
    priceFormatted: "R$ 15,00",
    image: "/images/cartao-mensagem.png",
    icon: "MessageSquare",
  },
  {
    slug: "embalagem-presente",
    name: "Embalagem Especial",
    description: "Nossas latas são lindas e prontas para surpreender.",
    longDescription:
      "Upgrade na embalagem com lacinho de cetim, papel de seda e finalização especial. Para quando cada detalhe importa.",
    price: 25.0,
    priceFormatted: "R$ 25,00",
    image: "/images/embalagem-especial.png",
    icon: "Package",
  },
];

export const benefits = [
  {
    icon: "Wheat",
    title: "Ingredientes selecionados",
    description: "Só o melhor entra em cada receita",
  },
  {
    icon: "HandHeart",
    title: "Produção artesanal",
    description: "Feito com cuidado e atenção a cada detalhe",
  },
  {
    icon: "Sparkles",
    title: "Embalagens que encantam",
    description: "Apresentação premium do início ao fim",
  },
  {
    icon: "Gift",
    title: "Perfeito para presentear",
    description: "Latas e embalagens prontas para surpreender",
  },
  {
    icon: "CalendarCheck",
    title: "Encomendas com flexibilidade",
    description: "Personalize e receba no prazo",
  },
];

export const howItWorks = [
  {
    step: 1,
    icon: "ShoppingBag",
    title: "Escolha o produto",
    description: "Cookies, bolos, cheesecake ou latas.",
  },
  {
    step: 2,
    icon: "PenLine",
    title: "Personalize",
    description: "Adicione mensagem, ursinho ou detalhes.",
  },
  {
    step: 3,
    icon: "CalendarClock",
    title: "Defina retirada ou entrega",
    description: "Veja prazos e disponibilidade.",
  },
  {
    step: 4,
    icon: "Heart",
    title: "Receba com muito cuidado",
    description: "Apresentação impecável, do início ao fim.",
  },
];

export const testimonials = [
  {
    name: "Ana Beatriz",
    text: "A delicadeza da Baunilha do Cerrado transforma qualquer momento em uma experiência inesquecível.",
    rating: 5,
  },
  {
    name: "Carla M.",
    text: "Presenteei minha mãe com a lata de cookies e ela ficou encantada com a apresentação. Voltarei sempre!",
    rating: 5,
  },
  {
    name: "Fernanda R.",
    text: "O cheesecake de frutas vermelhas é simplesmente perfeito. Cremoso, leve e com sabor incrível.",
    rating: 5,
  },
];

export const faqs = {
  cookies: [
    {
      question: "Quais sabores estão disponíveis?",
      answer:
        "Temos clássico, chocolate belga, red velvet, churros com doce de leite e beijinho de coco. Também fazemos cookies personalizados sob encomenda.",
    },
    {
      question: "Cookies personalizados têm pedido mínimo?",
      answer:
        "Sim, pedidos personalizados têm mínimo de 12 unidades. Entre em contato para discutir as possibilidades.",
    },
    {
      question: "Qual é a validade dos cookies?",
      answer:
        "Nossos cookies têm validade de 7 dias em temperatura ambiente e até 30 dias refrigerados.",
    },
  ],
  bolos: [
    {
      question: "Como faço para encomendar um bolo inteiro?",
      answer:
        "Bolos inteiros são feitos sob encomenda. Entre em contato pelo WhatsApp com pelo menos 5 dias de antecedência.",
    },
    {
      question: "Posso personalizar o bolo?",
      answer:
        "Sim! Oferecemos personalização de sabores, recheios e decoração. Consulte as opções disponíveis pelo WhatsApp.",
    },
  ],
  cheesecake: [
    {
      question: "O cheesecake precisa ficar refrigerado?",
      answer:
        "Sim, nossos cheesecakes devem ser mantidos refrigerados e consumidos em até 5 dias.",
    },
    {
      question: "Fazem cheesecake para eventos?",
      answer:
        "Sim! Fazemos cheesecakes inteiros para eventos com antecedência mínima de 3 dias.",
    },
  ],
  geral: [
    {
      question: "Como faço um pedido?",
      answer:
        "Você pode fazer seu pedido diretamente pelo WhatsApp ou pelo formulário de encomendas no site.",
    },
    {
      question: "Vocês entregam?",
      answer:
        "Sim, fazemos entregas em Brasília e região. Consulte taxas e prazos pelo WhatsApp.",
    },
    {
      question: "Qual o prazo para encomendas?",
      answer:
        "O prazo varia conforme o produto. Cookies: 2 dias. Bolos e cheesecakes: 3 a 5 dias. Personalizados: 5 a 7 dias.",
    },
    {
      question: "Quais são as formas de pagamento?",
      answer:
        "Aceitamos Pix, cartão de débito e crédito. Parcelamento disponível para pedidos acima de R$ 150.",
    },
  ],
};

export const cookieFlavors = [
  "Chocolate Belga",
  "Churros com Doce de Leite",
  "Beijinho de Coco",
  "Red Velvet",
  "Clássico",
  "Pistache",
  "Nutella",
  "Caramelo Salgado",
];

export const socialLinks = [
  { platform: "Instagram", href: "https://instagram.com/baunilhadocerrado", icon: "Instagram" },
  { platform: "WhatsApp", href: "https://wa.me/5561999999999", icon: "MessageCircle" },
  { platform: "Facebook", href: "https://facebook.com/baunilhadocerrado", icon: "Facebook" },
];
