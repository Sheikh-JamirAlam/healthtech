export function Navbar(): JSX.Element {
  return (
    <main className="p-6 mobile:flex mobile:justify-evenly hidden">
      <div>
        <a href="/">
          <img alt="Healthtech Logo" src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/64b971031f48da0992c112e5_Screenshot%202023-06-19%20at%2012.15.25.png" className="w-[4rem]" />
        </a>
      </div>
      <div className="text-lg font-medium text-center grid grid-flow-col gap-5 content-center items-center">
        <span className="w-24 cursor-pointer">Solutions</span>
        <span className="w-24 cursor-pointer">Resources</span>
        <span className="w-24 cursor-pointer">Company</span>
        <span className="w-24 cursor-pointer">Careers</span>
      </div>
      <div className="my-auto text-primary-white font-medium">
        <button className="py-4 px-7 rounded-xl bg-primary-blue outline-none shadow-lg transform hover:bg-accent-blue hover:text-primary-black active:scale-90 transition-all">Start for free</button>
      </div>
    </main>
  );
}
