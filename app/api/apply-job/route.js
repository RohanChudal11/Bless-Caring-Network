import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, jobTitle, message, resume } = body;

    if (!name || !email || !jobTitle || !resume?.content) {
      return NextResponse.json({ success: false, error: 'Missing fields' }, { status: 400 });
    }

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
      attachments: [
        {
          filename: resume.name,
          content: resume.content,
          encoding: 'base64',
          contentType: resume.type,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: err.message || 'Internal Error' }, { status: 500 });
  }
}
