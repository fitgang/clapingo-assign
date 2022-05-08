const formElem = document.getElementsByTagName("form")[0];

formElem.addEventListener("submit", function() {
  const formElem = this,
    userID = formElem.querySelector("input[name='userID']").value,
    password = formElem.querySelector("input[name='password']").value;

  let savedUserIDs = localStorage.getItem("userID") ? JSON.parse(localStorage.getItem("userID")) : [],
    savedPasswords = localStorage.getItem("password") ? JSON.parse(localStorage.getItem("password")) : [];
  if (savedUserIDs.length == 0) {
    saveDetails(savedUserIDs, savedPasswords, userID, password);
    redirectToHomepage()
  } else if (savedUserIDs.includes(userID)) {
    if (localStorage.getItem("password") == password) {}
  }
});

function saveDetails(savedUserIDs, savedPasswords, userID, password) {
  savedUserIDs.unshift(userID);
  savedPasswords.unshift(password);
  localStorage.setItem("userID", JSON.stringify(savedUserIDs));
  localStorage.setItem("password", JSON.stringify(savedPasswords));
}

function redirectToHomepage() {
  location.href = location.origin;
}