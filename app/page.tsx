"use client";
import Image from "next/image";

import { Children, JSX, ReactElement, ReactNode, useState } from "react";

export default function Home() {

  return <div>
    <h1 className="self-center text-center text-xl font-mono text-blue-400">The Salmon Hub (under construction)</h1>
    <TabbableCtn>
      <Tab headertxt="Welcome">potatoes</Tab>
      <Tab headertxt="There's something wrong with...">
        <h2 className="font-mono font-bold text-blue-400">...My room</h2>
        <div className="tabindent">
          <p className="smallcaps">If urgent, eg. floods, power outages, injuries, lockouts, fires, noise complaints etc: </p>
          <div className="pl-3">
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
          <div className="pl-3">
            Submit a Work order via the <a href="https://residence.utoronto.ca" target="_blank" className="link">UofT Residence Website</a> ⋅ <a href="https://www.utm.utoronto.ca/housing/sites/files/housing/shared/2020-2021/Website_Updates/UTM%20Residence%20Work%20Order%20Guide.pdf" target="_blank">Instructions (PDF)</a>
          </div>
          <p className="smallcaps">It's something else that isn't really either of those things:</p>
          <div className="pl-3">
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
  </div>
}

function TabbableCtn(indat:{children:JSX.Element[]}) {
  let [activeTab, setAT] = useState<number>(0);
  let inCld = indat.children as ReactElement[];
  console.log(inCld);
  return <div className="p-3 rounded-md bg-clip-border">
    <TabHeader>
      {inCld.map((a:ReactElement, i:number)=>{return <_internalTab active={i==activeTab} headertxt={(a.props as TabProps).headertxt!} evHd={setAT} idx={i}>a.props.children</_internalTab>})}
    </TabHeader>
    <div className="p-2 rounded-b-md bg-gray-50">
      {(inCld[activeTab].props as {children:ReactElement}).children}
    </div>
  </div>

}

function TabHeader(indat:{children?:ReactElement|ReactElement[]}) {
  return <div className={`tabHeader rounded-t-md flex w-full bg-gray-100 p-2 pb-0 gap-1`}>{indat.children}</div>
}


interface TabProps {
  headertxt:string|ReactElement,
  idx:number,
  active:boolean,
  evHd:(a:number)=>any,
  children?:any
}
function Tab(e:{headertxt:string|ReactElement, children?:any}) {
  return "This is not supposed to display."
}

function _internalTab({headertxt, active, idx, evHd, children}:TabProps) {
  console.log("my index is", idx);
  return <div onClick={
    ()=>{if (evHd) evHd(idx)}
  } className={`${active?"bg-gray-300 text-blue-500 italic":"bg-gray-200"} hover:bg-gray-300 rounded-b-none rounded-t-md p-2 cursor-pointer`}>
    {headertxt}
  </div>
}