document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  let isRequire = false
  if(requireInput('name')){
    document.getElementById('name').style.borderColor = "red"; 
    isRequire = true
  } else{
    document.getElementById('name').style.borderColor = "";
  }
  if(requireInput('email')){
    document.getElementById('email').style.borderColor = "red";
    isRequire = true
  } else{
    document.getElementById('email').style.borderColor = "";
  }
  if(requireInput('description')){
    document.getElementById('description').style.borderColor = "red";
    isRequire = true
  } else{
    document.getElementById('description').style.borderColor = "";
  }

  if(!isRequire){
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
      document.getElementById('name').value = ""; 
      document.getElementById('email').value = ""; 
      document.getElementById('description').value = ""; 
    } else {
      alert("Erreur d'envoi.");
    }
  }
});

function requireInput(id){
  const input = document.getElementById(id);
  if(input.value.trim() === ""){
    return true;
  }
  
  return false;
}