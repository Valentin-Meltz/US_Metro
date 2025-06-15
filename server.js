const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post("/api/send", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pentaparisest@gmail.com",
      pass: "hfui vzsg htrg tkvw"
    }
  });

  const mailOptions = {
    from: email,
    to: "pentaparisest@gmail.com",
    subject: "[Contact] - Message depuis le site US Metro",
    text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email envoyé !");
  } catch (error) {
    console.error("Erreur d'envoi :", error);
    res.status(500).send("Erreur serveur");
  }
});

app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});