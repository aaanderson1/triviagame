
var questions = [
// question 1
    {
        question: "Whose house did they live in?",
        answers: [
            "Rose's",
            "Blanche's",
            "Dorothy's",
            "Sophia's",
        ],
        correct_index: 1
    },
// question 2
    {
        question: "What city do they live in?",
        answers: [
            "New Orleans, LA",
            "Nashville, TN",
            "Los Angeles, CA",
            "Miami, FL",
        ],
        correct_index: 3
    },
// question 3
    {
        question: "What is their go-to dessert?",
        answers: [
            "Cherry Pie",
            "Chocolate Chip Cookies",
            "Cheesecake",
            "Macaroons",
        ],
        correct_index: 2
    },
// question 4
    {
        question: "Where is Rose from?",
        answers: [
            "Chicago, IL",
            "Cleveland, OH",
            "St. Olaf, MN",
            "Nashville, TN",
        ],
        correct_index: 2
    },
// question 5
    {
        question: "What retirement home did Sophia live in?",
        answers: [
            "Shady Pines",
            "Coconut Grove",
            "Sunrise Pointe",
            "Coral Gables",
        ],
        "correct_index": 0
    },
// question 6
    {
        question: "What was Rose's late husband's name?",
        answers: [
            "Frank",
            "Charlie",
            "Ralph",
            "Alfred",
        ],
        correct_index: 1
        },
// question 7
    {
        question: "Where is Sophia from?",
        answers: [
            "Rome, Italy",
            "Sicily, Italy",
            "Venice, Italy",
            "Florence, Italy",
        ],
        correct_index: 1
    },
// question 8
    {
        question: "What is Dorothy's ex-husband's name?",
        answers: [
            "Maurice",
            "Stan",
            "Lawrence",
            "Roland",
        ],
        correct_index: 1
    },
// question 9
    {
        question: "When Blanche's house gets robbed, where does she find her jewelry?",
        answers: [
            "In the freezer",
            "The Lanai",
            "Under the kitchen sink",
            "On the coffee table",
            ],
        correct_index: 0
    },
// question 10
    {
        question: "What was Sophia's late husband's name?",
        answers: [
            "Walter",
            "Terrence",
            "Rupert",
            "Sal",
        ],
        correct_index: 3
        },
// question 11
    {
        question: "True or False: Dorothy remarries her ex-husband",
        answers: [
            "True",
            "False",
        ],
        correct_index: 1
        },
// question 12
    {
        question: "When did The Golden Girls air?",
        answers: [
            "1984 - 1995, 200 episodes, 8 seasons",
            "1985 - 1992, 180 episodes, 7 seasons",
            "1989 - 1993, 145 episodes, 6 seasons",
            "1987 - 1991, 125 episodes, 4 seasons",
        ],
        correct_index: 1
        },
// question 13
    {
     question: "True or False - The actresses who played Rose and Blanche were originally going to play opposite roles?",    
        answers: [
            "True",
            "False",
        ],
        correct_index: 0
    },
// question 14
    {
    question: "Who took the longest to have her makeup done for each episode?",
        answers: [
            "Blanche",
            "Rose",
            "Dorothy",
            "Sophia",
        ],
        correct_index: 3
    },
// question 15
    {
        question: "Which Golden Girl is still living, having outlived the rest?",
        answers: [
            "Blanche, aka Rue McClanahan, age 85",
            "Betty White, aka Rose, age 97",
            "Bea Arthur, aka Dorothy, age 97",
            "Estelle Getty, aka Sophia, age 96",
        ],
        correct_index: 1
    },
];

var correctAnswers;
var wrongAnswers;
var playQuestions;
var currentQuestion;
function shuffleArray(array) {
    var newArray = array.slice();
    for(var i = 0; i < newArray.length; ++i) {
        var randomIndex = Math.floor(Math.random() * newArray.length);
        var temp = newArray[randomIndex];
        newArray[randomIndex] = newArray[i];
        newArray[i] = temp;
    }
    return newArray;

}
function setupQuestions() {
    correctAnswers = 0;
    wrongAnswers = 0;
    playQuestions = shuffleArray(questions);
    currentQuestion = -1;
    selectQuestion();
}


var question = document.getElementById("question");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
button1.addEventListener("click", () => {
    checkAnswer(0);
});
button2.addEventListener("click", () => {
    checkAnswer(1);
});
button3.addEventListener("click", () => {
    checkAnswer(2);
});
button4.addEventListener("click", () => {
    checkAnswer(3);
});

function selectQuestion() {
    var questionObject = playQuestions[++currentQuestion];
    question.innerHTML = questionObject.question;
    button1.innerHTML = questionObject.answers[0];
    button2.innerHTML = questionObject.answers[1];
    button3.innerHTML = questionObject.answers[2];
    button4.innerHTML = questionObject.answers[3];
}
function checkAnswer(chosenIndex) {
    var correctIndex = playQuestions[currentQuestion].correct_index;
    if(chosenIndex === correctIndex) {
        ++correctAnswers;
    } else {
        ++wrongAnswers;
    }
    selectQuestion();
}

// //js for questions
// for (var question of questions) {
//     console.log(question.question);
//     console.log("Answers: ");
//     for (var answer of question.answers) {
//         console.log(answer);
//     }
//     console.log(`Correct Answer: ${question.answers[question.correct_index]}`);
// }

// for (var question of questions) {
//     console.log(question.question);
//     console.log("Answers: ");
//     for (var answer of question.answers) {
//         console.log(answer);
//     }
//     console.log(`Correct Answer: ${question.answers[question.correct_index]}`);
// }
// timer section
function timeStringFromSeconds(seconds) {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  let h = Math.floor(m / 60);
  m = m % 60;
  return `${formatNumber(h)}:${formatNumber(m)}:${formatNumber(s)}`;
}

function formatNumber(number) {
  return `${number}`.padStart(2, '0');
}

function reset() {
    var timer = document.getElementById("timer");
    var resetButton = document.getElementById("reset-button");
    let _seconds = 300;
    timer.innerHTML = timeStringFromSeconds(_seconds);
    let intervalHandle = setInterval(() => {
        _seconds -= 1;
        timer.innerHTML = timeStringFromSeconds(_seconds);
        checkWinCondition(_seconds, intervalHandle);
    }, 1000);
    resetButton.addEventListener("click", () => {
        clearInterval(intervalHandle);
        reset();
    });
    setupQuestions();
}
reset();

function youLose() {
    alert("You lost!");
}
function checkWinCondition(seconds, intervalHandle) {
    if(seconds <= 0) {
        clearInterval(intervalHandle);
        youLose();
        reset();
    }
}
