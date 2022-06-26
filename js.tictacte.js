let turn=true
let clickCount =0
function play(btn){
    btn.innerText=turn ?"X" :"O";
    btn.classList.add(turn ? "xbtn":"obtn");
    btn.setAttribute("disabled","disabled");
    turn=!turn
    clickCount++
    if (clickCount==225){
        alert("Game is finished")
    }
}
function resetGame(){
    if (!confirm("Do you want to reset the game")){
        return;
}
let btns=document.getElementsByClassName('btn')
for (const element of btns){
    element.innerText=""
    element.classList.remove("xbtn");
    element.classList.remove("obtn");
    element.removeAttribute("disabled");
}
    turn=true;
    clickCount=0;
}

