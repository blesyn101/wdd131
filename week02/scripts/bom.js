const input = document.querySelector('#favchap');
const output = document.querySelector('button');
const list = document.querySelector('#list');

const li = document.createElement('li');
const deleteButton = document.createElement('button');

// li.textContent = input.value;
// deleteButton.textContent = '❌';
// li.appendChild(deleteButton);
// list.append(li);

// Click event to add chapter to the list
output.addEventListener('click', () => { 
    //check if input is empty
    if (input.value != '') {
      // create list item and give it the value of the input
      const li = document.createElement("li");
      li.textContent = input.value;
      // listener to the delete button that removes the li element when clicked
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "❌";
      deleteButton.addEventListener("click", () => {
        list.removeChild(li);
        input.focus();
      });
      // add the button to the list item
      li.appendChild(deleteButton);
      // add the list item to the list
      list.appendChild(li);
      // clear the input field and focus it
      input.value = "";
      // focus the user back to the input field
      input.focus();
    }
});