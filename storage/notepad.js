const saveButton = document.getElementById("save");
saveButton.addEventListener("click", function () {
  const textAreaInput = document.getElementById("content");
  const text = textAreaInput.value;
  localStorage.setItem("notepad", text);
  const successAlert = document.getElementById("successAlert");
  // -----RESET PRECEDENTE ANIMAZIONE-----
  successAlert.classList.remove("alert-coming");
  successAlert.classList.remove("alert-going");
  successAlert.classList.add("invisible");
  // -----RESET PRECEDENTE ANIMAZIONE-----

  successAlert.classList.remove("invisible");
  successAlert.classList.add("alert-coming");

  setTimeout(function () {
    successAlert.classList.add("alert-going");
  }, 3000); // 3s
});
// PULSANTE CARICA
const loadButton = document.getElementById("load");
loadButton.addEventListener("click", function () {
  // recuperare il valore salvato, se presente
  const savedContent = localStorage.getItem("notepad");

  if (savedContent !== null) {
    // o semplicemente if(savedContent)
    // utilizzarlo come nuovo contenuto della textarea
    textAreaInput.value = savedContent;

    //   notificare l'utente dell'operazione andata a buon fine
    const loadAlert = document.getElementById("load-alert");

    // -----RESET PRECEDENTE ANIMAZIONE-----
    loadAlert.classList.remove("alert-coming");
    loadAlert.classList.remove("alert-going");
    loadAlert.classList.add("invisible");
    // -----RESET PRECEDENTE ANIMAZIONE-----

    loadAlert.classList.remove("invisible");
    loadAlert.classList.add("alert-coming");

    setTimeout(function () {
      loadAlert.classList.add("alert-going");
    }, 3000); // 3s
  } else {
    // savedContent era null :\
    // mostriamo un messaggio d'errore
    const errorAlert = document.getElementById("error-alert");

    // -----RESET PRECEDENTE ANIMAZIONE-----
    errorAlert.classList.remove("alert-coming");
    errorAlert.classList.remove("alert-going");
    errorAlert.classList.add("invisible");
    // -----RESET PRECEDENTE ANIMAZIONE-----

    errorAlert.classList.remove("invisible");
    errorAlert.classList.add("alert-coming");

    setTimeout(function () {
      errorAlert.classList.add("alert-going");
    }, 3000); // 3s
  }
});

// PULSANTE RESET
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function () {
  // svuotare la textarea
  textAreaInput.value = "";

  // cancellare la chiave "notepad" dal localStorage
  localStorage.removeItem("notepad");

  // notificare l'utente del reset
  const resetAlert = document.getElementById("reset-alert");

  // -----RESET PRECEDENTE ANIMAZIONE-----
  resetAlert.classList.remove("alert-coming");
  resetAlert.classList.remove("alert-going");
  resetAlert.classList.add("invisible");
  // -----RESET PRECEDENTE ANIMAZIONE-----

  resetAlert.classList.remove("invisible");
  resetAlert.classList.add("alert-coming");

  setTimeout(function () {
    resetAlert.classList.add("alert-going");
  }, 3000); // 3s
});
