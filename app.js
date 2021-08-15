function rollDice(numSide = 6){
    return Math.floor((Math.random()*numSide)+1)
}

console.log(rollDice())

function greet(person,msg = 'hey there'){
    console.log(`${msg},${person}`)
}

console.log(greet('yarden'))