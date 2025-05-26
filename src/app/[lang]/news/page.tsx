import Breadcrumbs from "@/ui/components/BreadCrumbs";
import NewsPageContainer from "@/ui/containers/NewsPageContainer";
import {HomeSVG } from "@public/vectors";
import { useTranslations } from "next-intl";

const NewsPage = () => {
        const t = useTranslations("NewsPage")
  
  const crumbs = [
    { id: 1, title: <HomeSVG />, href: "/" },
    { id: 2, title: t("title"), href: "/news" },
  ];

  return (
    <div className="relative top-[103px]">
      <Breadcrumbs crumbs={crumbs} />
      <NewsPageContainer />
    </div>
  );
};

export default NewsPage;
