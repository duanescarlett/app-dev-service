// import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse, NextRequest } from 'next/server';
import nodemailer from 'nodemailer'

interface EmailRequestBody {
    name: string;
    email: string;
    message: string;
}

type ResponseData = {
    message: string
}

export async function POST(req: Request) {
    // const { name, email, message } = await req.json()

    const res = await req.json()
    // let response = NextResponse.next()

    const emailAddr = process.env.EMAIL
    const pass = process.env.EMAIL_PASS 

    console.log("email: ", emailAddr)
    console.log("pass: ", pass)

    // Create a transporter object
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: emailAddr,
            pass: pass
        }
    })

    try {
        // Send Mail
        let info = await transporter.sendMail({
            from: emailAddr,
            to: emailAddr,
            subject: "Prospect Inquiry",
            text: `Email: ${res.email}, Name: ${res.name}, Message: ${res.message}`,
            html: `<div>
                <p>User's Email: ${res.email}</p>
                <p>User's Name: ${res.name}</p>
                <p>User's Message: ${res.message}</p>
            </div>`
        })

        return info.response
    } catch (e: any) {
        console.error('Error sending email:', e)
        return e
    }
}