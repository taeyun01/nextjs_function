import { delay } from "@/utils/delay";

export default async function Dashboard() {
  await delay(2000);

  return (
    <div className="flex-1 h-96 rounded-lg bg-purple-700 p-10 text-white">
      <h2 className="text-3xl font-bold">Dashboard</h2>
    </div>
  );
}
