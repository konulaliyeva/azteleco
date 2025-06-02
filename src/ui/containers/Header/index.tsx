import { getTranslations } from "next-intl/server";
import { LogoSVG, OriginalLogoSVG, UpArrowSVG } from "@public/vectors";
import HeaderWrapper from "./HeaderWrapper";
import MobileHeader from "./MobileHeader";
import ChangeLanguage from "@/ui/components/ChangeLanguage";
import DesktopNav from "./DesktopNav";
import { cn } from "@/core/utils/cn";
import { Link } from "@/i18n/navigation";
import { getLocale } from "next-intl/server";

const Header = async () => {
  const t = await getTranslations("HomePage");
  const locale = await getLocale();

  return (
    <HeaderWrapper>
      <div className="flex justify-between items-center p-4 px-6 lg:px-16 relative">
        <Link
          href="/"
          locale={locale}
          className="group-data-[submitted=true]:hidden group-data-[custom=true]:hidden"
        >
          <LogoSVG />
        </Link>
        <Link
          href="/"
          locale={locale}
          className="hidden group-data-[submitted=true]:block group-data-[custom=true]:block"
        >
          <OriginalLogoSVG />
        </Link>

        <div className="hidden lg:flex items-center space-x-6">
          {/* Desktop Nav (client-side) */}
          <DesktopNav />

          {/* Change Language (server-side) */}
          <ChangeLanguage />

          <Link
            href="/contact"
            className={cn(
              "rounded-[24px] h-12 px-4 flex items-center border-white text-white bg-brand-600 font-inter",
              "group-data-[home=true]:bg-white group-data-[home=true]:text-black group-data-[submitted=true]:bg-brand-600 group-data-[submitted=true]:text-white"
            )}
          >
            <div className="flex items-center sm:w-auto relative group/item overflow-hidden">
              <div className="flex items-center gap-x-2 transform group-hover/item:-translate-y-10 transition duration-500 ease-in-out text-16px600">
                {t("contactUs")} <UpArrowSVG />
              </div>
              <div className="absolute flex items-center gap-x-2 transform translate-y-full group-hover/item:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out text-16px600">
                {t("contactUs")} <UpArrowSVG />
              </div>
            </div>
          </Link>
        </div>

        {/* Mobile Header (client-side) */}
        <MobileHeader />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
