import { transporter } from "../config/emailConfig.js";

export const sendPortfolioMail = async ({ name, email, mobile, message }) => {
  const mailOptions = {
    from: email,
    to: process.env.MY_EMAIL,
    subject: `New Message from Portfolio - ${name}`,
    html: `
      <h2>New Portfolio Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile:</strong> ${mobile || "Not Provided"}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  };

  await transporter.sendMail(mailOptions);
};
