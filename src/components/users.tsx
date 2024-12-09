import { ListUsers } from "@/lib/magistrala";

export default async function UsersComponent() {
  const users = await ListUsers();
  return (
    <div>
      <h2 className="font-semibold text-xl mb-4">
        This is the public repo user component
      </h2>
      <div className="flex flex-row gap-4">
        {users.users.map((user) => (
          <div
            key={user.id}
            className="border rounded-md p-4 flex flex-col gap-4"
          >
            <span>Name: {user.credentials?.username}</span>
            <span>ID: {user.id}</span>
            <span>Alias: {user.first_name}</span>
            <span>Permissions: {user.email}</span>
            <span>Tags: {user.tags}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
