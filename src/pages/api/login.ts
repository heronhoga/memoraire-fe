import type { APIRoute } from "astro";
import { loginUser } from "../../apis/auth";
import { PUBLIC_APP_KEY } from "astro:env/server";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();

  const token = PUBLIC_APP_KEY

  if (!token) {
    return new Response(
      JSON.stringify({ message: "Invalid or missing token" }),
      {
        status: 403,
      }
    );
  }

  try {
    const result = await loginUser(data, token);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
    });
  }
};

export const prerender = false;
