import { c as createComponent } from './astro-component_DOFD0j1q.mjs';
import 'piccolore';
import './entrypoint_wcmOydu-.mjs';
import 'clsx';

const $$Admin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Admin;
  return Astro2.redirect("/admin/index.html");
}, "C:/wamp64/www/astro-tina-cms/src/pages/admin.astro", void 0);

const $$file = "C:/wamp64/www/astro-tina-cms/src/pages/admin.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Admin,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
