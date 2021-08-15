function rollDice(numSide = 6){
    return Math.floor((Math.random()*numSide)+1)
}

console.log(rollDice())