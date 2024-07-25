import { sql } from "@vercel/postgres";

interface User {
  id: string;
  email: string;
  password: string;
}

export default async function Cart({
  params
}: {
  params: { user: string }
}): Promise<JSX.Element> {
  const result = await sql<User>`SELECT * FROM users`;
  const users: User[] = result.rows;

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          {user.email} - {user.password}
        </div>
      ))}
    </div>
  );
}
