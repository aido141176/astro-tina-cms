import { c as createComponent } from './astro-component_Bt3yeqQM.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate } from './entrypoint_DztqOFh7.mjs';
import { $ as $$BaseLayout, a as $$BasicNav } from './BaseLayout_Bnqvi4S2.mjs';
import { $ as $$Services$1 } from './Services_AC6N61s_.mjs';

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Services | Web Design Perth", "description": "Learn about our web design services and how we help businesses grow online.", "url": "https://yoursite.com/services" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BasicNav", $$BasicNav, {})} ${renderComponent($$result2, "MyServices", $$Services$1, {})} ` })}`;
}, "C:/wamp64/www/astro-tina-cms/src/pages/services.astro", void 0);

const $$file = "C:/wamp64/www/astro-tina-cms/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
