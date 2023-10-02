import Image from "next/image";
import Announcement from "./components/Announcement";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <section className="ml-28 my-12 flex justify-center gap-20">
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
    </>
  );
}
