//get plus minus and reset buttons
let buttons = []

buttons.push(document.getElementById('plus'));
buttons.push(document.getElementById('minus'));
buttons.push(document.getElementById('reset'));

let minSize = 16;
let maxSize = 32;

//set minus button to disabled
buttons[1].disabled = true;

let handleSize = (e) => {
    //get root font size
    let rootFontSize = parseInt(window.getComputedStyle(document.documentElement).fontSize);
    //if plus button is clicked
    if (e.target.id === 'plus') {
        //increase root font size by 4px up to 32px
        updateFontSize(rootFontSize + 4);
    } else if (e.target.id === 'minus') {
        //decrease root font size by 4px down to 16px
        updateFontSize(rootFontSize - 4);
    } else {
        //reset root font size to 16px
        updateFontSize(minSize);    
    }


}


buttons.forEach(button => {
    //add event listener to each button
    button.addEventListener('click', handleSize);
});



let updateFontSize = (fontSize) => {
    document.documentElement.style.fontSize = `${fontSize}px`;

    if (fontSize === maxSize) {
        //disable plus button and enable minus button
        buttons[0].disabled = true;
        buttons[1].disabled = false;

    } else if (fontSize === minSize) {
        //disable minus button and enable plus button
        buttons[0].disabled = false;
        buttons[1].disabled = true;
    } else {
        //enable both buttons
        buttons[0].disabled = false;
        buttons[1].disabled = false;
    }
}


let contrastToggle = () => {
    document.body.classList.toggle('contrast');
}

let contrast = document.getElementById('contrast');

contrast.addEventListener('click', contrastToggle);



//add event listener for high contrast mode
window.matchMedia('(prefers-contrast: more)').addEventListener('change', e => {
    contrastToggle();
});

const mobNavBtn = document.querySelector('.mob_nav');
const nav = document.querySelector('#menu');

mobNavBtn.addEventListener('click', () => {
    mobNavBtn.classList.toggle('open');
    nav.classList.toggle('open');
});


//check if user has high contrast enabled
// if (window.matchMedia('(prefers-contrast: more)').matches) {
//     console.log
//     contrastToggle();
// }