const CONFIG = {
  dateEnsemble: new Date(2026, 5, 6, 0, 0),

  datePremierMessage: new Date(2026, 1, 28, 0, 0),

  dateBonheur: new Date(2026, 1, 28, 0, 0),

  reponsesAcceptees: ["06/06", "6/6", "6juin", "06juin", "6/06", "06/6", "06/06/2026", "6/6/2026", "6juin2026", "6 juin", "6 juin 2026"],
  
  messageAmour: "Flavie, mon amour,\n\nEn me voyant remonter le fil de notre histoire, une évidence m'a frappé : depuis notre rencontre, et tout particulièrement ce mois passé à tes côtés, je vis les plus beaux jours de ma vie. Sans la moindre hésitation.\n\nTu es entrée dans mon monde et tu es devenue une part entière de mon quotidien. Alors ce soir, je te remercie tellement de me rendre heureux et je ferais tous pour que ce soit pareil pour toi. \n\nMerci d'être simplement qui tu es. Vivement qu'on passe le reste de notre vie ensemble à découvrir le monde et bien sûr découvrir la vie de famille ensemble 😝.\n\nTu es une partie de mon âme et je te la donne avec plaisir prends en soin !\n\nJe t'aime infiniment. ❤️",
  
  statistiques: [
    { emoji: "", nombre: 27,   texte: "fois où madame a gagné au Uno 😤" },
    { emoji: "", nombre: "+999999",  texte: "fous rires ensemble" },
    { emoji: "", nombre: 1602,   texte: "photos de nous deux (sans les rafales 😜)" },
    { emoji: "", nombre: "des millions", texte: "de messages échangés (au moins !)" },
    { emoji: "", nombre: "​😋​😘​❤️​🥺​☺️​🤨😝​​☹️​", texte: "nos émojis (t'es un gros caca 💩)" },
    { emoji: "", nombre: "129​", texte: "c'est le nombres de jours qui ont été les plus beau de ma vie 😝" },
  ],
};

const DOSSIER = [
  "photos/dossier1.JPG",
  "photos/dossier7.PNG",
  "photos/dossier8.PNG",
  "photos/dossier2.JPG",
  "photos/dossier4.png",
  "photos/dossier5.png",
  "photos/dossier3.JPG",
  "photos/dossier6.png",
];

const FRISE = [
  {
    date: "2026-02-28",
    titre: "Notre rencontre",
    photo: "photos/image1.JPG",
    mot: "Le jour où tout a commencé… je savais pas encore que tu allais changer ma vie.",
  },
  {
    date: "2026-03-20",
    titre: "Notre premier appelle",
    photo: "photos/image2.PNG",
    mot: "Tu es tellement belle que j'ai pas pu m'empêcher de te prendre en photo hihi !",
  },
  {
    date: "2026-03-28",
    titre: "Notre premier date shopping",
    photo: "photos/image3.JPG",
    mot: "Mon premier relooking !!",
  },
  {
    date: "2026-04-05",
    titre: "T'a première fois à Annecy !!!!",
    photo: "photos/image4.jpeg",
    mot: "C'est que la partie 1 !!",
  },
  {
    date: "2026-04-05",
    titre: "T'a première fois à Annecy !!!!",
    photo: "photos/image5.png",
    mot: "C'est que la partie 2 !!",
  },
  {
    date: "2026-04-05",
    titre: "T'a première fois à Annecy !!!!",
    photo: "photos/image6.JPG",
    mot: "Tellement c'était trop bien je me devais de mettre plusieurs parties :)",
  },
  {
    date: "2026-04-18",
    titre: "T'a deuxième fois à Annecy !",
    photo: "photos/image7.png",
    mot: "La deuxième fois j'ai souffert :'(",
  },
  {
    date: "2026-04-18",
    titre: "T'a deuxième fois à Annecy !",
    photo: "photos/image8.png",
    mot: "Mais c'est quand même beau de profiter avec toi !",
  },
  {
    date: "2026-04-19",
    titre: "Notre plus belle vue ensemble !",
    photo: "photos/image9.png",
    mot: "La plus belle vue avec la plus belle du monde <3 (c'est pas moi le photographe)",
  },
  {
    date: "2026-04-25",
    titre: "Balade au parc de la tête d'or",
    photo: "photos/image10.JPG",
    mot: "Je savais déjà qu'on ferait un super beau couple ;)",
  },
  {
    date: "2026-05-08",
    titre: "Nos première vacances ensemble hihi",
    photo: "photos/image11.png",
    mot: "Là on est au restaurant !!!!!!!!",
  },
  {
    date: "2026-05-08",
    titre: "Nos première vacances ensemble P2",
    photo: "photos/image12.JPG",
    mot: "Là madame est surpris de mon magnifique visage",
  },
  {
    date: "2026-05-08",
    titre: "Nos première vacances ensemble P3",
    photo: "photos/image13.png",
    mot: "Bah madame fais la star hihi",
  },
  {
    date: "2026-05-18",
    titre: "Enzo le beau gosse",
    photo: "photos/image14.png",
    mot: "Juste je te montre que je suis méga ultra giga beau gosse :)",
  },
  {
    date: "2026-06-06",
    titre: "ON SORS ENSEMBLE PTN",
    photo: "photos/image15.JPG",
    mot: "Tu me rends tellement heureux",
  },
  {
    date: "2026-06-07",
    titre: "Notre deuxième jour ensemble !",
    photo: "photos/image16.JPG",
    mot: "t'es trop mimi mon bb",
  },
  {
    date: "2026-06-07",
    titre: "Notre deuxième jour ensemble !",
    photo: "photos/image17.png",
    mot: "t'es toujours trop mimi ptn",
  },
  {
    date: "2026-06-08",
    titre: "Flavoche ma vie !!",
    photo: "photos/image18.JPG",
    mot: "t'es une bombe !",
  },
  {
    date: "2026-06-13",
    titre: "Nous à Paris !",
    photo: "photos/image19.JPG",
    mot: "Deux gros touriste !",
  },
  {
    date: "2026-06-13",
    titre: "Mon premier concert",
    photo: "photos/image20.JPG",
    mot: "Avec toiiiii !",
  },
  {
    date: "2026-06-13",
    titre: "Mon premier concert",
    photo: "photos/image21.JPG",
    mot: "Regarde la photo de FOUUU",
  },
  {
    date: "2026-06-15",
    titre: "Notre meilleur tiktok mon bb",
    photo: "photos/image22.png",
    mot: "Je danse mieux que toi",
  },
  {
    date: "2026-06-19",
    titre: "Madame ce prépare pour son gala",
    photo: "photos/image23.png",
    mot: "J'y est assisté putain !!",
  },
  {
    date: "2026-06-19",
    titre: "Madame après son gala",
    photo: "photos/image24.JPG",
    mot: "Putain c'était tellement bien, t'a été super ton gala est la meilleure chose que j'ai jamais vu",
  },
  {
    date: "2026-06-26",
    titre: "Nous !!",
    photo: "photos/image25.png",
    mot: "Notre couple est le plus beau du monde !!",
  },
  {
    date: "2026-06-26",
    titre: "Restaurant avec une gadji charmante :)",
    photo: "photos/image26.png",
    mot: "C'est si bien avec toi !",
  },
  {
    date: "2026-06-27",
    titre: "PADDLEEEEEEEEE",
    photo: "photos/image27.png",
    mot: "Que nous deux au milieu du lac 😋",
  },
  {
    date: "2026-07-06",
    titre: "1 mois ensemble 🎉",
    photo: "photos/image28.JPG",
    mot: "Je t'aime Flavie, je t'aime tellement c'est dingue d'aimer quelqu'un à ce point. Y'a un cadeau pour toi tout en bas continue comme ça !",
  },
];
