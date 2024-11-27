import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

interface EmailRequestBody {
    name: string;
    email: string;
    message: string;
}

type ResponseData = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
  ) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body as EmailRequestBody

        const emailAddr = process.env.EMAIL
        const pass = process.env.EMAIL_PASS 

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
                text: message
            })

            console.log('Message sent: %s', info.messageId)
            // res.status(200).json({ success: true })
            res.status(200)
        } catch (e: any) {
            console.error('Error sending email:', e)
            // res.status(500).json({ success: false, error: e.message })
            res.status(500)
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' })
    }
}