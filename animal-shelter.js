const animalData = require("./animal-data.json")

class Animal {
    // default value for hunger if no argument is passed in
    constructor(name, species, color, hunger = 50) {
        this.name = name
        this.species = species
        this.color = color
        this.hunger = hunger
    }

    greet() {
        console.log('hit')
        return `Hi I'm ${this.name} the ${this.species}`
    }

    feed() {
        this.hunger -= 20
        return "Yum, I love food"
    }
}

class Cat extends Animal {
    constructor(name, color, hunger = 50) {
        super(name, "cat", color, hunger)
        this.food = "fish"
    }

    greet() {
        super.greet()
        return `Meow I'm ${this.name} the ${this.species}`
    }

    feed() {
        return `Yum, I love ${this.food}`
    }
}

class Dog extends Animal {
    constructor(name, color, hunger = 50) {
        super(name, "dog", color, hunger)
        this.food = "kibble"
    }

    greet() {
        super.greet()

        return `woof I'm ${this.name} the ${this.species}`
    }

    feed() {
        return `Yum, I love ${this.food}`
    }
}

class AnimalShelter {
    constructor() {
        this.animals = []
    }

    addAnimal(animalObj) {
        this.animals.push(animalObj)
    }

    adopt(animalObj) {
        let index = this.animals.indexOf(animalObj)
        this.animals.splice(index, 1)
    }

    getAnimalsBySpecies(species) {
        return this.animals.filter(a => a.species === species)
    }
}

const shelter = new AnimalShelter()

animalData.forEach(animalObj => {
    if (animalObj.species === "dog") {
        shelter.addAnimal(
            new Dog(
                animalObj.name,
                animalObj.color,
                animalObj.hunger ? animalObj.hunger : 50
            )
        )
    } else if (animalObj.species === "cat") {
        shelter.addAnimal(
            new Cat(
                animalObj.name,
                animalObj.color,
                animalObj.hunger ? animalObj.hunger : 50
            )
        )
    } else
        shelter.addAnimal(
            new Animal(
                animalObj.name,
                animalObj.species,
                animalObj.color,
                animalObj.hunger ? animalObj.hunger : 50
            )
        )
})

// console.log(shelter.animals)
// console.log(shelter.getAnimalsBySpecies('dog'))

// const lassie = new Dog("Lassie", "Multi", 80)
// console.log(lassie)
// console.log(lassie.greet())

// const bob = new Cat("bob", "ginger")
// console.log(bob)
// console.log(bob.greet())


shelter.animals.forEach(a => {
    console.log(a.greet())
})