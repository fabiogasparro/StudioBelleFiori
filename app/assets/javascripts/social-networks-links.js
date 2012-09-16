$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
  $("#facebook_link").mouseover(function() {
  	$("#facebook_link").attr("src", "/assets/facebook_small_highlighted.png");
  });
  $("#facebook_link").mouseout(function() {
  	$("#facebook_link").attr("src", "/assets/facebook_small.png");
  });
  $("#twitter_link").mouseover(function() {
  	$("#twitter_link").attr("src", "/assets/twitter_small_highlighted.png");
  });
  $("#twitter_link").mouseout(function() {
  	$("#twitter_link").attr("src", "/assets/twitter_small.png");
  });
  $("#youtube_link").mouseover(function() {
  	$("#youtube_link").attr("src", "/assets/youtube_small_highlighted.png");
  });
  $("#youtube_link").mouseout(function() {
  	$("#youtube_link").attr("src", "/assets/youtube_small.png");
  });
});