for (var i = 0; i < 4; i++) {
  document.querySelectorAll(".ribon")[i].addEventListener("click", function () {
    var selectedPr = this.querySelector("h2").textContent;

    console.log(selectedPr);
    makeToggle(selectedPr);
  });
}
var txt1 = "What is Netflix?";
var txt2 = "How much does Netflix cost?";
var txt3 = "Where can I watch?";
var txt4 = "How do I cancel?";

function makeToggle(txt) {
  switch (txt) {
    case txt1:
      $("#pr2").slideUp();
      $("#pr3").slideUp();
      $("#pr4").slideUp();
      $("#pr1").slideToggle();

      break;
    case txt2:
        $("#pr1").slideUp();
      $("#pr3").slideUp();
      $("#pr4").slideUp();
      $("#pr2").slideToggle();
      break;
    case txt3:
        $("#pr1").slideUp();
        $("#pr2").slideUp();
        $("#pr4").slideUp();
      $("#pr3").slideToggle();
      break;
    case txt4:
        $("#pr1").slideUp();
        $("#pr3").slideUp();
        $("#pr2").slideUp();
      $("#pr4").slideToggle();
      break;
  }
}
