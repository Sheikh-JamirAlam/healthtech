import { Registration, BloodTest, Triage, CaseStudy, PracticeLove, Team, OpenRoles } from "./icons";

export function Navbar(): JSX.Element {
  return (
    <main className="w-full p-6 mobile:flex mobile:justify-evenly hidden absolute border-t-[1rem] border-primary-blue">
      <div>
        <a href="/">
          <img alt="Healthtech Logo" src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/64b971031f48da0992c112e5_Screenshot%202023-06-19%20at%2012.15.25.png" className="w-[4rem]" />
        </a>
      </div>
      <div className="text-lg font-medium text-center grid grid-flow-col gap-10 content-center">
        <div className="h-full dropdown">
          <button className="py-6 hovering">
            Solutions
            <div className="w-[81px] h-[2px] bg-primary-blue absolute opacity-0 transition-all duration-500 hovering-underline" />
          </button>
          <div className="w-full pt-6 pb-10 font-semibold text-primary-blue absolute left-0 bg-primary-white z-50 shadow-xl dropdown-content">
            <div className="w-[50rem] mx-auto grid grid-cols-2 gap-10">
              <div className="w-72 h-16 flex items-center hover:bg-secondary-grey transition-colors duration-300 rounded-lg cursor-pointer">
                <Registration />
                <p className="pl-2">PATIENT REGISTRATIONS</p>
              </div>
              <div className="w-72 h-16 flex items-center hover:bg-secondary-grey transition-colors duration-300 rounded-lg cursor-pointer">
                <BloodTest />
                <p className="pl-2">BLOOD TESTS</p>
              </div>
              <div className="w-72 h-16 flex items-center hover:bg-secondary-grey transition-colors duration-300 rounded-lg cursor-pointer">
                <Triage />
                <p className="pl-2">PATIENT TRIAGE</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full dropdown">
          <button className="py-6 hovering">
            Resources
            <div className="w-[90px] h-[2px] bg-primary-blue absolute opacity-0 transition-all duration-500 hovering-underline" />
          </button>
          <div className="w-full pt-6 pb-10 font-semibold text-primary-blue absolute left-0 bg-primary-white z-50 shadow-xl dropdown-content">
            <div className="w-[50rem] mx-auto grid grid-cols-2 gap-10">
              <div className="w-72 h-16 flex items-center hover:bg-secondary-grey transition-colors duration-300 rounded-lg cursor-pointer">
                <CaseStudy />
                <p className="pl-2">CASE STUDIES</p>
              </div>
              <div className="w-72 h-16 flex items-center hover:bg-secondary-grey transition-colors duration-300 rounded-lg cursor-pointer">
                <PracticeLove />
                <p className="pl-2">PRACTICE LOVE</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full dropdown">
          <button className="py-6 hovering">
            Company
            <div className="w-[82px] h-[2px] bg-primary-blue absolute opacity-0 transition-all duration-500 hovering-underline" />
          </button>
          <div className="w-full pt-6 pb-10 font-semibold text-primary-blue absolute left-0 bg-primary-white z-50 shadow-xl dropdown-content">
            <div className="w-[50rem] mx-auto grid grid-cols-2 gap-10">
              <div className="w-72 h-16 flex items-center hover:bg-secondary-grey transition-colors duration-300 rounded-lg cursor-pointer">
                <Team />
                <p className="pl-2">MEET THE TEAM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <button className="py-6 hovering">
            Careers
            <div className="w-[68px] h-[2px] bg-primary-blue absolute opacity-0 transition-all duration-500 hovering-underline" />
          </button>
          <div className="w-full pt-6 pb-10 font-semibold text-primary-blue absolute left-0 bg-primary-white z-50 shadow-xl dropdown-content">
            <div className="w-[50rem] mx-auto grid grid-cols-2 gap-10">
              <div className="w-72 h-16 flex items-center hover:bg-secondary-grey transition-colors duration-300 rounded-lg cursor-pointer">
                <OpenRoles />
                <p className="pl-2">OPEN ROLES</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-auto text-primary-white font-medium">
        <button className="py-4 px-7 rounded-xl bg-primary-blue outline-none shadow-md transform hover:bg-accent-blue hover:text-primary-black active:scale-90 transition-all">Start for free</button>
      </div>
    </main>
  );
}
