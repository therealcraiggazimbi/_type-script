const server = Bun.serve({
  port: Bun.env.PORT || 5000,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") return new Response("HomePage!");
    if (url.pathname === "/blog") return new Response("BlogPage!");
    if (url.pathname === "/about") return new Response("AboutPage!");
    return new Response("404");
  },
});

console.log(`Listening on port ${server.port}`);
