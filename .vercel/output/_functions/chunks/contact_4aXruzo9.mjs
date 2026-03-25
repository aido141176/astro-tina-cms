import { c as createComponent } from './astro-component_DLL5aZ1g.mjs';
import 'piccolore';
import { n as createRenderInstruction, m as maybeRenderHead, r as renderTemplate, l as renderComponent } from './entrypoint_DpV7OxFF.mjs';
import { $ as $$BaseLayout } from './BaseLayout_B5rjJtfq.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form id="contact-form" class="max-w-xl mx-auto space-y-4"> <input type="text" name="name" placeholder="Your Name" required class="w-full p-3 border rounded"> <input type="email" name="email" placeholder="Your Email" required class="w-full p-3 border rounded"> <textarea name="message" placeholder="Your Message" required class="w-full p-3 border rounded"></textarea> <button type="submit" class="px-6 py-3 text-white bg-blue-600 rounded">
Send Message
</button> <p id="form-status" class="text-sm"></p> </form> ${renderScript($$result, "C:/wamp64/www/astro-tina-cms/src/components/sections/ContactForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/wamp64/www/astro-tina-cms/src/components/sections/ContactForm.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contact | Web Design Perth", "description": "Get in touch for a fast, modern website.", "url": "https://astro-tina-cms.vercel.app/contact" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="px-4 py-20"> <h1 class="mb-6 text-3xl font-bold text-center">Contact Us</h1> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} </div> ` })}`;
}, "C:/wamp64/www/astro-tina-cms/src/pages/contact.astro", void 0);

const $$file = "C:/wamp64/www/astro-tina-cms/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
