$(function(){
  var $refreshButton = $('#refresh');
  var $results = $('#css_result');
  
  function refresh(){
    var css = $('style.cp-pen-styles').text();
    $results.html(css);
  }

  refresh();
  $refreshButton.click(refresh);
  
  // Select all the contents when clicked
  $results.click(function(){
    $(this).select();
  });
});



videojs("my_video_1").ready(function(){
  var myPlayer = videojs('my_video_1');
  myPlayer.play();
  myPlayer.addChild('BigPlayButton');
});