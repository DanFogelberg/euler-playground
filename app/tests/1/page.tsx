export default function Home() {
  const limit = 1000;
  const multipliers = [3, 5];

  const sumMultipliers = ():number => {
    const values: number[] = [];
    multipliers.forEach((multiplier) => {
      let i = 1;
      while(i * multiplier <= limit)
      {
        if(!values.includes(i * multiplier))
        { 
          values.push(i * multiplier);
        }
        i++;
      }
    })
    
    let sum = 0;
    values.forEach(value => 
    {
      sum += value;
    })
    return sum;
  }
  
  const sum = sumMultipliers();
  return (
    <main className="flex min-h-screen flex-col items-center  p-24 bg-slate-400">
      <h1 className="font-bold text-4xl text-black">Test 1 Placeholder</h1>
      <p>The sum of the multipliers are {sum}</p>
    </main>
  );
}
