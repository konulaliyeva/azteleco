import type { LinkProps } from "next/link";
import type { PropsWithChildren } from "react";

export type ActiveLinkType = PropsWithChildren &
  LinkProps & {
    href: string;
    className?: string;
    activeClassName?: string;
    langParams: any;
    query?: Record<string, string>;
    hash?: string;
  };
