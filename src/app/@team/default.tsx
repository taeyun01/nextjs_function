import { delay } from "@/utils/delay";

export default async function DefaultTeam() {
  await delay(1000);

  return (
    <div className="flex-1 h-96 rounded-lg bg-red-700 p-10 text-white">
      <h2 className="text-3xl font-bold">Default Team</h2>
    </div>
  );
}
