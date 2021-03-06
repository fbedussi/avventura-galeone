/**
 * @property {string} id - unique id used to identify an object, mainly for setting purpouses
 * @property {boolean} carried - the object is carried by the player
 * @property {string} location - the name of the scene where the object is located
 * @property {string[]} actions - the actions allowed on the object
 * @property {boolean} [false] pickable - the object can be picked
 * @property {boolean} [false] show - the object is listed in the scene description
 * @property {string} description - the detailed description returend when the player looks at the object
 * @property {boolean} actionable - wether the object can be used or not
 */
const objects = [
    {
        term: 'cheese',
        id: 'cheese-prisoner',
        label: 'un pezzo di formaggio ammuffito',
        actions: ['eat', 'use', 'spread'],
        carried: true,
        show: true,
        pickable: true,
    },
    {
        term: 'mirror',
        location: 'prisoner',
        id: 'mirror-prisoner',
        label: 'un frammento di specchio',
        actions: ['use', 'insert'],
    },
    {
        term: 'rope',
        location: 'prisoner',
        id: 'rope-prisoner',
        label: 'la corda che ti teneva legato',
        description: 'è una corda molto robusta che ti cinge la vita',
        actions: ['use', 'insert'],
        show: false,
        actionable: false,
        pickable: true,
    },
    {
        term: 'door',
        location: 'prisoner',
        id: 'door-prisoner',
        description: `È una porta di ferro. Sembra decisamente resistente. 
        Al centro c'è uno spioncino che i tuoi carcerieri usavano per passarti il cibo. Se di cibo si può parlare.
        Ma ovviamente è troppo piccolo perché tu ci possa passare.`,
        show: false,
        actionable: false,
    },
    {
        term: 'jailer',
        id: 'jailer-jailer',
        location: 'jailer',
        label: 'il carceriere stecchito',
        description: `È accasciato a terra. La bocca contorta in una smorfia di dolore.
        È vestito solo con dei luridi calzoncini mezzi strappati.
        Alla vita ha una rozza cintura, fatta con un pezzo di corda, da cui pende un mazzo di chiavi`,
        show: true,
    },
    {
        term: 'key',
        location: 'jailer',
        id: 'keys-jailer',
        label: 'un mazzo di chiavi unte',
        description: 'Sono delle chiavi mezze arruginite e un po\' storte, chissà cosa aprono.',
    },
    {
        term: 'shelf',
        location: 'hardware',
        id: 'shelf-hardware',
        label: 'uno scaffale pieno di chiodi storti e attrezzi arrugginiti',
        description: 'Lo scaffale è pieno di ciarpame inutile, ma in un angolo vedi un coltello apparentemente ancora in buono stato.',
        show: true,
    },
    {
        term: 'knife',
        location: 'hardware',
        id: 'knife-hardware',
        label: 'un coltello',
        description: 'È un coltello un po\' malmesso ma ancora utilizzabile.',
    },
    {
        term: 'sail',
        location: 'sails',
        id: 'sail-sails',
        label: 'un mucchio di vele accatastate',
        description: 'Sono mucchi di vele sporche e lacere, non sembrano molto utili.',
        show: true,
    },
    {
        term: 'legs',
        location: 'legs',
        id: 'legs-legs',
        label: 'la collezione di gambe di legno dei pirati',
        description: 'Sono tutte piuttosto malmesse.',
        show: true,
    },
    {
        term: 'leg',
        location: 'legs',
        id: 'leg-legs',
        label: 'una gamba di legno',
        description: 'È una solidissima gamba di legno',
        show: true,
        pickable: true,
    },
    {
        term: 'coffers',
        location: 'coffers',
        id: 'coffers-coffers',
        label: 'un ammasso di forzieri',
        description: 'Sono un mucchio di forzieri, purtroppo tutti vuoti.',
        show: true,
    },
    {
        term: 'coffer',
        location: 'coffers',
        id: 'coffer-coffers',
        label: 'un forziere',
        description: 'È un forziere vuoto.',
        actions: ['jump'],
        pickable: true,
    },
    {
        term: 'ladder',
        location: 'ropes',
        id: 'ladder-ropes',
        label: 'una scala di corda',
        description: 'È una scala di corda arrotolata, sembra messa bene.',
        pickable: true,
        show: true,
    },
    {
        term: 'hole',
        location: 'exit0',
        id: 'hole-exit0',
        label: 'un boccaporto',
        description: 'Probabilmente è il passaggio che permette di uscire dalla stiva. Ai bordi vedi 2 ganci di ferro.',
        show: true,
    },
    {
        term: 'pirate',
        location: 'sails',
        id: 'sails-pirate',
        label: 'un feroce pirata',
        description: 'Ha un rivolo di sangue che gli esce dalla bocca, barcolla ma ti si avventa contro con un coltello.',
        show: true,
        pickable: true,
    },
    {
        term: 'stove',
        location: 'kitcken',
        id: 'kitcken-stove',
        label: 'la stufa per cucinare',
        description: 'È una stufa a legna con 2 forni e una piastra superiore dove appoggiare le pentole.',
        show: true,
    },
    {
        term: 'cooker',
        location: 'kitcken',
        id: 'kitcken-cooker',
        label: 'una piastra per cucinare',
        description: 'È una piastra sui cui si possono appoggiare le pentole per cucinare.',
    },
    {
        term: 'oven',
        location: 'kitcken',
        id: 'kitcken-oven',
        label: 'la stufa ha 2 piccoli forni',
        description: 'Provi ad aprire lo sportello, ma dentro non c\'è nulla.',
    },
    {
        term: 'cookware',
        location: 'kitcken',
        id: 'kitcken-cookware',
        label: 'pentole e altri attrezzi da cucina',
        description: 'Sono pentole, coperchi, mestoli e cucchiai, tutti ordinatamente appesi ad un filo.',
        show: true,
    },
    {
        term: 'barrels',
        location: 'galley',
        id: 'galley-barrels',
        label: 'barili di carne scoperchialata',
        description: 'sono barili pieni di carne sotto sale. Sembrano decisamente appetitosi, soprattutto dopo 2 giorni di digiuno...',
        show: true,
    },
    {
        term: 'food',
        location: 'galley',
        id: 'galley-food',
        label: 'cibo',
        description: 'questa è la cambusa, c\'è un sacco di roba da mangiare, prova a guardarti attorno',
    },
    {
        term: 'meat',
        location: 'galley',
        id: 'galley-meat',
        label: 'carne salata',
        description: '',
        actions: ['eat'],
    },
    {
        term: 'carboys',
        location: 'galley',
        id: 'galley-carboys',
        label: 'damigiane di vino',
        description: 'Sono damigiane piene di vino. Per la verità alcune sono decisamente vuote, si vede che i pirati ci davano dentro.',
        show: true,
    },
    {
        term: 'wine',
        location: 'galley',
        id: 'galley-wine',
        label: 'vino',
        description: '',
        actions: ['drink'],
    },
    {
        term: 'boxes',
        location: 'galley',
        id: 'galley-boxes',
        label: 'scatole di gallette',
        description: 'Sono scatole di legno piene di gallette salate. Guardando meglio noti che sono piene di vermi. Purtroppo nei lunghi viaggi per mare capita.',
        show: true,
    },
    {
        term: 'cookies',
        location: 'galley',
        id: 'galley-cookies',
        label: 'gallette',
        description: '',
        actions: ['eat'],
    },
    {
        term: 'goatskin',
        location: 'galley',
        id: 'galley-goatskin',
        label: 'otri piene d\'acqua',
        description: 'Sono otri che custodiscono la riserva di acqua della nave.',
        show: true,
    },
    {
        term: 'water',
        location: 'galley',
        id: 'galley-water',
        label: 'acqua',
        description: '',
        actions: ['drink'],
    },
    {
        term: 'pirates',
        location: 'dining',
        id: 'dining-pirates',
        label: 'pirati',
        description: `Sono tutti morti, diversi hanno ancora in mano i coltellacci che stavano usando per mangiare. 
        Una bava marrone gli esce dalla bocca.
        Sembrerebbe proprio che qualcosa li abbia uccisi mentre stavano mangiando... forse dopotutto il cuoco di bordo non era così bravo...`,
    },
    {
        term: 'table',
        location: 'dining',
        id: 'dining-table',
        label: 'tavolo',
        description: `È una lurida e rozza tavolaccia di legno unto e consunto.
        Sopra ci sono de bicchieri mezzi pieni di vino (o mezzi vuoti, dipende dai punti di vista).
        Al centro c'è un piatto con resti di carne salata.`,
    },
    {
        term: 'chairs',
        location: 'dining',
        id: 'dining-chairs',
        label: 'sedie',
        description: 'Più che di vere e proprie sedie si tratta di panche e sgabelli.',
    },
    {
        term: 'door',
        location: 'hall',
        id: 'hall-door',
        label: 'una porta chiusa',
        description: 'Sopra si può leggere, a caratteri sbiaditi, la scritta "capitano".',
    },
    {
        term: 'window',
        location: 'captain',
        id: 'captain-window',
        label: 'una ampia vetrata',
        description: `La vetrata dà sulla poppa della nave, da qui puoi vedere la scia bianca che la nave lascia dietro di se. 
        Oltre a quella non c'è null'altro che l'immensità del mare.`,
    },
    {
        term: 'sofa',
        location: 'captain',
        id: 'captain-sofa',
        label: 'un vecchio divano',
        description: 'È un divano semicircolare che circonda un tavolo. Non è ben messo: la stoffa è piena di strappi da cui escono brandelli di imbottitura.',
        actions: ['sit'],
    },
    {
        term: 'desk',
        location: 'captain',
        id: 'captain-desk',
        label: 'la scrivania del capitano',
        description: 'Sopra ci sono sparse alcune vecchie carte nautiche e il diario di bordo.',
    },
    {
        term: 'desk',
        location: 'captain',
        id: 'captain-desk',
        label: 'la scrivania del capitano',
        description: 'Sopra ci sono sparse alcune vecchie carte nautiche e il diario di bordo.',
    },
    {
        term: 'maps',
        location: 'captain',
        id: 'captain-maps',
        label: 'alcune vecchie carte nautiche',
        description: 'Su una puoi vedere l\'ultima posizione segnata dal capitano, la nave è nel mare aperto, attorno c\'è solo una piccola isola dalla forma stretta e lunga.',
    },
    {
        term: 'log',
        location: 'captain',
        id: 'captain-log',
        label: 'il diario di bordo',
        description: 'È il diario su cui il capitano segnava gli eventi salienti occorsi durante la navigazione.',
    },
    {
        term: 'prints',
        location: 'captain',
        id: 'captain-prints',
        label: 'alcune vecchie stampe marinare',
        description: `Sono tre stampe che illustrano diversi momenti di vita di mare. 
        Nella prima è raffigurato il ponte di una nave ingombro di merci.
        Nella seconda un mare in tempesta e un vascello che combatte con le alte onde.
        Nella terza il mare è calmo e lo stesso vascello naviga verso il porto.`,
    },
    {
        term: 'third',
        location: 'captain',
        id: 'captain-third',
        label: 'la terza stampa',
        description: 'Il mare è calmo, la tempesta è passata e un arcobaleno attraversa l\'orizzonte.',
        actions: ['pull'],
    },
    {
        term: 'handle',
        location: 'captain',
        id: 'captain-handle',
        label: 'una piccola maniglia',
        description: 'È una piccola maniglia incassata in un vano nascosto dietro la stampa.',
        actionable: false,
    },
    {
        term: 'wallhole',
        location: 'captain',
        id: 'captain-wallhole',
        label: 'una piccolo vano',
        description: 'È una piccolo vano nascosto dietro la stampa, sul fondo c\'è una maniglia.',
        actionable: false,
    },
    {
        term: 'chest',
        location: 'treasure',
        id: 'treasure-chest',
        label: 'una piccolo scrigno',
        description: `È una piccolo scrigno ricoperto di lamine d'oro e pietre preziose.
        Non vorrei sbagliare, ma sembra proprio contenere un tesoro.
        Che sia quello del famoso Capitano Bill di cui narrano le leggende di questi mari?`,
    },
];
// Ci sono barili di carne salata, damigiane di vino, scatole di gallette e otri piene d\'acqua.
module.exports = objects;
