document.getElementById("submitButton").addEventListener("click", () => {
  event.preventDefault();
  let input = document.getElementById("inputBox").value;
  let newDiv = creatElementById("div");
  let newNote = document.createTextNode(input);
  newDiv.appendChild(newNote);
  document.getElementById("notes").appendChild(newDiv);
  document.getElementById("inputBox").value = "";
  document.getElementById("inputBox").focus();
})