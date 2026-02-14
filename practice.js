/*

*/



// create element and append child
const mainContainer = document.getElementById("main_container")
mainContainer.style.border = "1px solid red"
mainContainer.style.padding = "8px"
const container = document.createElement("div");
container.style.border = "1px solid black";
const heading = document.createElement("h1");
heading.style.backgroundColor = "black"
heading.innerText = "I am added from outside with JS. Don't worry I won't create any trouble";
container.appendChild(heading);
mainContainer.append(container);

