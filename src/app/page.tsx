import PublicComponent from "@/components/component";
import { ListDomains } from "@/lib/magistrala";

export default async function Home() {
  const domains = await ListDomains();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="font-bold text-2xl">
          This is the public repo main page
        </h1>
        <PublicComponent domains={domains} />
      </main>
    </div>
  );
}
