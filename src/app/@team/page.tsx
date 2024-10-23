import { delay } from "@/utils/delay";

export default async function Team() {
  await delay(3000);

  return (
    <div className="flex-1 h-96 rounded-lg bg-pink-700 p-10 text-white">
      <h2 className="text-3xl font-bold">Team</h2>
    </div>
  );
}
