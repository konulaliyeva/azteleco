"use client";
import { usePathname } from "@/i18n/routing";
import { useParams } from "next/navigation";

function generatePath(
  pathname: string,
  params: Record<string, string | string[] | undefined>
): string {
  return pathname.replace(/\[(\w+)\]/g, (_, key) => {
    const value = params[key];

    if (Array.isArray(value)) {
      return value[0];
    }

    if (typeof value === "string") {
      return value;
    }

    throw new Error(`Missing value for parameter '${key}'`);
  });
}

export const usePath = () => {
  const pathname = usePathname();
  const params = useParams();

  const resolvedPath = generatePath(pathname, params);

  return {
    path: resolvedPath,
    pathname,
    params,
  };
};
