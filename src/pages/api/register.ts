import type { APIRoute } from "astro";
import { registerUser } from "../../apis/auth";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();

  try {
    const result = await registerUser(data);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
    });
  }
};

export const prerender = false;
