import type { APIRoute } from "astro";
import { createMemo, deleteMemo, getMemo, updateMemo } from "../../apis/memo";
import { PUBLIC_APP_KEY } from "astro:env/server";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();
  const token = request.headers.get("memoraire_token") || "";
  const appToken = PUBLIC_APP_KEY;
  try {
    const result = await createMemo(data, token, appToken);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
    });
  }
};

export const GET: APIRoute = async ({ request }) => {
  const token = request.headers.get("memoraire_token") || "";

  const url = new URL(request.url);
  const pageParam = url.searchParams.get("page");
  const page = parseInt(pageParam || "1", 10);
  const appToken = PUBLIC_APP_KEY;

  try {
    const result = await getMemo(token, page, appToken);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
    });
  }
};

export const PUT: APIRoute = async ({ request }) => {
  const token = request.headers.get("memoraire_token") || "";
  const data = await request.json();
  const appToken = PUBLIC_APP_KEY;

  try {
    const result = await updateMemo(data, token, appToken);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
    });
  }
};

export const DELETE: APIRoute = async ({ request }) => {
  const token = request.headers.get("memoraire_token") || "";
  const data = await request.json();
  const appToken = PUBLIC_APP_KEY;

  try {
    const result = await deleteMemo(data, token, appToken);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
    });
  }
};

export const prerender = false;
