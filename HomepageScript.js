const dropdownButton = document.querySelector(".dropdown-Btn");
const angledownIcon = document.querySelector(".fa-angle-down");
const angleupIcon = document.querySelector(".fa-angle-up");
angleupIcon.style.display = "none";

console.log(dropdownButton)
const dropdown = document.querySelector(".dropdown");

dropdownButton.addEventListener("click" , function(){
    console.log(dropdownButton)
   if(dropdown.style.display === "flex"){
    dropdown.style.display = "none";
    angledownIcon.style.display = "flex";
    angleupIcon.style.display = "none";
   }else{
    dropdown.style.display = "flex";
    angledownIcon.style.display = "none";
    angleupIcon.style.display = "flex";
   
   
   }

    
})
window.addEventListener("click" , function(e){
    if(e.target !== dropdownButton && e.target !== dropdown && e.target !== angledownIcon && e.target !== angleupIcon){
        dropdown.style.display = "none";
        angledownIcon.style.display = "flex";
        angleupIcon.style.display = "none";
    }
})

document.querySelector(".day-night input").addEventListener("change", () => {
    document.querySelector("body").classList.add("toggle");
    setTimeout(() => {
        document.querySelector("body").classList.toggle("light");

        setTimeout(
            () => document.querySelector("body").classList.remove("toggle"),
            10
        );
    }, 5);
});
// var count = 0;
// document.addEventListener('scroll', () => {
//   const footer = document.querySelector('.footer');
//   const scrollPosition = window.scrollY + window.innerHeight;
//   const triggerPosition = document.body.offsetHeight - 100;
  
//   if (scrollPosition >= triggerPosition) {
//     footer.classList.remove('hidden');
//     footer.classList.add('visible');
//   } else {
//     footer.classList.remove('visible');
//     footer.classList.add('hidden');
//   }
// });

const cards = document.querySelectorAll(".card");
for(let i = 0;i < cards.length;i++) {
  cards[i].addEventListener("click", function() {
    console.log(cards[i]);
    if(cards[i].classList.contains("flex-card")) {
      window.location.href = 'flex.html';
    }
    else if(cards[i].classList.contains("grid-card")) {
      window.location.href = 'grid.html';
    }
    else if(cards[i].classList.contains("position-card")) {
      window.location.href = 'position.html';
    }
  })
}
const dropdownButts = document.querySelectorAll(".dropdown-items");
for(let i = 0;i < dropdownButts.length;i++) {
  dropdownButts[i].addEventListener("click", function (e) {

    var topic = dropdownButts[i].innerText;
    topic = topic.toLowerCase(); 
    console.log(topic);
    window.location.href = `${topic}.html`;
  })
}


// Typing Animation:
const learnTextElement = document.querySelector('.learnText i');

const typingAnimation = async (typingSpeed = 200, deleteSpeedLunn = 50, deleteSpeedLearn = 150, pauseTimeBeforeDeleteLunn = 100, pauseTimeBeforeDeleteLearn = 1500) => {
  const word1 = "Lunn";
  const word2 = "Learn";

  // Function to type a word with a customizable speed
  const typeWord = async (word, speed) => {
    for (let i = 0; i < word.length; i++) {
      learnTextElement.textContent += word[i];
      await new Promise((resolve) => setTimeout(resolve, speed));
    }
  };

  // Function to delete a word with a customizable delete speed
  const deleteWord = async (deleteSpeed) => {
    while (learnTextElement.textContent.length > 0) {
      learnTextElement.textContent = learnTextElement.textContent.slice(0, -1);
      await new Promise((resolve) => setTimeout(resolve, deleteSpeed));
    }
  };

  while (true) {
    // Type "Lunn" with the given typing speed
    await typeWord(word1, typingSpeed);

    // Pause before deleting "Lunn" (100ms pause time)
    await new Promise((resolve) => setTimeout(resolve, pauseTimeBeforeDeleteLunn));

    // Delete "Lunn" with the faster delete speed (50ms per letter)
    await deleteWord(deleteSpeedLunn);

    // Type "Learn" with the same typing speed as "Lunn"
    await typeWord(word2, typingSpeed);

    // Pause before deleting "Learn" (1.5s pause time)
    await new Promise((resolve) => setTimeout(resolve, pauseTimeBeforeDeleteLearn));

    // Delete "Learn" with a slower delete speed (150ms per letter)
    await deleteWord(deleteSpeedLearn);
  }
};

// Start typing animation with custom parameters
typingAnimation(100, 50, 150, 100, 1500); // Adjust values as needed




// Footer Animation:

