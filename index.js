//startup, don't write all of your code in the startup section 

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('create-task-form').addEventListener('submit', addToDo);
});
 

function addToDo(event) {
  event.preventDefault()
  let todo = (event.target.todo.value) //grab value
  const box = document.querySelector("#tasks") //finding ul
  const list = document.createElement('li') //creating list
  list.textContent = todo
  box.appendChild(list) //appending to ul 
  event.target.todo.value = "" //clearing form 
}



//create tag and put it in page 


//form = submit event
//following event is submit 