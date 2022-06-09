const container = document.getElementById("answers");
const answers = document.querySelectorAll(".answer");
const title = document.getElementById("question");
const scoreElement=document.getElementById("score");
console.log(scoreElement);


let score=0;
const data = [
  {
    title: "¿Cuál de las siguientes opciones no es un editor de código?",
    repuestas: [
        { id: 1, res: "vim", correct: false },
        { id: 2, res: "vscode", correct: false },
        { id: 3, res: "emacs", correct: false },
        { id: 4, res: "word", correct: true },
    ],
  },
];

console.log(data);
//FUNCTIONS 
const loadQuestion = () => {
    title.textContent = data[0].title;
    data[0].repuestas.forEach((q)=>{
        let answerDiv = document.createElement("div");
        answerDiv.textContent = q.res;
        answerDiv.classList.add("answer");
        answerDiv.id=q.id;
        container.appendChild(answerDiv);
    })
};

const checkAnswer=(e)=>{
    if(e.target.id==="answers")
    return;
    let res=e.target.id;
    if(data[0].repuestas[res-1].correct)
    {
        e.target.classList.add("correct");
        scoreElement.textContent=`Score:${score}`;
        score++;

    }
    
    else
    e.target.classList.add("error");
    

};


//INIT
loadQuestion();



//EVENTS
container.addEventListener("click",checkAnswer);



