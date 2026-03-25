import { c as createComponent } from './astro-component_DLL5aZ1g.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_DpV7OxFF.mjs';
import { $ as $$BaseLayout } from './BaseLayout_B5rjJtfq.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About Us | Web Design Perth", "description": "Learn about our web design process and how we help businesses grow online.", "url": "https://yoursite.com/about" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl px-4 py-20 mx-auto"> <h1 class="mb-4 text-3xl font-bold">About Us</h1> <p>We build high-performance websites.</p> </div> ` })}`;
}, "C:/wamp64/www/astro-tina-cms/src/pages/about.astro", void 0);

const $$file = "C:/wamp64/www/astro-tina-cms/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
