var readlinesync=require("readline-sync");
var username=readlinesync.question("what is your name?");
console.log("welcome to quiz", username," do u know me? ");
score=0;
function quiz(question,answer)
  {
    var useranswer=readlinesync.question(question+"answer is ");
    
    high= {
      name1:"vishal",
        score1:5,
        name2:"sonu",
          score2:1,
      name3:"aarthi",
        score3:4
    };
  
    
    
    if(useranswer===answer)
    {
      console.log("your correct");
      score=score+1;
      console.log("current score is : ",score);
    }
    else{
      console.log("your wrong");
      score=score-1;
      console.log("current score is: ",score);
    }
  }
var questions=[
  { 
    question: "what is my name?\na:vishal\nb: sonu\nc:builder\n",
     answer: "a"
  },
{ question: "what is my age?\n a: 24\n b: 25\nc: 18\n",
  answer:"a" 
},
  {
    question: "where do i work?\na:gym\nb: tcs\nc: hotel\n",
      answer:"b"
  },
{ 
  question: "where do i live?\na: hyd\n b: delhi\nc: pune\n",
   answer:"a"
},
 { 
   question:"am i single?\na: yes\nb: no\nc: mingle\n",
     answer:"c"},
              ];
for(var i=0;i<questions.length;i++)
{
  var list=(questions[i]);
  quiz(list.question,list.answer)
}
console.log("your final updated score is ",score);
console.log("send me screeshot to update highestscorer")
console.log("congralutions " + "highest scorer is"+"\nname:",high.name1+"\nscore:",high.score1,);

