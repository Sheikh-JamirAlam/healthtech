import Image from "next/image";
import { Header } from "ui";

export default function Home() {
  return (
    <>
      <Header />
      <section className="ml-28 py-24 flex justify-center gap-20">
        <div className="w-[25rem] my-auto">
          <h1 className="mb-4 font-extrabold text-6xl text-primary-black">Patient registrations you&apos;ll love.</h1>
          <p className="mb-6 font-bold text-2xl text-primary-black">Faster, Safer, Automated ⚡️</p>
          <div className="mb-6 text-primary-white flex gap-12">
            <button className="py-3 px-7 rounded-xl bg-primary-blue">Book a demo</button>
            <button className="py-3 px-7 rounded-xl bg-primary-blue">Test our form</button>
          </div>
          <div className="text-sm grid grid-cols-2 items-center">
            <p className="mb-2">✅ Integrated with EMIS</p>
            <p className="mb-2">✅ Integrated with SystmOne</p>
            <Image src="/emis.png" alt="Emis" width={100} height={100} />
            <Image src="/systemone.png" alt="SystmOne" width={100} height={100} />
          </div>
        </div>
        <div className="w-[35rem] h-[35rem] bg-slate-600 rounded-3xl"></div>
      </section>
      <section className="bg-light-blue">
        <div className="px-[10%] pt-36 flex justify-between">
          <div className="w-[20%]">
            <h2 className="w-[80%] text-4xl font-bold hidden-css">Go live in 29 mins</h2>
            <p className="my-6 text-primary-grey hidden-css">The point of registration is an important moment to set your patients up for success.</p>
            <button className="px-6 py-4 font-medium rounded-xl text-primary-white bg-primary-blue hidden-css">Learn more</button>
          </div>
          <div className="w-[60%] grid grid-cols-2 gap-20">
            <div className="hidden-css">
              <Image src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/644a4b6fc281906ee7ef171f_Group%20878.svg" width={60} height={60} alt="Timer icon" />
              <h3 className="my-6 text-2xl font-bold">Same Day Registrations</h3>
              <p className="w-[85%] text-primary-grey">Fast registrations take the sting out of patient engagements</p>
            </div>
            <div className="hidden-css">
              <Image src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/644a4b6fc281904c46ef1720_Group%20701-min.png" width={60} height={60} alt="Shield with tick icon" />
              <h3 className="my-6 text-2xl font-bold">9/10 Patient Satisfaction</h3>
              <p className="w-[85%] text-primary-grey">Over 50,000 patients have rated our registration form highly</p>
            </div>
            <div className="hidden-css">
              <Image src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/644a3d8527663902772fddb0_Group%20902.png" width={60} height={60} alt="Lock icon" />
              <h3 className="my-6 text-2xl font-bold">Safe & Secure</h3>
              <p className="w-[85%] text-primary-grey">Rest easy knowing your patients&apos; data is secured to NHS Digital standards</p>
            </div>
            <div className="hidden-css">
              <Image src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/644a4b6fc28190208cef171e_Group%20894.svg" width={60} height={60} alt="Message icon (paper plane)" />
              <h3 className="my-6 text-2xl font-bold">Welcome Messages</h3>
              <p className="w-[85%] text-primary-grey">Automatically send welcome emails and texts, that set your patients up for success</p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden leading-[0] rotate-180 relative bottom-0 left-0 fill-primary-white">
          <svg className="w-[calc(140%+1.3px)] h-36 relative block" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-primary-white"
            ></path>
          </svg>
        </div>
      </section>
      <section className="px-36 py-24 hidden-css">
        <h1 className="mb-12 text-4xl font-bold text-primary-black underline decoration-primary-blue">Trusted by 100+ innovative NHS practices</h1>
        <Image
          className="mx-auto"
          width={1200}
          height={1200}
          src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/63cc199cd7632e59673d35e1_Screenshot%202023-01-21%20at%2016.57.09.png"
          alt="Message icon (paper plane)"
        />
      </section>
    </>
  );
}
