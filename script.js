const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        // Create a new list item (li)
        let li = document.createElement("li");

        // Create the icon element
        let icon = document.createElement("i");
        icon.className = "fa-regular fa-circle fa-2xs";

        // Set the icon color (corrected to lowercase 'color')
        icon.style.color = "red"; // Use lowercase 'color'

        // Append the icon to the list item
        li.appendChild(icon);

        // Add the text from the input box after the icon
        let text = document.createTextNode(inputBox.value);
        li.appendChild(text);

        // Append the new list item to the list container
        listContainer.appendChild(li);

        // Clear the input box after adding the task
        inputBox.value = '';
    }
}
