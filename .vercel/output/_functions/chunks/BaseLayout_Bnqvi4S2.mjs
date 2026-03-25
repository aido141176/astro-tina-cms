import { c as createComponent } from './astro-component_Bt3yeqQM.mjs';
import 'piccolore';
import { r as renderTemplate, h as addAttribute, m as maybeRenderHead, l as renderComponent, o as renderSlot, p as renderHead } from './entrypoint_DztqOFh7.mjs';
import 'clsx';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$BasicNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BasicNav;
  const { title = "My Site" } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  const isActive = (path) => {
    if (path === "/") {
      return currentPath === "/" ? "active-link" : "";
    }
    return currentPath.startsWith(path) ? "active-link" : "";
  };
  const isServicesActive = () => {
    return currentPath.startsWith("/web") || currentPath.startsWith("/seo");
  };
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<nav id="navbar" class="sticky top-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md" data-astro-cid-i6n4ee5k> <div class="px-4 mx-auto max-w-7xl" data-astro-cid-i6n4ee5k> <div class="flex items-center justify-between h-16" data-astro-cid-i6n4ee5k> <!-- Logo --> <div class="text-xl font-bold" data-astro-cid-i6n4ee5k> ', ' </div> <!-- Desktop Menu --> <div class="items-center hidden space-x-8 md:flex" data-astro-cid-i6n4ee5k> <a href="/"', ' data-astro-cid-i6n4ee5k>Home</a> <a href="/about"', ' data-astro-cid-i6n4ee5k>About</a> <!-- Services Dropdown --> <div class="relative group" data-astro-cid-i6n4ee5k> <button', ' data-astro-cid-i6n4ee5k>\nServices\n<span data-astro-cid-i6n4ee5k>▾</span> </button> <div class="dropdown-menu" data-astro-cid-i6n4ee5k> <a href="/web" class="dropdown-item" data-astro-cid-i6n4ee5k>Web Design</a> <a href="/seo" class="dropdown-item" data-astro-cid-i6n4ee5k>SEO</a> </div> </div> <a href="/contact"', ' data-astro-cid-i6n4ee5k>Contact</a> </div> <!-- Mobile Button --> <button id="menu-btn" class="text-2xl text-gray-700 md:hidden" data-astro-cid-i6n4ee5k>\n☰\n</button> </div> </div> <!-- Mobile Menu --> <div id="mobile-menu" class="px-4 overflow-hidden transition-all duration-300 ease-in-out max-h-0 md:hidden" data-astro-cid-i6n4ee5k> <a href="/"', ' data-astro-cid-i6n4ee5k>Home</a> <a href="/about"', ' data-astro-cid-i6n4ee5k>About</a> <!-- Mobile Dropdown --> <div data-astro-cid-i6n4ee5k> <button id="mobile-services-btn" class="w-full py-2 text-left" data-astro-cid-i6n4ee5k>\nServices ▾\n</button> <div id="mobile-services-menu" class="pl-4 overflow-hidden transition-all duration-300 ease-in-out max-h-0" data-astro-cid-i6n4ee5k> <a href="/web" class="block py-2" data-astro-cid-i6n4ee5k>Web Design</a> <a href="/seo" class="block py-2" data-astro-cid-i6n4ee5k>SEO</a> </div> </div> <a href="/contact"', ' data-astro-cid-i6n4ee5k>Contact</a> </div> </nav> <script>\n  window.addEventListener("DOMContentLoaded", () => {\n    const menuBtn = document.getElementById("menu-btn");\n    const mobileMenu = document.getElementById("mobile-menu");\n\n    if (menuBtn && mobileMenu) {\n      menuBtn.addEventListener("click", () => {\n        if (mobileMenu.classList.contains("max-h-0")) {\n          mobileMenu.classList.remove("max-h-0");\n          mobileMenu.classList.add("max-h-screen");\n        } else {\n          mobileMenu.classList.add("max-h-0");\n          mobileMenu.classList.remove("max-h-screen");\n        }\n      });\n    }\n\n    // Mobile dropdown\n    const mobileServicesBtn = document.getElementById("mobile-services-btn");\n    const mobileServicesMenu = document.getElementById("mobile-services-menu");\n\n    if (mobileServicesBtn && mobileServicesMenu) {\n      mobileServicesBtn.addEventListener("click", () => {\n        if (mobileServicesMenu.classList.contains("max-h-0")) {\n          mobileServicesMenu.classList.remove("max-h-0");\n          mobileServicesMenu.classList.add("max-h-40");\n        } else {\n          mobileServicesMenu.classList.add("max-h-0");\n          mobileServicesMenu.classList.remove("max-h-40");\n        }\n      });\n    }\n  });\n<\/script> <script>\n  window.addEventListener("DOMContentLoaded", () => {\n    const nav = document.getElementById("navbar");\n\n    window.addEventListener("scroll", () => {\n      if (window.scrollY > 10) {\n        nav?.classList.add("shadow-lg");\n      } else {\n        nav?.classList.remove("shadow-lg");\n      }\n    });\n  });\n<\/script>'])), maybeRenderHead(), title, addAttribute(`nav-link ${isActive("/")}`, "class"), addAttribute(`nav-link ${isActive("/about")}`, "class"), addAttribute(`nav-link flex items-center gap-1 ${isServicesActive() ? "active-link" : ""}`, "class"), addAttribute(`nav-link ${isActive("/contact")}`, "class"), addAttribute(`block py-2 ${isActive("/")}`, "class"), addAttribute(`block py-2 ${isActive("/about")}`, "class"), addAttribute(`block py-2 ${isActive("/contact")}`, "class"));
}, "C:/wamp64/www/astro-tina-cms/src/components/navigation/BasicNav.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="mt-16 text-white bg-gray-900"> <div class="grid gap-6 px-4 py-10 mx-auto max-w-7xl md:grid-cols-3"> <div> <h3 class="mb-2 text-lg font-bold">Your Company</h3> <p class="text-sm text-gray-400">
Professional web design & digital services.
</p> </div> <div> <h4 class="mb-2 font-semibold">Links</h4> <ul class="space-y-1 text-gray-400"> <li><a href="/">Home</a></li> <li><a href="/about">About</a></li> <li><a href="/services">Services</a></li> <li><a href="/contact">Contact</a></li> </ul> </div> <div> <h4 class="mb-2 font-semibold">Contact</h4> <p class="text-sm text-gray-400">
info@yoursite.com
</p> </div> </div> <div class="pb-4 text-sm text-center text-gray-500">
© ${(/* @__PURE__ */ new Date()).getFullYear()} Your Company
</div> </footer>`;
}, "C:/wamp64/www/astro-tina-cms/src/components/ui/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "My Site",
    description = "Default description",
    image = "/images/og.jpg",
    url = "https://example.com"
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><!-- Primary SEO --><title>', '</title><meta name="description"', '><link rel="canonical"', '><!-- Open Graph (Facebook, WhatsApp, LinkedIn) --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Favicon --><link rel="icon" href="/favicon.ico"><script type="application/ld+json">\n      {JSON.stringify({\n        "@context": "https://schema.org",\n        "@type": "LocalBusiness",\n        "name": "Your Business Name",\n        "url": url,\n        "description": description\n      })}\n      <\/script>', '</head> <body class="text-gray-800 bg-white"> ', " <main> ", " </main> ", " </body></html>"])), title, addAttribute(description, "content"), addAttribute(url, "href"), addAttribute(url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image, "content"), renderHead(), renderComponent($$result, "BasicNav", $$BasicNav, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/wamp64/www/astro-tina-cms/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, $$BasicNav as a };
