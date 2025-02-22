let flashcards = [
    { id: 1, question: "QUESTION", answer: "ANSWER" },
    { id: 2, question: "im saxy af bro hi", answer: "yes" },
];
// hi, flashcards is an array that essentially stores inro about each card. treat it as an array of Card objects if it makes it easier

//IMPORTANT: since we dont have a pop up to add flashcards yet, those 2 elements in the array are hardcoded. they should be removed later

localStorage.setItem("flashcards", JSON.stringify(flashcards));

//this saves that flashcards array to local storage, so new cards dont disappear

function loadFlashcards() {
    const storedFlashcards = JSON.parse(localStorage.getItem("flashcards"));
    flashcards = storedFlashcards || [];
}

//loadFlashcards() loads all locally stored flashcards back into the array


function displayFlashcards() {
    const container = document.querySelector(".flashcard-wrapper");
    //querySelector() selects the first element with class flashcard-wrapper
    container.innerHTML = "";
    //clears out flashcard-wrapper to fill it with new data

    flashcards.forEach((card) => {
        //iterates through each Card in flashcards array and puts all the information in a new div. then adds that div to flashcard-wrapper using appendChild()
        const div = document.createElement("div");
        div.classList.add("flashcard");
        div.innerHTML = `
        <h3>${card.question}</h3>
        <p>${card.answer}</p>
      `;
        container.appendChild(div);


    });

    //adds a "new flashcard" button so that its always at the end 
    const div = document.createElement("div");
    div.classList.add("dotted-flashcard");
    div.innerHTML = `
            <div class="dotted-flashcard">
                <button onclick="newFlashCard()">+ New</button>
            </div>
  `;
    container.appendChild(div)
}

