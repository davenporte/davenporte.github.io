$(document).ready(function() {
      // all js goes in here
      console.log("we loaded");

      $("#nav1")
        .mouseover(function() {
          $("#nav1").css("color", "#F9374D");
        })
      // why isn't this working

      // $(".text-about").mouseover(function() {
      //   $("#learnmore").fadeIn();
      // })
      // why is this not working either??

      $("#distraction")
        .mouseover(function() {
          $("#distraction").css("color", "#F9374D");
        })