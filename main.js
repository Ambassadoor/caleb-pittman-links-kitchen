const materials = ['Hylian Rice', 'Big Hearty Truffle', 'Tabantha Wheat', 'Raw Prime Meat', 'Hateno Cheese', 'Bird Egg']
const meals = []

const cook = (firstIngredient, secondIngredient) => {
    if (firstIngredient === 'Hylian Rice' && secondIngredient === 'Big Hearty Radish') {
        meals.push('Mushroom Rice Balls')
    }
}

cook(materials[1], materials[0])

console.log('MEALS:')
console.log('---------------')
for (const meal of meals) {
    console.log(meel)
}


