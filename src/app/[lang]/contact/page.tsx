import Breadcrumbs from "@/ui/components/BreadCrumbs";
import ContactDetailsPage from "@/ui/containers/ContactDetailsPage";
import { HomeSVG } from "@public/vectors";
import { useTranslations } from "next-intl";
import React from "react";

const ContacPage = () => {
  const t = useTranslations("ContactPage");

  const crumbs = [
    { id: 1, title: <HomeSVG />, href: "/" },
    { id: 2, title: t("title"), href: "/careers" },
  ];

  return (
    <div className="relative top-[103px]">
      <Breadcrumbs crumbs={crumbs} />

      <ContactDetailsPage />
    </div>
  );
};

export default ContacPage;
