<?php
include 'path.php';
 ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Would you rather</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet">
    <script src="assets/js/jquery-3.6.0.min.js"></script>
    <link href="assets/css/fontawesome.min.css" rel="stylesheet">
    <link href="assets/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/mainStyle.css">
    <link rel="stylesheet" href="assets/css/mobileStyle.css">
    <script src="assets/js/functionality.js"></script>

  </head>
  <body>
      
      

<!-- Loading Screen content -->
<div class="loading_screen">
  <img src="assets/img/loading/loading.gif" alt="">
</div>
<!-- Loading Screen content -->


<!-- Settings bar content -->
<?php include(ROOT_PATH . '/include/settingsContent.php'); ?>
<!-- Settings bar content -->
    
    
<!-- Header content -->
<?php include(ROOT_PATH . '/include/navContent.php'); ?>
<!-- Header content -->




<!-- Trivia content -->
<div class="triviaContent">
<div class="question_box">
  <div class="qtn_sgn">
    <i id="sgn_one" class="fas fa-lg fa-question"></i> <i id="sgn_two" class="fas fa-2x fa-question"></i> <i id="sgn_three"class="fas fa-lg fa-question"></i>
  </div>
<h1><span>Would you Rather</span></h1>
</div>
<div class="choice_option">
  <!--Blue questions section-->
<a id="blue_sel">
  <p id="blue"></p>
  <div class="">

  </div>
</a>
  <!--Blue questions section-->

  <!--Red questions section-->
<a id="red_sel">
  <p id="red"></p>
  <div class="">

  </div>
</a>
  <!--Red questions section-->
<span>OR</span>
</div>
<div class="nxt_qn_wrapper">
  <a id="nxt_qn">Next  <i class="fas fa-chevron-right"></i></a>
</div>
<div id="UpdateJson">

</div>
</div>

<!-- Trivia content -->
  </body>

    <script src="assets/js/questions.js"></script>
</html>
