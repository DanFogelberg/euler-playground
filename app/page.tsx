import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-24 bg-slate-400">
      <h1 className="font-bold text-4xl text-black mb-12">Dan's Euler Playground</h1>
      <ul>
        <li><a href="/tests/1">Test 1</a></li>
        <li><a href="/tests/2">Test 2</a></li>
      </ul>
    </main>
  );
}
