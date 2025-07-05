export default {
  async fetch(request) {
    const url = new URL(request.url)
    const path = url.pathname

    const redirects = {
        "/": "https://bargenial.com.br/vinhos-portugueses-no-brasil/",
        "": "https://bargenial.com.br/vinhos-portugueses-no-brasil/"
    };

    if (redirects[path]) {
      return Response.redirect(redirects[path], 301)
    }

    return new Response("Página não encontrada", { status: 404 })
  }
} 