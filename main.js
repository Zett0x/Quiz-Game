const container = document.getElementById("answers");
const answers = document.querySelectorAll(".answer");
const title = document.getElementById("question");
const scoreElement=document.getElementById("score");
const pageElement=document.getElementById("page");
console.log(scoreElement);

let page=0;
let score=0;
const data = [
  {
    usada:false,
    title: "¿Cuál de las siguientes opciones no es un editor de código?",
    repuestas: [
        { id: 1, res: "vim", correct: false },
        { id: 2, res: "vscode", correct: false },
        { id: 3, res: "emacs", correct: false },
        { id: 4, res: "word", correct: true },
    ],
  },
  {
    usada:false,
    title: "test 2",
    repuestas: [
        { id: 1, res: "a", correct: false },
        { id: 2, res: "gasode", correct: false },
        { id: 3, res: "eaggcs", correct: false },
        { id: 4, res: "wgasg", correct: true },
    ],
  }
];

console.log(data);
//FUNCTIONS 
const clearAnswers=()=>{container.innerHTML=""};
const nextQuestion=()=>{
    if(page<data.length-1){
        page++;
    }
    else page=0;
    console.log(page);
    clearAnswers();
    loadQuestion(page);

    

}

const loadQuestion = (page=0) => {
    
    title.textContent = data[page].title;
    data[page].repuestas.forEach((q)=>{
        let answerDiv = document.createElement("div");
        answerDiv.textContent = q.res;
        answerDiv.classList.add("answer");
        answerDiv.id=q.id;
        container.appendChild(answerDiv);
    })
};
const loadPage=()=>{
    pageElement.textContent=`Question ${page+1} of ${data.length}`
}
const updateScore=()=>{scoreElement.textContent=`Score: ${score}`;}

const checkAnswer=(e)=>{
    if(e.target.id==="answers")
    return;
    let res=e.target.id;
    if(data[page].repuestas[res-1].correct /*&& !data[page].usada*/)
    {
        e.target.classList.add("correct");
        score++;
        updateScore();

        

    }
    else
    e.target.classList.add("error");

    //data[page].usada=true;

    setTimeout(() => {
        nextQuestion();
    }, 800);
    
    

};


//INIT
loadPage();
updateScore();
loadQuestion();




//EVENTS
container.addEventListener("click",checkAnswer);



