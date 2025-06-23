import { NextResponse } from 'next/server';
import formidable from 'formidable';
import { Readable } from 'stream';
import nodemailer from 'nodemailer';
import fs from 'fs';

// Disable body parsing by Next.js for file upload
export const runtime = 'nodejs'; // Use Node.js runtime
export const dynamic = 'force-dynamic'; // Ensure dynamic route execution

// Convert web request to readable stream
async function requestToStream(request) {
  const body = await request.arrayBuffer();
  const readable = Readable.from(Buffer.from(body));
  readable.headers = Object.fromEntries(request.headers.entries());
  readable.method = request.method;
  return readable;
}

export async function POST(req) {
  try {
    const form = formidable({ multiples: false, keepExtensions: true });
    const streamReq = await requestToStream(req);

    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(streamReq, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });

    const { name, email, message, topic, phone } = fields;
    const resume = files.resume;

    if (!name || !email || !resume) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
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
      subject: `📬 Inquiry: ${topic || 'Join Our Team'}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message || 'No message provided.'}`,
      attachments: [
        {
          filename: resume.originalFilename || 'resume.pdf',
          path: resume.filepath,
          contentType: resume.mimetype,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ success: false, error: 'Email failed to send' }, { status: 500 });
  }
}
