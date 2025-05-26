// components/NewsCard.tsx
import { ButtonVariantsEnum } from "@/data/enum/button_variants.enum";
import Button from "@/ui/shared/Button";
import { UpArrowSVG } from "@public/vectors";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

type NewsCardProps = {
  image: any;
  date: string;
  title: string;
  excerpt: string;
};

export default function NewsCard({
  image,
  date,
  title,
  excerpt,
}: NewsCardProps) {
    const t = useTranslations("HomePage");
  
  return (
    <Link 
      href="news/id"
      className="rounded-3xl overflow-hidden flex flex-col bg-white relative group hover:bg-[#F2F4F7] mb-6 md:mb-0
"
    >
      <div className="relative w-full">
        {/* <Image src={image} alt={""} layout="fill" objectFit="cover" /> */}
        <Image src={image} alt="newsImage" className="h-[300px] rounded-3xl" />
        <span className="absolute top-4 left-4 bg-white px-2 py-1 rounded text-gray-600 text-14px500 font-inter">
          Xəbər
        </span>
      </div>
      <div className="p-4 flex flex-col h-ful">
        <p className="text-16px500 font-inter text-gray-500 my-6">{date}</p>
        <h3 className="text-base-600 text-24px600 font-inter leading-snug">
          {title}
        </h3>
        <p className="text-16px400 text-gray-500 font-inter mt-3 line-clamp-2">{excerpt}</p>
        <div className="mt-12">
          <div className="flex items-center sm:w-auto overflow-hidden">
            <div className="flex items-center gap-x-2 transform group-hover:-translate-y-10 transition duration-500 ease-in-out text-16px600 font-inter">
             {t("seeMore")}  <UpArrowSVG className="transform rotate-45" />
            </div>

            <div className="absolute flex items-center gap-x-2 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out text-16px600 font-inter">
              {t("seeMore")}  <UpArrowSVG className="transform rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
