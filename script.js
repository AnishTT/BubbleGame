var time = 5;
var score = 0;
var hitNum=0;

function makeBubble(){
    var obj ="";
for(let i = 1; i<208;i++){
    const rn = Math.floor(Math.random()*10);
    obj+=`<div class="bubble">${rn}</div>`;
}
document.querySelector("#aoe").innerHTML = obj;
}

function timer(){
    setInterval(function(){
        if(time>0){
            time--;
            document.querySelector("#count2").textContent = time;
        }
        else{
            //clearInterval(interval); 
            document.querySelector("#aoe").innerHTML = `<div class="lastWord"><h1>Time is up</h1> <h3>Your Score is: ${score}</h3></div`;
        }
    }, 1000);
}

function getHit(){
    hitNum = Math.floor(Math.random()*10);
    document.querySelector("#count1").textContent = hitNum;
}

function increaseScore(){
    score+=10;
    document.querySelector("#count3").textContent = score;
}

document.querySelector("#aoe").addEventListener("click", function(detail){
  
    var clicked = Number(detail.target.textContent);
    if(clicked ==hitNum ){
        increaseScore();
        getHit();
        makeBubble();
        time = 5;
        document.querySelector("#count2").textContent = time;
        
    }
    else{
        alert("wrong");
        if(score!=0){
            score-=5;

            document.querySelector("#count3").textContent = score;
        }
    }
});




makeBubble();
getHit();
timer();

