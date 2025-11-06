const form = document.querySelector("form");
function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleForm(event) {
  event.preventDefault();
  // indsæt her
  form.reset();
}
form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
