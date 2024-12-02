import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
    const { name, email, topic, message } = await req.json();

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        secure: true,
        port: 465,
    });

    await new Promise((resolve, reject) => {
        transporter.verify(function (error, success) {
            if(error) {
                console.log(error)
                reject(error)
            } else {
                resolve(success)
            }
        })
    })

    const mailOptions = {
        from: email,
        to: process.env.RECIPMENT_EMAIL,
        subject: topic,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    }

    await new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (err, info) => {
            if(err) {
                console.log(err)
                reject(err)
            } else {
                resolve(info)
            }
        })
    })

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Wiadomość wysłana!' });
    } catch (error) {
        console.error('Error sending email: ', error);
        return NextResponse.json({ message: 'Błąd wysyłania wiadomości' });
    }
}
