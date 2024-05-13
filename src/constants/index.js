import {
  
  imprimante1,
  imprimante2,
  imprimante4,
  
  
  
  pdf1,
  IMPRIMANTE_PANTUM_CP2200DW,
  IMPRIMANTE_PANTUM_BM5100FDW,
  IMPRIMANTE_PANTUM_BP5100DN,
} from "../assets/images/index";

import "./style.css";

// =================== NavBarList Start here ====================
export const navBarList = [
  {
    _id: 1001,
    title: "Home",
    link: "/",
  },
  
  {
    _id: 1003,
    title: "Police",
    link: "/Police",
  },
  {
    _id: 1004,
    title: "Claims",
    link: "/Claim",
  },
  {
    _id: 1005,
    title: "Insurance",
    link: "/Insurance",
  },
];
// =================== NavBarList End here ======================
// =================== Special Offer data Start here ============
export const SplOfferData = [
  {
    _id: "201",
    img: imprimante1,
    productName: "Iphone 8",
    price: "1500.00",
    color: "All Colors",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "imprimante",
  },
  {
    _id: "202",
    img: imprimante2,
    productName: "imprimante",
    price: "180.00",
    color: "Gray",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "imprimante",
  },
  {
    _id: "203",
    img: imprimante4,
    productName: "imprimante",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "imprimante",
  },
 
 
 
];
// =================== Special Offer data End here ==============

// =================== PaginationItems Start here ===============

export const paginationItems = [
  {
    _id: "201",
    img: IMPRIMANTE_PANTUM_CP2200DW,
    productName: "Imprimante PANTUM CP2200DW",
    price: "35.00",
    color: "Blanc",
    badge: true,
    brand: "Pantum",
    des: "Imprimante Laser PANTUM Couleur - Fonctions: Impression  - Technologie d'impression: Laser - Format Papier: A4 - Vitesse d’impression(Couleur/N&B): 24 ppm (A4) / 26 ppm (Lettre) - Résolution d'impression: 600 x 600 dpi - Sortie papier: 100 page - Mémoire: Double cœur, 1 GHz - Impression recto verso: Automatique - Heure de la première impression: Moins de 11s  - Connecteurs: USB 2.0 haut débit Ethernet 10/100/1000 BaseTX (RJ-45) 802.11b/g/n Sans fil - Dimensions: 411.2 x 394.1 x 243.7mm - Poids: 16,1 kg - Couleur: Blanc",
    cat: "Imprimante",
    pdf: pdf1,
    ficheTech: [
      { label: "Technology ", value: "Electrophotographic monochrome laser " },
      { label: "Print speed ", value: "22 ppm (A4)/23 ppm (Letter)" },

      { label: "First print out time ", value: "Less than 7.8s       " },
      { label: "Maximum Monthly Duty Cycle", value: "15,000 pages " },
      {
        label: "Recommended monthly volume Resolution(dpi) ",
        value: "700 pages ",
      },
      { label: "Printer language Duplex Mode ", value: "Max. 1,200×1,200 " },
      { label: "Printer  ", value: "Max. 1,2   " },
      { label: "galass  ", value: "Max. 1,2   " },
    ],
  },
  {
    _id: "202",
    img: IMPRIMANTE_PANTUM_BM5100FDW,
    productName: "IMPRIMANTE PANTUM BM5100FDW",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Pantum",
    des: "Pantum BM5100fdw Imprimante laser mono : Pantum BM5100fdw -Imprimante :laser -monochrome multifonction,:format A4-,4-en-1 avec fonctions impression, copie, numérisation et fax, vitesse d'impression de 40ppm, connexion Réseau :LAN RJ45-, Wifichrome multifonction, format A4, 4-en-1 avec fonctions impression, copie, numérisation et fax, vitesse d'impression de 40ppm, connexion Réseau LAN RJ45, Wifi",
    cat: "Imprimante",
    pdf: pdf1,
    ficheTech: [
      { label: "Vitesse d'impression ", value: "40ppm(A4)/42ppm(lettre) " },
      { label: "Temps de sortie de la première page ", value: "≤6.9 s" },

      {
        label: "Nombre de pages mensuel recommandé",
        value: "750 à 4,000 Pages",
      },
      { label: "Résolution d'impression", value: "Max.1,200x1,200 dpi" },
      {
        label: "Langage d'impression ",
        value: "PCL5e, PCL6, PS        ",
      },
      { label: "Vitesse du processeur", value: "1.2 GHz" },
      { label: "Mémoire", value: "512 MB" },
      {
        label: "Panneau de commande ",
        value: "LCD 2 lignes ||  Écran tactile 3,5 pouces      ",
      },
      { label: "Impression recto-verso automatique      ", value: "Oui" },
      {
        label: "Autres fonctions d'impression      ",
        value:
          "Impression brochure, impression sécurisée, impression disque USB Compatible AirPrint, Mopria, APP mobile (APP iOS/App Android)",
      },
      { label: "Vitese de copie ", value: "40ppm(A4)/42ppm(lettre)" },
      {
        label: "Temps de sortie de la première page",
        value: "Plateau : moins de 10 s ADF : moins de 11 s",
      },
    ],
  },

  {
    _id: "203",
    img: IMPRIMANTE_PANTUM_BP5100DN,
    productName: "IMPRIMANTE PANTUM BP5100DN",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Pantum",
    des: "Imprimante Monochrome Laser PANTUM BP5100DN : Fonctions Impression - :Capacité Bac à papier 250 pages - :Formats papier -: A4 - Technologie d’impression Laser Monochrome - :Vitesse d’impression Noir & Blanc Jusqu’à 40 pages par minute en A4 -: Résolution 1200 dpi -: Mémoire 512 Mo - Connectivité Ethernet, USB 2.0 -:Auto-Duplex-, Network-Ready : Impression silencieuse - faible encombrement et respectueux de l'environnement -: cartouches à haut rendement en option - processeur haute vitesse 1,2 GHz - Dimensions: 364 x 344 x 257 mm - Poids: 9.3 kg - Garantie: 1 an",
    cat: "Imprimante",
    pdf: pdf1,
    ficheTech: [
      { label: "Vitesse d'impression ", value: "40ppm(A4)/42ppm(lettre) " },
      { label: "Temps de sortie de la première page ", value: "≤6.9 s" },

      {
        label: "Nombre de pages mensuel recommandé",
        value: "750 à 4,000 Pages",
      },
      { label: "Résolution d'impression", value: "Max.1,200x1,200 dpi" },
      {
        label: "Langage d'impression ",
        value: "PCL5e, PCL6, PS        ",
      },
      { label: "Vitesse du processeur", value: "1.2 GHz" },
      { label: "Mémoire", value: "512 MB" },
      {
        label: "Panneau de commande ",
        value: "LCD 2 lignes ||  Écran tactile 3,5 pouces      ",
      },
      { label: "Impression recto-verso automatique      ", value: "Oui" },
      {
        label: "Autres fonctions d'impression      ",
        value:
          "Impression brochure, impression sécurisée, impression disque USB Compatible AirPrint, Mopria, APP mobile (APP iOS/App Android)",
      },
      { label: "Vitese de copie ", value: "40ppm(A4)/42ppm(lettre)" },
      {
        label: "Temps de sortie de la première page",
        value: "Plateau : moins de 10 s ADF : moins de 11 s",
      },
    ],
  },
 
   

  

  
];
