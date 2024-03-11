const heroes = [
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Batman',
        owner: 'DC'
    }

]

const findHero = (id) => {
    return heroes.find(hero => hero.id === id)
}

const hero = findHero(4)
console.log(hero?.name ?? 'Hero not found');