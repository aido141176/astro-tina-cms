import { Resend } from 'resend';

const prerender = false;
const POST = async ({ request }) => {
  const body = await request.json();
  const resend = new Resend("re_Qxjm4FKZ_PFb5WmtsyoYzJDdmEJGW9tAD");
  try {
    await resend.emails.send({
      from: "Website <onboarding@resend.dev>",
      to: ["aidencole@hotmail.com"],
      subject: "New Contact Form Submission",
      html: `
        <h2>New Message</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p>${body.message}</p>
      `
    });
    return new Response(JSON.stringify({ success: true }), {
      status: 200
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Email failed" }), {
      status: 500
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
