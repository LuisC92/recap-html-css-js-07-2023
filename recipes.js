import recipes from "./data.js"

// console.log(recipes)

const gridLayout = document.querySelector(".grid-layout")

recipes.forEach(recipe => {

    const card = document.createElement("div")

    card.className = "card"
    
    gridLayout.appendChild(card)
    
    
    const title = document.createElement("h1")
    
    title.className = "title"
    
    title.innerHTML = recipe.name
    
    card.appendChild(title)
    
    
    const divImage = document.createElement("div")
    
    card.appendChild(divImage)
    
    
    const image = document.createElement("img")
    
    image.src= recipe.imageURL
    
    image.className = "image"
    
    divImage.appendChild(image)
    
    
    const divIngredient = document.createElement("div")
    
    card.appendChild(divIngredient)
    
    
    const h2 = document.createElement("h2")
    
    h2.innerHTML = "Ingredient List"
    
    h2.className = "section-title"
    
    divIngredient.appendChild(h2)
    
    
    const ul = document.createElement("ul")
    
    ul.className ="ingredients-list"
    
    divIngredient.appendChild(ul)
    
    
    // create another loop
    recipe.ingredients.forEach(ingredient =>{
        const li = document.createElement("li")
        
        li.innerHTML = `${ingredient.quantity} ${ingredient.name}`
        
        ul.appendChild(li)
    })
    
    
    const button = document.createElement("button")
    
    button.innerHTML = "Steps"
    
    button.className = "button";
    
    card.appendChild(button)
})




