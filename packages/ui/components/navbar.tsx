export function Navbar(): JSX.Element {
  return (
    <main className="p-6 flex justify-evenly">
      <div>
        <a href="/">
          <img alt="Healthtech Logo" src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/64b971031f48da0992c112e5_Screenshot%202023-06-19%20at%2012.15.25.png" className="w-[4rem]" />
        </a>
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
}
