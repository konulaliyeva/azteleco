import VideoSrc from "@public/video/animation.mp4";
import "./style.css";
import Link from "next/link";
import { UpArrowSVG } from "@public/vectors";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("HomePage");

  return (
    <div
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-[#4936F5]"
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover mix-blend-screen"
        src={VideoSrc}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* blurred */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="w-[900px] h-[400px] backdrop-blur-[500px]  bg-white/0"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-48px700 md:text-80px700 text-center mb-6 leading-[40px] font-bai">
          {t("title.main")}{" "}  <br />
          <span className="text-56px700 mr-2 md:text-88px700 baskerville">
            {t("title.sub1")}
          </span>
          {/* <span className="mr-8 mt-4 font-baskervville text-56px700 md:text-88px700">
            {t("title.sub2")}
          </span> */}
          {t("title.sub2")}
        </h1>

        <p className="text-center text-18px400 font-inter mb-12 max-w-3xl">
          {t("description")}
        </p>

        <div className="flex flex-row gap-4 sm:flex-row sm:gap-6">
          <Link
            href="/contact"
            className="bg-white border-2 border-white text-black rounded-[40px] h-14 px-6 flex items-center "
          >
            <div className="flex items-center sm:w-auto relative group overflow-hidden font-inter">
              <div className="whitespace-nowrap overflow-hidden text-ellipsis flex items-center text-18px600 font-inter gap-x-2 transform group-hover:-translate-y-10 transition duration-500 ease-in-out">
                {t("contactUs")}
                <UpArrowSVG />
              </div>
              <div className="absolute flex items-center text-18px600 font-inter gap-x-2 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
                {t("contactUs")} <UpArrowSVG />
              </div>
            </div>
          </Link>

          <Link
            href="/#about"
            className="bg-white/10 border-2 border-[#FFFFFF1F] text-white rounded-[40px] h-14 px-6 flex items-center"
          >
            <div className="flex items-center sm:w-auto relative group overflow-hidden font-inter">
              <div className="text-16px600 font-inter flex items-center gap-x-2 transform group-hover:-translate-y-10 transition duration-500 ease-in-out">
                {t("about")}{" "}
                <UpArrowSVG className="transform rotate-[135deg]" />
              </div>
              <div className="absolute text-16px600 font-inter flex items-center gap-x-2 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
                {t("about")}{" "}
                <UpArrowSVG className="transform rotate-[135deg]" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
