$(document).ready(function(){

  $("#takeQuiz").click(function(){
    $(".quizForm").slideDown();
  });

  $(".quizForm").submit(function(){
    var answer1 = parseInt($("#question1").val());
    var answer2 = parseInt($("#question2").val());
    var answer3 = parseInt($("#question3").val());
    var totalScore = answer1 + answer2 + answer3;

    if (totalScore <= 4) {
      $(".css").slideDown();
      $(".cSharp, .java, .ruby").hide();
    } else if (totalScore > 4 && totalScore <= 7) {
      $(".cSharp").show();
      $(".css, .java, .ruby").hide();
    } else if (totalScore > 7 && totalScore <= 10) {
      $(".java").show();
      $(".css, .cSharp, .ruby").hide();
    } else {
      $(".ruby").show();
      $(".css, .cSharp, .java").hide();
    }
      
    event.preventDefault();
  });
});
