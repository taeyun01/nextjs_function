import { delay } from "@/utils/delay";

export default async function DefaultHome() {
  await delay(2000);

  return (
    <div className="flex-1 h-60 rounded-lg bg-sky-700 p-10 text-white">
      <h2 className="text-3xl font-bold">Default Main Home Page</h2>
    </div>
  );
}
