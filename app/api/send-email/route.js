import { NextResponse } from 'next/server';
import formidable from 'formidable';
import nodemailer from 'nodemailer';
import fs from 'fs/promises';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  const form = formidable({ multiples: false, keepExtensions: true });

  const buffer = await req.arrayBuffer();
  const formPromise = new Promise((resolve, reject) => {
    form.parse(Buffer.from(buffer), (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });

  try {
    const { fields, files } = await formPromise;
    const { name, email, phone, message } = fields;
    const file = files.file;

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
      subject: '📬 New Message from Contact Form',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
      attachments: file
        ? [
            {
              filename: file.originalFilename,
              path: file.filepath,
            },
          ]
        : [],
      headers: {
        'List-Unsubscribe': `<mailto:${process.env.MY_EMAIL}?subject=unsubscribe>`,
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Email failed:', err);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
