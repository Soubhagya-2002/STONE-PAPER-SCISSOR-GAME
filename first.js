let userscore=0;
let compscore=0;
const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice=()=>{
        const options=["rock","paper","scissors"];
        const randIdx= Math.floor(Math.random()*3);
        return options[randIdx];
};
const showwinner = (userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText= userscore;
        console.log("YOU WIN!");
        msg.innerText = `YOU WINNNNNNN! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
        console.log("YOU LOOSE");
        msg.innerText = `YOU LOOSEEEEE! Your ${userchoice} beaten by ${compchoice}`;
        msg.style.backgroundColor="red";
    }
};
const drawgame =()=>{
    console.log("Game was Draw");
    msg.innerText = "GAME WAS DRAW . PLAY AGAIN!";
    msg.style.backgroundColor="#081b31";
};

const playgame= (userchoice) => {
    console.log("user choice=",userchoice);
    const compchoice= gencompchoice();
    console.log("computer choice=",compchoice);
    if(userchoice === compchoice){
        drawgame();
    }
    else {
        let userwin= true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper"? false : true;
        }
        else if(userchoice === "paper"){
            userwin = compchoice === "scissors"? false : true;
        }
        else{
            userwin = compchoice === "rock"? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice= choice.getAttribute("id");
        playgame(userchoice);
    });
});
