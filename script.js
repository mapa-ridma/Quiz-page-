function startQuiz() {
        console.log("arrived")
    document.getElementById("intro").style.display = "none";
    document.getElementById("quiz").style.display = "block";
}

const quizData = [
    {
        question: "How many bones are there in the human body?",
        a: "372",
        b: "182",
        c: "197",
        d: "206",
        correct: "d",
    },
    {
        question: "What is the longest bone in the human body?",
        a: "Femur",
        b: "Tibia",
        c: "Humerus",
        d: "Radius",
        correct: "a",
    },
    {
        question: "How much blood is in the human body?",
        a: "10 litres",
        b: "12 litres",
        c: "5 litres",
        d: "3 litres",
        correct: "c",
    },
    {
        question: "Which is the only organ that can float on water?",
        a: "Heart",
        b: "Brain",
        c: "Kidneys",
        d: "Lungs",
        correct: "d",
    },
    {
        question: "How many times does the average heart beat in a single day?",
        a: "10,000",
        b: "76,000",
        c: "87,000",
        d: "100,000",
        correct: "d",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})

