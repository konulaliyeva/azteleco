import {
  ConstructionSVG,
  FinancialSVG,
  IktSVG,
  PeopleSVG,
  TelecommunicationSVG,
  UpArrowSVG,
} from "@public/vectors";
import { useTranslations } from "next-intl";

export default function ServiceSection() {
  const t = useTranslations("HomePage");
  const serviceData = [
    {
      icon: <TelecommunicationSVG />,
      title: t("ourServices.telecommunicationServices"),
      description: [
        t("ourServices.telecommunicationServicesDetail1"),
        t("ourServices.telecommunicationServicesDetail2"),
        t("ourServices.telecommunicationServicesDetail3"),
        t("ourServices.telecommunicationServicesDetail4"),
      ],
    },
    {
      icon: <ConstructionSVG />,
      title: t("ourServices.digitalServices"),
      description: [
        t("ourServices.digitalServicesDetail1"),
        t("ourServices.digitalServicesDetail2"),
      ],
    },
    // {
    //   icon: <FinancialSVG />,
    //   title: t("ourServices.financeServices"),
    //   description: t("ourServices.financeServicesDetail")
    // },
    {
      icon: <IktSVG />,
      title: t("ourServices.ITsolutionsServices"),
      description: [
        t("ourServices.ITsolutionsServicesDetail1"),
        t("ourServices.ITsolutionsServicesDetail2"),
        t("ourServices.ITsolutionsServicesDetail3"),
      ],
    },
    {
      icon: <PeopleSVG />,
      title: t("ourServices.consultingServices"),
      description: [
        t("ourServices.consultingServicesDetail1"),
        t("ourServices.consultingServicesDetail2"),
        t("ourServices.consultingServicesDetail3"),
      ],
    },
  ];

  return (
    <div className="bg-brand-500">
      <div className="p-6 sm:p-10 md:p-20">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-white pb-8 sm:pb-16 gap-4">
          <p className="text-3xl sm:text-64px700 font-bai">
            {t("ourServices.servicesTitle")}
          </p>
          <p className="text-sm sm:tex-18px500 font-inter sm:w-1/3">
            {t("ourServices.servicesDescription")}
          </p>
        </div>

        <div className="grid grid-cols-2 mobile:grid-cols-1 tablet:grid-cols-1 gap-4">
          {serviceData.map((service, index) => (
            // ${index < 3 ? "sm:col-span-2" : "sm:col-span-3"}
            <div
              key={index}
              className={`
                col-span-1
                bg-black/10 rounded-3xl px-4 py-6 sm:px-6 sm:py-10
                text-white hover:bg-[#00000029]
                group transition duration-300
              `}
            >
              <div className="flex justify-between items-center mb-6 sm:mb-12">
                {service.icon}
                <UpArrowSVG className="text-white transform transition duration-300 group-hover:scale-150 group-hover:-translate-x-4 group-hover:translate-y-1" />
              </div>
              <div className="text-xl sm:text-30px700 font-inter mb-2 sm:mb-3">
                {service.title}
              </div>
              <div className="text-xs sm:text-14px400 font-inter">
                <ul className="list-disc pl-5 text-16px500 truncate">
                  {service.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
