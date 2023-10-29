var boxes="";
var score=0;
var value=0;
var height=document.querySelector("#tbtm").getBoundingClientRect().height;
var width=document.querySelector("#tbtm").getBoundingClientRect().width;
var totalBubbles= Math.floor((height/62)*(width/62));
console.log(totalBubbles);
function makeBubbles()
{
  boxes="";
for(let i=0;i<totalBubbles;i++)
{
    var a=Math.floor(Math.random()*10);
    boxes += `<div class="bubble">${a}</div>`
}
document.querySelector("#tbtm").innerHTML=boxes;

}



var timer=60;
function startTimer(){

  var timeInt= setInterval(() => {
        if(timer>0){
        timer--;
        document.querySelector(".timeval").textContent=timer;
        }
        else{
            clearInterval(timeInt);
            document.querySelector("#tbtm").innerHTML=`<div id="finalscore" ><h1>Your Score : ${score}</h1></div>`
        }
    }, 1000);
}


function updateHit(){
value=Math.floor(Math.random()*10);
document.querySelector(".hitval").textContent=value;
}


function increaseScore(){
    score+=10;
    document.querySelector(".scorer").textContent=score;
}


   var bubble=document.querySelector("#tbtm");
   bubble.addEventListener("click",(buuble)=>{
    console.log(buuble.target);
     var clickedbub= Number(buuble.target.textContent);
    if(value === clickedbub)
    {
    increaseScore();
    makeBubbles();
    updateHit();
    }
    else{
        makeBubbles();
    }

   });


makeBubbles();
startTimer();
updateHit();


 