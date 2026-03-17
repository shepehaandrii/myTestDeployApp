'use client';
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<string>();

  useEffect(() => {
    // fetch('http://localhost:3000/api/test')
    fetch('/api/test')
      .then(response => response.text())
      .then(data => {
        console.log(data);
        setData(data.slice(0, 20)); // Display only the first 20 characters
      })
      .catch(error => console.error('Error fetching test endpoint:', error));
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        Hello {data}
      </main>
    </div>
  );
}
