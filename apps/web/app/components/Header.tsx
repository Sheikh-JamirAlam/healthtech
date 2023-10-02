import Image from "next/image";

const Header = () => {
  return (
    <main className="p-6 flex justify-evenly">
      <div>
        <Image src="/logo.png" alt="Healthtech Logo" width={65} height={65} priority />
      </div>
      <div className="text-center grid grid-flow-col gap-5 content-center items-center">
        <span className="w-24">Patient Registrations</span>
        <span className="w-24">Blood Tests</span>
        <span className="w-24">Patient Triage</span>
        <span className="w-24">Case Studies</span>
        <span className="w-24">Team</span>
        <span className="w-24">Practice Love</span>
        <span className="w-24">Careers</span>
      </div>
      <div className="my-auto">
        <button className="p-4 border-4 border-primary-blue rounded-full">Start for free</button>
      </div>
    </main>
  );
};

export default Header;
