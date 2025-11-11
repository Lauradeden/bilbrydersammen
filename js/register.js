const form = document.querySelector("form");

const fullNameOutput = document.querySelector("#full-name-output");
const phoneNumberOutput = document.querySelector("#phonenumber-output");
const locationSelectOutput = document.querySelector("#location-select-output");
const issueOutput = document.querySelector("#issue-output");
const detalisOutput = document.querySelector("#detalis-output");
const termsOutput = document.querySelector("#terms-output");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const fullName = formData.get("full-name");
  const phoneNumber = formData.get("phonenumber");
  const locationSelect = formData.get("location");
  const issue = formData.get("issue");
  const detalis = formData.get("details");
  const terms = formData.get("accept-terms");

  fullNameOutput.textContent = fullName;
  phoneNumberOutput.textContent = phoneNumber;
  locationSelectOutput.textContent = locationSelect;
  issueOutput.textContent = issue;
  detalisOutput.textContent = detalis;
  termsOutput.textContent = terms;

  form.reset();
}
form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
