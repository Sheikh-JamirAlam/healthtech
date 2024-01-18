import { Navbar, MobileNavbar, Footer, Notifications, AutomatedReports } from "ui";

export default function Page() {
  return (
    <main id="root">
      <Navbar />
      <MobileNavbar />
      <section className="pt-52 sm:pt-48 pb-24 px-20">
        <h1 className="text-5xl font-bold text-center text-darker-grey hidden-css">
          ⚡️ Automated <br /> lab reports & requests
        </h1>
        <AutomatedReports />
      </section>
      <section className="pb-24 bg-light-blue">
        <div className="overflow-hidden leading-[0] fill-primary-white">
          <svg className="w-[calc(140%+1.3px)] h-36 relative block" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-primary-white"
            ></path>
          </svg>
        </div>
        <div id="Contact-Form">
          <h1 className="text-center lg:text-left lg:px-56 pt-8 text-4xl font-bold text-primary-black hidden-css">Book a demo</h1>
          <div className="calendly-inline-widget" data-url="https://calendly.com/hi-with-pete/automating-lab-reports-with-healthtech-1" style={{ minWidth: "320px", height: "700px" }}></div>
        </div>
      </section>
      <Footer />
      <Notifications />
    </main>
  );
}
