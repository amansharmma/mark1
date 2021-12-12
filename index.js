// Mark1
var user_input = require('readline-sync');
var User_name = user_input.question("Hay 😃 what's your name?  ");
console.log("Welcome", User_name ,  "lets find out how well you know about aman. ");
var score = 0
function playGame(Prashna,answer){
    var req = require('readline-sync');
    var User_Answer = req.question(Prashna);
    if(User_Answer === answer){
      console.log("Nice", User_name , "You are Right");
      score = score + 1
      console.log("You got 1 point from this answer 😃\n")
    }
    else {
      console.log("Opps, wrong Answer",User_name, "Lets try with another Question\n");
    }
  }

function questions(){
  var Prashna = [
      {
          Q : "DO Aman like codding?" ,
          A : "Yes"
      },
      {
        Q : "Aman's Favrait text editor?" ,
        A : "Sublime"
    },
    {
        Q : "Is Aman a codding teacher?" ,
        A : "No"
    },
    {
        Q : "Aman started codding in 2010?" ,
        A : "No"
      },
      
      {
        Q : "Are you Aman's best friends?" ,
        A : "No"
    },
  ];

for (var i = 0 ; i < Prashna.length ; ++i) {
    var Recent_Q = (Prashna[i]);
    playGame(Recent_Q.Q,Recent_Q.A)
  }
console.log(User_name," Your Total Score is ",score)
console.log("You know ",score*20,"% about Aman");
}

questions();

