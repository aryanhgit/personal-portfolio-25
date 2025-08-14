import nodemailer from 'nodemailer';

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = request.body;

  if (!name || !email || !message) {
    return response.status(400).json({ message: 'All fields are required.' });
  }

  // Create a Nodemailer transporter using your email service's SMTP details
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or 'SendGrid', 'Outlook', etc.
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your app password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // The recipient's email address
    subject: `New message from ${name} via your contact form`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    response.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    response.status(500).json({ message: 'Failed to send email.' });
  }
}