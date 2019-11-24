$(document).ready(function() {
  $("#forma").submit(function(e) {
    e.preventDefault();
    submitForm();
  });
});

function submitForm() {
  isFormValid()
    ? window.alert("Forma je uspesno prosledjena")
    : window.alert("Popunite obavezna polja");
}

function isFormValid() {
  var ime = document.getElementById("ime");
  var prezime = document.getElementById("prezime");
  var email = document.getElementById("email");
  var poruka = document.getElementById("poruka");

  if (
    ime.value.trim("") == "" ||
    prezime.value.trim("") == "" ||
    email.value.trim("") == "" ||
    poruka.value.trim("") == ""
  ) {
    return false;
  } else {
    return true;
  }
}
