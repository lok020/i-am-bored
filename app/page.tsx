"use client"

import { title, intro } from "@/consts/home";
import { activeApp } from "@/consts/activeApp";
import { deprecatedApp } from "@/consts/deprecatedApp";

export default function Home() {

  return (
    <div className="font-mono">
      <h1 className="relative w-[max-content] font-bold text-4xl before:absolute before:inset-0 before:animate-typewriter
      before:bg-neutral-100 after:bg-black after:absolute after:inset-0 after:w-[0.125em] after:animate-caret">{title}</h1>
      <p className="text-black/60">{intro}</p>
        {activeApp.length > 0 && <div className="text-black/60">
          <br/>
          <ul>
            <p>{"Active application(s):"}</p>
            <ol className="ps-3 mt-2 space-y-1 list-decimal list-inside">
              {activeApp.map(aApp => <li key={aApp['name']}>{`${aApp['name']} - ${aApp['desc']}`}</li>)}
            </ol>
          </ul>
        </div>}
        
        {deprecatedApp.length > 0 && <div className="text-black/20 line-through">
          <br/>
          <ul>
            <p>{"Deprecated application(s):"}</p>
            <ol className="ps-3 mt-2 space-y-1 list-decimal list-inside">
              {deprecatedApp.map(dApp => <li key={dApp['name']}>{`${dApp['name']} - ${dApp['desc']}`}</li>)}
            </ol>
          </ul>
        </div>}
    </div>
  );
}
