"use client"

export default function Home() {
  const title = "i-am-bored";
  const intro = "This is a web application designed to cure your boredom. You may access them through clicking on the header above.";
  const app1 = "BoredAPI - By answering a specific question, it will suggest you an activities.";

  return (
    <div className="font-mono">
      <h1 className="relative w-[max-content] font-bold text-4xl before:absolute before:inset-0 before:animate-typewriter
      before:bg-neutral-100 after:bg-black after:absolute after:inset-0 after:w-[0.125em] after:animate-caret">{title}</h1>
      <div className="text-black/60">
        <p>{intro}</p>
        <br/>
        <ul>
          <p>{"List of application(s):"}</p>
          <ol className="ps-3 mt-2 space-y-1 list-decimal list-inside">
              <li>{app1}</li>
          </ol>
        </ul>
      </div>
    </div>
  );
}
