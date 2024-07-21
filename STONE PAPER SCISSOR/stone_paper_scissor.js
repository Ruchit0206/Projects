let userScore=0;


let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");

const compScorePara=document.querySelector("#comp-score");

const showWinner=(userWin,userChoice,compChoice)=>{
if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText=`You win !Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="lightgreen";
 
}
else{
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText=`You Lose ! ${compChoice} beats  your ${userChoice}`;
    msg.style.backgroundColor="red";
}
}

const drawGame=()=>{
    
    msg.innerText="It's Draw !.Play Again";
    msg.style.backgroundColor="skyblue";
}


const genCompChoice=()=>{
    const options=["rock","paper","scissor"]
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}


const playGame=(userChoice)=>{
    console.log("user choice = ",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin = compChoice === "paper" ? false : true ;
        }
        else if(userChoice==="paper"){
            userWin = compChoice === "scissor" ? false : true ;
        }
        else{
            userWin = compChoice==="rock" ? false : true ;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
    playGame(userChoice);
})
})



