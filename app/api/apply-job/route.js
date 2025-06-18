import { NextResponse } from 'next/server';
import formidable from 'formidable';
import nodemailer from 'nodemailer';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  const form = formidable({ keepExtensions: true });
  const buffer = Buffer.from(await req.arrayBuffer());

  const { fields, files } = await new Promise((resolve, reject) => {
    form.parse(buffer, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });

  const { name, email, message, jobTitle } = fields;
  const resume = files.resume;

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
      subject: `📄 Job Application – ${jobTitle}`,
      text: `New Application:\n\nName: ${name}\nEmail: ${email}\nJob: ${jobTitle}\n\nMessage:\n${message || 'N/A'}`,
      attachments: resume ? [{
        filename: resume.originalFilename,
        path: resume.filepath,
      }] : [],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Email error:', err);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
