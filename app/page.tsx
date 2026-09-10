"use client";
import { createHook } from "async_hooks";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import bigfishjump from '../public/bigfishjump.png';

import { Children, JSX, ReactElement, ReactNode, Suspense, useEffect, useState } from "react";

export default function Home() {
  return <Suspense>
    <h1 className="self-center text-center text-xl font-mono text-blue-400">The Salmon Hub (under construction)</h1>
    <TabbableCtn>
      <Tab linknm="welcome" headertxt={<span>Welcome to the <b>Salmon Hub</b></span>}>
        <div className="w-full justify-center flex">
          <Image src={bigfishjump} alt="bigfishjump" height={300}></Image>
        </div> <div>
          <p className="text-lg font-rail"><b>Announcement:</b> Please fill in Community Gathering <b>When2Meet</b>!</p>
          <Link target="_blank" className="border-lef" href="https://www.when2meet.com/?38367309-X9jZj">Fill form here</Link>
        </div>
        <div>
          <p className="font-rail text-lg">Fill in your <b>Move-in Condition Report Form</b></p>
          <div className="border-lef">
            This protects you from being charged for damage to your unit that was caused by the previous resident. Should be filled within 10 days of move-in!<br/>
            <Link target="_blank" href="https://can01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fuoft.me%2Fmove-in-condition-report-form&data=05%7C02%7Crufin.hsu%40mail.utoronto.ca%7Cc0a5f9b629ec4ddb3a4008df0e9ab360%7C78aac2262f034b4d9037b46d56c55210%7C0%7C0%7C639245729989298114%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=EI0kCf6N664gfeGmOm8EfI1qgnxFuOA%2Fdl3w%2BvXNElg%3D&reserved=0">Fill form here</Link>
          </div>
        </div>
        <div>
          Site under construction. - Jen
        </div>

      </Tab>
      <Tab linknm="calendar" headertxt="Calendar">
        <Link target="_blank" href="https://www.utm.utoronto.ca/housing/residence-events-calendar">Full Residence Events Calendar</Link><br/>
        Here are the curated highlights:
        <DateAnnounce date={new Date("2026-09-10")}>
          <p className="font-rail">UTMSU Presents <b>Premiere Night</b> - 8p-11p - Student Centre</p>
          <p>From UTMSU: <kbd className="text-black!">Wind down your evening at this premiere night in the Student Centre — a relaxed way to close out the day with fellow students.</kbd></p>
        </DateAnnounce>
        <DateAnnounce date={new Date("2026-09-13")}>
          <p className="font-rail">UTMSU Presents <b>Paint and Glow</b> - 8p-10p - Davis Field</p>
          <p>From UTMSU: <kbd className="text-black!">Close out the week under the lights with music, glowing colours, and an outdoor celebration you will not want to miss.</kbd></p>
          <Link href="https://utmsu.ca/orientation/">https://utmsu.ca/orientation/</Link>
        </DateAnnounce>
        <DateAnnounce date={new Date("2026-09-30")} dateTo={new Date("2027-1-1")}>My test event</DateAnnounce>
        <DateAnnounce>jen's test event 2</DateAnnounce>
      </Tab>
      <Tab linknm="help" headertxt={<div><span>I need <b>help</b> with...</span><small><br/>(Self-service help guides)</small></div>}>

        <details className="tabindent">
          <summary className="font-mono font-bold text-blue-400">...My room</summary>
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
            Visit the Residence Services Desk (<Link href="tel:9058285286">905-828-5286</Link>) on OPH Ground Floor when it is next open. <br/>
            The desk is open:
            <ul className="list-disc list-inside">
              <li>9am-12am Monday-Friday;</li>
              <li>9am-9pm Saturday and Sunday;</li>
              <li>Closed when the University is closed.</li>
            </ul>
          </div>
        </details>

        <details className="tabindent">
          <summary className="font-mono font-bold text-blue-400">...My roommate</summary>
          Try talking to them. Write down what you've discussed and when you did it. If you can't come to an agreement, contact me to arrange conflict mediation.
        </details>

        <details className="tabindent">
          <summary className="font-mono font-bold text-blue-400">...My laundry card</summary>
          <p>If washing machine reads <kbd>Visit Value Add Center</kbd> when card is tapped, visit the OPH Lobby where the vending machines are, and place the card in the Sparkle Laundry Services reader.</p>
          <p>If card reads a balance of <kbd>0.00</kbd> when read in the machine, wait 2-3 business days for the value to be updated by Sparkle.</p>
        </details>
        <details className="tabindent">
          <summary className="font-mono font-bold text-blue-400">...My safety</summary>
          <p className="text-red-500">Campus Safety (Urgent): <a className="link-red" href="tel:4169782222">(416) 978-2222</a></p>
          UTM WalkSafe Escort - for a Campus Safety officer to walk you to your residence: <a className="link" href="tel:9058285200">(905) 828-5200</a>
        </details>

        <details className="tabindent">
          <summary className="font-mono font-bold text-blue-400">...My internet</summary>
          Connect to the network called <kbd>UofT</kbd> with your UtorID as the username and its password as the password.
          No internet? Contact the Residence Services Desk
        </details>

        <details className="tabindent">
          <summary className="font-mono font-bold text-blue-400">...Getting around Mississauga</summary>
          The UTMSU provides you with a U-PASS which allows you free bus rides on the MiWay network! <br/>
          Follow setup steps <Link href="https://utmsu.ca/services/u-pass/#get-started" target="_blank">here</Link>. Then redeem <Link href="https://uoft.service-now.com/utm_upass" target="_blank">here (UtorID Login)</Link>
          <p><b>Groceries:</b> NoFrills, Walmart, Shoppers at South Common (Take 110N or 48), FreshCo at Dundas at Erindale (Take 1E)</p>
          <p><b>Connection to regional transit:</b> GO Transit at City Centre Transit Terminal (Take 110N)</p>
          <p><b>Furniture and stuff:</b> Walmart or Ikea Etobiocke (Take 1E &gt; 44)</p>
        </details>
        <details className="tabindent">
          <summary className="font-mono font-bold text-blue-400">...Food on campus</summary>
          <Link href="https://www.utm.utoronto.ca/hospitality/Food#LocationsHours" target="_blank">Food locations and Hours of Operation</Link><br/>
          <Link href="https://www.utm.utoronto.ca/hospitality/weekly-menus-colman-commons" target="_blank">What's at Colman Commons this Week</Link>
        </details>

      </Tab>
      <Tab linknm="contact" headertxt="Your Floor Contacts">
        <p className="text-xl font-rail">Contacts</p>
        <p className="font-rail"><b>Rufin Hsu</b> - Residence Don</p>
        <ul className="list-disc list-inside">
          <li><Link href="mailto:rufin.hsu@mail.utoronto.ca">Via email</Link></li>
          <li><Link target="_blank" href="https://signal.me/#eu/8V8ciy4DFunX1S7DpGzoSP2nwER2xSsVPxYybh8Y2F8DaQmSH6VEnaRNkEUbGNTo">Via Signal Messenger</Link> ⋅ <Link href="https://signal.org/download/">(Get Signal)</Link></li>
          <li><Link target="_blank" href="https://outlook.office.com/book/RufinDonOneOnOnes@bookings.office365.utoronto.ca/s/xy3N2j41iU-eqdvBzyqtSQ2?ismsaljsauthenabled">Book a private meeting with me</Link></li>
        </ul>
        <p className="font-rail"><b>Gabrielle</b> - Residence Education Faciliator (REF)</p>
        <ul className="list-disc list-inside">
          <li><Link href="mailto:gabby.omoyinbo@mail.utoronto.ca">Via email</Link></li>
          <li><Link target="_blank" href="https://signal.me/#eu/5vmCvH47A99euBstr0_FwLlKvBXe08XLe7BOrgbEmuVT8ixCLxNG8r7HYeLoBbc3">Via Signal Messenger</Link> ⋅ <Link href="https://signal.org/download/">(Get Signal)</Link></li>
        </ul>
        <p className="font-rail"><b>Salmon Run</b> Community</p>
        <ul className="list-disc list-inside">
          <li><Link target="_blank" href="https://chat.whatsapp.com/DFOHHdaMtUTGwY3p9ZkLVK">REF Group Chat with Gabby (WhatsApp Messenger)</Link></li>
          <li><Link target="_blank" href="https://signal.group/#CjQKICp8JwknBMnLH4Xl7UfFAWJ_FQ2XeJobV10y65ekyF_tEhDHkMhVlxq3PWp6FLrhNlUe">Salmon Run Discussion Board (Signal Messenger)</Link></li>
          <li><Link target="_blank" href="https://signal.group/#CjQKIH3x4grVIFH3keWDvhIXgAQKHkUr380MVtE60NUEj0W8EhAP_K5mrA-y5XfY_EslVR90">Salmon Run Announcements! (Signal Messenger)</Link></li>
        </ul>

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
  } className={`${active?"bg-gray-300 text-blue-500 italic":"bg-gray-200"} font-rail grow shrink-0 hover:bg-gray-300 rounded-b-none rounded-t-md p-2 cursor-pointer`}>
    {headertxt}
  </div>
}