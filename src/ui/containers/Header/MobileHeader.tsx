"use client";

import { useState } from "react";
import ChangeLanguage from "@/ui/components/ChangeLanguage";
import {
  HamburgerSVG,
  UpArrowSVG,
  CloseSVG,
  OriginalLogoSVG,
  CheckSVG,
} from "@public/vectors";
import { cn } from "@/core/utils/cn";
import { useTranslations } from "next-intl";
import { ChangeLanguageEnum } from "@/data/enum/change_language.enum";
import { Link } from "@/i18n/routing";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("HomePage");

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => {
    setIsOpen(false);
  };



  const navLinks = [
    {
      id: 2,
      label: t("navigation.services"),
      href: "/services",
    },
            { id: 3, label: t("navigation.partners"), href: "/partners" },
    { id: 4, label: t("navigation.career"), href: "/careers", subLinks: [] },
    { id: 5, label: t("navigation.contact"), href: "/contact", subLinks: [] },
  ];

  return (
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        className="rounded-full p-3 bg-white flex justify-between items-center"
        aria-label="Toggle Mobile Menu"
      >
        <HamburgerSVG />
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white  z-50 p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-6 py-6 border-b">
            <div>
              <OriginalLogoSVG />
            </div>
            <button
              onClick={closeMenu}
              aria-label="Close Menu"
              className="w-12 h-12 flex justify-center items-center rounded-[24px] border border-gray-200"
            >
              <CloseSVG />
            </button>
          </div>

          <nav className="flex flex-col my-6 space-y-2 fon-inter pb-14">
            {navLinks.map(({ id, label, href, subLinks }) => (
              <div key={id}>
             
                    <Link
                      href={href as typeof Link.prototype.href}
                      onClick={closeMenu}
                     className="flex justify-between text-16px500 text-base items-center group/item p-3 rounded-[12px] text-left hover:bg-gray-100"
                    >
                      {label}
                    <CheckSVG
                      className="hidden group-hover/item:flex"
                      color="#000"
                    />
                    </Link>
                
              </div>
            ))}
          </nav>

          {/* Language switch */}
          <div className="my-6">
            <ChangeLanguage variant={ChangeLanguageEnum.MOBILE} />
          </div>

          {/* Contact Button */}
          <Link
            href="/contact"
            className={cn(
              "fixed bottom-6 left-1/2 -translate-x-1/2 rounded-[24px] w-10/12 h-12 px-4 flex items-center justify-center border-white text-white bg-brand-600 font-inter",
              "group-data-[home=true]:bg-brand-600 group-data-[home=true]:text-white  group-data-[submitted=true]:bg-brand-600 group-data-[submitted=true]:text-white"
            )}
          >
            <div className="flex items-center gap-x-2 text-16px600">
              {t("contactUs")} <UpArrowSVG />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
