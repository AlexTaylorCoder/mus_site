const items = document.querySelectorAll(".i");
const pHeaders = document.querySelectorAll("h1")

for (let item of items) {
    item.addEventListener("mouseover", (moused) => {
        moused.target.style.color = "lightblue";
        moused.target.style.fontSize = "160%";


        //console.log("over")
    })
    item.addEventListener("mouseout", (moused) => {
        moused.target.style.color = "lightsteelblue";
        moused.target.style.fontSize = "150%";
        
    })
}
items[0].addEventListener("click", (clicked) => {
    document.querySelector(".tPage").scrollIntoView({behavior:"smooth"});
})

