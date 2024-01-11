const FormData = require("../models/form data");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv")
dotenv.config()
const sendMail = async (req, res) => {
  const { email, subject, mailMessage } = req.body;
  // const currentUser = req.user._id;
  if (!email || !subject || !mailMessage) {
    return res.status(400).json({ success: false, message: "Invalid Data" });
  }
  try {
    // sending the mail 
    let mailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    let mailDetails = {
      from: process.env.EMAIL,
      to: email,
      subject: subject,
      message: mailMessage,
    };
    mailTransporter.sendMail(mailDetails);

    //storing the mail details in db
    await FormData.create({
      sender:process.env.EMAIL,
      receiver:email,
      subject:subject,
      message:mailMessage,
    });
    return res.status(200).json({success:true,message:"Mail Sent SuccessFully"});
  } catch (err) {
    return res.status(500).json({success:false,message:"Internal Server Error " + err.message})
  }
};

module.exports = {sendMail};
