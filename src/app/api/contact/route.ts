import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return new Response('Campos requeridos', { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Boolean(process.env.SMTP_SECURE === 'true'),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_TO,        // tu correo de destino
      subject: 'Nuevo mensaje desde la web',
      text: message,
      html: `<p>${message}</p>`,
    });

    return new Response('OK', { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response('Error interno', { status: 500 });
  }
}
