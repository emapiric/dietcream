$(function() {
  $("#dugme-levo").click(zameniPonudu);
  $("#dugme-desno").click(zameniPonudu);
});

function zameniPonudu() {
  var prvaTri = $("#prva-tri-ukusa");
  var drugaTri = $("#druga-tri-ukusa");
  var prvaTriDisplay = prvaTri.css("display");

  if (prvaTriDisplay === "none") {
    prvaTri.css("display", "grid");
    drugaTri.hide();
  } else {
    prvaTri.hide();
    drugaTri.css("display", "grid");
  }
}
