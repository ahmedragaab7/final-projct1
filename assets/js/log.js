login.addEventListener("click", function () {
  mylogin.classList.add("show");
});

log.addEventListener("click", function () {
  mylogin.classList.add("show");
});

signup.addEventListener("click", function () {
  mysignup.classList.add("show");
});

signn.addEventListener("click", function () {
  mysignup.classList.add("show");
});

pass.addEventListener("click", function () {
  mypass.classList.add("show");
});

closesignin.addEventListener("click", function () {
  mylogin.classList.remove("show");
});

closesignup.addEventListener("click", function () {
  mysignup.classList.remove("show");
});

closepass.addEventListener("click", function () {
  mypass.classList.remove("show");
});

window.addEventListener("click", function (event) {
  if (event.target == mylogin) {
    mylogin.classList.remove("show");
  }
});