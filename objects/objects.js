/**
 * @property {string} id - unique id used to identify an object, mainly for setting purpouses
 * @property {boolean} carried - the object is carried by the player
 * @property {string} location - the name of the scene where the object is located
 * @property {string[]} actions - the actions allowed on the object
 * @property {boolean} pickable - the object can be picked
 * @property {boolean} show - the object is listed in the scene description
 * @property {string} description - the detailed description returend when the player looks at the object
 * @property {boolean} actionable - wether the object can be used or not
 */
const objects = [
    {
        term: 'cheese',
        id: 'cheese-prisoner',
        carried: true,
        label: 'un pezzo di formaggio ammuffito',
        show: true,
        actions: ['eat', 'use', 'spread'],
        pickable: true,
    },
    {
        term: 'mirror',
        id: 'mirror-prisoner',
        carried: true,
        show: true,
        pickable: true,
        label: 'un frammento di specchio',
        actions: ['use', 'insert'],
    },
    {
        term: 'rope',
        location: 'prisoner',
        id: 'rope-prisoner',
        label: 'la corda che ti teneva legato',
        description: `è una corda molto robusta che ti cinge la vita`,
        show: false,
        actionable: false,
        actions: ['use', 'insert'],
        pickable: true,
    },
    {
        term: 'door',
        location: 'prisoner',
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
        description: `Sono delle chiavi mezze arruginite e un po' storte, chissà cosa aprono.`,
    },
    {
        term: 'shelf',
        location: 'hardware',
        id: 'shelf-hardware',
        show: true,
        label: 'uno scaffale pieno di chiodi storti e attrezzi arrugginiti',
        description: `Lo scaffale è pieno di ciarpame inutile, ma in un angolo vedi un coltello apparentemente ancora in buono stato.`,
    },
    {
        term: 'knife',
        location: 'hardware',
        id: 'knife-hardware',
        label: 'un coltello',
        description: `È un coltello un po' malmesso ma ancora utilizzabile.`,
    },
    {
        term: 'sail',
        location: 'sails',
        id: 'sail-sails',
        label: 'un mucchio di vele accatastate',
        show: true,
        description: `Sono mucchi di vele sporche e lacere, non sembrano molto utili.`,
    },
    {
        term: 'leg',
        location: 'legs',
        id: 'leg-legs',
        label: 'la collezione di gambe di legno dei pirati',
        show: true,
        description: `Sono tutte piuttosto malmesse.`,
    },
    {
        term: 'coffers',
        location: 'coffers',
        id: 'coffers-coffers',
        label: 'un ammasso di forzieri',
        show: true,
        description: `Sono un mucchio di forzieri, purtroppo tutti vuoti.`,
    },
    {
        term: 'coffer',
        location: 'coffers',
        id: 'coffer-coffers',
        label: 'un forziere',
        pickable: true,
        description: `È un forziere vuoto.`,
    },
    {
        term: 'ladder',
        location: 'ropes',
        id: 'ladder-ropes',
        label: 'una scala di corda',
        pickable: true,
        show: true,
        description: `È una scala di corda arrotolata, sembra messa bene.`,
    },
    {
        term: 'hole',
        location: 'exit0',
        id: 'hole-exit0',
        label: 'un boccaporto',
        show: true,
        description: `Probabilmente è il passaggio che permette di uscire dalla stiva. Ai bordi vedi 2 gnaci di ferro.`,
    },
]

module.exports = objects;
