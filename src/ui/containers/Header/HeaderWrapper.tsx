"use client";
import { cn } from "@/core/utils/cn";
import React, { PropsWithChildren, useEffect, useState } from "react";
import Header from ".";
import { usePathname } from "@/i18n/navigation";

const HeaderWrapper = ({
  children,
}: PropsWithChildren & { homePath?: boolean }) => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      let threshold = 100;
      if (isHomePage) {
        const heroHeight = document.querySelector("#hero")?.clientHeight || 0;
        threshold = heroHeight - 500;
      }

      const isScrolled = scrollY > threshold;
      setScrolled(isScrolled);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, isHomePage]);

  const isCustomHeader = !isHomePage && !scrolled;

  return (
    <div
      data-home={isHomePage}
      data-submitted={scrolled}
      data-custom={isCustomHeader}
      className={cn(
        "fixed w-full z-50 group duration-500 ease-in-out",
        // Default: home top
        isHomePage &&
          !scrolled &&
          "lg:bg-transparent lg:text-white lg:shadow-none",

        // Scrolled on any page
        scrolled && "bg-white text-black shadow-md",

        // Custom look for non-home top (not scrolled)
        isCustomHeader && "bg-white text-black shadow-none"
      )}
    >
      {children}
    </div>
  );
};

export default HeaderWrapper;
