let users = [
  {
    email: "example@example.com",
    password: "yourpassword",
    name: "Bad Guy User",
  },
];

export async function GET() {
  return Response.json(users);
}

export async function POST(req) {
  try {
    const { email, password, name } = await req.json();
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      return new Response(JSON.stringify({ error: "User already exists" }), {
        status: 400,
      });
    }

    users.push({ email, password, name });
    return new Response(
      JSON.stringify({ message: "User registered successfully" }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
    });
  }
}
