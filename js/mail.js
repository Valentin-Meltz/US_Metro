document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('description').value;

  const response = await fetch("http://localhost:3000/api/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, message })
  });

  if (response.ok) {
    alert("Message envoyé !");
  } else {
    alert("Erreur d'envoi.");
  }
});