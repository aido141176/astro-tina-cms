import { c as createComponent } from './astro-component_DOFD0j1q.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderTemplate, l as renderComponent } from './entrypoint_wcmOydu-.mjs';
import { $ as $$BaseLayout } from './BaseLayout_BseG-hZa.mjs';
import 'clsx';
import { $ as $$Services } from './Services_BFmpF46k.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Hero;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-gray-100"> <div class="max-w-4xl px-4 mx-auto text-center"> <h1 class="mb-4 text-4xl font-bold md:text-5xl"> ${title} </h1> <p class="mb-6 text-lg text-gray-600"> ${subtitle} </p> <a href="/contact" class="px-6 py-3 text-white bg-blue-600 rounded-lg">
Get Started
</a> </div> </section>`;
}, "C:/wamp64/www/astro-tina-cms/src/components/sections/Hero.astro", void 0);

const $$CTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 text-center text-white bg-blue-600"> <h2 class="mb-4 text-3xl font-bold">
Ready to start your project?
</h2> <a href="/contact" class="px-6 py-3 text-blue-600 bg-white rounded-lg">
Contact Us
</a> </section>`;
}, "C:/wamp64/www/astro-tina-cms/src/components/sections/CTA.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Web Design Perth | Fast, Modern Websites", "description": "Professional web design services in Perth. Fast, SEO-optimized websites that convert visitors into customers.", "url": "https://yoursite.com/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Build Better Websites", "subtitle": "Fast, modern websites that rank on Google" })} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "C:/wamp64/www/astro-tina-cms/src/pages/index.astro", void 0);

const $$file = "C:/wamp64/www/astro-tina-cms/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
