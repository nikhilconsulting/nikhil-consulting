import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email } = body;

    if (!name || !email) {
      return new Response(JSON.stringify({ error: 'Missing name or email' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your password or app password
      },
    });

    // Send mail
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'your-receiving-email@example.com',
      subject: 'New Hero Inquiry',
      text: `Name: ${name}\nEmail: ${email}`,
    });

    return new Response(JSON.stringify({ message: 'Mail sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Email send error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send mail' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
