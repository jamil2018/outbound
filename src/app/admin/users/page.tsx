import { Button } from "@/components/ui/button";
import { User } from "@/models/UserModel";
import { DataTable } from "../../../components/ui/data-table";
import { columns } from "./columns";

async function getUsers(): Promise<User[]> {
  const res = await fetch(`${process.env.BASE_URL}/api/users`);
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

export default async function Home() {
  const data = await getUsers();
  return (
    <>
      <h1>All users</h1>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}