addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    return new Response("ok", {
        headers: {
            "content-type": "text/html",
            "x-frame-options": "deny"
        },
    });
}
