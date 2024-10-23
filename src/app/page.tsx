import { delay } from "@/utils/delay";

export default async function Home() {
  await delay(1500);

  return (
    <div className="h-60 rounded-lg bg-sky-700 p-10 text-white">
      <h1 className="text-3xl font-bold">Parallel Routes</h1>
    </div>
  );
}
