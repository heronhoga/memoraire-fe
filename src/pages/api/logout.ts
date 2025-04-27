import type { APIRoute } from "astro";
import { logoutUser } from "../../apis/auth";

export const GET: APIRoute = async ({ request }) => {
    const token = request.headers.get("memoraire_token") || ""
  try {
    const result = await logoutUser(token)
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
    });
  }
};

export const prerender = false;