import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';

export async function POST(req: NextRequest) {

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();

    const { name, contact, service, message } = body;
    console.log(name, service, contact, message);

    try {
        const { data, error } = await resend.emails.send({
            from: 'SS Electrician <bookings@sselectrician.online>',
            to: ['das.sanjib4294@gmail.com'],
            subject: `${service} booking `,
            html: `
                <p>Dear Sanjib Das,

                ${name} wants to book your service and below are the details:
                </p>
                <br/>
                <table border="1" cellspacing="0" cellpadding="8">
                  <tr>
                   <td><strong>Name</strong></td>
                   <td>${name}</td>
                 </tr>
                 <tr>
                   <td><strong>Contact</strong></td>
                   <td>${contact}</td>
                 </tr>
                 <tr>
                  <td><strong>Service</strong></td>
                  <td>${service}</td>
                </tr>
                 <tr>
                  <td><strong>Message</strong></td>
                  <td>${message}</td>
                 </tr>
                </table>

                <p>For any additional information you can contact ${name} on ${contact}</p>

                <p>Thank you</p>`
        });

        if (error) {
            return NextResponse.json({
                success: false,
                message: `Error sending email`
            }, { status: 500 });
        }

        return NextResponse.json({
            success: true,
            message: `Mail sent`
        }, { status: 200 });
    }
    catch (err) {
        console.log(`Something went wrong -> ${err}`)
        return NextResponse.json({
            success: false,
            message: `Something went wrong`
        }, { status: 505 });
    }
}