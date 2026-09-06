// To Do List needs to be able to add to the lists (input), 
// check off and remove items, 
// once complete strike out items. 
// Option to delete items also. 

// Take whats in input and put that in <section>
document.getElementById("add").addEventListener("click",addListItem)
function addListItem (){

       
 const input = document.querySelector('#item').value

//  >>>>>input.value=" "
//   console.log(input)
 const toDoItem = document.createElement("li")
 
//  toDoItem.innerText=input
 
 const checkBox = document.createElement("input")
 checkBox.type = "checkbox"
 const p = document.createTextNode(input)
 
const trashBin = document.createElement("button")
trashBin.textContent="Delete"
toDoItem.appendChild(trashBin)


 const runningList = document.querySelector('#runningList')

 toDoItem.append(checkBox, p)
 runningList.appendChild(toDoItem)

 toDoItem.addEventListener("click",()=>{
    toDoItem.classList.toggle("linethrough")
 })

}
// add event listener is giving a special obj called eventObject

document.querySelector("#runningList").addEventListener("click",deleteMe)
function deleteMe(eventObject){
    console.log(eventObject)
if (eventObject.target.tagName === "BUTTON"){
     eventObject.target.parentElement.remove()

}

}



