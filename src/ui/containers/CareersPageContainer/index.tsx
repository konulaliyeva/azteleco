import CareerCard from "@/ui/components/CareerCard";
import Pagination from "@/ui/shared/Pagination";
import FinancialSupportCenter from "@public/images/FSC.png";
import { RedirectSVG, UpArrowSVG } from "@public/vectors";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Layer from "@public/images/layer.png";

const CareersPageContainer = () => {
      const t = useTranslations("CareersPage")
      const vacancies = useTranslations("Vacancies")

 const careers = [
    {
      id: 1,
      title: vacancies("1.title"),
      category:vacancies("1.category"),
      location: vacancies("1.location"),
      company: "AzTeleco MMC",
      locationType: vacancies("1.locType"),
      type: vacancies("1.employmentType"),
      logo: "/logos/azteleco.png", // Path to company logo
      postedAt: vacancies("1.date"),
    },
    {
      id: 2,
    title: vacancies("2.title"),
      category:vacancies("2.category"),
      location: vacancies("2.location"),
      company: "AzTeleco MMC",
      locationType: vacancies("1.locType"),
      type: vacancies("2.employmentType"),
      logo: "/logos/azteleco.png", // Path to company logo
      postedAt: vacancies("2.date"),
    },
    {
        id: 3,
       title: vacancies("3.title"),
      category:vacancies("3.category"),
      location: vacancies("3.location"),
      company: "AzTeleco MMC",
      locationType: vacancies("3.locType"),
      type: vacancies("3.employmentType"),
      logo: "/logos/azteleco.png", // Path to company logo
      postedAt: vacancies("3.date"),
      },
     
  ];
  
  
  return (
    <div className="min-h-screen bg-white px-4 md:px-40 md:mb-0">
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
       <h1 className="mb-16 text-64px700 font-bai text-gray-800 ">{t("title")}</h1>
     {/* <p className="text-gray-500 font-inter text-20px500 mt-2 mb-16">{t("description")}</p> */}
      <div className="grid grid-cols-1 desktopMd:grid-cols-3 desktopLg:grid-cols-3 gap-6 mb-32 desktopMd:mb-0 desktopLg:mb-0">
        
      {careers.map((job) => (
        <CareerCard
        key={job.id}
        id={job.id}
          title={job.title}
          location={job.location}
          company={job.company}
          type={job.type}
          category={job.category}
          postedAt={job.postedAt}
          logo={job.logo}
          locationType = {job.locationType}
        />
      ))}
    </div>
    <div className="mt-16 mb-28 hidden">
        <Pagination total={100} />
      </div>
     </div>
    </div>
  );
};

export default CareersPageContainer;
