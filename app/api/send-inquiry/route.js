
import { NextResponse } from 'next/server';
import formidable from 'formidable';
import { Readable } from 'stream';
import nodemailer from 'nodemailer';



// Helper: Convert Web API Request to Node.js stream
async function requestToStream(request) {
  const body = await request.arrayBuffer();
  const readable = Readable.from(Buffer.from(body));
  readable.headers = Object.fromEntries(request.headers.entries());
  readable.method = request.method;
  return readable;
}

export async function POST(req) {
  const form = formidable();

  const streamReq = await requestToStream(req);

  const { fields } = await new Promise((resolve, reject) => {
    form.parse(streamReq, (err, fields) => {
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
    console.error('Email send error:', error);
    return NextResponse.json({ success: false, error: 'Email failed to send.' }, { status: 500 });
  }
}
