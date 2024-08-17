import Image from "next/image";

export default function Home() {
  const limit = 10;
  const multipliers = [3, 5];

  const sumMultipliers = ():number => {
    let sum = 0;
    multipliers.forEach((multiplier) => {
      let i = 1;
      //This does not yet account for values that are multiples of both 3 and 5 being counted twice.
      while(i * multiplier <= limit)
      {
        sum+= i * multiplier;
        i++;
      }
    })
    return sum;
  }
  const sum = sumMultipliers() ?? "None";


  return (
    <main className="flex min-h-screen flex-col items-center  p-24 bg-slate-400">
      <h1 className="font-bold text-4xl text-black">Test 1 Placeholder</h1>
      <p>The sum of the multipliers are: {sum}</p>

    </main>
  );
}
