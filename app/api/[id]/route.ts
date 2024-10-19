import { createClient, groq } from "next-sanity";
import clientConfig from "@/sanity/config/client-config";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  const query = groq`*[_type == "shortUrl" && shortUrl == "${id}"]{
        longUrl,
        }`;
  const data = await createClient(clientConfig).fetch(query);
  if (!data || data.length === 0) {
    return new Response(null, {
      status: 302,
      headers: { Location: "/" },
    });
  } else {
    return new Response(null, {
      status: 302,
      headers: { Location: data[0].longUrl },
    });
  }
}
