import Breadcrumbs from "@/ui/components/BreadCrumbs";
import ServicesPageContainer from "@/ui/containers/ServicesPageContainer";
import { HomeSVG } from "@public/vectors";
import { useTranslations } from "next-intl";

const ServicesPage = () => {
  const t = useTranslations("ServicesPage")

    const crumbs = [
        { id: 1, title: <HomeSVG />, href: "/" },
        { id: 2, title: t("title"), href: "/Services" },
      ];
  return (
    <div className="relative top-[103px]">
    <Breadcrumbs crumbs={crumbs} />
    <ServicesPageContainer />
    </div>
  )
}

export default ServicesPage;