"use client"

import { title, intro, activeApp, deprecatedApp } from "@/consts/home";

export default function Home() {
  
  return (
    <div className="font-mono">
      <h1 className="relative w-[max-content] font-bold text-4xl before:absolute before:inset-0 before:animate-typewriter
      before:bg-neutral-100 after:bg-black after:absolute after:inset-0 after:w-[0.125em] after:animate-caret">{title}</h1>
      <div className="text-black/60">
        <p>{intro}</p>
        {activeApp.length > 0 && <>
          <br/>
          <ul>
            <p>{"Active application(s):"}</p>
            <ol className="ps-3 mt-2 space-y-1 list-decimal list-inside">
              {activeApp.map(aApp => <li>{aApp}</li>)}
            </ol>
          </ul>
        </>}
        
        {deprecatedApp.length > 0 && <>
          <br/>
          <ul>
            <p>{"Deprecated application(s):"}</p>
            <ol className="ps-3 mt-2 space-y-1 list-decimal list-inside">
              {deprecatedApp.map(dApp => <li>{dApp}</li>)}
            </ol>
          </ul>
        </>}
      </div>
    </div>
  );
}
