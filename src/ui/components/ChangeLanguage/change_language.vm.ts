"use client"
import { useClickOutside } from "@/core/hooks/useClickOutside";
import { useParams } from "next/navigation";
import { useRef, useState, useEffect, useCallback } from "react";
import { usePath } from "@/core/hooks/usePath";
import { routing } from "@/i18n/routing";

export const ChangeLanguageVM = () => {
  const { lang = routing.defaultLocale } = useParams();
  const pathname = usePath();
  const collapse = useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  useClickOutside(collapse.current, () => setIsOpen(false));




  return {
    collapse,
    isOpen,
    setIsOpen,
    lang,
    pathname,
    locales:routing.locales,
    indicatorStyle,
  };
};
