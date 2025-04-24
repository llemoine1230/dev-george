$(document).ready(function () {
  //code goes here
  $("#saveReadingData").on("click", function () {
    //call f/n
    let statusText = underConstruction("not ready");
    //update the status
    $("#saveReadingData").text(statusText).prop("disabled", true);
  });
  //function to pass a status (ready or not ready) and get back a message for user
  //rn, not ready
  function underConstruction(status) {
    return "not yet ready";
  }
});

//document.body.style.backgroundColor = "";
// var el = document.getElementById("firstLog");
//el.innerText = "who cares about barry's parking";

//$("body").css("background-color", "");
//$("#firstLog").css("background-color", "");