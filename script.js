const exerciseSelect = document.querySelector("#exercise-select");
const setsInput = document.querySelector("#sets-select");
const repsInput = document.querySelector("#reps-select");
const weightInput = document.querySelector("#weight-select");
const addButton = document.querySelector("#add-button");
const exerciseList = document.querySelector("#exercise-list");

// ADDBUTTON EVENT LISTENER
addButton.addEventListener("click", addExercise);

const completeButton = document.createElement("button");
completeButton.innerHTML = `<button class="complete-btn"><i class="fas fa-check"></i></button>`;
completeButton.classList.add("complete-btn");
completeButton.addEventListener("click", completeExercise);

const deleteButton = document.createElement("button");
deleteButton.innerHTML = `<button class="delete-btn"><i class="far fa-trash-alt"></i></button>`;
deleteButton.classList.add("delete-btn");
deleteButton.addEventListener("click", deleteExercise);

// ADD EXERCISE TO LIST
function addExercise(event){ 
event.preventDefault(); //stops page from reloading when addButton clicked

const exerciseItem = document.createElement("div");
exerciseItem.classList.add("exercise");

const newExercise = document.createElement("li");
newExercise.innerHTML = 
    `EXERCISE : <input type="text" value="${exerciseSelect.value}" readonly="true"></input>
    SETS: <input type="number" value="${setsInput.value}"> 
    REPS: <input type="number" value="${repsInput.value}"> 
    WEIGHT: <input type="number" value="${weightInput.value}"> 
    ${completeButton.innerHTML}
    ${deleteButton.innerHTML}`

newExercise.classList.add("exercise-li");
exerciseList.appendChild(newExercise);

}

// ADD STYLING FOR COMPLETED EXERCISES
function completeExercise(e) {
    console.log("hello world");
}

// DELETE LIST ITEM WHEN TRASH BUTTON CLICKED
function deleteExercise(e) {
    console.log("delete world")
}