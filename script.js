var peterAns = 0;
var milesAns = 0;
var questionC = 0;

var result = document.getElementById("result");
var restart = document.getElementById("restart");


var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var result = document.getElementById("result");

function updateResult(){
  if(peterAns >= 2){
    console.log("You are Peter Parker!");
    result.innerHTML = "You are Peter Parker!";
} else if(milesAns >= 2){
    console.log("You are Miles Morales!");
    result.innerHTML = "You are Miles Morales!";
}
}

function updateAnsP(){
 peterAns = peterAns + 1;
 questionC = questionC + 1;
 console.log("Questioncount = "+ questionC + " Peter = " + peterAns);
  
 if (questionC == 3){
   console.log("Quiz is Done");
    updateResult();
}  
}

function updateAnsM(){
   milesAns = milesAns + 1;
   questionC = questionC + 1;
   console.log("Questioncount = "+ questionC + " Miles = " + milesAns);
  
   if (questionC == 3){
    console.log("Quiz is Done")
     updateResult();
} 
}

function rest() {
  peterAns = 0
  milesAns = 0
  questionC = 0
   console.log("Questioncount = "+ questionC + " Peter = " + peterAns);
   console.log("Questioncount = "+ questionC + " Miles = " + milesAns);  
result.innerHTML = "Your Result Is..."; 
  
}

restart.addEventListener("click",rest)

q1a1.addEventListener("click",updateAnsP);
q1a2.addEventListener("click", updateAnsM);

q2a1.addEventListener("click", updateAnsP );
q2a2.addEventListener("click", updateAnsM);

q3a2.addEventListener("click", updateAnsP );
q3a1.addEventListener("click", updateAnsM);






