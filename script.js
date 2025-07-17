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
    if (filteredInput == reverseInput) {
        let yesHtmlTemplate = `<p class="result-text">Yes, <span>${input.value}</span> is a palindrome</p>`
        result.innerHTML = yesHtmlTemplate
    } else {
        let noHtmlTemplate = `<p class="result-text">No, <span>${input.value}</span> is not a palindrome</p>`
        result.innerHTML = noHtmlTemplate
    };
});

//Toggling the Light/dark mode
const themeBtn = document.querySelector('#toggle-theme');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    //changing the icon
    const svgWrap = document.querySelector('.svg-wrap');
    const dark = `<svg class="dark"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>`
    const light = `<svg class="light" 
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" 
                     stroke="currentColor" class="size-6">
                     <path stroke-linecap="round" stroke-linejoin="round" 
                     d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>`

    const isDark = svgWrap.querySelector('svg')?.classList.contains('dark');

    if (isDark) {
        svgWrap.innerHTML = light
    } else {
        svgWrap.innerHTML = dark
    }
})