import type { APIRoute } from "astro";
import { Resend } from "resend";

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const email = formData.get("email")?.toString() || "";
    const formType = formData.get("formType")?.toString() || "contact";

    const formatLabel = (key: string) =>
      key.charAt(0).toUpperCase() + key.slice(1);

    const html = `
      <h2>New ${formType} submission</h2>
      ${Array.from(formData.entries())
        .map(([key, value]) => {
          if (key === "formType") return "";
          return `<p><strong>${formatLabel(key)}:</strong> ${value}</p>`;
        })
        .join("")}
    `;

    const resend = new Resend(import.meta.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Website <contact@contact.amcd.com.au>", // change this
      to: ["contact@amcd.com.au"], // change this
      replyTo: email,
      subject: `New ${formType} submission`,
      html,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("Email error:", error);

    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500 }
    );
  }
};