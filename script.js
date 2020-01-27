$(document).ready(function() {

const startPage = $(".startPage");
const startPageButtons = $(".startPageButtons");
const startQuizBtn = $("#startQuiz");
const viewHighscoresBtn = $("#viewHighscores");

const questionsPage = $(".questionsPage");
const timeRemaining = $(".timeRemaining");
const questionsContainer = $(".questionsContainer");
const questionText = $("#question");
const answerButtons = $("#answerButtons");
const choice = $(".choice");

const completePage = $(".completePage");
const score = $(".score");
const enterInitials = $(".enterInitials");

const highscoresPage = $(".highscoresPage");
const highscoreList = $(".highscoreList");
const playAgainBtn = $("#playAgain");



let questions = [
    {
    question: "1. Which is the best vegtable?",
    choices: ["Celery", "Potato", "Carrot", "Spinach"],
    answer: 1
}, 
{
    question: "2. What was the first vegtable to be grown in space?",
    choices: ["Spinach", "Parsnip", "Potato", "Lettuce"],
    answer: 2
}, 
{
    question: "3. Where does the potato originate from?",
    choices: ["North America", "South America", "Europe", "Asia"],
    answer: 1
}, 
{
    question: "4. How many US States grow potatoes?",
    choices: ["15", "23", "37", "50"],
    answer: 3
}, 
{
    question: "5. How many potatoes are used to make a bag of Lay's chips?",
    choices: ["4 to 5", "7 to 8", "10 to 11", "12 to 13"],
    answer: 0
},
];


function initializeQuiz() {
    $(questionsPage).hide();
    $(completePage).hide();
    $(highscoresPage).hide();
    $(startPage).show();
};

initializeQuiz();

$(viewHighscoresBtn).on("click", function(){
    $(startPage).hide();
    $(questionsPage).hide();
    $(completePage).hide();
    $(highscoresPage).show();
});

$(startQuizBtn).on("click", function(){
    $(startPage).hide();
    $(completePage).hide();
    $(highscoresPage).hide();
    $(questionsPage).show();

    for (let q = 0; q < questions.length; q++) {
        $(questionText).append(questions.question);
    };

    var i = 60;
(function timer(){
    if (--i < 0) return;
    setTimeout(function(){
        $(timeRemaining).text("Time Remaining: " + i);
        timer();
    }, 1000);
})();

});

console.log(questions);


$(playAgainBtn).on("click", function() {
    initializeQuiz();
});



});
// function showQuestion(question) {
    //     $(question) = questions.question
    //     questions.choices.forEach(choices => {
        //       const button = document.createElement('button')
        //       button.innerText = choices.text
        //       button.classList.add('btn')
        //       if (answer.correct) {
            //         button.dataset.correct = choices.correct
            //       }
            //       button.addEventListener('click', selectAnswer)
            //       answerButtonsElement.appendChild(button)
            //     })
            //   }
            // console.log(showQuestion());