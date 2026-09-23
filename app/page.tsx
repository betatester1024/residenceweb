"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import bigfishjump from '../public/bigfishjump.png';

import { Children, JSX, ReactElement, ReactNode, Suspense, useEffect, useState } from "react";
import ical, { ICalCalendarMethod } from 'ical-generator';
import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";

export default function Home() {
  return <Suspense>
    <h1 className="self-center text-center text-xl font-mono text-blue-400">The Salmon Hub (under construction)</h1>
    <TabbableCtn>
      <Tab linknm="welcome" headertxt={<span>Welcome to the <b>Salmon Hub</b></span>}>
        <div>
          <p className="text-lg font-rail"><b className="text-blue-400">Announcement:</b> Please book your <b>One-on-One</b> meeting! Everyone must book at least one of these per semester!</p>
          <Link target="_blank" className="border-lef" href="https://bookings.cloud.microsoft/book/RufinDonOneOnOnes@bookings.office365.utoronto.ca/s/xy3N2j41iU-eqdvBzyqtSQ2?ismsaljsauthenabled">Book One-on-Ones now!</Link>
        </div><br/> <div>
          <p className="font-rail text-lg"><b className="text-blue-400">Announcement:</b> Please book your <b>House meetings</b> with your roommate! Everyone must book these by <b>September 25<sup>th</sup>!</b> Yes, even if you don't have a roommate.</p>
          <div className="border-lef">
            <Link target="_blank" href="https://bookings.cloud.microsoft/book/RufinDonOneOnOnes@bookings.office365.utoronto.ca/s/w9GHAtKwCkC3LtPcFO7YAw2?ismsaljsauthenabled">Book House Meetings now!</Link>
          </div>
        </div><br/> <div>
          <p className="font-rail text-lg"><b className="text-blue-400">Announcement:</b> Please pester your roommate to <b>join the Signal!</b></p>
          <div className="border-lef">
            <Link target="_blank" href="https://signal.group/#CjQKIH3x4grVIFH3keWDvhIXgAQKHkUr380MVtE60NUEj0W8EhAP_K5mrA-y5XfY_EslVR90">Join the Signal Group Chat</Link>
          </div>
        <div className="w-full justify-center flex">
          <Image src={bigfishjump} alt="bigfishjump" loading="eager" height={300}></Image>
        </div>

        <br/><br/>
        </div> <div className="text-sm">
          <p className="font-rail"><i>Past Due:</i> Fill in your <i>Move-in Condition Report Form</i></p>
          <div className="border-lef">
            This protects you from being charged for damage to your unit that was caused by the previous resident. Should be filled within 10 days of move-in!<br/>
            <Link target="_blank" href="https://can01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fuoft.me%2Fmove-in-condition-report-form&data=05%7C02%7Crufin.hsu%40mail.utoronto.ca%7Cc0a5f9b629ec4ddb3a4008df0e9ab360%7C78aac2262f034b4d9037b46d56c55210%7C0%7C0%7C639245729989298114%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=EI0kCf6N664gfeGmOm8EfI1qgnxFuOA%2Fdl3w%2BvXNElg%3D&reserved=0">Fill form here</Link>
          </div>
        </div>
        <div>
        </div>

      </Tab>
      <Tab linknm="calendar" headertxt="Calendar">
        <Link target="_blank" href="https://www.utm.utoronto.ca/housing/residence-events-calendar">Full Residence Events Calendar</Link><br/>
        Here are the curated highlights:
        <div style={{ gridTemplateColumns: `0fr 1fr` }} className=" w-full grid grid-cols-3 gap-3 gap-x-2">
        <DateAnnounce date="2026-09-23 10:30" dateTo="2026-09-23 14:30" evHdr="Get Hired Fair">
          <p className="font-rail">Career Centre's <b>Get Hired Fair</b> - 10:30a-2:30p - RAWC (Gym A/B, the big one)</p>
          <p>Meet employers. Get hired. Your opportunity to speak with employers about potential opportunities including internships, summer, part-time, full-time, volunteer and co-op. Positions promoted at the fair include both on and off-campus. Bring your TCard and drop in at any time!</p>
          <Link href="https://uoft.me/ghf">uoft.me/ghf</Link>
        </DateAnnounce>
        <DateAnnounce date="2026-09-24 20:00" dateTo="2026-09-24 21:00" evHdr="REF Workshop with Gabby">
          <p className="font-rail">REF Workshop <b>with Gabby!</b> - 8p-9p - 4th Floor Common Room</p>
          <p><b>Goal Setting & Habit Forming</b>: Develop study strategies, self-advocacy skills, and structured decision-making to make informed choices and foster academic resilience and respond well to academic challenges. Learn to avoid academic integrity violations and to use AI responsibly.</p>
        </DateAnnounce>
        <DateAnnounce date="2026-09-25 18:00" evHdr="EON Quiz Night">
          <p className="font-rail">EON Presents <b>Quiz Night</b> - 6p - Roy Ivor</p>
          <p>From EON: <kbd className="text-black!">Wind down your evening at this premiere night in the Student Centre — a relaxed way to close out the day with fellow students.</kbd></p>
        </DateAnnounce>
        <DateAnnounce date="2026-09-28 21:00" dateTo="2026-09-28 22:00" evHdr="Community Gatherings with jen!">
          <p className="font-rail">Community gatherings <b>with jen!</b> - 9p-10p - 5th Floor Common Room</p>
          <p>From your very own Don: New fish every week! <br/> Snacks this week: chips; juice; twix; oreos. </p>
        </DateAnnounce>
        <DateAnnounce date="2026-09-30" evHdr="Fall Payment Deadline">
          <p className="font-rail">Fall Term Fee <b>payment deadline</b></p>
          <p>Pay your Fall term fees by this date in full to avoid service charges.</p>
        </DateAnnounce>
        <DateAnnounce date="2026-10-25 14:00" dateTo="2026-10-25 16:00" evHdr="GAME Dodgeball Tournament">
          <p className="font-rail">GAME Presents <b>Dodgeball</b> - 2p - RAWC (Gym A/B, the big one)</p>
          <p>From GAME: <kbd className="text-black!">Join us for an afternoon of soccer, competition and fun! Earn Colman Cup points, and win raffle prizes. No cleats!</kbd></p>
        </DateAnnounce>
        <DateAnnounce evHdr="ART Event (soon)">ART event coming soon -- stay tuned!</DateAnnounce>
        </div>
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
          <summary className="font-mono font-bold text-blue-400">...Printing on Campus</summary>
          <p>You can print at the UTMSU for 6c per page Black&White (5c/side double-sided) and 12c per page Colour (10c/side double-sided).</p>
          <p><Link href="https://print.utmsu.ca" target="_blank">Register for an account here (UTMSU Load Funds appears to be down right now -- check back later.)</Link></p>
          <p>You can also print around campus for 10c per page Black&White (8c/side double-sided) and 40c per page Colour (32c/side double-sided).</p>
          <p>Printers are found in the Library (Main floor 2), in CCT Building by the vending machines, and outside DH2060. Bring your T-Card!</p>
          <p><Link href="https://utm.avrocustomer.com/login.aspx?ReturnUrl=%2f" target="_blank">Check and Load funds (Select "COPY PRINT ONLY")</Link></p>

        </details>

        <details className="tabindent">
          <summary className="font-mono font-bold text-blue-400">...Getting around Mississauga</summary>
          The UTMSU provides you with a U-PASS which allows you free bus rides on the MiWay network! <br/>
          Follow setup steps <Link href="https://utmsu.ca/services/u-pass/#get-started" target="_blank">here</Link>. Then redeem <Link href="https://uoft.service-now.com/utm_upass" target="_blank">here (UtorID Login)</Link>
          <p><b>Groceries:</b> NoFrills, Walmart, Shoppers at South Common (Take 110N or 48), FreshCo at Dundas at Erindale (Take 1E)</p>
          <p><b>Connection to regional transit:</b> GO Transit at City Centre Transit Terminal (Take 110N)</p>
          <p><b>Furniture and stuff:</b> Walmart or Ikea Etobicoke (Take 1E &gt; 44)</p>

        </details>
        <details className="tabindent">
          <summary className="font-mono font-bold text-blue-400">...Mental and Physical health</summary>
          <p>The Health and Counselling Centre (down the stairs by the Tim Hortons, DV1152). Every registered student* is eligible for their services.</p>
          <p>* Canadian residents must show their T-Card and provincial health card.</p>
          <p>* International students must obtain and show a <Link href="https://uhip.ca/uhip-services/coverage-card/" target="_blank">UHIP Coverage card</Link> to avoid out-of-pocket charge. You should already have UHIP coverage at no extra cost.</p>
          <p>To book an appointment, call <Link href="tel:9058285255">(905) 828-5255</Link> or visit in-person at <b>DV 1152.</b> Same-day appointments are sometimes offered depending on availability.</p>
        </details>
        <details className="tabindent">
          <summary className="font-mono font-bold text-blue-400">...Food on campus</summary>
          <Link href="https://www.utm.utoronto.ca/hospitality/Food#LocationsHours" target="_blank">Food locations and Hours of Operation</Link><br/>
          <Link href="https://www.utm.utoronto.ca/hospitality/weekly-menus-colman-commons" target="_blank">What's at Colman Commons this Week</Link><br/>
          <Link href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=7BdEuMWOZU-G4e9lhZGrRu7ENUqqqYpMnULs2ZrB0ApURFlVU1g3VVVTRVhMQzRIRkNNRUtVMFNSSy4u&route=shorturl" target="_blank">Send feedback about Food on Campus</Link><br/>
          <Link href="https://utm.avrocustomer.com/login.aspx?ReturnUrl=%2f" target="_blank">Check your Meal Plan Balance</Link><br/>

        </details>

      </Tab>
      <Tab linknm="contact" headertxt="Your Floor Contacts">
        <p className="text-xl font-rail">Contacts</p>
        <p className="font-rail"><b>Rufin Hsu</b> - Residence Don</p>
        <ul className="list-disc list-inside">
          <li><Link href="mailto:rufin.hsu@mail.utoronto.ca">Via email</Link></li>
          <li><Link target="_blank" href="https://signal.me/#eu/8V8ciy4DFunX1S7DpGzoSP2nwER2xSsVPxYybh8Y2F8DaQmSH6VEnaRNkEUbGNTo">Via Signal Messenger</Link> ⋅ <Link href="https://signal.org/download/">(Get Signal)</Link></li>
          <li><Link target="_blank" href="https://outlook.office.com/book/RufinDonOneOnOnes@bookings.office365.utoronto.ca/s/xy3N2j41iU-eqdvBzyqtSQ2?ismsaljsauthenabled">Book a private One-on-One meeting with me</Link></li>
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
        <p className="font-rail"><b>Residence</b> supports</p>
        <ul className="list-disc list-inside">
          <li><a className="link-red" href="tel:4169782222">Campus Safety (Urgent): (416) 978-2222</a></li>
          <li><a className="" href="tel:9058285200">Campus Safety (non-emergency): (905) 828-5200</a></li>
          <li><Link target="_blank" href="mailto:community.safety@utoronto.ca">Community Safety Office: community.safety@utoronto.ca</Link></li>
          <li><Link className="link" href="tel:9058285200">WalkSafe Service (905) 828-5200</Link></li>
          <li><Link target="_blank" href="mailto:residence.utm@utoronto.ca">Residence Services Desk: residence.utm@utoronto.ca</Link></li>
          <li><Link href="tel:9058285286" className="">Residence Services Desk: (905) 828-5286</Link></li>
          <li><Link href="tel:2898050580" className="">Don on Duty: (289) 805-0580</Link></li>
        </ul>
        <p className="font-rail"><b>Campus</b> supports</p>
        <ul className="list-disc list-inside">
          <li><Link href="https://www.utm.utoronto.ca/health/" target="_blank">Health and Counselling Centre</Link></li>
          <li><Link href="https://www.utm.utoronto.ca/rgasc/" target="_blank">Robert Gillespie Academic Skills Centre</Link></li>
          <li><Link href="https://www.utm.utoronto.ca/mental-health-supports/mental-health-supports/mental-health-and-crisis-supports">Mental health supports on campus</Link></li>
        </ul>
      </Tab>
      <Tab linknm="address" headertxt="Mailing address">
        <p className="text-xl font-rail text-blue-400">UTM Residence <b>mailing address</b></p>
        <p className="font-rail">Address all mail and packages to this address to be able to pick it up at the Residence Services desk. Mail cannot be sent directly to your building.</p>
        <kbd className="whitespace">[First Name] [Last Name]<br/>
P.O. Box #[Number]<br/>
3353 Mississauga Road,<br/>
Mississauga, Ontario, L5L 6A2<br/>
Canada
</kbd> <p className="font-rail">Your first and last name should be the one displayed on your TCard. Your P.O. Box number is written on your key packet when you moved in.</p>
<p className="font-rail">Sample entry:</p><kbd className="text-black!">
Jennifer Green<br/>
P.O. Box #221<br/>
3353 Mississauga Road,<br/>
Mississauga, Ontario, L5L 6A2<br/>
Canada</kbd>
      </Tab>
    </TabbableCtn>
  </Suspense>
}

function parseDate(st: string) {
  let out = new Date();
  out.setTime(Date.parse(st));
  return out;
}
function DateAnnounce({children, date:d, dateTo:dt, evHdr}:{children:ReactNode, date?:string, dateTo?:string, evHdr:string}) {
  let date = d?parseDate(d):null, dateTo = dt?parseDate(dt):null;
  return <div className={`grid grid-cols-subgrid transition-colors duration-250`}
      style={{gridColumn: `span 2`}}>
    <div className="p-2 bg-gray-200 hover:bg-gray-100 rounded-md items-center flex flex-col justify-start">
      {(date && dateTo) ? (
        date.getDate() != dateTo.getDate() ? <>
        <p className="text-nowrap">
          <span className="font-bold text-blue-400 font-mono text-3xl">{date.getDate()}</span>
          <span className="font-mono whitespace-nowrap text-lg"> {date.toLocaleDateString(undefined, {month:"short"})}</span>
        </p>
        <span className="font-mono text-sm"> to </span>
        <p className="text-nowrap">
          <span className="font-bold font-mono text-3xl text-blue-400">{dateTo!.getDate()}</span>
          <span className="font-mono whitespace-nowrap text-lg"> {dateTo!.toLocaleDateString(undefined, {month:"short"})}</span>
        </p>
      </> : <>
        <p className="font-mono text-sm">{date.toLocaleDateString(undefined, {weekday:"long"})}</p>
        <p className="text-nowrap">
          <span className="font-bold text-blue-400 font-mono text-3xl">{date.getDate()}</span>
          <span className="font-mono whitespace-nowrap text-lg"> {date.toLocaleDateString(undefined, {month:"short"})}</span>
        </p>
        <p className="text-nowrap">
          <span className="font-mono text-sm">{date!.toLocaleTimeString(undefined, {hour:"2-digit", minute:"2-digit", hourCycle:"h24"})}-</span>
          <span className="font-mono text-sm">{dateTo!.toLocaleTimeString(undefined, {hour:"2-digit", minute:"2-digit", hourCycle:"h24"})}</span>
        </p>
      </>
    ): (date ? <>
        <p className="font-mono text-sm">{date.toLocaleDateString(undefined, {weekday:"long"})}</p>
        <p>
          <span className="font-bold font-mono text-4xl text-blue-400">{date.getDate()}</span>&nbsp;
          <span className="font-mono whitespace-nowrap text-lg">{date.toLocaleDateString(undefined, {month:"short"})}</span>
        </p>
      </>:<>
        <p>Ongoing!</p>
      </>
      )}
    </div>
    <div className="w-full p-2 bg-gray-100 hover:bg-gray-200 rounded-md">
      {children}
      {date ? <><br/><Link href="" onClick={()=>{createEvent(children, evHdr, date, dateTo)}}>Add to Calendar</Link></> : <></>}
    </div></div>
}

function createEvent(children:ReactNode, evHdr:string, date:Date, dateTo:Date|null) {
  let div = document.createElement("div");
  const root = createRoot(div);
  flushSync(() => {
    root.render(children);
  });
  const calendar = ical({ name: 'Salmon Hub Event' });
  calendar.method(ICalCalendarMethod.PUBLISH);
  if (date) calendar.createEvent({
    start: date,
    end: dateTo,
    summary: evHdr,
    description: div.innerText,
    url: 'https://utmsalmonhub.vercel.app/?tab=calendar',
  })
  let st = calendar.toString();
  const blob = new Blob([st], {
    type: "application/text",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `event.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  console.log(calendar.toString())
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
  return <div className={`tabHeader rounded-t-md flex w-full overflow-x-auto overflow-y-clip bg-gray-100 p-2 pb-0 gap-1`}>{indat.children}</div>
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
  } className={`${active?"bg-gray-300 text-blue-500 translate-y-2":"bg-gray-200"} transition-all font-rail grow shrink-0 hover:bg-gray-300 rounded-b-none rounded-t-md p-2 cursor-pointer`}>
    {headertxt}
  </div>
}