"use client";
import Image from "next/image";
import Link from "next/link";
import NewsImage from "@public/images/news.jpeg";
import ThumbImage1 from "@public/images/news1.jpeg";
import ThumbImage2 from "@public/images/news2.jpeg";
import ThumbImage3 from "@public/images/news3.jpeg";
import ThumbImage4 from "@public/images/news4.jpeg";
import {
  CalendarSVG,
  ClockSVG,
  FbSVG,
  InstaSVG,
  TgSVG,
  UpArrowSVG,
} from "@public/vectors";
import Button from "@/ui/shared/Button";
import { ButtonVariantsEnum } from "@/data/enum/button_variants.enum";
import { CopySVG } from "@public/vectors";
import LightBoxComponent from "@/ui/components/LightboxComponent/Lightbox";
import { useState } from "react";
import { useTranslations } from "next-intl";

const NewsDetailPageContainer = () => {
  const thumbnails = [
    ThumbImage1,
    ThumbImage2,
    ThumbImage3,
    ThumbImage4,
    ThumbImage1,
    ThumbImage2,
    ThumbImage2,
    ThumbImage2,
    ThumbImage2,
    ThumbImage2,
    ThumbImage2,
    ThumbImage2,
  ];
  const socialMediaIcons = [
    {
      id:1,
      icon:  <FbSVG />
    },
    {
    id:2,
    icon:<InstaSVG />
    },
    {
    id:3,
    icon: <TgSVG />
    }
  ];
  const t = useTranslations("NewsPage")
  const relatedArticles = new Array(5).fill(null);
  const linkToCopy =
    "www.aztelco.az/news/many desktop publishing packages and web page editors";
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const toggleOpen = (state: boolean) => () => setOpen(state);
  const updateIndex = ({ index: current }: { index: number }) =>
    setIndex(current);
  const handleCopy = () => {
    navigator.clipboard.writeText(linkToCopy);
  };

  return (
    <main className="mx-auto px-40 py-8 mb-36 grid grid-cols-1 md:grid-cols-4 gap-8 fon-inter">
      <article className="md:col-span-3">
        <header className="mb-6">
          <h1 className="text-30px600 text-gray-800 leading-tight mb-6">
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text
          </h1>
          <div className="flex items-center gap-x-12 text-gray-500 text-16px500 mb-12">
            <p className="flex items-center gap-x-2">
              <CalendarSVG />
              16 April 2025
            </p>
            <p className="flex items-center gap-x-2">
              <ClockSVG /> 15: 24
            </p>
          </div>
        </header>

        {/* <div className="relative rounded-xl overflow-hidden mb-6">
          <Image
            src={NewsImage}
            alt="newsImage"
           className="max-w-[960px] max-h-[540px] rounded-3xl"
          />
        </div>

        <div className="grid grid-cols-6 mb-6">
          {thumbnails.map((src, index) => (
            <div
              key={index}
              className="relative w-[128px]  h-[80px] rounded-lg overflow-hidden"
            >
              <Image
                src={src}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div> */}

        <LightBoxComponent
          index={index}
          updateIndex={updateIndex}
          open={open}
          toggleOpen={toggleOpen}
          setIndex={setIndex}
          setOpen={setOpen}
          data={thumbnails}
        />

        <div className="flex flex-col my-12 gap-y-12">
          {[1, 2].map((_, index) => (
            <section key={index} className="font-inter">
              <h2 className="text-24px600 mb-5">
                Sollicitudin habitant viverra ornare
              </h2>
              <p className="text-gray-500 text-16px500 leading-relaxed mb-5">
                Diam ultrices odio ornare sollicitudin habitant viverra ornare.
                Quis amet cras suspendisse convallis fames. Nulla enim quis
                suspendisse lacus ultricies. In euismod platea malesuada
                gravida. Diam dui ullamcorper posuere vel in ac leo. Est elit
                enim venenatis enim diam. A scelerisque pharetra diam, sed lorem
                morbi proin lacus. Neque natoque fringilla diam egestas purus.
                Mauris dictum velit adipiscing nibh nunc.
              </p>
              <ul className="list-disc pl-6 text-16px500 text-gray-600 space-y-1">
                <li>
                  Neque natoque fringilla diam egestas purus. Mauris dictum
                  velit adipiscing
                </li>
                <li>Quis purus commodo turpis in hendrerit et porttitor</li>
              </ul>
            </section>
          ))}
        </div>

        <div className="flex items-center gap-y-5">
          <span className=" text-24px600 text-black font-inter">{t("share")}</span>
        </div>
        <div className="flex gap-x-6 justify-between items-end mb-24">
          <div className="flex gap-2">
            {socialMediaIcons.map((item, i) => (
              <Button
                key={item.id}
                variant={ButtonVariantsEnum.FILLED}
                className="rounded-full p-4"
              >
                {item.icon}
              </Button>
            ))}
          </div>
          <div className="flex items-center w-full mt-4 bg-gray-50 rounded-full p-1 pl-5 font-inter">
            <input
              type="text"
              readOnly
              value={linkToCopy}
              className="flex-1 bg-transparent outline-none text-14px500 text-gray-600 truncate pr-4"
            />
            <Button
              variant={ButtonVariantsEnum.EMPTY}
              onClick={handleCopy}
              className="flex items-center gap-x-1 text-16px600 text-black rounded-full"
            >
              {t("copyLink")}
              <CopySVG />
            </Button>
          </div>
        </div>

        <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-x-40 text-16px600 text-base-600 font-inter">
          <div className="flex flex-col items-start gap-y-4">
            <Link
              href="#"
              className="flex items-center gap-x-2 px-4 py-3 border rounded-3xl "
            >
              <UpArrowSVG className="transform -rotate-[135deg]" />
              {t("prevArticle")}
            </Link>
            <p className="text-20px500 text-gray-400 line-clamp-2">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
            </p>
          </div>

          <div className="flex flex-col items-end gap-y-4">
            <Link
              href="#"
              className="flex items-center gap-x-2 px-4 py-3 border rounded-3xl "
            >
              {t("nextArticle")}
              <UpArrowSVG className="transform rotate-45" />
            </Link>
            <p className="text-20px500 text-gray-400 line-clamp-2">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
            </p>
          </div>
        </div>
      </article>

      {/* Sidebar */}
      <section className="bg-white rounded-2xl border w-full font-inter h-fit">
        <h2 className="text-24px600 text-black p-4 pb-2">
          {t("otherNews")}
        </h2>
        <div className="border-t">
          {relatedArticles.map((item, i) => (
            <div key={i} className="p-4 border-b last:border-b-0">
              <h3 className="text-16px500  text-black leading-snug line-clamp-2">
                Diam ultrices odio ornare sollicitudin habitant viverra ornare.
                Quis amet cras suspendisse convallis fames. Nulla eni...
              </h3>
              <p className="text-14px500 text-gray-500 mt-4">
                16 Aprel 2025
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default NewsDetailPageContainer;
