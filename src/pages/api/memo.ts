import type { APIRoute } from "astro";
import { createMemo } from "../../apis/memo";

export const POST: APIRoute = async ({request}) => {
    const data = await request.json()
    const token = request.headers.get("memoraire_token") || ""
    try {
        const result = await createMemo(data, token)
        return new Response(JSON.stringify(result), { status: 200 });
    } catch (error:any) {
        return new Response(JSON.stringify({ message: error.message }), {
            status: 400,
          });
    }
}

export const prerender = false