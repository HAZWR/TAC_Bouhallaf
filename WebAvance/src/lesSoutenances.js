var Specialites = {
    eServices: "e-Services",
    IAGL: "IAGL",
    IVI: "IVI",
    MOCAD: "MOCAD",
    TIIR: "TIIR",
    Recherche: "Recherche"
}

var NoRoom = "Pas de salle";
var A2 = "M5 - A2";
var A6 = "M5 - A6";
var A7 = "M5 - A7";

var Salles = {};
Salles[Specialites.eServices] =
    {"04": A6,       "05": A6,      "06": A6,       "07": NoRoom};
Salles[Specialites.IAGL] =
    {"04": NoRoom,   "05": NoRoom,  "06": A7,       "07": A7};
Salles[Specialites.IVI] =
    {"04": NoRoom,   "05": NoRoom,  "06": NoRoom,   "07": A6};
Salles[Specialites.MOCAD] =
    {"04": A7,      "05": NoRoom,   "06": NoRoom,   "07": NoRoom};
Salles[Specialites.TIIR] =
    {"04": NoRoom,  "05": NoRoom,   "06": A2,       "07": A2};
Salles[Specialites.Recherche] =
    {"04": A2,      "05": NoRoom,   "06": A7,       "07": NoRoom};

var CouleursPanel = {};
CouleursPanel[Specialites.eServices] = "panel-default";
CouleursPanel[Specialites.IAGL] = "panel-primary";
CouleursPanel[Specialites.IVI] = "panel-success";
CouleursPanel[Specialites.MOCAD] = "panel-info";
CouleursPanel[Specialites.TIIR] = "panel-warning";
CouleursPanel[Specialites.Recherche] = "panel-danger";

var lesSoutenances = [
    {
        "jour": "04",
        "debut": "08:30",
        "specialite": "e-Services",
        "etudiant": "Ludovic Goldak",
        "titre": "ProxiadTV",
        "societe": "Proxiad",
        "tuteur": "Tarby",
        "encadrant": "Cure",
        "resume": "Développement d'une application Interne chez Proxiad Nord destiné au public avec comme support un Rasbperry Pi et une Télévision contrôlable en temps réel."
    }, {
        "jour": "05",
        "debut": "08:30",
        "specialite": "e-Services",
        "etudiant": "Dorian Ongenae",
        "titre": "",
        "societe": "Worldline",
        "tuteur": "Routier",
        "encadrant": "Beudaert",
        "resume": ""
    }, {
        "jour": "06",
        "debut": "08:30",
        "specialite": "e-Services",
        "etudiant": "Norhane El Gharbi",
        "titre": "Refonte architecturale d'une application tablette",
        "societe": "Cap Gemini",
        "tuteur": "Roos",
        "encadrant": "Pâris",
        "resume": "Refonte d'une application tablette pour une enseigne de grande distribution (Auchan), le but étant d'adapter la solution existante à une architecture MVVM performante."
    }, {
        "jour": "04",
        "debut": "08:30",
        "specialite": "Recherche",
        "etudiant": "Antoine Canda",
        "titre": "Quels algorithmes pour mieux comprendre la structure des gènes ?",
        "societe": "Bonsai (CRIStAL)",
        "tuteur": "Versari",
        "encadrant": "Varré",
        "resume": "Le but du stage est d'implémenter un programme dans le but de filtrer un ensemble de lecture nanopore en fonction d'un gène de référence. On utilisera pour cela une graine particulière dont le nom est graine 01*0 ainsi que des tables de hachage pour effectuer un filtrage efficace. "
    }, {
        "jour": "07",
        "debut": "09:15",
        "specialite": "IAGL",
        "etudiant": "Hui Su",
        "titre": "Comment pouvons-nous améliorer la qualité et l'efficacité du service de la TMA pour satisfaire au mieux le client ?",
        "societe": "CGI",
        "tuteur": "Derbel",
        "encadrant": "Hennart",
        "resume": "Comment pouvons-nous améliorer la qualité et l'efficacité du service de la TMA pour satisfaire au mieux le client ?"
    }, {
        "jour": "04",
        "debut": "09:15",
        "specialite": "e-Services",
        "etudiant": "Damien Toulouse",
        "titre": "Stage en développement mobile",
        "societe": "Pictime",
        "tuteur": "Tarby",
        "encadrant": "Roger",
        "resume": "Durant cette présentation j'aborderai les framework cross-platform dans l'univers Mobile et je parlerais plus en détail du Framework Flutter que j'ai eu l'occasion d'utiliser lors de mon stage."
    }, {
        "jour": "05",
        "debut": "09:15",
        "specialite": "e-Services",
        "etudiant": "Lucile Duthoit",
        "titre": "Une évolution vers une méthodologie agile BDD",
        "societe": "Pictime",
        "tuteur": "Le Pallec",
        "encadrant": "Diouf",
        "resume": "usine de test de pictime"
    }, {
        "jour": "06",
        "debut": "09:15",
        "specialite": "e-Services",
        "etudiant": "Benjamin Bermont",
        "titre": "Comment faire du B2B sur une plateforme d’e-commerce ?",
        "societe": "Pictime",
        "tuteur": "Bilasco",
        "encadrant": "Lemaire",
        "resume": "Dans cette présentation j'expliquerai comment faire du B2B sur une plateforme d'e-commerce (ici Magento 2) alors que la majorité des plateformes sont pensées pour faire du B2C. J'expliquerai les enjeux qui découlent de l'approche B2B, notamment par l'exemple d'un cas concret qui découle directement d'une problématique métier répandue : la délégation."
    }, {
        "jour": "04",
        "debut": "09:15",
        "specialite": "Recherche",
        "etudiant": "Tatiana De-Wyse",
        "titre": "Capturer le modèle mental des développeurs pour améliorer les processus de développement logiciel en utilisant la reconnaissance automatique de leur schéma",
        "societe": "Carbon (CRIStAL)",
        "tuteur": "Boulet",
        "encadrant": "Renaux",
        "resume": "Les processus de developement logiciel sont aujourd'hui optimisés par les pratiques des méthodes agiles. Afin de mieux s'adapter aux besoins actuels et futurs du client, elles pronent la réalisation rapide et successive de livrable. Cette rapide livraison a pour conséquence d'amoindrir la réalisation d'une documentation permettant la maintenance et l'évolution du logiciel fini.\\nLa schématisation de logiciel est pourtant une partie essentielle dans le design et le developpement de logiciel. Utilisée de façon informelle, elle aide d'une part la discussion entre les différentes parties prenantes pour la réalisation des fonctionnalités d'un logiciel. D'autre part, elle permet aux developpeurs de partager leur connaissance sur le fonctionnement d'un code source. \\nLes schéma sont souvent réalisés à la main, sur papier ou tableau blanc. Ils ne sont pourtant pas pris en compte dans les processus de developement logiciel traditionnel ou agile car ils ne sont pas considérés  comme des artefacts importants. \\nCependant beaucoup d'informations concernant les logiciels sont présentes dans les schéma de conceptualisation logiciel.\\nNous nous focalisons dans ce rapport sur les sketches contenant des diagrammes UML \\\\footnote{Unified Modeling language}. \\nLa production de documentation ou l'exploitation des sketches aujourd'hui oblige les developpeurs à retranscrire les diagrammes réalisés à main levée dans des outils spécialisés comme les UML CASE \\\\footnote{Computer-aided software engineering} tools. \\nDans ce rapport nous proposons un mécanisme permettant la capture automatique des informations contenu dans les schéma à l'aide de méthodes du traitement d'images et de la reconnaissance de formes. Notre prototype est capable d'extraire des informations et nous le présentons dans ce rapport. Nous présentons également les prochaines étapes à la finalisation de celui ci afin qu'il puisse servir à améliorer les processus de developpement logiciel en permettant l'augmentation des informations contenues dans un schéma réalisée à la main."
    }, {
        "jour": "06",
        "debut": "09:30",
        "specialite": "IAGL",
        "etudiant": "Frédéric Touquet",
        "titre": "",
        "societe": "Pictime",
        "tuteur": "Duchien",
        "encadrant": "Blary",
        "resume": ""
    }, {
        "jour": "07",
        "debut": "10:00",
        "specialite": "IAGL",
        "etudiant": "Valentin Ryckewaert",
        "titre": "Développement d'une application Web pour la dématérialisation de prêts bancaires",
        "societe": "Sopra Steria",
        "tuteur": "Quinton",
        "encadrant": "Desrivieres",
        "resume": "Développement d'une grosse application en SpringBoot pour remplacer une application vieillisante."
    }, {
        "jour": "04",
        "debut": "10:00",
        "specialite": "e-Services",
        "etudiant": "Romain Hembert",
        "titre": "Refonte d’une plateforme de souscription collective",
        "societe": "Axa France",
        "tuteur": "Seinturier",
        "encadrant": "Chabier",
        "resume": "AXA a décidé d'effectuer une refonte d'une de leur ancienne application de souscription de mutuelle entreprise, pour passer à une nouvelle application plus actuelle."
    }, {
        "jour": "05",
        "debut": "10:00",
        "specialite": "e-Services",
        "etudiant": "Amine Ben Salah",
        "titre": "",
        "societe": "Pictime",
        "tuteur": "Bilasco",
        "encadrant": "Diouf",
        "resume": ""
    }, {
        "jour": "06",
        "debut": "10:00",
        "specialite": "e-Services",
        "etudiant": "Maxence Bourdin",
        "titre": "Développement d'une application mobile pour améliorer les visites des locaux de Capgemini",
        "societe": "Cap Gemini",
        "tuteur": "Le Pallec",
        "encadrant": "",
        "resume": "La visite des clients dans les locaux de Capgemini étant très important pour gagner de nouveaux projets ou pour améliorer l'image de marque de l'entreprise, nous avons développé une application mobile. Cette application sera installée sur les portables des visiteurs au moment de leurs arrivés. Le but de la visite est de retranscrire au mieux l'image innovante de l'entreprise et aussi le fait que ce soit une entreprise de conseil qui accompagne ses clients et non une simple SSII composée de consultants."
    }, {
        "jour": "04",
        "debut": "10:00",
        "specialite": "Recherche",
        "etudiant": "Marc Baloup",
        "titre": "Conception, implémentation et évaluation de techniques de pointage en environnement 3D immersif",
        "societe": "Loki (INRIA)",
        "tuteur": "Le Pallec",
        "encadrant": "Casiez",
        "resume": "En réalité virtuelle, il existe 2 techniques de sélection d'objets couramment utilisés : la main virtuelle et le lancer de rayon. Ces techniques ont cependant des limitations pour la sélection de cibles éloignées et petites.\\nLors du stage, nous avons exploité et expérimenté plusieurs pistes d'amélioration pour l'élaboration d'une nouvelle technique de sélection.\\nLes premiers résultats de nos expériences montrent une amélioration significative des performances de notre technique par rapport aux techniques de base."
    }, {
        "jour": "07",
        "debut": "10:00",
        "specialite": "TIIR",
        "etudiant": "Maxime Roelandt",
        "titre": "",
        "societe": "Telecom North America",
        "tuteur": "",
        "encadrant": "Pollet",
        "resume": ""
    }, {
        "jour": "07",
        "debut": "10:45",
        "specialite": "IAGL",
        "etudiant": "Hedi Mokhtar",
        "titre": "",
        "societe": "Sopra Steria",
        "tuteur": "Seinturier",
        "encadrant": "Gellf",
        "resume": ""
    }, {
        "jour": "04",
        "debut": "10:45",
        "specialite": "e-Services",
        "etudiant": "Moncef Aoudia",
        "titre": "Mise en place d’un outil de suivi de la plateforme de production Total Wallet",
        "societe": "Worldline",
        "tuteur": "Tarby",
        "encadrant": "Rasson",
        "resume": "Durant cette présentation je vous ferai découvrir le projet Total Wallet, le défis liés à la mise en production de ce dernier. Je parlerai en détais de la suite Elastic(ex ELK) que j'ai eu l'occasion de prendre en main et de ma contribution au projet.\\nMots clefs: Log, Elasticsearch, Logstash, Kibana, Filebeat, Docker."
    }, {
        "jour": "05",
        "debut": "10:45",
        "specialite": "e-Services",
        "etudiant": "Loïc Fabre",
        "titre": "Résolution de problèmes sur les sites Camaïeu en environnement Hybris",
        "societe": "Pictime",
        "tuteur": "Hym",
        "encadrant": "Hamelin",
        "resume": "Analyse et résolution de problèmes dans l'équipe TMA"
    }, {
        "jour": "06",
        "debut": "10:45",
        "specialite": "e-Services",
        "etudiant": "Maxime Agusti",
        "titre": "Amélioration de la qualité du catalogue",
        "societe": "OVH",
        "tuteur": "Le Pallec",
        "encadrant": "Biadala",
        "resume": "Etude et conception d'outils afin d'améliorer la qualité de l'API permettant d'obtenir les références de produits vendus par OVH."
    }, {
        "jour": "04",
        "debut": "10:45",
        "specialite": "Recherche",
        "etudiant": "Damien Masson",
        "titre": "Augmentation de documents digitaux",
        "societe": "Loki (INRIA)",
        "tuteur": "Le Pallec",
        "encadrant": "Casiez",
        "resume": "Développement d'outils pour apporter de l'interactivité à des documents digitaux comme le PDF au moyen d'algorithmes de vision par ordinateur et intelligence artificielle."
    }, {
        "jour": "06",
        "debut": "10:45",
        "specialite": "TIIR",
        "etudiant": "Sylvain Devroede",
        "titre": "Remplacement d’une infrastructure LAN dans un contexte de haute disponibilité",
        "societe": "Orange",
        "tuteur": "Rouvoy",
        "encadrant": "Dubar",
        "resume": "- Explications du déroulement d'un projet Ingénieur production réseau chez Orange Connectivity and Workspace services;\\n- Présentation d'une problématique sur un LAN de campus;\\n- Description des étapes pour remplacer un LAN en minimisant les coupures réseau."
    }, {
        "jour": "07",
        "debut": "10:45",
        "specialite": "TIIR",
        "etudiant": "Pierre Caruyer",
        "titre": "Centralisation des backups",
        "societe": "Jump Technology",
        "tuteur": "Iguchi",
        "encadrant": "Cottin",
        "resume": "Centralisation de la gestion des backups internes de JUMP.\\nDans ces backups sont compris : \\n•\\tBase de données (Oracle / MySQL)\\n•\\tBinaires de l’application\\n•\\tVMs HyperV\\n\\nDevront être centralisées les données de date, localisation, profondeur, contenu de ces backups en fonction de leurs nature. \\nUn système de visualisation Web de ces données sera également développé.\\nCette centralisation permettra d’afficher mais aussi de piloter l’ensemble des backups de l’entreprise.\\n\\nCe projet fera appel à des connaissances techniques avancées en SI, Java et Node.JS, demandera des notions importantes en SQL et architecture de solution intégrée."
    }, {
        "jour": "07",
        "debut": "10:45",
        "specialite": "IVI",
        "etudiant": "Thimothée Laval",
        "titre": "",
        "societe": "Barco",
        "tuteur": "Pietrzak",
        "encadrant": "Diricx",
        "resume": ""
    }, {
        "jour": "06",
        "debut": "11:00",
        "specialite": "IAGL",
        "etudiant": "Jean-Hugo Oukem",
        "titre": "Développeur gameplay pour le jeu Wakfu",
        "societe": "Ankama",
        "tuteur": "Plénacoste",
        "encadrant": "Sironneau",
        "resume": "Concevoir, développer et intégrer les nouvelles fonctionnalités du jeu Wakfu."
    }, {
        "jour": "04",
        "debut": "11:30",
        "specialite": "e-Services",
        "etudiant": "Benjamin Lefebvre",
        "titre": "Analyste Développeur",
        "societe": "Pictime",
        "tuteur": "Bilasco",
        "encadrant": "Magron",
        "resume": "- Conception et développement de nouvelles fonctionnalités, selon des exigences client, pour la plateforme E-commerce Electro Dépôt en méthodologie Scrum Agile avec la solution Magento 2. \\n- Analyse, Développement et Tests Unitaires."
    }, {
        "jour": "07",
        "debut": "13:00",
        "specialite": "IAGL",
        "etudiant": "Basile Dyment",
        "titre": "Développement Back-End en Méthode Agile pour la création d'une banque mobile",
        "societe": "Ippon Technologies",
        "tuteur": "Seinturier",
        "encadrant": "Pinel",
        "resume": "Confidentiel"
    }, {
        "jour": "04",
        "debut": "13:00",
        "specialite": "e-Services",
        "etudiant": "Théophile Blavoet",
        "titre": "Développement Web ",
        "societe": "Sopra Steria",
        "tuteur": "Tarby",
        "encadrant": "Wahas",
        "resume": "Stage réalisé à Sopra Stéria, sur le projet OPALE de la Banque de France.\\nMa mission consiste à satisfaire leurs attentes, en réalisant avec mon équipe des évolutions sur le site web dédié au produit OPALE.Ce produit est un service proposé par le client aux dirigeants des entreprises.  Les évolutions sont : l'apport de nouvelles fonctionnalités et une rénovation du site."
    }, {
        "jour": "05",
        "debut": "13:00",
        "specialite": "e-Services",
        "etudiant": "Marouane Abakarim",
        "titre": "",
        "societe": "Pictime",
        "tuteur": "Le Pallec",
        "encadrant": "Cardoso",
        "resume": ""
    }, {
        "jour": "04",
        "debut": "13:00",
        "specialite": "Recherche",
        "etudiant": "Guillaume Maitrot",
        "titre": "améliorer la bibliothèque BLINEIDE",
        "societe": "CFHP (CRIStAL)",
        "tuteur": "Weinbert",
        "encadrant": "Lemaire",
        "resume": "\\nParallélisation de la librairie BLINEIDE et vérification expérimentale des ordes des équations intégro-différentielles"
    }, {
        "jour": "07",
        "debut": "13:00",
        "specialite": "TIIR",
        "etudiant": "Jamal Boudjaj",
        "titre": "Intégration de conteneurs sur une plateforme Multi Cloud",
        "societe": "",
        "tuteur": "Gourdin",
        "encadrant": "Meftali",
        "resume": "La plateforme Multi Cloud est un outil permettant d'effectuer toutes les phases de gestions des ressources cloud pour de multiple provider.\\nDans ce contexte, l'intégration doit permettre de gérer la création, le déploiement et la gestion de conteneurs sur cette plateforme."
    }, {
        "jour": "07",
        "debut": "13:00",
        "specialite": "IVI",
        "etudiant": "Romain Vialatte",
        "titre": "Reconnaissance de l'état du conducteur par fusion d’informations à partir de flux vidéos classique et thermique",
        "societe": "Segula Technologies",
        "tuteur": "martinet",
        "encadrant": "Marie-Sainte",
        "resume": "Ce projet est lancé à l’initiative de l’entreprise SEGULA Technologies. Le sujet est la reconnaissance de différents états du conducteur d’un véhicule. On définit comme “différents états du conducteur”, les états qui pourrait altérer la conduite d’un véhicule. Les différentes émotions, mais aussi le stress et la fatigue sont les états considérés. Le but est d’extraire des informations de deux flux vidéos simultanés, issus de deux caméras (classique et thermique) placé en face du visage du conducteur. La fusion des informations extraites, devra permettre d’obtenir un système plus performant, comparée à une approche avec une caméra simple."
    }, {
        "jour": "07",
        "debut": "13:45",
        "specialite": "IAGL",
        "etudiant": "Nicolas Svirchevsky",
        "titre": "Vers l’industrialisation d’une solution technique",
        "societe": "Energic",
        "tuteur": "Quinton",
        "encadrant": "Oustelandt",
        "resume": "Energic est une application mobile de sensibilisation à l'économie d'énergie développé depuis 2 ans maintenant par une startup de 3 salaries et 3 fondateurs. Elle fait partie d'une architecture qui comprend un service web, une API, et des outils de remonté de données de consommations. L'équipe et les besoins s'amplifiant, ma mission a consisté à améliorer la fiabilité du produit tout en assurant son développement. Je traiterai donc des sujets comme le travail collaboratif, organisationnel et le génie logiciel (assurance qualité, tests, intégration continue, etc.).\\nSi vous voulez me poser des questions à la fin de ma soutenance: les technologies avec lesquelles j'ai travaillé sont Scala, play framework, git, slick (librairie de bdd), postgresql et cassandra."
    }, {
        "jour": "04",
        "debut": "13:45",
        "specialite": "e-Services",
        "etudiant": "Guillaume Tartara",
        "titre": "Développeur mobile (Android - Xamarin)",
        "societe": "La Mobilery",
        "tuteur": "Bilasco",
        "encadrant": "Bellotti",
        "resume": "Stage au sein de la Mobilery en tant que développeur Android. J'ai rapidement rejoins l'équipe mobile d'Auchan pour travailler sur l'application Auchan grand public développée en Xamarin. Nous sommes donc sur une application mobile cross-platform iOS / Android. Ceci impose donc une architecture logicielle adaptée. L'ensemble de ma mission chez Auchan a permis d'orienter mon mémoire autour de la récurrence d'usage d'une application mobile E-Commerces et comment augmenter celle-ci. "
    }, {
        "jour": "05",
        "debut": "13:45",
        "specialite": "e-Services",
        "etudiant": "Mustapha Elazzam",
        "titre": "",
        "societe": "Pictime",
        "tuteur": "Seinturier",
        "encadrant": "Lequain",
        "resume": ""
    }, {
        "jour": "04",
        "debut": "13:45",
        "specialite": "Recherche",
        "etudiant": "Nicolas Berveglieri",
        "titre": "",
        "societe": "Bonus (CRIStAL)",
        "tuteur": "Roos",
        "encadrant": "Liefooghe",
        "resume": ""
    }, {
        "jour": "06",
        "debut": "13:45",
        "specialite": "TIIR",
        "etudiant": "Lynda Sahnoune",
        "titre": "",
        "societe": "",
        "tuteur": "Meftali",
        "encadrant": "",
        "resume": ""
    }, {
        "jour": "07",
        "debut": "13:45",
        "specialite": "TIIR",
        "etudiant": "Rida Darmal",
        "titre": "",
        "societe": "",
        "tuteur": "",
        "encadrant": "",
        "resume": ""
    }, {
        "jour": "07",
        "debut": "13:45",
        "specialite": "IVI",
        "etudiant": "Maxence Brusc",
        "titre": "Mise au point d'une cellule de type Flowpick - Siléane",
        "societe": "Sileane",
        "tuteur": "Paluche",
        "encadrant": "Martinet",
        "resume": "J'ai participé à la réalisation d'une machine flowpick au cours de mon stage. Il s'agit d'une cellule robotique permettant la réalisation d'une action de conditionnement de produit. La machine utilise des technologies robotiques et de vision industrielle. \\nLe but du stage était d'apporter des briques logicielles (développement logiciel et IHM) pour compléter la machine. "
    }, {
        "jour": "04",
        "debut": "14:30",
        "specialite": "MOCAD",
        "etudiant": "Rick Malembeti",
        "titre": "",
        "societe": "Idemia_identity",
        "tuteur": "Hym",
        "encadrant": "Beaudet",
        "resume": ""
    }, {
        "jour": "07",
        "debut": "14:30",
        "specialite": "IAGL",
        "etudiant": "Nadia Ahassouni",
        "titre": "Elaboration d'une solution pour l'automatisation des tests sur une application mobile ",
        "societe": "Pictime",
        "tuteur": "Tarby",
        "encadrant": "Roger",
        "resume": "La mise en place d'un environnement de tests d'acceptance automatisés pour un de nos clients pour lequel nous développons une application Android et une application iOS."
    }, {
        "jour": "04",
        "debut": "14:30",
        "specialite": "e-Services",
        "etudiant": "Ahmed Idriss",
        "titre": "Application innovante axée sur le Behavior Driven Development et Automatisation des Tests d’Acceptance",
        "societe": "Pictime",
        "tuteur": "Bilasco",
        "encadrant": "Diouf",
        "resume": "Développement d’une application de tests basé sur le behavior driven development appelé Beaver, qui consiste à écrire le test sous forme des scénarios en langage naturel. Elle a pour but de permettre à n’importe quel utilisateur, développeur et client de pouvoir collaborer, consulter et saisir les exigences du projet et permettre l’accélération de l’automatisation des tests d’acceptances."
    }, {
        "jour": "05",
        "debut": "14:30",
        "specialite": "e-Services",
        "etudiant": "Anthonin Cocagne",
        "titre": "Développement iOS",
        "societe": "Services Nomades",
        "tuteur": "Le Pallec",
        "encadrant": "Dubois",
        "resume": "Développement de plusieurs applications iOS natives. L'une d'entre elle sera présentée pendant la soutenance."
    }, {
        "jour": "04",
        "debut": "14:30",
        "specialite": "Recherche",
        "etudiant": "Eddy El Khatib",
        "titre": "",
        "societe": "Centre Oscar Lambret",
        "tuteur": "Bouillaguet",
        "encadrant": "Pasquier",
        "resume": ""
    }, {
        "jour": "06",
        "debut": "14:30",
        "specialite": "Recherche",
        "etudiant": "Arthur D'Azémar",
        "titre": "Amélioration de système de recommendation décentralisé grâce au metric learning",
        "societe": "MAGNET (INRIA)",
        "tuteur": "Lemaire",
        "encadrant": "Tommasi",
        "resume": "Les systèmes de recommandation se basent sur le stockage massif de données utilisateur dans des bases centrale. Afin d'éviter des problèmes de passage à l'échelle lorsque le nombre d'utilisateur devient important, des systèmes de recommandation décentralisés ont été proposés. Ces systèmes organisent les utilisateurs en micro-communautés sociales dont chaque membre a des goûts similaires aux autres. Ces micro-communautés sont formées grâce à l'algorithme des plus proches voisins.\\n\\nCe stage vise à continuer le travail déjà effectué sur un système de recommandation décentralisé en utilisant des techniques d'apprentissage automatique. Ces techniques permettent d'apprendre, pour chaque utilisateur, une mesure de similarité permettant de regrouper les utilisateurs en fonction de leurs goûts."
    }, {
        "jour": "06",
        "debut": "14:30",
        "specialite": "TIIR",
        "etudiant": "Loubna El Ouadi",
        "titre": "",
        "societe": "Worldline",
        "tuteur": "Iguchi",
        "encadrant": "Westeel",
        "resume": ""
    }, {
        "jour": "07",
        "debut": "14:30",
        "specialite": "TIIR",
        "etudiant": "Alexandre Bécart",
        "titre": "",
        "societe": "",
        "tuteur": "",
        "encadrant": "",
        "resume": ""
    }, {
        "jour": "07",
        "debut": "14:30",
        "specialite": "IVI",
        "etudiant": "Stevens Jourdain",
        "titre": "Programmation 3D - OpenGL, Vulkan",
        "societe": "Mint (CRIStAL)",
        "tuteur": "Aubert",
        "encadrant": "Degrande",
        "resume": "Amélioration du moteur de rendu d'un outil de dessin en VR. Mise en place de shaders, transition vers OpenGL 4, optimisation CPU-GPU bas niveau, migration vers Vulkan. "
    }, {
        "jour": "04",
        "debut": "15:30",
        "specialite": "e-Services",
        "etudiant": "Mickaël Matuchak",
        "titre": "RougeGorge - Refonte du tunnel de commande",
        "societe": "Pictime",
        "tuteur": "Bilasco",
        "encadrant": "Manier",
        "resume": "Au sein de l'entreprise Pictime et affecté à l'équipe mutualisé PHP - Magento, j'ai œuvré pour le compte de RougeGorge afin de réaliser la refonte du tunnel de commande."
    }, {
        "jour": "05",
        "debut": "15:30",
        "specialite": "e-Services",
        "etudiant": "Quentin Doutriaux",
        "titre": "Développement d'une plateforme de gestion de données",
        "societe": "Services Nomades",
        "tuteur": "Seinturier",
        "encadrant": "Dubois",
        "resume": "Développement d'un back-office pour une application iOS pour tablette iPad."
    }, {
        "jour": "04",
        "debut": "15:30",
        "specialite": "Recherche",
        "etudiant": "Marion Tommasi",
        "titre": "Gérer l'incertitude des données dans les applications de crowdsourcing en utilisant le retour utilisateur",
        "societe": "Spirals (INRIA)",
        "tuteur": "Lemaire",
        "encadrant": "Bourhis",
        "resume": "Une application de crowdsourcing est une application qui fait appel à une foule d'utilisateurs pour exécuter des tâches ou fournir des informations. \\nLes informations données par les utilisateurs peuvent être fausses ou incomplètes.\\nMon stage consiste à utiliser le retour utilisateur pour mesurer la qualité des données et proposer un workflow auto-adaptatif en fonction des données. "
    }, {
        "jour": "06",
        "debut": "15:30",
        "specialite": "TIIR",
        "etudiant": "Pape-ibrahima Badiane",
        "titre": "",
        "societe": "OpenIO",
        "tuteur": "Iguchi",
        "encadrant": "Acciari",
        "resume": ""
    }, {
        "jour": "04",
        "debut": "16:15",
        "specialite": "e-Services",
        "etudiant": "Florentin Peyroux",
        "titre": "Élaboration d'une solution applicative pour un service de santé",
        "societe": "Worldline",
        "tuteur": "Seinturier",
        "encadrant": "Delmotte",
        "resume": "Au sein de l'entreprise Worldline, j'ai participé à l'élaboration d'une nouvelle solution applicative pour un service de santé afin de facilité entre autre la gestion administrative du patient, la gestion du dossier patient, la gestion du processus de soin. "
    }, {
        "jour": "05",
        "debut": "16:15",
        "specialite": "e-Services",
        "etudiant": "Aymeric Giraudet",
        "titre": "Software Engineer Fullstack .NET/React",
        "societe": "Axa France",
        "tuteur": "Seinturier",
        "encadrant": "Bedjir",
        "resume": "Maintenance d'une application de séléction médicale dématérialisée en méthode agile SCRUM, en .NET Core, AngularJS et React.\\nPour la soutenance : focus sur la dette technique : qu'est ce que c'est ? comment l'identifier ? comment y remédier ?"
    }, {
        "jour": "04",
        "debut": "16:15",
        "specialite": "Recherche",
        "etudiant": "Nicolas Crosetti",
        "titre": "Fractional matching number of tree-like database queries",
        "societe": "Links (INRIA)",
        "tuteur": "Boulet",
        "encadrant": "Capelli",
        "resume": "The fractional matching number is a measure from graph theory that is defined as the optimal objective value of a linear program. It can be used to estimate the expected value of a statistical sample containing non-independent observations which has various applications in data mining and machine learning. The idea is to compute a weighted average where the weights are the variables from the linear program that defines the fractional matching number. In this case the linear program is derived from the set of observations. However if this observation set is not given explicitly but defined implicitly as the answer set of a given database query, then the computation of the fractional matching number may become hard since the answer set of the query may be exponentially larger than the database. In this paper we present an algorithm that efficiently computes the fractional matching number for\\nquantifier-free acyclic conjunctive queries on a relational database, or other kinds of tree-like database queries. Our algorithm achieves a polynomial time worst-case complexity in the size of the database and the query (rather than in the answer set of the database query). It is based on succinct representations of the answer sets by boolean circuits -- as used in factorised databases and in knowledge compilation --  that are computed by a variant of Yannakakis' algorithm.\\n"
    }, {
        "jour": "06",
        "debut": "16:15",
        "specialite": "TIIR",
        "etudiant": "Hussam Daoud",
        "titre": "développement & recherche",
        "societe": "Altran",
        "tuteur": "Derbel",
        "encadrant": "Maazi",
        "resume": "Développement et évaluation de code pour l'optimisation énergétique des plateformes de type smartphones."
    }, {
        "jour": "05",
        "debut": "17:00",
        "specialite": "e-Services",
        "etudiant": "Marie Jones",
        "titre": "Support des clients états-uniens dans les datacentres européens",
        "societe": "OVH",
        "tuteur": "Le Pallec",
        "encadrant": "Biencourt",
        "resume": "Développement d'une application interne permettant le support des infrastructures Dedicated Cloud des clients américains dans les datacentres européens"
    }, {
        "jour": "04",
        "debut": "17:00",
        "specialite": "Recherche",
        "etudiant": "",
        "titre": "",
        "societe": "",
        "tuteur": "",
        "encadrant": "",
        "resume": ""
    }
];
