const formElem = document.getElementsByTagName("form")[0];

formElem.addEventListener("submit", function(e) {
  e.preventDefault();

  const formElem = this,
    userID = formElem.querySelector("input[name='userID']").value,
    password = formElem.querySelector("input[name='password']").value,
    messageBox = formElem.querySelector(".message-box");

  if (userID == "") {
    messageBox.innerHTML = "Please enter userID.";
    return
  }

  if (password == "") {
    messageBox.innerHTML = "Please enter password.";
    return
  }

  let savedUserIDs = localStorage.getItem("userID") ? JSON.parse(localStorage.getItem("userID")) : [],
    savedPasswords = localStorage.getItem("password") ? JSON.parse(localStorage.getItem("password")) : [];

  if (savedUserIDs.length == 0 || savedUserIDs.indexOf(userID) == -1) {
    saveDetails(savedUserIDs, savedPasswords, userID, password);
    redirectTo("homepage")
  } else if (savedPasswords[savedUserIDs.indexOf(userID)] == password) {
    redirectTo("loggedInpage")
  } else {
    messageBox.innerHTML = "Incorrect password."
  }
});

function saveDetails(savedUserIDs, savedPasswords, userID, password) {
  savedUserIDs.unshift(userID);
  savedPasswords.unshift(password);
  localStorage.setItem("userID", JSON.stringify(savedUserIDs));
  localStorage.setItem("password", JSON.stringify(savedPasswords));
}

function redirectTo(str) {
  if (str === "homepage") location.href = location.origin;
  else if (str === "loggedInpage") location.href = location.origin + "/loggedIn";
}