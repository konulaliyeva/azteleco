import {
  ConstructionSVG,
  IktSVG,
  PeopleSVG,
  TelecommunicationSVG,
  UpArrowSVG,
} from "@public/vectors";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import Layer from "@public/images/layer.png";
const ServicesPageContainer = () => {
  const t = useTranslations("ServicesPage");
  const service = useTranslations("HomePage");

  const services = [
    {
      id: 1,
      logo: <TelecommunicationSVG />,
      name: service("ourServices.telecommunicationServices"),
      description: [
        service("ourServices.telecommunicationServicesDetail1"),
        service("ourServices.telecommunicationServicesDetail2"),
        service("ourServices.telecommunicationServicesDetail3"),
        service("ourServices.telecommunicationServicesDetail4"),
      ],
    },
    {
      id: 2,
      logo: <ConstructionSVG />,
      name: service("ourServices.digitalServices"),
      description: [
        service("ourServices.digitalServicesDetail1"),
        service("ourServices.digitalServicesDetail2"),
      ],
    },
    {
      id: 3,
      logo: <IktSVG />,
      name: service("ourServices.ITsolutionsServices"),
      description: [
        service("ourServices.ITsolutionsServicesDetail1"),
        service("ourServices.ITsolutionsServicesDetail2"),
        service("ourServices.ITsolutionsServicesDetail3"),
      ],
    },
    {
      id: 4,
      logo: <PeopleSVG />,
      name: service("ourServices.consultingServices"),
      description: [
        service("ourServices.consultingServicesDetail1"),
        service("ourServices.consultingServicesDetail2"),
        service("ourServices.consultingServicesDetail3"),
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-white py-10 px-4 md:px-20 overflow-hidden">
      {/* Background image using next/image */}
      <Image
        src={Layer}
        alt="Background"
        fill
        className="object-contain object-right pointer-events-none z-0 hidden md:block"
        priority
      />

      {/* Foreground content */}
      <div className="relative z-10">
        <h1 className="text-64px700 font-bai text-gray-800 mb-16">
          {t("title")}
        </h1>
        {/* <p className="text-gray-500 font-inter text-20px500 mt-2 mb-16">{t("description")}</p> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-6 mb-32">
          {services.map((service) => (
            <Link
              href={``}
              key={service.id}
              className="relative group max-w-fit h-[300px] bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-y-3 transition-all duration-300 ease-in-out hover:border-brand-600 hover:bg-brand-600"
            >
              <div className="flex items-center justify-between">
                {service.logo}
                <UpArrowSVG className="text-gray-500 transform -translate-y-5 transition duration-300 group-hover:scale-150 group-hover:-translate-x-4 group-hover:translate-y-1 group-hover:text-white" />
              </div>

              <div className="mb-4 text-base-600 font-inter">
                <h2 className="text-24px600 md:text-30px700 mb-4 mt-12 group-hover:text-white truncate">
                  {service.name}
                </h2>
                <ul className="list-disc space-y-1 pl-5 text-14px400 leading-snug line-clamp-3 group-hover:text-white">
                  {service.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPageContainer;
