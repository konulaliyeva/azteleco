import {
  CalendarSVG,
  ClockSVG,
  FbSVG,
  HourglassSVG,
  InstaSVG,
  PinSVG,
  TgSVG,
} from "@public/vectors";
import Button from "@/ui/shared/Button";
import { ButtonVariantsEnum } from "@/data/enum/button_variants.enum";
import { CopySVG } from "@public/vectors";
import CareerCard from "@/ui/components/CareerCard";
import ApplyForVacancyForm from "@/ui/features/ApplyForVacancyForm/ApplyForVacancyForm";
import { useTranslations } from "next-intl";
import { CareerItem, VacancyDataModel } from "@/app/[lang]/careers/[slug]/page";
import CopyButtonComponent from "./ClientComponents";

const CareersDetailPageContainer = ({currentVacancy, careers}:{currentVacancy:VacancyDataModel,careers:CareerItem[]}) => {

  const socialMediaIcons = [
    {
      id:1,
      icon:  <FbSVG />
    },
    {
    id:2,
    icon:<InstaSVG />
    },
    {
    id:3,
    icon: <TgSVG />
    }
  ];
  const t = useTranslations("CareersPage");
  const linkToCopy =
    "www.aztelco.az/news/many desktop publishing packages and web page editors";



  return (
    <div className="mx-auto px-4 md:px-16 py-8 flex flex-col gap-8">
      {/* === Left Column (Main Content) === */}
      <div className="flex flex-col desktopMd:flex-row desktopLg:flex-row">
        <div className="flex flex-col gap-y-12 flex-grow">
          {/* Job Title & Meta Info */}
          <div>
            <h1 className="text-40px700 md:text-48px700 font-inter text-gray-800 leading-tight">
              {currentVacancy?.title}
            </h1>
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 md:flex md:items-center md:gap-x-12 text-gray-500 text-16px500 font-inter mt-6 shrink-0">
              <p className="flex items-center gap-x-2">
                <PinSVG /> {currentVacancy?.locType}
              </p>
              <p className="flex items-center gap-x-2">
                <HourglassSVG /> {currentVacancy?.employmentType}
              </p>
              <p className="flex items-center gap-x-2">
                <CalendarSVG /> {currentVacancy?.date}
              </p>
              <p className="flex items-center gap-x-2">
                <ClockSVG /> 15:24
              </p>
            </div>
          </div>

          {/* Job Description */}
          <section>
            <h2 className="text-24px600 text-gray-800 mb-4">
              {t("jobDescription")}
            </h2>
            <p className="text-gray-500 text-16px500 leading-relaxed mb-4">
              {currentVacancy?.desc}
            </p>
            <ul className="list-disc pl-6 text-gray-500 text-16px500 space-y-1">
              {currentVacancy?.vacancyDetail.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </section>

          {/* Requirements */}
          <section>
            <h2 className="text-24px600 text-gray-800 mb-4">
              {t("responsibilities")}
            </h2>
            <ul className="list-disc pl-6 text-gray-500 text-16px500 space-y-1">
              {currentVacancy?.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </section>

          {/* Share Section */}
          <div className="flex items-center gap-4 my-6">
            <span className=" text-24px600 text-gray-800 font-inter">
              {" "}
              {t("share")}
            </span>
          </div>
          <div className="flex flex-col items-start gap-y-4 desktopMd:flex-row desktopLg:flex-row md:gap-x-6 desktopMd:items-end desktopLg:items-ends">
            {/* Social Icons */}
            <div className="flex gap-2 md:order-none justify-start md:justify-center">
              {socialMediaIcons.map((item, i) => (
                <Button
                  key={item.id}
                  variant={ButtonVariantsEnum.FILLED}
                  className="rounded-full p-4"
                >
                  {item.icon}
                </Button>
              ))}
            </div>

            {/* Link Copy Input */}
            <div className="flex items-center w-full  bg-gray-50 border border-gray-300 rounded-full pl-4 font-inter">
              <input
                type="text"
                readOnly
                value={linkToCopy}
                className="flex-1 bg-transparent outline-none text-14px500 text-gray-600 truncate pr-4 shrink-0"
              />
              <CopyButtonComponent />
            </div>
          </div>
        </div>

        {/* === Right Column (Sidebar) === */}
        <aside className="bg-white rounded-2xl h-max md:w-[456px] border p-6 flex flex-col gap-y-8 mt-12 desktopMd:mt-0 desktopLg:mt-0 ">
          <h2 className="text-24px600 text-gray-800 font-inter">
            {t("applyForVacancy")}
          </h2>
          <ApplyForVacancyForm />
        </aside>
      </div>

      {/* === Full-width Other Vacancies === */}
      <div className="">
        <h1 className="text-40px700 font-bai text-gray-800 mt-12 mb-6">
          {t("otherVacancies")}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-36">
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
              locationType={job.locationType}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareersDetailPageContainer;
