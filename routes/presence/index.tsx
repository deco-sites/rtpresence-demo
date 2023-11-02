import { HandlerContext } from "$fresh/server.ts";

const connections: Record<string, Promise<string>> = {};

// interface DefaultConnectionState: {
// }

export const handler = async (
  req: Request,
  ctx: HandlerContext,
): Promise<Response> => {
  if (req.headers.get("upgrade") != "websocket") {
    return new Response("websocket route")
  }
  const url = new URL(req.url);
  const page = url.searchParams.get("page");
  const { socket, response } = Deno.upgradeWebSocket(req);

  socket.onopen = () => {
    let currentCount = 1;
    if (!connections[page]) {
      connections[page] = currentCount;
    }
    else {
      currentCount = connections[page] + 1;
      connections[page] = currentCount;
    }
    socket.send(currentCount);
  };
  socket.onmessage = async (e) => {};
  socket.onclose = () => {}
  socket.onerror = (e) => {}
  return response;
};