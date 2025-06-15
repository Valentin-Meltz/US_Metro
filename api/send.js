const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Méthode non autorisée");
  }

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
}