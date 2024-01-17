import { SocialIcons } from "./social-icons";

export function Footer(): JSX.Element {
  return (
    <section className="px-12 xl:px-[15%] py-16 text-secondary-blue">
      <div className="md:grid md:grid-rows-5 md:grid-flow-col mobile:flex justify-between">
        <div className="md:w-[80%] md:row-span-3 mobile:w-[25%]">
          <a href="/">
            <img className="w-28 cursor-pointer" src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/61e5b33cb087e01eaf216dd5_healthtech%201%20logo%20(2).png" alt="Logo" />
          </a>
          <p className="py-6 text-sm text-primary-grey">Healthtech 1 provides safe and secure services to General Practices across the NHS.</p>
          <SocialIcons />
        </div>
        <div className="h-fit py-10 md:py-0 md:row-span-2 grid grid-cols-2 mobile:grid-cols-3 font-semibold">
          <p className="mobile:mx-4 mb-4 hover:text-primary-blue transition-all duration-500 cursor-pointer">SOLUTIONS</p>
          <p className="mobile:mx-4 mb-4 hover:text-primary-blue transition-all duration-500 cursor-pointer">PLATFORM</p>
          <p className="mobile:mx-4 mb-4 hover:text-primary-blue transition-all duration-500 cursor-pointer">RESOURCES</p>
          <p className="mobile:mx-4 mb-4 hover:text-primary-blue transition-all duration-500 cursor-pointer">ABOUT US</p>
          <p className="mobile:mx-4 mb-4 hover:text-primary-blue transition-all duration-500 cursor-pointer">NEWSROOM</p>
        </div>
        <div className="md:row-span-3">
          <p className="w-fit mx-auto pb-4 font-semibold">Certified by:</p>
          <div className="flex gap-4 justify-between max-[434px]:grid max-[434px]:grid-cols-2">
            <img className="h-10" src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/63ffb923e05e4bcdd90c932d_NHS%20Digital%20(1)-p-500.webp" alt="" />
            <img className="h-10" src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/63ffb48d10d4488536ecc6ce_Innovate%20UK%20logo-p-500.png" alt="" />
            <img className="h-10" src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/63ffb718e5443a606270a352_Cyber-Essentials-Badge-High-Res-p-500.webp" alt="" />
          </div>
        </div>
      </div>
      <div className="pt-6 flex flex-col-reverse md:flex-row items-center justify-between">
        <p>© Healthtech 1 LTD 2023. All rights reserved.</p>
        <div className="flex">
          <span className="hovering cursor-pointer">
            Contact Us <div className="w-[100%] h-[3px] bg-primary-blue opacity-0 transition-all duration-300 hovering-underline" />
          </span>
          <span className="mx-2">|</span>
          <span className="hovering cursor-pointer">
            <a href="https://docs.healthtech1.uk/general-privacy-policy">Privacy Policy</a>{" "}
            <div className="w-[100%] h-[3px] bg-primary-blue opacity-0 transition-all duration-300 hovering-underline" />
          </span>
        </div>
      </div>
    </section>
  );
}
