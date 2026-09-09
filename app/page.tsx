"use client";
import { createHook } from "async_hooks";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { Children, JSX, ReactElement, ReactNode, Suspense, useEffect, useState } from "react";


export default function Home() {
  return <Suspense>
    <h1 className="self-center text-center text-xl font-mono text-blue-400">The Salmon Hub (under construction)</h1>
    <TabbableCtn>
      <Tab linknm="welcome" headertxt="Welcome to the Salmon Hub!">
        <div>
          <p className="font-bold text-lg">Announcement: Please fill in Community Gathering When2Meet!</p>
          <Link href="https://www.when2meet.com/?38367309-X9jZj">Fill form here (No sign-in)</Link>
        </div>
        <div>
          Site under construction. - Jen
        </div>

      </Tab>
      <Tab linknm="calendar" headertxt="Calendar">
        Announcements to come soon!
        <DateAnnounce date={new Date("2026-09-30")}>my beans</DateAnnounce>
        <DateAnnounce date={new Date("2026-09-30")} dateTo={new Date("2027-1-1")}>my other beans</DateAnnounce>
        <DateAnnounce >my other beans</DateAnnounce>
      </Tab>
      <Tab linknm="help" headertxt={<div><span>There's something wrong with...</span><small><br/>(Self-service help guides)</small></div>}>
        <h2 className="font-mono font-bold text-blue-400">...My room</h2>
        <div className="tabindent">
          <p className="smallcaps">If urgent, eg. floods, power outages, injuries, lockouts, fires, noise complaints etc: </p>
          <div className="pl-3 border-lef">
            <span className="text-red-500">Call Don on Duty: <a href="tel:2898050580" className="link-red">(289)-805-0580</a><br></br></span>
            This number can be called:
            <ul className="list-disc list-inside">
              <li>5pm-9am Monday-Friday;</li>
              <li>24 hours Saturday and Sunday;</li>
              <li>24 hours when the University is closed.</li>
            </ul>
            <br/>
            *There is a $10 charge for lockouts.
          </div>
          <p className="smallcaps">If non-urgent, and it is something about my room that needs to be repaired:</p>
          <div className="pl-3 border-lef">
            Submit a Work order via the <a href="https://residence.utoronto.ca" target="_blank" className="link">UofT Residence Website</a> ⋅ <a href="https://www.utm.utoronto.ca/housing/sites/files/housing/shared/2020-2021/Website_Updates/UTM%20Residence%20Work%20Order%20Guide.pdf" target="_blank">Instructions (PDF)</a>
          </div>
          <p className="smallcaps">It's something else that isn't really either of those things:</p>
          <div className="pl-3 border-lef">
            Visit the Residence Services Desk on OPH Ground Floor when it is next open. Check its <a href="https://www.utm.utoronto.ca/housing/current-residents/residence-services-desk" target="_blank">hours of operation.</a>
          </div>
        </div>
        <h2 className="font-mono font-bold text-blue-400">...My roommate</h2>
        <div className="tabindent">
          Try talking to them. Write down what you've discussed and when you did it. If you can't come to an agreement, contact me to arrange conflict mediation.
        </div>
        <h2 className="font-mono font-bold text-blue-400">...My laundry card</h2>
        <div className="tabindent">
          <p>If washing machine reads <kbd>Visit Value Add Center</kbd> when card is tapped, visit the OPH Lobby where the vending machines are, and place the card in the Sparkle Laundry Services reader.</p>
          <p>If card reads a balance of <kbd>0.00</kbd> when read in the machine, wait 2-3 business days for the value to be updated by Sparkle.</p>
        </div>
        <h2 className="font-mono font-bold text-blue-400">...My safety</h2>
        <div className="tabindent">
          <p className="text-red-500">Campus Safety (Urgent): <a className="link-red" href="tel:4169782222">(416) 978-2222</a></p>
          UTM WalkSafe Escort - for a Campus Safety officer to walk you to your residence: <a className="link" href="tel:9058285200">(905) 828-5200</a>
        </div>
      </Tab>
    </TabbableCtn>
  </Suspense>
}

function DateAnnounce({children, date, dateTo}:{children:ReactNode, date?:Date, dateTo?:Date}) {
  return <div className="flex flex-row gap-2 mb-2">
    <div className="p-2 bg-gray-200 hover:bg-gray-100 rounded-md items-center flex flex-col">
      {(date && dateTo) ? <>
        <p className="text-nowrap">
          <span className="font-bold text-blue-400 font-mono text-3xl">{date.getDate()}</span>
          <span className="font-mono whitespace-nowrap font-sm"> {date.toLocaleDateString(undefined, {month:"short"})}</span>
        </p>
        <span className="font-mono text-sm"> to </span>
        <p className="text-nowrap">
          <span className="font-bold font-mono text-3xl text-blue-400">{dateTo!.getDate()}</span>
          <span className="font-mono whitespace-nowrap font-sm"> {dateTo!.toLocaleDateString(undefined, {month:"short"})}</span>
        </p>
      </>: (date ? <>
        <p className="font-mono text-sm">{date.toLocaleDateString(undefined, {weekday:"long"})}</p>
        <p className="font-bold font-mono text-4xl text-blue-400">{date.getDate()}</p>
        <p className="font-mono whitespace-nowrap font-sm">{date.toLocaleDateString(undefined, {month:"short"})}</p>
      </>:<>
        <p>Ongoing!</p>
      </>
      )}
    </div>
    <div className="w-full p-2 bg-gray-100 hover:bg-gray-200 rounded-md">
      {children}
    </div>
  </div>
}

function TabbableCtn(indat:{children:JSX.Element[]}) {
  let [ready, setReady] = useState<boolean>(false);
  let init = 0;

  let inCld = indat.children as ReactElement[];
  let initialHash = useSearchParams().get("tab") ?? "";
  // useEffect(()=>{ready = true;}, [activeTab]);
  if (!ready) {
    for (let i=0; i<inCld.length; i++) {
      // console.log(inCld[i].props.linknm);
      console.log("inhsh", initialHash, (inCld[i].props as TabProps).linknm.toLowerCase().trim());
      if ((inCld[i].props as TabProps).linknm.toLowerCase().trim() == initialHash.toLowerCase().trim()) {
        console.log("set", i);
        init = i;
      }
    }
    setReady(true);
  }
  let [activeTab, setAT] = useState<number>(init);

  useEffect(()=>{
    console.log("[pyshed");
    history.pushState({}, "", "?tab="+(inCld[activeTab].props as TabProps).linknm);
  }, [activeTab]);
  return <div className="p-3 rounded-md overflow-clip relative">
    <TabHeader key="0">
      {inCld.map((a:ReactElement, i:number)=>{return <_internalTab key={i} active={i==activeTab} headertxt={(a.props as TabProps).headertxt!} evHd={setAT} idx={i}>a.props.children</_internalTab>})}
    </TabHeader>
    <div className="p-2 rounded-b-md bg-gray-50">
      {
        inCld.map((a:ReactElement, i:number)=>{
          return <div key={i} className={`${i==activeTab?"translate-x-0 opacity-100":"absolute translate-x-full opacity-0"} transition-all`}>
            {(a.props as {children:ReactElement}).children}
          </div>
        })
      }
    </div>
  </div>

}

function TabHeader(indat:{children?:ReactElement|ReactElement[]}) {
  return <div className={`tabHeader rounded-t-md flex w-full overflow-x-scroll bg-gray-100 p-2 pb-0 gap-1`}>{indat.children}</div>
}

interface TabProps {
  children: any,
  linknm: string,
  headertxt: string|ReactElement
}

interface InTabProps {
  headertxt:string|ReactElement,
  idx:number,
  active:boolean,
  evHd:(a:number)=>any,
  children?:any
}
function Tab(e:{headertxt:string|ReactElement, linknm:string, children?:any}) {
  return "This is not supposed to display."
}

function _internalTab({headertxt, active, idx, evHd, children}:InTabProps) {
  return <div onClick={
    ()=>{if (evHd) evHd(idx)}
  } className={`${active?"bg-gray-300 text-blue-500 italic":"bg-gray-200"} grow shrink-0 hover:bg-gray-300 rounded-b-none rounded-t-md p-2 cursor-pointer`}>
    {headertxt}
  </div>
}