let score = 0;
let points = 10;

let questions = document.body.childNodes; //list of questions
let questionIterator = 1;

function correct(button){
score +=points; //10 top score
button.style.backgroundColor = 'green';
let parent = button.parentNode; //parent of button (div)
let siblings = parent.childNodes; //list of other buttons
siblings.forEach(element => {
    element.disabled = true; //disabling all answers
});
questionIterator+=2;
questions[questionIterator].scrollIntoView({
    behavior: "smooth",
    block:"end",
    inline:"nearest"
});
}

function incorrect(button){
score -= points; //subtract 10 from score
button.style.backgroundColor = 'red';
let parent = button.parentNode; //parent of button (div)
let siblings = parent.childNodes; //list of other buttons
siblings.forEach(element => {
    element.disabled = true; //disabling all answers
});
questionIterator+=2;
questions[questionIterator].scrollIntoView({
    behavior: "smooth",
    block:"end",
    inline:"nearest"
})
}

function calculate(button){
    button.innerHTML = "Score:" + score;
}