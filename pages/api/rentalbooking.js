import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const {
    name,
    email,
    phone,
    message,
    cartypes,
    startdate,
    enddate,
    carinaddis,
    destination,
  } = await req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  // Define the email options
  const mailOptions = {
    from: process.env.NODEMAILER_USER,
    to: "panethiopian@gmail.com",
    subject: "PanEthiopia Car Booking",
    text: `Name: ${name} \nEmail: ${email} \nphone: ${phone} \nStart Date: ${startdate} \nEnd Date: ${enddate} \nCar Types: ${cartypes} \nCar in Addis Ababa?: ${carinaddis} \nDestination: ${destination}  \nMessage: ${message}`,
  };
  // console.log(mailOptions);
  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(405).end(); // Method Not Allowed
  }
}
