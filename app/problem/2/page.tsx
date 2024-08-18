import Image from "next/image";

export default function Home() {
  let previousFibonacci = 0;
  let currentFibonacci = 1;
  const maxValue = 4000000;

  const SumFibonacci = ():number => {
    let sum = 0;
    while(previousFibonacci + currentFibonacci <= maxValue){
      currentFibonacci += previousFibonacci;
      sum += currentFibonacci;
    }
    return sum;
  }

  const sum = SumFibonacci();


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-400">
      <h1 className="font-bold text-4xl text-black">Problem 2</h1>
      <p>Sum of Fibonacci values not exceeding {sum} equals {sum}</p>
    </main>
  );
}
