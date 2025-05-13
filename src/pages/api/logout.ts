import type { APIRoute } from "astro";
import { logoutUser } from "../../apis/auth";

export const GET: APIRoute = async ({ request }) => {
  const token = request.headers.get("memoraire_token") || "";

  const appToken = import.meta.env.PUBLIC_APP_KEY ?? process.env.PUBLIC_APP_KEY;

  if (!appToken) {
    return new Response(
      JSON.stringify({ message: "Invalid or missing token" }),
      {
        status: 403,
      }
    );
  }
  try {
    const result = await logoutUser(token, appToken);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
    });
  }
};

export const prerender = false;
