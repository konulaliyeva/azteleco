import { useClickOutside } from "@/core/hooks/useClickOutside";
import { useParams } from "next/navigation";
import { useRef, useState, useEffect, useCallback } from "react";
import { i18n } from "@/core/lib/i18n.config";
import { usePath } from "@/core/hooks/usePath";

export const ChangeLanguageVM = () => {
  const { lang = i18n.defaultLocale } = useParams();
  const pathname = usePath();
  const collapse = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const [isOpen, setIsOpen] = useState(false);
  // const [locales] = useState(i18n.locales);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  // const generateHref = (locale: string) =>
  //   `/${locale}${pathname.replace(/^\/(az|en|ru)/, "")}`;

  // const changeLanguage = (locale: string) => {
  //   router.push(generateHref(locale));
  // };

  // const hrefs = locales.map(generateHref);
  // const filteredHrefs = filteredLocales.map(generateHref);
  // console.log('filteredHrefs', filteredHrefs)

  useClickOutside(collapse.current, () => setIsOpen(false));

  const activeIndex = i18n.locales.findIndex((locale) => locale === lang);

  const updateIndicator = useCallback(() => {
    const activeTab = tabRefs.current[activeIndex];
    if (activeTab) {
      setIndicatorStyle({
        width: `${activeTab.offsetWidth + 50}px`,
        left: `${activeTab.offsetLeft - 25}px`,
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  return {
    collapse,
    isOpen,
    setIsOpen,
    lang,
    pathname,
    locales:i18n.locales,
    indicatorStyle,
    tabRefs,
  };
};
