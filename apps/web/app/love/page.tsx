import { Navbar, MobileNavbar, Footer, Notifications, InnovativePractices } from "ui";

export default function Page() {
  return (
    <main id="root">
      <Navbar />
      <MobileNavbar />
      <section className="pt-52 sm:pt-48 pb-6 px-6 md:px-20 hidden-css">
        <h1 className="max-w-[30rem] mx-auto mb-4 text-5xl font-bold text-center text-darker-grey">💙</h1>
        <h1 className="max-w-[30rem] mx-auto text-5xl font-bold text-center text-darker-grey">Practice Love</h1>
        <p className="max-w-[30rem] mx-auto mt-4 text-center">
          We&apos;ve created this wall of love to celebrate the feedback we receive from those in primary care who have chosen to automate their admin with Healthtech-1.
        </p>
        <p className="max-w-[30rem] mx-auto mt-4 text-center">These are real quotes from real NHS GP practice staff.</p>
      </section>
      <section className="py-12 xl:px-20">
        <div className="px-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 sm:col-span-2 text-primary-white bg-purple-600 rounded-xl shadow-3xl">
            <p className="italic">
              &quot;In our first 4 weeks, 98% of our online registrations have been automated, <span className="font-bold text-2xl">freeing up hours of time each week</span> for our registrations
              team. This increased capacity has enabled us to get on top of other income generating work. In summary <span className="font-bold text-2xl">a raving success for us</span> &ndash; very
              glad we took this step in our automation journey as a practice.&quot;
            </p>
            <p className="mt-4 font-semibold opacity-70">Samantha</p>
            <p className="text-xs opacity-70">IT & FINANCE MANAGER</p>
          </div>
          <div className="p-6 text-sky-200 bg-slate-600 rounded-xl shadow-3xl">
            <p className="italic">
              &quot;It has saved our practice a massive amount of time, and the payment per registration is totally offset by savings in staff time.{" "}
              <span className="font-bold text-2xl">It&apos;s a no brainer</span>.&quot;
            </p>
            <p className="mt-4 font-semibold opacity-70">Louise</p>
            <p className="text-xs opacity-70">PRACTICE MANAGER</p>
          </div>
          <div className="p-6 bg-neutral-50 rounded-xl shadow-3xl">
            <p className="italic">
              &quot;I really <span className="font-bold text-2xl">haven&apos;t been so excited about something since the day the Spice Girls said they&apos;ll get back together!</span>&quot;
            </p>
            <p className="mt-4 font-semibold opacity-70">Denzil</p>
            <p className="text-xs opacity-70">RECEPTIONIST</p>
          </div>
          <div className="p-6 bg-green-200 text-green-700 rounded-xl shadow-3xl">
            <p className="italic">
              &quot;I&apos;m really impressed with the outcome, <span className="font-bold text-2xl">we are saving so much admin time</span>.&quot;
            </p>
            <p className="mt-4 font-semibold opacity-70">Simi</p>
            <p className="text-xs opacity-70">PRACTICE MANAGER</p>
          </div>
          <div className="p-6 sm:row-span-2 bg-stone-500 text-primary-white rounded-xl shadow-3xl">
            <p className="italic">
              &quot;Working with you and your team has definitely been one of the highlights of my job here the practice. I am so grateful to Healthtech-1 for creating something that has{" "}
              <span className="font-bold text-2xl">really improved the quality of my work life</span>.&quot;
            </p>
            <p className="mt-4 font-semibold opacity-70">Alex</p>
            <p className="text-xs opacity-70">REGISTRATIONS CLERK</p>
          </div>
          <div className="p-6 sm:row-span-2 bg-indigo-200 text-blue-600 rounded-xl shadow-3xl">
            <p className="italic">
              &quot;<span className="font-bold text-2xl">I love how you&apos;ve thought of what we need</span>- no tying us into long term contracts or high prices and making sure that you code things
              properly - <span className="font-bold text-2xl">you really know your primary care</span>.&quot;
            </p>
            <p className="mt-4 font-semibold opacity-70">Cheryl</p>
            <p className="text-xs opacity-70">PRACTICE MANAGER</p>
          </div>
          <div className="p-6 sm:row-span-2 bg-back-orange text-text-orange rounded-xl shadow-3xl">
            <p className="italic">
              &quot;Not having to plan processing new patient registrations in our rota for the patient services team is{" "}
              <span className="font-bold text-2xl">a huge relief - everyone is loving it!!!</span>
              .&quot;
            </p>
            <p className="mt-4 font-semibold opacity-70">Alexia</p>
            <p className="text-xs opacity-70">PRACTICE MANAGER</p>
          </div>
          <div className="p-6 sm:row-span-2 bg-red-100 text-stone-500 rounded-xl shadow-3xl">
            <p className="italic">
              &quot;We love Healthtech-1&apos;s focus on clinical safety. Automated registrations means that patients are registered on the same day in a standardised way with QOF points (such as
              smoking cessation) already being gained. <span className="font-bold text-2xl">It truly means we have one less task.</span>.&quot;
            </p>
            <p className="mt-4 font-semibold opacity-70">Sarah</p>
            <p className="text-xs opacity-70">PRACTICE MANAGER</p>
          </div>
          <div className="p-6 lg:col-span-2 bg-neutral-300 text-stone-800 rounded-xl shadow-3xl">
            <p className="italic">
              &quot;Now that registrations are processed on the same day, our patient care navigators have considerably more time to devote to patient care-related tasks. With this much simpler
              registration process, <span className="font-bold text-2xl">our list size has significantly increased and we were able to give our staff a 10% pay rise this year!</span>.&quot;
            </p>
            <p className="mt-4 font-semibold opacity-70">Kuljeet</p>
            <p className="text-xs opacity-70">PARTNER</p>
          </div>
        </div>
      </section>
      <Footer />
      <Notifications />
    </main>
  );
}
