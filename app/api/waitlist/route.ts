import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
  const { email } = await request.json();
  if (!email?.includes("@"))
    return Response.json({ error: "Invalid email." }, { status: 400 });

  const { error } = await supabase.from("waitlist").insert({ email });

  if (error?.code === "23505")
    return Response.json({ error: "Already registered." }, { status: 409 });
  if (error)
    return Response.json({ error: "Something went wrong." }, { status: 500 });

  return Response.json({ success: true });
}
