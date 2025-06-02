import "server-only";

const dictionaries = {
  az: () =>
    import("../../data/dictionaries/az.json").then((module) => module.default),
  en: () =>
    import("../../data/dictionaries/en.json").then((module) => module.default),
  ru: () =>
    import("../../data/dictionaries/ru.json").then((module) => module.default),
};

export const getDictionary = async (locale: any) =>
  dictionaries[locale as keyof typeof dictionaries]();
