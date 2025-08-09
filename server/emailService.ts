import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.eu',  // Changed to EU server since it's a Malta-based organization
  port: 465,
  secure: true, // use SSL
  auth: {
    user: 'no-reply@guidedogsmalta.org',
    pass: 'Noreply2025!'
  },
  tls: {
    rejectUnauthorized: true
  }
});

export async function sendEmail(subject: string, text: string) {
  console.log('Attempting to send email:', {
    from: 'no-reply@guidedogsmalta.org',
    to: 'submissions@guidedogsmalta.org',
    subject
  });

  const mailOptions = {
    from: 'no-reply@guidedogsmalta.org',
    to: 'submissions@guidedogsmalta.org',
    subject,
    text
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}