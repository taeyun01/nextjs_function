import { delay } from "@/utils/delay";

export default async function Settings() {
  await delay(4000);

  return (
    <div className="flex-1 h-96 rounded-lg bg-orange-700 p-10 text-white">
      <h2 className="text-3xl font-bold">Settings</h2>
    </div>
  );
}
