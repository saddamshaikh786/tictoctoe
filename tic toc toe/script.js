console.log("saddam");
let turn="X";
let music=new Audio("Ipl Ringtone.mp3");
let isgameover=false;
const  changeturn=()=>
{
console.log("hiiiii");
return turn=="X"?"0":"X";

}
const checkwin=()=>{
let boxtext=document.getElementsByClassName('boxtext');
let wins=[
   [0,1,2,25,5,0],
   [3,4,5,25,15,0],
   [6,7,8,25,25,0],
   [0,3,6,15,15,90],
   [1,4,7,25,15,90],
   [2,5,8,35,15,90],
   [0,4,8,25,15,45],
   [2,4,6,25,15,135],
]
wins.forEach(e=>{
if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) &&(boxtext[e[0]].innerText!==''))
{
    document.querySelector('.info').innerText=boxtext[e[0]].innerText+"  won"
    isgameover=true;
document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px"
document.querySelector(".line").style.width="20vw";
document.querySelector(".line").style.transform=`translate(${e[3]}VW,${e[4]}VW) rotate(${e[5]}deg)`
// document.querySelector(".line").style.width="20vw";

}
})
}


let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
let boxtext=element.querySelector('.boxtext');
element.addEventListener('click',()=>{
if(boxtext.innerText == '')
{
    console.log("hiiiii");
    boxtext.innerText=turn;
    turn=changeturn();
    music.play();
    checkwin();
    if(!isgameover)
    {
 document.getElementsByClassName("info")[0].innerText="TURN FOR    "+turn;
    }   
}
})
})

let reset=document.getElementById('reset');
reset.addEventListener('click',()=>{
    music.pause();
let boxtext=document.querySelectorAll('.boxtext');
Array.from(boxtext).forEach(element=>{
    element.innerText='';
});
turn="X";
isgameover=false;
document.querySelector(".line").style.width="0vw";
document.getElementsByClassName("info")[0].innerText="TURN FOR  "+turn;
document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"

})


