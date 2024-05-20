const questions = [
    {
        question:"Which is larget animal in the world?",
        answer:[
            {text:"Shark",correct:false},
            {text:"Blue whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Dog",correct:false},
        ]
    },
    {
        question:"Which is smallest country in the world?",
        answer:[
            {text:"Vatican City",correct:true},
            {text:"Bhutan",correct:false},
            {text:"Nepal",correct:false},
            {text:"Amman",correct:false},
        ]  
    },
    {
        question:"Which is larget desert in the world?",
        answer:[
            {text:"Kalahari",correct:false},
            {text:"Gobi",correct:false},
            {text:"Sahara",correct:false},
            {text:"Antarctica",correct:true},
        ]
    },
    {
        question:"Which is the smallest continent in the world?",
        answer:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Arctic",correct:false},
            {text:"Dog",correct:false},
        ]
    },
    {
        question:"Which is larget animal in the world?",
        answer:[
            {text:"Shark",correct:false},
            {text:"Blue whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Dog",correct:false},
        ]
    }
];

 let questionElement = document.getElementById("question"); 
 let answerBtns = document.getElementById("answer-btn");
 let nextBtn = document.getElementById("next-btn");

 let currentQuestionIndex = 0;
 let score = 0;

 function stsrtQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
 }

 function  showQuestion(){
    restState();
     let currentQuestion = questions[currentQuestionIndex];
     let questionNo = currentQuestionIndex + 1;
     questionElement.innerHTML = questionNo + ") "+ currentQuestion.question;

     currentQuestion.answer.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtns.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
     });
 }

   function restState(){
    nextBtn.style.display = "none";
    while(answerBtns.firstChild){
        answerBtns.removeChild(answerBtns.firstChild);
    }
    
   }

   function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("correct"); 
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerBtns.children).forEach(button =>{
        if (button.dataset.correct === "true") {
            button.classList.add("correct"); 
        }
        button.disabled = "true";

    });
    nextBtn.style.display = "block";
   }

     function  showScore(){
        restState();
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
        nextBtn.innerHTML = "play Again";
        nextBtn.style.display = "block";
     }

    function handelNextBtn(){
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(); 
        }else{
            showScore();
        }
    }

   nextBtn.addEventListener("click",()=>{
    if (currentQuestionIndex < questions.length) {
        handelNextBtn();
    }else{
        stsrtQuiz();
    }

   });

 

 stsrtQuiz();