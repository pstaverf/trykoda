import html from "./index.html";
import css from "./kd.css";

const H = {
  html: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=300" },
  css: { "content-type": "text/css; charset=utf-8", "cache-control": "public, max-age=3600" }
};

export default {
  async fetch(req) {
    const p = new URL(req.url).pathname;
    if (p === "/" || p === "/index.html") return new Response(html, { headers: H.html });
    if (p === "/kd.css") return new Response(css, { headers: H.css });
    return new Response("Not Found", { status: 404 });
  }
};