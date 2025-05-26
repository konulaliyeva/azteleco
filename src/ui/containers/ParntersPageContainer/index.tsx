import CaspianLoyd from "@public/images/caspianloyd.jpg";
import RentalServices from "@public/images/rentalservices.png";
import Azba from "@public/images/azba.png";
import AzerbaijanGorundServices from "@public/images/azerbaijanGorundServices.jpg";
import FinancialSupportCenter from "@public/images/financial.png";
import Azinvestech from "@public/images/Azinvesttech.png";
import Advera from "@public/images/Advera.jpg";
import FastSolution from "@public/images/fastsolution.png";
import ConstructionEng from "@public/images/constructionEng.png";
import IPC from "@public/images/IPC.png";
import OneSolution from "@public/images/onesolution.png";
import EcoClean from "@public/images/ecoclean.png";
import Azsoftware from "@public/images/azsoftware.png";
import AGS from "@public/images/ags.jpeg";
import Layer from "@public/images/layer.png"; 


import { RedirectSVG, UpArrowSVG } from "@public/vectors";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
const PartnersPageContainer = () => {
      const t = useTranslations("PartnersPage")
  
  const partners = [
    {
      id: 1,
      name: "Caspian Lloyd Mmc",
      description:
        "Diam ultrices odio ornare sollicitudin habitant viverra ornare. Quis amet cras suspendisse convallis flames. Nulla enim quis suspendisse lacinia ultricies. In nulla.",
      url: "https://www.caspianlloyd.az/",
      logo: CaspianLoyd,
    },
    {
      id: 2,
      name: "Rental Services Mmc",
      description:
        "Diam ultrices odio ornare sollicitudin habitant viverra ornare. Quis amet cras suspendisse convallis flames. Nulla enim quis suspendisse lacinia ultricies. In nulla.",
      url: "https://rentalservices.az/",
      logo: RentalServices,
    },
    {
      id: 3,
      name: "Azba Audit And Business Services Ltd Mmc",
      description:
        "Diam ultrices odio ornare sollicitudin habitant viverra ornare. Quis amet cras suspendisse convallis flames. Nulla enim quis suspendisse lacinia ultricies. In nulla.",
      url: "https://azba.az",
      logo: Azba,
    },
    {
      id: 4,
      name: "Azerbaijan Ground Services",
      description:
        "Diam ultrices odio ornare sollicitudin habitant viverra ornare. Quis amet cras suspendisse convallis flames. Nulla enim quis suspendisse lacinia ultricies. In nulla.",
      url: "https://avtovagzal.az/",
      logo:AzerbaijanGorundServices,
    },
    {
      id: 5,
      name: "Financial Support Center",
      description:
        "Diam ultrices odio ornare sollicitudin habitant viverra ornare. Quis amet cras suspendisse convallis flames. Nulla enim quis suspendisse lacinia ultricies. In nulla.",
      url: "https://financialsupportcenter.az",
      logo: FinancialSupportCenter,
    },
    {
      id: 6,
      name: "Azinvest Telecom Technology Qsc",
      description:
        "Diam ultrices odio ornare sollicitudin habitant viverra ornare. Quis amet cras suspendisse convallis flames. Nulla enim quis suspendisse lacinia ultricies. In nulla.",
      url: "https://azinvestech.az/",
      logo: Azinvestech,
    },
    {
      id: 7,
      name: "Advera Mmc",
      description:
        "Diam ultrices odio ornare sollicitudin habitant viverra ornare. Quis amet cras suspendisse convallis flames. Nulla enim quis suspendisse lacinia ultricies. In nulla.",
      url: "https://adgo.az/",
      logo: Advera,
    },
        {
      id: 8,
      name: "Construction Engineering Qsc",
      description:
        "Diam ultrices odio ornare sollicitudin habitant viverra ornare. Quis amet cras suspendisse convallis flames. Nulla enim quis suspendisse lacinia ultricies. In nulla.",
      url: "https://conseng.az/",
      logo: ConstructionEng,
    },
     {
      id: 9,
      name: "Fast Solutions Mmc",
      description:
        "Diam ultrices odio ornare sollicitudin habitant viverra ornare. Quis amet cras suspendisse convallis flames. Nulla enim quis suspendisse lacinia ultricies. In nulla.",
      url: "https://fastsolutions.az/",
      logo: FastSolution,
    },
      {
      id: 10,
      name: "Azeco Clean Mmc",
      description:
        "Diam ultrices odio ornare sollicitudin habitant viverra ornare. Quis amet cras suspendisse convallis flames. Nulla enim quis suspendisse lacinia ultricies. In nulla.",
      url: "https://eco-clean.az/",
      logo: EcoClean,
    },  {
      id: 11,
      name: "Az Softvare System Qsc",
      description:
        "Diam ultrices odio ornare sollicitudin habitant viverra ornare. Quis amet cras suspendisse convallis flames. Nulla enim quis suspendisse lacinia ultricies. In nulla.",
      url: "https://azsoftware.az/",
      logo: Azsoftware,
    },  {
      id: 12,
      name: "One Solution Mmc",
      description:
        "Diam ultrices odio ornare sollicitudin habitant viverra ornare. Quis amet cras suspendisse convallis flames. Nulla enim quis suspendisse lacinia ultricies. In nulla.",
      url: "https://onesolution.az/",
      logo: OneSolution,
    },  {
      id: 13,
      name: "Azəri Global Servis Qsc",
      description:
        "Diam ultrices odio ornare sollicitudin habitant viverra ornare. Quis amet cras suspendisse convallis flames. Nulla enim quis suspendisse lacinia ultricies. In nulla.",
      url: "https://azeriglobalservis.com/",
      logo: AGS,
    },  {
      id: 14,
      name: "Innovativ Layihələr Mərkəzi Qsc",
      description:
        "Diam ultrices odio ornare sollicitudin habitant viverra ornare. Quis amet cras suspendisse convallis flames. Nulla enim quis suspendisse lacinia ultricies. In nulla.",
      url: "http://ipc.az/",
      logo: IPC,
    },
  ];
  return (
    <div className="min-h-screen bg-white px-4 md:px-20">
     <div className="relative hidden md:block">
        <Image
          src={Layer}
          alt="Background"
          className="absolute right-0 top-0 h-auto z-0 pointer-events-none"
          objectFit="contain"
          priority
        />
      </div>
     <div className="relative z-10 py-10">
       <h1 className="text-64px700 font-bai text-gray-800 mb-16">{t("title")}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mb-32">
        {partners.map((partner) => (
          <Link
          href={""}
            key={partner.id}
            className="relative group max-w-[456px]  bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between hover:border-brand-600"
          >
            <div className="flex items-center justify-between ">
              <div className="relative  h-[48px] w-[110px] ">
                <Image
                  src={partner.logo}
                  width={110}
                  height={48}
                  alt="Logo"
                   style={{ objectFit: "contain", width: "100%", height: "100%" }}
                />
              </div>
              <div
                className=" w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center"
              >
                <div className="flex items-center gap-x-2 transform group-hover:-translate-y-10 transition duration-500 ease-in-out">
                  <UpArrowSVG />
                </div>
                <div className="absolute flex items-center gap-x-2 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
                  <UpArrowSVG />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h2 className="text-gray-800 text-20px700 md:text-24px700 font-inter mb-3 mt-12">
                {partner.name}
              </h2>
              {/* <p className="text-gray-500 text-16px500 font-inter mb-12 leading-snug">
                {partner.description}
              </p> */}
            </div>

            <div
              className="relative overflow-hidden   p-2 text-16px600 font-inter gap-x-2 text-brand-600 font-semibold bg-brand-50 rounded-[8px] hover:underline flex items-center"
            >
              <div className="flex items-center gap-x-2 transform group-hover:-translate-y-10 transition duration-500 ease-in-out">
                <RedirectSVG />
                {partner.url.replace("https://", "")}
              </div>
              <div className="absolute flex items-center gap-x-2 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
                <RedirectSVG />
                {partner.url.replace("https://", "")}
              </div>
            </div>
          </Link>
        ))}
      </div>
     </div>
    </div>
  );
};

export default PartnersPageContainer;
