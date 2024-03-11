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

const findHero = (id: number) => {
    return heroes.find(hero => hero.id === id)
}

const hero = findHero(2)
console.log(hero?.name ?? 'Hero not found!!');