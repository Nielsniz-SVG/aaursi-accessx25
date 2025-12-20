const USERS = {
  "Dr Zed": "wxcsd54",
  "Dr Ix": "mmopl96"
};

function login() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;
  const err = document.getElementById("error");

  if (USERS[u] && USERS[u] === p) {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("panel").classList.remove("hidden");
    document.getElementById("welcome").textContent =
      `Accès accordé : ${u}`;
  } else {
    err.textContent = "Accès refusé. Tentative enregistrée.";
  }
}
