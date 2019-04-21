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
        term: 'rope',
        location: 'prisoner',
        id: 'rope-prisoner',
        label: 'la corda che ti teneva legato',
        show: false,
        actionable: false,
        actions: ['use', 'insert'],
        pickable: true,
    },
    {
        term: 'door',
        location: 'prisoner',
        description: `È Una porta di ferro. Sembra decisamente resistente. 
        Al centro c'è uno spioncino che i tuoi carcerieri usavano per passarti il cibo. Se di cibo si può parlare.
        Ma ovviamente è troppo piccolo perché tu ci possa passare.`,
        show: false,
        actionable: false,
    }
]

module.exports = objects;
