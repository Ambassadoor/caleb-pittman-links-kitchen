const materials = ['Hylian Rice', 'Big Hearty Truffle', 'Tabantha Wheat', 'Raw Prime Meat', 'Hateno Cheese', 'Bird Egg', 'Goat Butter', 'Fresh Milk', 'Cane Sugar', 'Raw Bird Thigh']
const meals = []

// Array of meal recipe objects
const recipes = [
    {
        ingredients: [
            "Hylian Rice",
            "Big Hearty Truffle"
        ],
        meal: "Mushroom Rice Balls"
    },
    {
        ingredients: [
            "Hateno Cheese",
            "Bird Egg"],
         meal: "Cheesy Omlette" 
    },
    {
        ingredients: [
            "Tabantha Wheat",
            "Hateno Cheese"
        ], 
        meal: "Cheesy Hylian Pizza"
    },
    {
        ingredients: [
            "Raw Prime Meat",
            "Hylian Rice"
        ], 
        meal: "Prime Meat and Rice Bowl"
    },
    {
        ingredients: [
            "Fresh Milk",
            "Cane Sugar",
            "Bird Egg"
        ],
        meal: "Egg Pudding"
    },
    {
        ingredients: [
            "Tabantha Wheat",
            "Cane Sugar",
            "Goat Butter",
            "Bird Egg",
        ],
        meal: "Egg Tart"
    },
    {
        ingredients: [
            "Hylian Rice",
            "Raw Prime Meat",
            "Bird Egg"
        ],
        meal: "Chicken Egg Fried Rice"
    },
    {
        ingredients: [
            "Hylian Rice",
            "Goat Butter",
            "Bird Egg",
            "Raw Bird Thigh"
        ],
        meal: "Poultry Pilaf"
    }
]

// Accepts any number of parameters, loops through known recipes and compares the recipe ingredients to the passed in ingredients by:
// 1. sorting the array so that they will be in alphabetical order
// 2. Converting the arrays to a string with JSON.stringify() to allow for easy comparison. 

const cook = (...items) => {
    for (const recipe of recipes) {
        if (JSON.stringify(recipe.ingredients.sort()) === JSON.stringify(items.sort())) {
            meals.push(recipe.meal)
        }
    }
}

// Create a function that passes a random number of randomly selected ingredients to the cook function. 
// Should pick a random number between x & y where x is least number of ingredients included in a meal and y is the most number of ingredients included in a meal
// Should pick random ingredients, but not duplicate them. 

const ingredientRandomizer = () => {
    const materialsCopy = [...materials]
    const max = recipes.reduce((a,c) => c.ingredients.length > a ? c.ingredients.length : a, 0)
    const min = recipes.reduce((a,c) => c.ingredients.length < a ? c.ingredients.length : a, Infinity)

    // Generates a random number between the min and max
    const numberOfIngredients = Math.floor(Math.random() * (max - min + 1)) + min
    
    let ingredients = []
    for (let x = 0; x < numberOfIngredients; x++) {
        const randomIndex = Math.floor(Math.random() * materialsCopy.length)
        const ingredient = materialsCopy[randomIndex]

        ingredients.push(ingredient)
        materialsCopy.splice(randomIndex,1)
    }
    console.log(ingredients)
    return ingredients
}

let attempts = 0
while (meals.length < recipes.length && attempts < 200) {
    attempts += 1
    cook(...ingredientRandomizer())
}


console.log(`It took link ${attempts} attempts to learn all these meals:`)
console.log('MEALS:')
console.log('---------------')
for (const meal of meals) {
    console.log(meal)
}

if (attempts === 200) {
    console.log("Link is too tired to make anything else")
}

