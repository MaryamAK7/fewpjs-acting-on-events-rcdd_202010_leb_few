// Your code here
let dodger= document.getElementById("dodger");
document.addEventListener("keydown",function(e){
  if(e.key==="ArrowRight"){
    let rightNumbers= dodger.style.right.replace("px","");
    let right= parseInt(rightNumbers, 10);
    if(right > 0){
    dodger.style.right= `${right - 1}px`;
  }
  }
})