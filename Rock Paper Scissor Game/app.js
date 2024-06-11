let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choices");
const msg = document.querySelector("#result_text");

const userScoreShow=document.querySelector("#user_score");
const compScoreShow=document.querySelector("#bot_score");

//generating computer choice
const genCompChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const rInx = Math.floor(Math.random() * 3);
    return option[rInx];
};

const draw = (userChoice) => {
    msg.innerText = 'Draw game. Play again.';
    msg.style.backgroundColor = "#09182a"
};

const showResult=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScoreShow.innerText=userScore;
        msg.innerText=`You win!. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScoreShow.innerText=compScore;
        msg.innerText=`You lose!. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame = (userChoice) => {
    //computer Choice
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        //draw game
        draw(userChoice);
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //paper,scissor
            userWin= compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            //scissor,rock
            userWin= compChoice==="scissor"?false:true;
        }
        //scissor
        else{
            //rock,papper
            userWin=compChoice==="rock"?false:true;
        }
        showResult(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});