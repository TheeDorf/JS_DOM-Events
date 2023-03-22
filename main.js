console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
document.getElementById("node1").textContent= `I used the getElementById("node1") method to access this.`;
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
const part2 = document.getElementsByClassName("node2");
for (let i = 0; i < part2.length; i++) {
  part2[i].textContent = "I used the getElementByClassName(`node2`) method to access this.";
}
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const h3Tags = document.getElementsByTagName("h3");
    for (let i=0; i < h3Tags.length; i++){
        h3Tags[i].textContent = `I used the getElementByTagName("h3") method to access all of these`
    };
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"

let p1 = document.createElement("p");
p1.textContent = "This node was created using the createElement() method";
// TODO: Append the created node to the parent node using the element.appendChild() method
const par1 = document.querySelector("#parent");
par1.appendChild(p1);
// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
const a1 = document.createElement("a");
a1.textContent = "I am a <a> tag";
// BONUS: Add a link href to the <a>
a1.setAttribute('href', 'https://espn.com');
a1.target= "_blank";

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
par1.insertBefore(a1,p1);
/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let parent = document.querySelector("#exercise-container3");
let pElement = document.querySelector("#N1");
let newPEl = document.createElement("p");
newPEl.textContent = "New Child Node";

parent.replaceChild(newPEl, pElement);
// TODO: Remove the "New Child Node"
setTimeout(()=>{
    newPEl.remove()},5000)
/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM
let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];



// TODO: Create an unordered list element
const container = document.querySelector("#container");
const unL = document.createElement("ul");
// TODO: Iterate over the array values, and create a list item element for each
list.forEach ((value) =>{
    let item = document.createElement("li");
    item.textContent = value;
    unL.appendChild(item);
});

container.appendChild(unL);
// TODO: Append the new list items to the unordered list element

// TODO: Append the unordered list to the `div#container` under exercise 4 

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

function show(){
    let modal = document.createElement("div");
    modal.id = "modal";
    // modal.classList.add("modal");
    const modalCard = document.createElement("div");
    modalCard.classList.add("modal-card");
    const closeButton = document.createElement("button");
    closeButton.innerText= "close";
    closeButton.addEventListener("click", function(){
        modal.remove();
    });
    const message = document.createElement("p");
    message.innerText= "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
    modalCard.appendChild(message);
    modalCard.appendChild(closeButton);

    modal.appendChild(modalCard);

    document.body.appendChild(modal);

}

const button = document.getElementById("btn");
button.addEventListener("click",show);