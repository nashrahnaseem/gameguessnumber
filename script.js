const number=document.getElementById("number").value;
const button=document.getElementById("button");
const message=document.getElementById("message");


var  guess=Math.floor(Math.random()*100);

button.onclick=()=>{
     const number=document.getElementById("number").value;
    if(number>guess){
        message.innerHTML="Your number is too high 😔";
        document.getElementById("number").value='';
     }
     else if(number<guess){
        message.innerHTML="Your number is too low 😔";
        document.getElementById("number").value='';
     }
     else{
        message.innerHTML="Congratulations! You guess the correct number😍";
        
     }
}
