import Breadcrumbs from "@/ui/components/BreadCrumbs";
import CareersDetailPageContainer from "@/ui/containers/CareersDetailPageContainer";
import { HomeSVG } from "@public/vectors";
import { getTranslations } from "next-intl/server";
export type VacancyDataModel ={
  title: string;
  desc: string;
  location: string;
  locType: string;
  employmentType: string;
  date: string;
  vacancyDetail: string[];
  responsibilities: string[];
} | null
export type CareerItem ={
  id: number;
  title: string;
  category: string;
  location: string;
  company: string;
  locationType: string;
  type: string;
  logo: string;
  postedAt: string;
}
const CareersDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const id = slug.split("").pop();
  
 const vacancies =await getTranslations("Vacancies");
 const CareersMockData1 = await getTranslations("CareersMockData1");
 const CareersMockData2 = await getTranslations("CareersMockData2");
 const CareersMockData3 = await getTranslations("CareersMockData3");
 
 const careers = [
   {
     id: 1,
     title: vacancies("1.title"),
     category: vacancies("1.category"),
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
      category: vacancies("2.category"),
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
      category: vacancies("3.category"),
      location: vacancies("3.location"),
      company: "AzTeleco MMC",
      locationType: vacancies("3.locType"),
      type: vacancies("3.employmentType"),
      logo: "/logos/azteleco.png", // Path to company logo
      postedAt: vacancies("3.date"),
    },
  ];
  
  const getVacancyData =  (): VacancyDataModel | null  => {
    switch (Number(id)) {
      case 1:
        return {
          title: CareersMockData1("vacancyTitle"),
          desc: CareersMockData1("vacancyDesc"),
          location: CareersMockData1("location"),
          locType: CareersMockData1("locType"),
          employmentType: CareersMockData1("employmentType"),
          date: CareersMockData1("date"),
          vacancyDetail: [
            CareersMockData1("vacancyDetail1"),
            CareersMockData1("vacancyDetail2"),
            CareersMockData1("vacancyDetail3"),
            CareersMockData1("vacancyDetail4"),
            CareersMockData1("vacancyDetail5"),
            CareersMockData1("vacancyDetail6"),
            CareersMockData1("vacancyDetail7"),
            CareersMockData1("vacancyDetail8"),
            CareersMockData1("vacancyDetail9"),
            CareersMockData1("vacancyDetail10"),
            CareersMockData1("vacancyDetail11"),
          ],
          responsibilities: [
            CareersMockData1("responsibilities1"),
            CareersMockData1("responsibilities2"),
            CareersMockData1("responsibilities3"),
            CareersMockData1("responsibilities4"),
            CareersMockData1("responsibilities5"),
            CareersMockData1("responsibilities6"),
          ],
        };
      case 2:
        return {
          title: CareersMockData2("vacancyTitle"),
          desc: CareersMockData2("vacancyDesc"),
          location: CareersMockData2("location"),
          locType: CareersMockData2("locType"),
          employmentType: CareersMockData2("employmentType"),
          date: CareersMockData2("date"),
          vacancyDetail: [
            CareersMockData2("vacancyDetail1"),
            CareersMockData2("vacancyDetail2"),
            CareersMockData2("vacancyDetail3"),
            CareersMockData2("vacancyDetail4"),
            CareersMockData2("vacancyDetail5"),
            CareersMockData2("vacancyDetail6"),
            CareersMockData2("vacancyDetail7"),
            CareersMockData2("vacancyDetail8"),
            CareersMockData2("vacancyDetail9"),
            CareersMockData2("vacancyDetail10"),
            CareersMockData2("vacancyDetail11"),
          ],
          responsibilities: [
            CareersMockData2("responsibilities1"),
            CareersMockData2("responsibilities2"),
            CareersMockData2("responsibilities3"),
            CareersMockData2("responsibilities4"),
            CareersMockData2("responsibilities5"),
            CareersMockData2("responsibilities6"),
            CareersMockData2("responsibilities7"),
            CareersMockData2("responsibilities8"),
          ],
        };
        case 3:
          return {
            title: CareersMockData3("vacancyTitle"),
            desc: CareersMockData3("vacancyDesc"),
            location: CareersMockData3("location"),
            locType: CareersMockData3("locType"),
            employmentType: CareersMockData3("employmentType"),
            date: CareersMockData3("date"),
            vacancyDetail: [
              CareersMockData3("vacancyDetail1"),
              CareersMockData3("vacancyDetail2"),
              CareersMockData3("vacancyDetail3"),
              CareersMockData3("vacancyDetail4"),
            CareersMockData3("vacancyDetail5"),
            CareersMockData3("vacancyDetail6"),
            CareersMockData3("vacancyDetail7"),
            CareersMockData3("vacancyDetail8"),
          ],
          responsibilities: [
            CareersMockData3("responsibilities1"),
            CareersMockData3("responsibilities2"),
            CareersMockData3("responsibilities3"),
            CareersMockData3("responsibilities4"),
            CareersMockData3("responsibilities5"),
            CareersMockData3("responsibilities6"),
            CareersMockData3("responsibilities7"),
            CareersMockData3("responsibilities8"),
          ],
        };
        default:
          return null;
        }
      };

      const currentVacancy = getVacancyData();
      const crumbs = [
        { id: 1, title: <HomeSVG />, href: "/" },
        { id: 2, title: "Karyera", href: "/careers" },
        { id: 3, title: currentVacancy?.title, href: "/careers/id" },
      ];
      return (
        <div className="relative top-[103px]">
      <Breadcrumbs crumbs={crumbs} />
      <CareersDetailPageContainer
        currentVacancy={currentVacancy}
        careers={careers}
      />
    </div>
  );
};

export default CareersDetailPage;
