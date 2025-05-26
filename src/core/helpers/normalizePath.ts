export const normalizePath = (pathname: string) => {
  const parts = pathname.split("/");
  return "/" + parts.slice(2).join("/");
};
