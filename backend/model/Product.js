const products = [
    {
        "id": "1",
        "name": "Hélicoptère en bois",
        "category": "Jouets en bois",
        "price": 1500,
        "description": `Petit hélicoptère en bois taillé à la main garanti impossible à avaler inclus Bouboul le pilote. taille: 15cm,5cm Poids:250Gr`,
        "imageUrl": "1.png"
    },
    {
        "id": "2",
        "name": "Jouets en bois voiture plus 2 personnages ",
        "category": "Jouets en bois",
        "price": 1800,
        "description": `Une jolie petite voiture que l'enfant pourra faire rouler en poussant. l'enfant pourra même placer un bonhomme dans la voiture. taille:16cm,10cm,5cm poids:700gr`,
        "imageUrl": "2.png"
    },
    {
        "id": "3",
        "name": "Peluche ourson blessé",
        "category": "Jouets en bois",
        "price": 1200,
        "description": `Ours en peluche blessé idéal des le plus jeune âge. Cette peluche sera donné à l'enfant tout le réconfort dont il a besoin.`,
        "imageUrl": "3.png"
    },
    {
        "id": "4",
        "name": "X-box avec 2 mannettes",
        "category": "Multimédia",
        "price": 12000,
        "description": `X-box avec 2 mannettes Processeurs. Mémoire.8 Go de RAM DDR3 à 68,3 Go/s. Lecteuroptique et disque dur.Lecteur Blu-ray (vitesse inconnue)Disque dur 500 Go. Entrées/Sorties.USB 3.0 (x3)Ethernet Gigabit (10 / 100 / 1000 Mbps) ... Connectique audio/vidéo/ HDMI /Sortie optique.`,
        "imageUrl": "14.png"
    },
    {
        "id": "5",
        "name": "Marionnette de bois",
        "category": "Jouets en bois",
        "price": 2100,
        "description": `Une Marionnette de bois agréable à manipuler même pour un tout petit, corde naturelle. Dés 2ans. taille:25cm,5cm,8cm poids:700grs`,
        "imageUrl": "5.png"
    },
    {
        "id": "6",
        "name": "Peluche en boite",
        "category": "Jouets en bois",
        "price": 2400,
        "description": `Monkey la peluche en boite est de retour. Il est mignon avec ses grands yeux ronds.taille:20cm,15cm,13cm poids:850grs`,
        "imageUrl": "6.png"
    },
];

exports.find = () => {
    return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(products))));
}

exports.findById = (id) => {
    return new Promise((resolve, reject) =>
        resolve(JSON.parse(JSON.stringify(products)).find(product =>
            product.id == id)
        )
    );
}