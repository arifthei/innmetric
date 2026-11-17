/**
 * Canonical demo URLs end in a slash: /collab/, /collab/partners/ireckonu/, /collab/partners/torus-legacy/.
 * A netlify.toml redirect cannot do this because Netlify matches /path and /path/ to the same rule, which
 * would loop. netlify.toml binds this function to the three slash-less paths only.
 */
export default async function collabTrailingSlash(request: Request): Promise<Response | undefined> {
  const url = new URL(request.url);
  if (url.pathname.endsWith("/")) return undefined;
  url.pathname = `${url.pathname}/`;
  return new Response(null, { status: 301, headers: { Location: `${url.pathname}${url.search}` } });
}
