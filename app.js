function flipCard(event) {
    const card = document.getElementById('flashcard');
    const rect = card.getBoundingClientRect();

    // Define the center area (adjust the percentages if needed)
    const centerXStart = rect.left + rect.width * 0.4;
    const centerXEnd = rect.left + rect.width * 0.6;
    const centerYStart = rect.top + rect.height * 0.4;
    const centerYEnd = rect.top + rect.height * 0.6;

    // Check if the click is within the center area
    if (
        event.clientX >= centerXStart && event.clientX <= centerXEnd &&
        event.clientY >= centerYStart && event.clientY <= centerYEnd
    ) {
        card.classList.toggle('flipped');
    }
}

// Attach the event listener to the flashcard
document.getElementById('flashcard').addEventListener('click', flipCard);


function openModal() {
    document.getElementById("name").value = "";  // Clear name input
    document.getElementById("cards").value = ""; // Clear cards input
    document.getElementById("modal").style.display = "block";
   
}

function saveInput(event) {
    event.preventDefault(); // Prevent form from submitting

    const name = document.getElementById("name").value; // Get the name input value
    const cards = document.getElementById("cards").value; // Get the number of cards input value
    
    // Check if cards input is a positive number greater than 0
    if (cards <= 0 || isNaN(cards) || !Number.isInteger(Number(cards))) {
        alert("Please enter a valid number of cards (greater than 0).");
        return; // Exit the function if validation fails
    }
    const savedBoxesContainer = document.getElementById("savedBoxesContainer"); // Get the container for saved boxes
    
    // Create a wrapper for the saved box and name
    const boxWrapper = document.createElement("div");
    boxWrapper.classList.add("saved-box-wrapper");

    // Create the white rectangle (saved box)
    const newBox = document.createElement("div");
    newBox.classList.add("saved-box");

    // Add the box to the wrapper
    boxWrapper.appendChild(newBox);

    // Create the name element
    const nameElement = document.createElement("div");
    nameElement.classList.add("saved-box-name");
    nameElement.textContent = name;

    // Add the name under the box
    boxWrapper.appendChild(nameElement);
    // Add an event listener for the box click to navigate to a new page
    newBox.addEventListener("click", function() {
        // Open a new page with the name and cards as query parameters
        window.location.href = `newpage.html?name=${name}&cards=${cards}`;
    });

    // Store the name in localStorage (or pass as query parameter)
    localStorage.setItem('flashcardName', name);


    // Append the wrapper to the container
    savedBoxesContainer.appendChild(boxWrapper);

    closeModal(); // Close the modal
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}