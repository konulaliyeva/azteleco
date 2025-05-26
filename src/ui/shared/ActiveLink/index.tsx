"use client";
import { cn } from "@/core/utils/cn";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { ActiveLinkType } from "./active_link.type";
import { Link } from "@/i18n/routing";

const ActiveLink = ({ href, className, activeClassName, children }: ActiveLinkType) => {
    const pathname = usePathname();
    const currentLocale = useLocale();

    return (
        <Link href={href as any} className={cn(className, pathname === "/" + currentLocale + href ? activeClassName : "")}>
            {children}
        </Link>
    );
};

export default ActiveLink;
