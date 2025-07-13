//querying the DOM for the Elements
const input = document.querySelector('.main-input');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result-text');


//Modifying the user input
input.addEventListener('keyup', () => {
 let filteredInput = input.value.replace(/[^A-Z0-9]/ig, "").toLowerCase();
 let reverseInput = filteredInput.split("").reverse().join("");
    console.log(filteredInput);
    console.log(reverseInput);
});



//Button Event Listener
btn.addEventListener('click', () => {
    
    let filteredInput = input.value.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    let reverseInput = filteredInput.split("").reverse().join("");

    //if check to compared both values
    if (filteredInput == reverseInput){
        let yesHtmlTemplate = `<p class="result-text">Yes, <span>${input.value}</span> is a palindrome</p>`
        result.innerHTML = yesHtmlTemplate
    }else{
        let noHtmlTemplate = `<p class="result-text">No, <span>${input.value}</span> is not a palindrome</p>`
        result.innerHTML = noHtmlTemplate
    };
});

//Toggling the Light/dark mode
