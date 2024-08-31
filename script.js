let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#win");
const uscore = document.querySelector("#you");
const cscore = document.querySelector("#comp");
let rset = document.querySelector("#rset");

const genrate = () =>{
    const optins = ["rock","paper","scissor"];
    return(optins[Math.floor(Math.random()*3)]);
}

const playgame =(choice_user) =>{
    console.log("user choice :" ,choice_user);
    const comp = genrate();
    console.log("comp choice :",comp);

    if(choice_user === comp){
        console.log("Draw");
         msg.innerText = "Match Draw Play Again!!";
    }

    else if((choice_user === "rock" && comp === "scissor") || (choice_user === "scissor" && comp === "paper")|| (choice_user === "paper" && comp === "rock") )
    {
        console.log("User Won");
        msg.innerText = "You Win!!"
        userScore++;
        uscore.innerText = userScore;
    }

    else {
        console.log("Comp Won");
        msg.innerText = "You Lose";
        compScore++;
        cscore.innerText = compScore;
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const choice_user = choice.getAttribute("id");
        playgame(choice_user); 
    })
});

const resetgame =()=>{
    cscore.innerText =0;
    uscore.innerText = 0;
    msg.innerText = "Wel Come!!";
}

rset.addEventListener("click",()=>{
    resetgame();
})