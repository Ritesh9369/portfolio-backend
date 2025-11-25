import { sendPortfolioMail } from "../services/mailService.js";

export const handleSendMail = async (req, res) => {
  const { name, email, mobile, message } = req.body;

  try {
    await sendPortfolioMail({ name, email, mobile, message });

    res.status(200).json({
      success: true,
      message: "Mail sent successfully ✔"
    });
  } catch (error) {
    console.log("Mail Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send mail ❌"
    });
  }
};
