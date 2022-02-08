function mySubmitBtn (){

   var result = 0;
   var selectedAnswer1 = document.Questions.question1.value;
   var selectedAnswer2 = document.Questions.question2.value;
   var selectedAnswer3 = document.Questions.question3.value;
   var selectedAnswer4 = document.Questions.question4.value;
   var selectedAnswer5 = document.Questions.question5.value;
   var score = document.getElementById("score");

   if (selectedAnswer1 == ".js"){result+=20};
   if (selectedAnswer2 == "Script tag"){result+=20};
   if (selectedAnswer3 == "Both A & B"){result+=20};
   if (selectedAnswer4 == "Array"){result+=20};
   if (selectedAnswer5 == "Method"){result+=20};
   Questions.style.display = 'none';
   document.getElementsByClassName('guidelines')[0].style.visibility = 'hidden';
   document.getElementsByClassName('ready')[0].style.visibility = 'hidden';
   if (result == 100){
      score.textContent = "Your Score is 100%. Excellent! Your mastery for Javascript is amazing";
   } else if (result == 80){
      score.textContent = "Your Score is 80%.Keep it up!";
     } else if (result == 60){
      score.textContent = "Your Score is 60%.There's room for improvement!";
     }else if (result == 40){
      score.textContent = "Your Score is 40%.You can do better!";
     }else if (result == 20){
      score.textContent = "Your Score is 20%. This is below average!";
     }else if (result == 0){
      score.textContent = "Your Score is 0. Kindly take time to go through your notes" ;
     }
}
