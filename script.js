// 1. Grab the elements from the HTML
// - The input where we type the task
// - The "Add" button
// - The <ul> where we will put the tasks
const input = document.getElementById("todoInput");
const addButton = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// 2. Add event listeners to the "Add" button for both click and touch
function addTask() {
  // When the button is clicked or touched:
  // a. Get the value of the input field
  // b. Check if it's not empty
  if (input.value == "") {
    alert("Please enter a task!");
  } else {
    // c. Create a new <li> element
    const listItem = document.createElement("li");
    // d. Set the text of the <li> to the input value
    listItem.textContent = input.value;
    // e. Append the <li> to the <ul>
    todoList.appendChild(listItem);

    // Add remove functionality for the <li> item on click or touch
    listItem.addEventListener("click", function () {
      listItem.remove();
    });
  }

  // f. Clear the input field (so it's ready for the next task)
  input.value = "";
}

// Event listeners for "Add" button (both click and touch)
addButton.addEventListener("click", addTask);
addButton.addEventListener("touchstart", addTask);  // Add touch event for mobile

// 3. (Optional) Add click event to the new <li>
// When a list item is clicked:
// a. Remove that <li> from the list
// (You can also do strike-through or toggle class instead of removing)
