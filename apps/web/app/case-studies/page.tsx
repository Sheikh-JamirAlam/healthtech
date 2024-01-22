import { Navbar, MobileNavbar, Footer, Notifications, InnovativePractices } from "ui";

export default function Page() {
  return (
    <main id="root">
      <Navbar />
      <MobileNavbar />
      <section className="pt-52 sm:pt-48 pb-24 px-6 md:px-20">
        <h1 className="max-w-[30rem] mx-auto text-5xl font-bold text-center text-darker-grey hidden-css">Innovative practices invest in technology</h1>
        <InnovativePractices />
      </section>
      <Footer />
      <Notifications />
    </main>
  );
}
