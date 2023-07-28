let typingDiv = document.getElementsByClassName("special-div");
let typingHeading = document.getElementsByClassName("typing-heading");

setInterval(function () {
  if (typingHeading[0].innerHTML === "Freelancer") {
    typingHeading[0].innerHTML = "Photographer";
    // typingDiv[0].style = "width : 270px !important  ";
  } else if (typingHeading[0].innerHTML === "Photographer") {
    // typingDiv[0].style = "width : 180px !important  ";
    typingHeading[0].innerHTML = "Designer";
  } else if (typingHeading[0].innerHTML === "Designer") {
    // typingDiv[0].style = "width : 200px !important  ";
    typingHeading[0].innerHTML = "Developer";
  } else if (typingHeading[0].innerHTML === "Developer") {
    // typingDiv[0].style = "width : 210px !important  ";
    typingHeading[0].innerHTML = "Freelancer";
  }
}, 4000);
