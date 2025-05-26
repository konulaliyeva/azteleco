import { Link } from "@/i18n/routing";
import { getLocale, getTranslations } from "next-intl/server";

const DesktopNav = async () => {
  const locale = await getLocale();
  const t = await getTranslations("HomePage");

  //
  const navLinks: {
    id: number;
    label: string;
    path: "/services" | "/partners" | "/careers" | "/contact" | "/" | "/about";
  }[] = [
    // { id: 1, label: 'About', path: '/about' },
    {
      id: 2,
      label: t("navigation.services"),
      path: "/services",
    },
    { id: 4, label: t("navigation.partners"), path: "/partners" },
    { id: 5, label: t("navigation.career"), path: "/careers" },
    { id: 6, label: t("navigation.contact"), path: "/contact" },
  ];

  console.log("locale", locale);
  return (
    <>
      {navLinks.map(({ id, label, path }) => (
        <Link
          key={id}
          href={path as typeof Link.prototype.href}
          className="relative text-16px500 p-2 hover:rounded-md group-data-[home=true]:hover:bg-brand-700 group-data-[submitted=true]:hover:bg-brand-50 font-inter hover:bg-brand-50 after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:rounded-full group-data-[home=true]:after:bg-white group-data-[submitted=true]:after:bg-brand-600 after:bg-brand-600 after:opacity-0 hover:after:opacity-100"
        >
          {label}
        </Link>
      ))}
    </>
  );
};

export default DesktopNav;
