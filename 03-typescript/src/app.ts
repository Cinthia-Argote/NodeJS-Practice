// const heroes = [
//     {
//         id: 2,
//         name: 'Spiderman',
//         owner: 'Marvel'
//     },
//     {
//         id: 3,
//         name: 'Batman',
//         owner: 'DC'
//     }

import { findHeroById } from "./services/hero.service";

// ]

// const findHero = (id: number) => {
//     return heroes.find(hero => hero.id === id)
// }

const hero = findHeroById(2)
console.log(hero?.name ?? 'Hero not found!!');