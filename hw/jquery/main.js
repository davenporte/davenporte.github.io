$(document).ready(function() {
  // all js goes in here
  console.log("we loaded");

  $("#title").css("font-size", "75px");


  $("#contact").html("Photography by Eloise Davenport");


  $("#subtitle1")
    .mouseover(function() {
      $("#subtitle1").css("font-size", "40px");
    })
  $("#subtitle2")
    .mouseover(function() {
      $("#subtitle2").css("font-size", "40px");
    })
  $("#subtitle3")
    .mouseover(function() {
      $("#subtitle3").css("font-size", "40px");
    })
  $("#subtitle4")
    .mouseover(function() {
      $("#subtitle4").css("font-size", "40px");
    })
  $("#subtitle5")
    .mouseover(function() {
      $("#subtitle5").css("font-size", "40px");
    })
  $("#subtitle6")
    .mouseover(function() {
      $("#subtitle6").css("font-size", "40px");
    })


  $("#subtitle1").mouseleave(function() {
    $("#subtitle1").css("color", "#494855");
  })
  $("#subtitle2").mouseleave(function() {
    $("#subtitle2").css("color", "#494855");
  })
  $("#subtitle3").mouseleave(function() {
    $("#subtitle3").css("color", "#494855");
  })
  $("#subtitle4").mouseleave(function() {
    $("#subtitle4").css("color", "#494855");
  })
  $("#subtitle5").mouseleave(function() {
    $("#subtitle5").css("color", "#494855");
  })
  $("#subtitle6").mouseleave(function() {
    $("#subtitle6").css("color", "#494855");
  })


  $("#nav1")
    .click(function() {
      $("#nav1").css("color", "purple");
    })
  $("#nav2")
    .click(function() {
      $("#nav2").css("color", "purple");
    })
  $("#nav3")
    .click(function() {
      $("#nav3").css("color", "purple");
    })
  $("#nav4")
    .click(function() {
      $("#nav4").css("color", "purple");
    })
  $("#nav5")
    .click(function() {
      $("#nav5").css("color", "purple");
    })
  $("#nav6")
    .click(function() {
      $("#nav6").css("color", "purple");
    })
  $("#contact")
    .click(function() {
      $("#contact").css("color", "purple");
    })


  $("#santiago-pic").mouseover(function() {
    $("#text1").fadeIn();
  })
  $("#maipo-pic").mouseover(function() {
    $("#text2").fadeIn();
  })
  $("#atacama-pic").mouseover(function() {
    $("#text3").fadeIn();
  })
  $("#patagonia-pic").mouseover(function() {
    $("#text4").fadeIn();
  })
  $("#valpo-pic").mouseover(function() {
    $("#text5").fadeIn();
  })
  $("#vallenevado-pic").mouseover(function() {
    $("#text6").fadeIn();
  })

});