import Breadcrumbs from "@/ui/components/BreadCrumbs";
import PartnersPageContainer from "@/ui/containers/ParntersPageContainer";
import {HomeSVG } from "@public/vectors";
import { useTranslations } from "next-intl";

const PartnersPage = () => {
    const t = useTranslations("PartnersPage")

  const crumbs = [
    { id: 1, title: <HomeSVG />, href: "/" },
    { id: 2, title: t("title"), href: "/partners" },
  ];
  return (
    <div className="relative top-[103px]">
      <Breadcrumbs crumbs={crumbs} />
      <PartnersPageContainer />
    </div>
  );
};

export default PartnersPage;
