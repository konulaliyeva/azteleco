import { defineRouting } from "next-intl/routing";

const pathnames ={
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
  }};

const dynamicPathnames = "/news/[id]";

export const routing = defineRouting({
  locales: ["az", "en", "ru"],

  defaultLocale: "az",
  localePrefix: "always",
  localeDetection: false,

  pathnames,
});

export type DynamicPathnames = typeof dynamicPathnames;
export type StaticPathnames = Exclude<keyof typeof pathnames, DynamicPathnames>;
export type Pathnames = keyof typeof pathnames;