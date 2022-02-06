function mySubmitTest(){

   var result = 0;
   var answer1 = document.Questions.question1.value;
   var answer2 = document.Questions.question2.value;
   var answer3 = document.Questions.question3.value;
   var answer4 = document.Questions.question4.value;
   var answer5 = document.Questions.question5.value;

   if (answer1 == ".js"){result+=20};
   if (answer2 == "Script tag"){result+=20};
   if (answer3 == "Both A & B"){result+=20};
   if (answer4 == "Array"){result+=20};
   if (answer5 == "Method"){result+=20};
   Questions.style.display = 'none';

   
}