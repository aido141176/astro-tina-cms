import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();

  const resend = new Resend(import.meta.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Website <contact@contact.amcd.com.au>",
      to: ["aidencole@hotmail.com"],
      subject: "New Contact Form Submission",
      html: `
        <h2>New Message</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p>${body.message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: "Email failed" }), {
      status: 500,
    });
  }
};