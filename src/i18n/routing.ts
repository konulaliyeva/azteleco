import { createNavigation } from "next-intl/navigation";

import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["az", "en", "ru"],

  defaultLocale: "az",
  localePrefix: "always",
  localeDetection: false,

  pathnames: {
    "/": "/",
    "/about": {
      az: "/haqqimizda",
      ru: "/o-nas",
    },
    "/services": {
      az: "/xidmetler",
      ru: "/uslugi",
    },
    "/partners": {
      az: "/terefdaslar",
      ru: "/partneri",
    },
    "/careers": {
      az: "/karyera",
      ru: "/karera",
    },
    "/contact": {
      az: "/elaqe",
      ru: "/kontakt",
    },
    "/careers/[slug]": {
      az: "/karyera/[slug]",
      ru: "/karera/[slug]",
    },
  },
});

const dynamicPathnames = "/careers/[slug]";

const pathnames = {
  "/": "/",
  "/about": {
    az: "/haqqimizda",
    ru: "/o-nas",
  },
  "/services": {
    az: "/xidmetler",
    ru: "/uslugi",
  },
  "/partners": {
    az: "/terefdaslar",
    ru: "/partneri",
  },
  "/careers": {
    az: "/karyera",
    ru: "/karera",
  },
  "/contact": {
    az: "/elaqe",
    ru: "/kontakt",
  },
  "/careers/[slug]": {
    az: "/karyera/[slug]",
    ru: "/karera/[slug]",
  },
};
export type DynamicPathnames = typeof dynamicPathnames;
export type StaticPathnames = Exclude<keyof typeof pathnames, DynamicPathnames>;
export type Pathnames = keyof typeof pathnames;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
