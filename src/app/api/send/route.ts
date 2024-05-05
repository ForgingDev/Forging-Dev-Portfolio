import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
  const { name, company, phone, email, subject, message } = await req.json();

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "dimoiubogdan03@gmail.com",
      subject,
      html: `<div>
      <p>Name: ${name}</p>
      <br />
      <p>Company: ${company}</p>
      <br />
      <p>Phone: ${phone}</p>
      <br />
      <p>Email: ${email}</p>
      <br />
      <p>Subject: ${subject}</p>
      <br />
      <p>${message}</p>
      <div>`,
    });

    return new Response("Email sent", { status: 200 });
  } catch (error) {
    console.error(error);

    return new Response("Email not sent", { status: 500 });
  }
}
