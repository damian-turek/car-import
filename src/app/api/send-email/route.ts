import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
    const { name, email, topic, message } = await req.json();

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        logger: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        secure: true,
        port: 465,
    });

    const mailOptions = {
        from: email,
        to: process.env.RECIPMENT_EMAIL,
        subject: topic,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    }

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Wiadomość wysłana!' });
    } catch (error) {
        console.error('Error sending email: ', error);
        return NextResponse.json({ message: 'Błąd wysyłania wiadomości' });
    }
}
