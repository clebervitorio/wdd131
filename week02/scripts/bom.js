const input = document.querySelector('#favchap');
const button = document.querySelector('#addChapterBtn'); // Corrigir a seleção do botão
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    // Verify if the entry field is not empty
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');

        // Add the chapter to the <li> element
        li.textContent = input.value;

        // Create the delete button and add it to the <li> element
        deleteBtn.textContent = '❌';
        li.appendChild(deleteBtn);

        // Add <li> element to the <ul> list
        list.appendChild(li);

        // Add a click event to the delete button
        deleteBtn.addEventListener('click', function() {
            // Remove the <li> element when the delete button was clicked
            list.removeChild(li);
            // Clean the value entry field
            input.value = '';
            // Send fucus come back to the entry field
            input.focus();
        });

        // Clear the entry field value after to add the chapter
        input.value = '';

        // Send fucus come back to the entry field
        input.focus();
    } else {
        // If the entry field empty, show a message or to do nothing
        // You can add a message to the user or return to keep the focus on the entry field
        input.focus();
    }
});