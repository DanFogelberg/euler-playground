export default function Home() {
  let previousFibonacci = 0;
  let currentFibonacci = 1;
  const maxValue = 4000000;

  const SumFibonacci = ():number => {
    let sum = 0;
    while(previousFibonacci + currentFibonacci <= maxValue){
      let newFibonacci = currentFibonacci + previousFibonacci;
      sum += newFibonacci;

      previousFibonacci = currentFibonacci;
      currentFibonacci = newFibonacci;
    }
    return sum;
  }

  const sum = SumFibonacci();


  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-slate-400">
      <h1 className="font-bold text-4xl p-6 text-black">Problem 2</h1>
      <p>Sum of Fibonacci values not exceeding {maxValue} equals {sum}</p>
    </main>
  );
}
