function rollDice(numSide = 6){
    return Math.floor((Math.random()*numSide)+1)
}

console.log(rollDice())

function greet(person,msg = 'hey there'){
    console.log(`${msg},${person}`)
}

console.log(greet('yarden'))

const num = [13,4,5,21,55]

console.log(Math.max(...num))

const cats = ['blue','scoust']
const dogs = ['rusty','wyatt']

const allPets = [...cats,...dogs]
console.log(allPets)