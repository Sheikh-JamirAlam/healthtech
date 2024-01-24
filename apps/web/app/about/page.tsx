import Image from "next/image";
import { Navbar, MobileNavbar, Footer, Notifications, Check } from "ui";

export default function Page() {
  return (
    <main id="root">
      <Navbar />
      <MobileNavbar />
      <section className="pt-52 sm:pt-48 pb-24 px-12 md:px-20">
        <div className="max-w-[70rem] pt-8 mx-auto">
          <h1 className="text-3xl font-bold text-darker-grey">
            NHS staff deserve 1 less task. <br /> We&apos;re the team to do it.
          </h1>
          <p>
            Having delivered &quot;game changing digital transformation&quot; to a handful of GP practices, our team are thought leaders in Primary Care. Diverse in background and expertise, we share
            the passion and technical skills to build health innovations at unparalleled speeds.
          </p>
        </div>
        <div className="pt-12 flex items-end justify-between columns-2 gap-8">
          <div className="w-1/2 pb-12 flex items-end flex-col gap-8">
            <Image className="rounded-xl" src="https://assets-global.website-files.com/618511f6a5e0b48a9972a8aa/61965e5eaa49b7a15c0f0b66_r%26p%20running.png" alt="image-42" width={450} height={450} />
            <div className="w-20 h-32 sm:w-44 sm:h-56">
              <Image
                className="w-full h-full object-cover rounded-xl"
                src="https://assets-global.website-files.com/61114f16d48cb8a800a4f117/63040071cefc1019ebdb73d8_DIGITAL%20HEALTH%20REWIRED%20MARCH%2722%20DAY2%20(406)%20(2)-p-500.jpg"
                alt="image-43"
                width={450}
                height={500}
              />
            </div>
          </div>
          <div className="w-1/2 flex items-start flex-col gap-8">
            <Image
              className="rounded-xl"
              src="https://assets-global.website-files.com/61114f16d48cb8a800a4f117/63040071fbd5315a4a4ef98d_DIGITAL%20HEALTH%20REWIRED%20MARCH%2722%20DAY2%20(409)%20(3)-p-500.jpg"
              alt="image-42"
              width={400}
              height={400}
            />
            <Image
              className="rounded-xl"
              src="https://assets-global.website-files.com/61114f16d48cb8a800a4f117/6303fef315bf054778bbdb34_Lydia%20%26%20team%20(2)-p-800.jpeg"
              alt="image-43"
              width={550}
              height={550}
            />
          </div>
        </div>
      </section>
      <section className="max-w-[55rem] xl:max-w-[70rem] mx-auto grid lg:flex justify-center items-center gap-12 lg:gap-36 xl:gap-56">
        <div className="w-[80%] md:w-1/2 mx-auto hidden-css horizontal">
          <Image src="https://assets-global.website-files.com/61114f16d48cb8a800a4f117/613226f6e776fd9a939e1332_coming%20soon-02-p-500.png" alt="image-44" width={450} height={450} />
        </div>
        <div className="w-[80%] md:w-1/2 mx-auto hidden-css">
          <h1 className="text-5xl font-semibold">We are guided by a strong set of principles</h1>
          <p className="py-6 font-bold">applied in all the work that we do:</p>
          <div className="grid gap-2 text-darker-grey">
            <span className="flex items-center">
              <Check />
              Do your life&apos;s best work
            </span>
            <span className="flex items-center">
              <Check />
              Be an owner
            </span>
            <span className="flex items-center">
              <Check />
              Simultaneously be a student and a teacher
            </span>
            <span className="flex items-center">
              <Check />
              Trust in radical trust and transparency
            </span>
            <span className="flex items-center">
              <Check />
              Find the fun
            </span>
          </div>
        </div>
      </section>
      <section className="px-6 sm:px-0 sm:max-w-[35rem] mx-auto py-20">
        <h1 className="text-3xl text-darker-grey font-bold text-center hidden-css">We are hiring</h1>
        <p className="my-6 text-center hidden-css">
          Want to empower better patient care across our nation? We&apos;re on the lookout for problem-solvers with a passion for health care. Drop us an email to find out which roles we&apos;re
          hiring for!
        </p>
        <div className="max-w-[20rem] mx-auto py-3 text-center font-semibold rounded-xl text-primary-white bg-primary-blue outline-none cursor-pointer shadow-3xl hover:bg-secondary-blue hover:transition-all active:scale-90 active:transition-transform hidden-css">
          Say Hi 👋🏽
        </div>
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
        <div className="px-12 md:px-24 lg:px-0 lg:max-w-[60rem] xl:max-w-[70rem] mx-auto">
          <h1 className="mb-16 text-5xl font-semibold">Meet the team</h1>
          <div className="sm:px-6 md:px-12 lg:px-0 grid lg:grid-cols-2 gap-4 xl:gap-8">
            <div>
              <div className="pb-10 flex justify-between items-center border-b-2 hidden-css">
                <div className="w-[49%] max-w-32 min-[500px]:max-w-48 xl:max-w-56 h-64">
                  <Image
                    className="w-full h-full rounded-xl object-cover"
                    src="https://assets-global.website-files.com/618511f6a5e0b48a9972a8aa/61964914e2aa279dc453066e_Pete%20HT1.jpeg"
                    alt="Peter Huang"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="w-[52%] text-primary-grey">
                  <h3 className="mb-3 text-primary-black font-bold">🐲 Peter Huang</h3>
                  <p className="mb-1 text-sm font-bold">Co-Founder & Head of Product</p>
                  <p>Pete builds the product! He&apos;s a self-taught software engineer that honed his skills at Monzo - company who make them wonderful orange bank cards!</p>
                </div>
              </div>
            </div>
            <div>
              <div className="mt-16 pb-10 mb-12 flex justify-between items-center border-b-2 hidden-css">
                <div className="w-[49%] max-w-32 min-[500px]:max-w-48 xl:max-w-56 h-64">
                  <Image
                    className="w-full h-full rounded-xl object-cover"
                    src="https://assets-global.website-files.com/618511f6a5e0b48a9972a8aa/61964914e2aa278938530673_Raj%20HT1.png"
                    alt="Raj Kohli"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="w-[52%] text-primary-grey">
                  <h3 className="mb-3 text-primary-black font-bold">🦄 Raj Kohli</h3>
                  <p className="mb-1 text-sm font-bold">Co-founder & Head of Growth</p>
                  <p>
                    Raj is an NHS Clinical Entrepreneur and drives growth at Ht1. He&apos;s also Patient Experience Lead at First 4 Health Group (4 GPs in Newham). Want work with us? Say hi to Raj.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="pb-10 flex justify-between items-center border-b-2 hidden-css">
                <div className="w-[49%] max-w-32 min-[500px]:max-w-48 xl:max-w-56 h-64">
                  <Image
                    className="w-full h-full rounded-xl object-cover"
                    src="https://assets-global.website-files.com/61114f16d48cb8a800a4f117/6303cbf0a052c17d54bda248_Lydia%20van%20Hamel-Parsons%2C%20Founding%20Clinician.jpeg"
                    alt="Dr Lydia van Hamel-Parsons"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="w-[52%] text-primary-grey">
                  <h3 className="mb-3 text-primary-black font-bold">🐯 Dr Lydia van Hamel-Parsons</h3>
                  <p className="mb-1 text-sm font-bold">Founding Clinician</p>
                  <p>
                    Lydia brings a super rare combination of health-tech experience. On the health side, Lydia is a NHS GP, meaning that she deeply feels and understands the pressures in primary care
                    💙. On the tech side, she worked as accuRx&apos;s second employee before founding her own healthcare admin automation startup.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="mt-16 pb-10 mb-12 flex justify-between items-center border-b-2 hidden-css">
                <div className="w-[49%] max-w-32 min-[500px]:max-w-48 xl:max-w-56 h-64">
                  <Image
                    className="w-full h-full rounded-xl object-cover"
                    src="https://assets-global.website-files.com/61114f16d48cb8a800a4f117/6303cc21a0a15b20ec01fa16_Neil%20Chandarana%2C%20Founding%20Engineer.webp"
                    alt="Neil Chandarana"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="w-[52%] text-primary-grey">
                  <h3 className="mb-3 text-primary-black font-bold">🦈 Neil Chandarana</h3>
                  <p className="mb-1 text-sm font-bold">Founding Engineer</p>
                  <p>
                    Neil studied alongside Pete at Warwick University, and our paths have crossed fondly many times. An automation junkie, Neil automated much of his own job as an Options Trader at
                    Barclays before founding his own AI/Data consultancy. Importantly, he&apos;s a systems thinker, who communicates diagrammatically.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="pb-10 flex justify-between items-center border-b-2 hidden-css">
                <div className="w-[49%] max-w-32 min-[500px]:max-w-48 xl:max-w-56 h-64">
                  <Image
                    className="w-full h-full rounded-xl object-cover"
                    src="https://assets-global.website-files.com/61114f16d48cb8a800a4f117/6406febef3b880a2b9c84176_image%20(24).png"
                    alt="Neil Chandarana"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="w-[52%] text-primary-grey">
                  <h3 className="mb-3 text-primary-black font-bold">🦅 Rupert Moreton</h3>
                  <p className="mb-1 text-sm font-bold">Founding Operator</p>
                  <p>Naturally eagle eyed. Rupert pays attention to the detail. It&apos;s the gift that enables him to lead Operations and Finance at Healthtech-1.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Notifications />
    </main>
  );
}
