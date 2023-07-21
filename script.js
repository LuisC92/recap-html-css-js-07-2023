
//! exercises
//* how to change the color of all grey-bg to red

const greyBgs = document.querySelectorAll(".grey-bg")

console.log(greyBgs)

//* I want to ask the user for a bg color

const btn = document.querySelector(".btn")

btn.addEventListener("click", () =>{
    const newColor = prompt("What color do you want?")
    // greyBgs.forEach(bg => bg.style.backgroundColor = "red")
    greyBgs.forEach(bg => bg.style.backgroundColor = newColor)
})


const postTitles = ["Week 1 - Integration", "Week 2 - Project 1", "Week 3 - JavaScript", "Week 4 - Checkpoint & React"]

const newPostTitle = document.querySelectorAll(".posts div li")

newPostTitle.forEach((postTitle, index) => postTitle.innerHTML = postTitles[index])

