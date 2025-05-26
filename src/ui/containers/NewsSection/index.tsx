import NewsCard from "@/ui/components/NewsCard";
import Image from "next/image";
import NewsImage from "@public/images/news.jpeg";
import NewsImage1 from "@public/images/news1.jpeg";
import NewsImage2 from "@public/images/news2.jpeg";
import NewsImage3 from "@public/images/news3.jpeg";
import NewsImage4 from "@public/images/news4.jpeg";
import { UpArrowSVG } from "@public/vectors";
import Link from "next/link";
import { useTranslations } from "next-intl";
import "./style.css";;

export default function NewsSection() {
  const t = useTranslations("HomePage");

  const newsData = [
    {
      image: NewsImage,
      date: '16 April 2025',
      title: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
      excerpt:
        'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia...',
    },
    {
      image: NewsImage1,
      date: '16 April 2025',
      title: 'There are many variations of passages...',
      excerpt: 'Letraset sheets containing Lorem Ipsum passages, and more recently...',
    },
    {
      image: NewsImage2,
      date: '16 April 2025',
      title: 'Sed ut perspiciatis unde omnis iste natus error...',
      excerpt: 'But I must explain to you how all this mistaken idea of denouncing pleasure...',
    },
    {
      image: NewsImage3,
      date: '16 April 2025',
      title: 'Many desktop publishing packages and web page editors...',
      excerpt: 'Latin words, combined with a handful of model sentence structures...',
    },
    {
      image: NewsImage4,
      date: '16 April 2025',
      title: 'Many desktop publishing packages and web page editors...',
      excerpt: 'Latin words, combined with a handful of model sentence structures...',
    },
  ];

  return (
    <section className="p-6 md:p-20 mx-auto">
      {/* Section Heading */}
      <div className="flex items-center justify-between mb-6 md:mb-10">
        <h2 className="text-gray-800 text-3xl md:text-64px700 font-bai">{t("news")}</h2>
        <Link
          href="/news"
          className="items-center gap-x-2 px-4 py-2 border text-base-600 text-18px600 bg-gray-100 font-inter border-gray-100
           rounded-3xl font-semibold hover:bg-gray-100 transition hidden md:flex"
        >
          {t("lookAtAll")} <UpArrowSVG className="transform rotate-45" />
        </Link>
      </div>

      {/* Large Featured Card (Desktop Only) */}
      <Link
        href="/news/id"
        className="hidden md:flex flex-col md:flex-row mb-12 gap-x-6 bg-white rounded-xl overflow-hidden"
      >
        <div className="relative w-full h-64 md:h-auto">
          <Image
            src={newsData[0].image}
            alt="newsImage"
            width={696}
            height={386}
            className="rounded-3xl max-w-none object-cover w-full h-full"
          />
          <span className="absolute top-4 left-4 bg-white px-2 py-1 rounded font-inter text-sm text-gray-600">
            Xəbər
          </span>
        </div>
        <div className="relative group flex flex-col justify-between items-start p-6">
          <div>
            <p className="text-18px500 text-gray-500 font-inter mb-2">
              {newsData[0].date}
            </p>
            <h3 className="text-30px600 text-base-600 font-inter leading-snug mb-3">
              {newsData[0].title}
            </h3>
            <p className="text-18px400 font-inter text-gray-500">
              {newsData[0].excerpt}
            </p>
          </div>
          <div className="mt-auto">
            <div className="flex items-center sm:w-auto overflow-hidden">
              <div className="flex items-center gap-x-2 transform group-hover:-translate-y-10 transition duration-500 ease-in-out text-16px600 font-inter">
                {t("seeMore")} <UpArrowSVG className="transform rotate-45" />
              </div>
              <div className="absolute flex items-center gap-x-2 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out text-16px600 font-inter">
                {t("seeMore")} <UpArrowSVG className="transform rotate-45" />
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* Mobile Slider */}
      <div className="flex md:hidden overflow-x-auto 
      space-x-4 snap-x snap-mandatory scroll-smooth px-1 -mx-1 news-scrollbar ">
        {newsData.map((news, idx) => (
          <div key={idx} className="snap-start shrink-0 w-[85%] max-w-sm">
            <NewsCard {...news} />
          </div>
        ))}
      </div>

      {/* Desktop Grid for Remaining Cards */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {newsData.slice(1).map((news, idx) => (
          <NewsCard key={idx} {...news} />
        ))}
      </div>

      {/* Mobile Button */}
      <div className="flex justify-start md:hidden mt-10">
        <Link
          href="/news"
          className="flex items-center gap-x-2 px-4 py-2 border text-base text-18px600 bg-gray-100 font-inter border-gray-100 rounded-3xl font-semibold hover:bg-gray-200 transition"
        >
          {t("lookAtAll")} <UpArrowSVG className="transform rotate-45" />
        </Link>
      </div>
    </section>
  );
}
