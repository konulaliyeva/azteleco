import Breadcrumbs from "@/ui/components/BreadCrumbs";
import CareersPageContainer from "@/ui/containers/CareersPageContainer";
import {HomeSVG } from "@public/vectors";
import { useTranslations } from "next-intl";

const CareersPage = () => {
  const t = useTranslations("CareersPage");

  const crumbs = [
    { id: 1, title: <HomeSVG/>, href: "/" },
    { id: 2, title: t("title"), href: "/careers" },
  ];

  return (
    <div className="relative top-[103px]"> 
      <Breadcrumbs crumbs={crumbs} />
      <CareersPageContainer />
    </div>
  );
};

export default CareersPage;
