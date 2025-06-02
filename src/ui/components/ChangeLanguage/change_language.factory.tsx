"use client"
import { cn } from "@/core/utils/cn";
import { ChangeLanguageVM } from "./change_language.vm";
import { ChangeLanguageEnum } from "@/data/enum/change_language.enum";
import { AZSVG, CheckSVG, DownChevronSVG, GBSVG, RUSVG } from "@public/vectors";
import { Link } from "@/i18n/navigation";

const ChangeLanguageFactory = () => {
  const {
    collapse,
    isOpen,
    setIsOpen,
    lang,
    locales,
    pathname,
  } = ChangeLanguageVM();

  const getLangInfo = (lang: string) => {
    return {
      az: {
        text: "Azerbaijan",
        icon: <AZSVG />,
      },
      en: {
        text: "English",
        icon: <GBSVG />,
      },
      ru: {
        text: "Russian",
        icon: <RUSVG />,
      },
    }[lang];
  };
  const renderChangeLanguage = {
    [ChangeLanguageEnum.DROPDOWN]: (
      <div
        ref={collapse}
        onClick={() => setIsOpen((prev) => !prev)}
        className="z-40"
        role="button"
      >
        <div
          className={cn(
            `relative max-h-12 z-20 flex items-center mx-4 group-data-[home=true]:bg-purple-500 group-data-[home=true]:bg-opacity-70 group-data-[submitted=true]:bg-[#ECF0FF] group-data-[custom=true]:bg-[#ECF0FF] hover:border-gray-400  text-16px600 py-3 pl-[18px] pr-3 rounded-3xl text-gray-950 duration-300`
          )}
        >
          <div className="flex items-center gap-1.5 px-2">
            <h2
              className={`text-16px600 font-inter group-data-[home=true]:text-white group-data-[submitted=true]:text-brand-500 group-data-[custom=true]:text-brand-500`
            }
            >
              {String(lang).toLocaleUpperCase()}
            </h2>
            <DownChevronSVG
              className={cn(
                "duration-500 group-data-[home=true]:text-white group-data-[submitted=true]:text-brand-500 group-data-[custom=true]:text-brand-500",
                isOpen ? "rotate-180" : ""
              )}
            />
          </div>
          <div
            className={cn(
              "absolute top-14 -left-1 bg-white text-gray-800 border border-gray-300 overflow-hidden p-1 rounded-xl duration-500 ease-in-out",
              isOpen ? "max-h-[150px] opacity-100" : "max-h-0 opacity-0 hidden"
            )}
          >
            {locales.map((locale, i) => (
              <div
                key={i}
                className={cn(
                  "flex items-center hover:bg-gray-100 mb-2 px-4 rounded-md duration-300 ease-in-out whitespace-nowrap",
                  locale === lang && "px-4 bg-blue-100 rounded-md "
                )}
                // onClick={() => changeLanguage(locale)}
              >
                <div>{getLangInfo(locale)?.icon}</div>
                <Link
                  key={i}
                  locale={locales[i]}
                  href={pathname.path as typeof Link.prototype.href}
                  className={cn(
                    "py-2 px-5 block text-16px500 font-inter",
                    locale === lang && "text-brand-600"
                  )}
                >
                  {getLangInfo(locale)?.text}
                </Link>
                {locale === lang ? <CheckSVG color="#4936F5" /> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
      [ChangeLanguageEnum.MOBILE]: (
      <div
        ref={collapse}
        onClick={() => setIsOpen((prev) => !prev)}
        className="z-40 "
        role="button"
      >
        <div
          // className={cn(
          //   `relative max-h-12 z-20 flex items-center mx-4 group-data-[home=true]:bg-purple-500 group-data-[home=true]:bg-opacity-70 group-data-[submitted=true]:bg-[#ECF0FF] group-data-[custom=true]:bg-[#ECF0FF] hover:border-gray-400  text-16px600 py-3 pl-[18px] pr-3 rounded-3xl text-gray-950 duration-300`
          // )}
        >
          <div
            className={cn(
              " bg-white text-gray-800  overflow-hidden p-1 rounded-xl duration-500 ease-in-out",
            )}
          >
            {locales.map((locale, i) => (
              <div
                key={i}
                className={cn(
                  "flex justify-between items-center hover:bg-gray-100 mb-2 px-4 rounded-md duration-300 ease-in-out whitespace-nowrap",
                  locale === lang && "px-4 bg-blue-100 rounded-md "
                )}
                // onClick={() => changeLanguage(locale)}
              >
               <div className="flex items-center">
                 <div>{getLangInfo(locale)?.icon}</div>
                <Link
                  key={i}
                  locale={locales[i]}
                  href={pathname.path as typeof Link.prototype.href}
                  className={cn(
                    "flex justify-between py-2 px-5 text-16px500 font-inter",
                    locale === lang && "text-brand-600"
                  )}
                >
                  {getLangInfo(locale)?.text}
                </Link>
               </div>
                {locale === lang ? <CheckSVG color="#4936F5"/> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  };

  return { renderChangeLanguage };
};

export default ChangeLanguageFactory;
