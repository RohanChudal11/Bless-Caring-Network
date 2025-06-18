import { NextResponse } from 'next/server';
import formidable from 'formidable';
import nodemailer from 'nodemailer';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  const form = formidable();
  const buffer = Buffer.from(await req.arrayBuffer());

  const { fields } = await new Promise((resolve, reject) => {
    form.parse(buffer, (err, fields) => {
      if (err) reject(err);
      else resolve({ fields });
    });
  });

  const { name, email, message, topic } = fields;

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MY_EMAIL,
      subject: `📬 Inquiry: ${topic}`,
      text: `Topic: ${topic}\nFrom: ${name} <${email}>\n\n${message || 'No message provided.'}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Inquiry error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send' }, { status: 500 });
  }
}
