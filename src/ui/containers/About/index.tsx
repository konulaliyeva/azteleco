import { MissionSVG, TargetSVG, ViewIconSVG, VisionSVG } from "@public/vectors";
import Image from "next/image";
import React from "react";
import AboutImage from "@public/images/about.png";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("HomePage");
  const aboutData = [
    {
      icon: <TargetSVG />,
      title: t("whoWeAre.mission"),
      description: t("whoWeAre.missionDetail"),
    },
    {
      icon: <ViewIconSVG color="white" />,
      title: t("whoWeAre.vision"),
      description: t("whoWeAre.visionDetail"),
    },
  ];
  return (
    <section
      id="about"
      className="w-full mb-16 flex desktopSm:flex-col laptop:flex-col tablet:flex-col mobile:flex-col flex-row p-6 md:p-20 md:gap-y-0 md:gap-x-16 shadow-[0px_-60px_60px_-12px_#0000003D]"
    >
      <div className="flex flex-col gap-y-24 items-start w-full font-inter">
        <p className="text-gray-800 text-40px700 md:text-64px700 whitespace-nowrap desktopSm:py-2 laptop:py-2 laptopSm:py-2 tablet:py-2">
          {t("whoWeAre.title")}
        </p>
        <Image
          src={AboutImage}
          alt="about"
          width={456}
          height={380}
          className="desktop:h-[330px] desktopSm:hidden laptop:hidden tablet:hidden mobile:hidden"
        />
      </div>

      <div>
        <div className="flex flex-col gap-y-12 items-start  w-full font-inter ">
          <p className="text-gray-800 text-16px500 md:text-18px500 desktopSm:mt-4 laptop:mt-4 laptopSm:mt-4 tablet:mt-4 mobile:mt-4">
            {t("whoWeAre.description")}
          </p>
          <div className="flex flex-col desktopSm:flex-row gap-12 ">
           <div className="flex items-center justify-center">
             <Image
              src={AboutImage}
              alt="about"
              width={400}
              height={350}
              className="shrink w-full laptop:w-[600px] desktopSm:h-full desktopSm:w-[600px] laptopSm:w-[600px] tablet:w-[600px] h-fit hidden desktopSm:flex laptop:flex tablet:flex mobile:flex"
            />
           </div>
            <div className="flex gap-x-8 gap-y-12 font-inter w-full desktopSm:flex-col laptop:flex-col tablet:flex-col mobile:flex-col">
              {aboutData.map((item, index) => (
                <div key={index} className="flex flex-col gap-4 w-[90%]">
                  <div className="flex flex-col gap-4 desktopSm:flex-row">
                    <div className="w-12 h-12 bg-brand-600 flex justify-center items-center rounded-full shadow-[0px_8px_16px_-4px_#4B47FF7A]">
                    {item.icon}
                  </div>
                  <div className="text-gray-800 text-30px600">{item.title}</div>
                  </div>
                  <p className="text-gray-500 text-16px400 md:text-18px400 w-[90%] desktop:w-[98%] desktopLg:w-[70%] ">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
