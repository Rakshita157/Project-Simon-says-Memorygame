let gameSeq=[];
let userSeq=[];

let btns= ["yellow","green","purple","red"];

let started=false;
let level=0;

let h2=document.querySelector("h2");
   
let btn1= document.querySelector(".btn1");
btn1.addEventListener("click",function(){
    if(started == false){
        console.log("game is started");
        started=true;
        levelUp();
    }
});


document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", function () {   
    let color = this.id;
    playSound(color);
  });
});


function gameFlash(btn){
      btn.classList.add("flash");
      setTimeout(function(){
        btn.classList.remove("flash");
      }, 270);
}

function userFlash(btn){
      btn.classList.add("userflash");
      setTimeout(function(){
        btn.classList.remove("userflash");
      }, 270);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let rndIdx= Math.floor(Math.random() * 3);
    let rndColor= btns[rndIdx];
    let rndBtn = document.querySelector(`.${rndColor}`);
    gameSeq.push(rndColor);
    console.log(gameSeq);
    gameFlash(rndBtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over!  Your score was <b> ${level}</b> <br> Press Start key to start again.`;
       document.querySelector("body").style.backgroundColor="red";
       setTimeout(function(){
        document.querySelector("body").style.backgroundColor="rgb(23, 32, 65)";},150);
       reset();
    }
    
}

function btnPress(){
    
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}


let allBtns= document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
