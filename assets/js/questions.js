let bluenoOfQuestions = 0;
let rednoOfQuestions = 0;
let redClicked = true;
let blueClicked = true;
const blue =
{
  answered:false,
  questions:
  ["have the ability to see 10 minutes into the future",
  "have telekinesis (the ability to move things with your mind)",
  "team up with Wonder Woman",
  "be forced to sing along to every single song you hear",
  "find true love today",
  "be in jail for five years",
  "have another 10 years with your partner",
  "be chronically under-dressed",
  "have everyone you know be able to read your thoughts",
  "lose your sight",
  "have universal respect",
  "give up the Internet for the rest of your life",
  "swim in a pool full of Nutella",
  "labor under a hot sun",
  "stay in during a snow day",
  "never be able to go out during the day",
  "have a personal maid",
  "have Beyoncé’s talent",
  "be 11 feet tall",
  "the lead in a box office bomb",
  "vomit on your hero",
  "never be able to text at all ever again",
  "be royalty 1,000 years ago",
  "be on the beach",
  "wear the same underwear for a week",
  "work an overtime shift with your annoying boss",
  "pal around with a panda",
  "have a sing-off with Ariana Grande",
  "always have B.O. and not know it"
]
}

const red =
{
  answered:false,
  questions:
  ["have the ability to see 150 years into the future",
  "have telepathy (the ability to read minds)",
  "team up with Captain Marvel",
  "be forced to dance to every single song you hear",
  "win the lottery next year",
  "be in a coma for a decade",
  "a one-night stand with your celebrity crush",
  "be chronically overdressed",
  "for everyone you know to have access to your Internet history",
  "lose your memories",
  "have unlimited power",
  "give up air conditioning and heating for the rest of your life",
  "swim in a pool full of maple syrup",
  "labor under extreme cold",
  "build a fort",
  "never be able to go out at night",
  "have a personal chef",
  "Jay-Z‘s business acumen",
  "nine inches tall",
  "be an extra in an Oscar-winning movie",
  "have your hero vomit on you",
  "communicate only in emoji",
  "an average person today",
  "lounge by the pool",
  "wear the same socks for a month",
  "spend full day with your mother-in-law",
  "cuddle a koala",
  "a dance-off with Rihanna",
  "always smell B.O. on everyone else"
]
}


var left_question = document.getElementById('blue');
var right_question = document.getElementById('red');


left_question.innerHTML += blue.questions[bluenoOfQuestions];
right_question.innerHTML += red.questions[rednoOfQuestions];
//console.log('before:' + bluenoOfQuestions);
//console.log(blue.questions[bluenoOfQuestions]);

document.getElementById('blue_sel').addEventListener('click',blueAnswered);
document.getElementById('red_sel').addEventListener('click',redAnswered);
document.getElementById('nxt_qn').addEventListener('click',nxtBtnClicked);


function blueAnswered()
 {
   blue.answered = true;
   if (blue.answered == true)
   {
     $('.loading_screen').show();
     fetch("./assets/api/QuestionsData.json").then(function(response){
       return response.json();
     }).then(function(obj){
         for(var k in obj)
         {
           if (obj[k]['QuestionNo'] == bluenoOfQuestions)
           {
             //console.log('hh:'+obj[k]['QuestionNo']);
             var noOfRedClicks = obj[k]['RedNumberofClicks'];
             //console.log('Red:'+noOfRedClicks);
             var noOfBlueClicks = obj[k]['BlueNumberofClicks'];
             //console.log('Blue:'+noOfBlueClicks);
             var totalNoOfClicks = noOfRedClicks + noOfBlueClicks;
             //console.log('Blue + Red:'+totalNoOfClicks);
             var percentageOfBlueClicks = (noOfBlueClicks/totalNoOfClicks) * 100;
             var percentageOfRedClicks = (noOfRedClicks/totalNoOfClicks) * 100;
             var bluejsonNo = obj[k]['QuestionNo'];
             if (blueClicked == true)
             {
               $('#UpdateJson').load('helpers/VerifyJson',{
                 bluejsonNo:bluejsonNo
               });
               redClicked = false;
               blueClicked = false;
             }
             left_question.innerHTML = " ";
             left_question.innerHTML += "<h3 style='font-weight:bold;'><section class='percentage_display'>" + Math.round(percentageOfBlueClicks) + "%</section><br> chose this";
             right_question.innerHTML = " ";
             right_question.innerHTML += "<h3 style='font-weight:bold;'><section class='percentage_display'>" + Math.round(percentageOfRedClicks) + "%</section><br> chose this";
             $('.nxt_qn_wrapper').fadeIn();
             $('.loading_screen').fadeOut();
           }
         }
     }).catch(function(error) {
       console.error("something went wrong");
       console.error(error);
     });
     blue.answered = false;
     Playsfx();
     document.getElementById('blue_sel').style.background = '#5DADE2';
     document.getElementById('blue_sel').style.boxShadow = '0px 2px 5px blue';
     document.getElementById('red_sel').style.background = '#E74C3C';
     document.getElementById('red_sel').style.boxShadow = '0px 2px 5px rgba(0, 0, 0, 0.7)';
   }
 }


 function redAnswered()
  {
    red.answered = true;
    if (red.answered == true)
    {
      $('.loading_screen').show();
      fetch("./assets/api/QuestionsData.json").then(function(response){
        return response.json();
      }).then(function(obj){
          for(var k in obj)
          {
            if (obj[k]['QuestionNo'] == rednoOfQuestions)
            {
              var noOfRedClicks = obj[k]['RedNumberofClicks'];
              var noOfBlueClicks = obj[k]['BlueNumberofClicks'];
              var totalNoOfClicks = noOfRedClicks + noOfBlueClicks;
              var percentageOfBlueClicks = (noOfBlueClicks/totalNoOfClicks) * 100;
              var percentageOfRedClicks = (noOfRedClicks/totalNoOfClicks) * 100;
              var redjsonNo = obj[k]['QuestionNo'];

              if (redClicked == true)
              {
              $('#UpdateJson').load('helpers/VerifyJson',{
                redjsonNo:redjsonNo
              });
              redClicked = false;
              blueClicked = false;
              }
              //console.log(obj[k]['QuestionNo']);
              right_question.innerHTML = " ";
              right_question.innerHTML += "<h3 style='font-weight:bold;'><section class='percentage_display'>" + Math.round(percentageOfRedClicks) + "%</section><br> chose this</h3>";
              left_question.innerHTML = " ";
              left_question.innerHTML +=  "<h3 style='font-weight:bold;'><section class='percentage_display'>" + Math.round(percentageOfBlueClicks) + "%</section><br> chose this</h3>";
              $('.nxt_qn_wrapper').fadeIn();
              $('.loading_screen').fadeOut();
            }
          }
      }).catch(function(error) {
        console.error("something went wrong");
        console.error(error);
      });
      red.answered = false;
      Playsfx();
      document.getElementById('red_sel').style.background = '#E74C3C';
      document.getElementById('red_sel').style.boxShadow = '0px 2px 5px red';
      document.getElementById('blue_sel').style.background = '#3498DB';
      document.getElementById('blue_sel').style.boxShadow = '0px 2px 5px rgba(0, 0, 0, 0.7)';
    }
  }


function nxtBtnClicked()
{
  Playsfx();
  document.getElementById('blue_sel').style.background = '#3498DB';
  document.getElementById('blue_sel').style.boxShadow = '0px 2px 5px rgba(0, 0, 0, 0.7)';
  document.getElementById('red_sel').style.background = '#E74C3C';
  document.getElementById('red_sel').style.boxShadow = '0px 2px 5px rgba(0, 0, 0, 0.7)';
  left_question.innerHTML = " ";
  right_question.innerHTML = " ";
  redClicked = true;
  blueClicked = true;
  blue.questions[bluenoOfQuestions++];
  red.questions[rednoOfQuestions++];
  left_question.innerHTML += blue.questions[bluenoOfQuestions];
  right_question.innerHTML += red.questions[rednoOfQuestions];
  if (rednoOfQuestions >= 29 && bluenoOfQuestions >= 29)
  {
    bluenoOfQuestions = 0;
    rednoOfQuestions = 0;
  }
  //console.log('after:'+bluenoOfQuestions);
}
