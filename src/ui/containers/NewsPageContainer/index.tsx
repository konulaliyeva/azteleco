import Image from "next/image";
import NewsCard from "@/ui/components/NewsCard";
import NewsImage from "@public/images/news.jpeg";
import NewsImage1 from "@public/images/news1.jpeg";
import NewsImage2 from "@public/images/news2.jpeg";
import NewsImage3 from "@public/images/news3.jpeg";
import NewsImage4 from "@public/images/news4.jpeg";
import Link from "next/link";
import { UpArrowSVG } from "@public/vectors";
import Pagination from "@/ui/shared/Pagination";
import { useTranslations } from "next-intl";

const NewsPageContainer = () => {
  const t = useTranslations("NewsPage");

  const newsData = [
    {
      id: 1,
      image: NewsImage,
      date: "16 April 2025",
      title:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      excerpt:
        "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia...",
    },
    {
      id: 2,
      image: NewsImage1,
      date: "16 April 2025",
      title: "There are many variations of passages...",
      excerpt:
        "Letraset sheets containing Lorem Ipsum passages, and more recently...",
    },
    {
      id: 3,
      image: NewsImage2,
      date: "16 April 2025",
      title: "Sed ut perspiciatis unde omnis iste natus error...",
      excerpt:
        "But I must explain to you how all this mistaken idea of denouncing pleasur...",
    },
    {
      id: 4,
      image: NewsImage3,
      date: "16 April 2025",
      title: "Many desktop publishing packages and web page editors...",
      excerpt:
        "Latin words, combined with a handful of model sentence structures...",
    },
    {
      id: 5,
      image: NewsImage4,
      date: "16 April 2025",
      title: "Many desktop publishing packages and web page editors...",
      excerpt:
        "Latin words, combined with a handful of model sentence structures...",
    },
    {
      id: 6,
      image: NewsImage4,
      date: "16 April 2025",
      title: "Many desktop publishing packages and web page editors...",
      excerpt:
        "Latin words, combined with a handful of model sentence structures...",
    },
    {
      id: 7,
      image: NewsImage4,
      date: "16 April 2025",
      title: "Many desktop publishing packages and web page editors...",
      excerpt:
        "Latin words, combined with a handful of model sentence structures...",
    },
    {
      id: 8,
      image: NewsImage4,
      date: "16 April 2025",
      title: "Many desktop publishing packages and web page editors...",
      excerpt:
        "Latin words, combined with a handful of model sentence structures...",
    },
    {
      id: 9,
      image: NewsImage4,
      date: "16 April 2025",
      title: "Many desktop publishing packages and web page editors...",
      excerpt:
        "Latin words, combined with a handful of model sentence structures...",
    },
    {
      id: 10,
      image: NewsImage4,
      date: "16 April 2025",
      title: "Many desktop publishing packages and web page editors...",
      excerpt:
        "Latin words, combined with a handful of model sentence structures...",
    },
    {
      id: 11,
      image: NewsImage4,
      date: "16 April 2025",
      title: "Many desktop publishing packages and web page editors...",
      excerpt:
        "Latin words, combined with a handful of model sentence structures...",
    },
    {
      id: 12,
      image: NewsImage4,
      date: "16 April 2025",
      title: "Many desktop publishing packages and web page editors...",
      excerpt:
        "Latin words, combined with a handful of model sentence structures...",
    },
    {
      id: 13,
      image: NewsImage4,
      date: "16 April 2025",
      title: "Many desktop publishing packages and web page editors...",
      excerpt:
        "Latin words, combined with a handful of model sentence structures...",
    },
  ];
  return (
    <div className="p-20 mx-auto">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-gray-800 text-64px700 font-bai">{t("title")}</h2>
      </div>

      <Link
        href="/news/id"
        className="flex flex-col gap-x-6 md:flex-row mb-12 bg-white rounded-xl overflow-hidden"
      >
        <div className="relative h-64 md:h-auto">
          <Image
            src={newsData[0].image}
            alt="newsImage"
            width={696}
            height={386}
            className="rounded-3xl max-w-none"
          />
          <span className="absolute top-4 left-4 bg-white px-2 py-1 rounded font-inter text-14px500 text-gray-600">
            Xəbər
          </span>
        </div>
        <div className=" relative group flex flex-col justify-between items-start p-6">
          <div>
            <p className="text-18px500 text-gray-500 font-inter mb-8">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {newsData.slice(1).map((news, idx) => (
          <NewsCard key={idx} {...news} />
        ))}
      </div>
      <div className="mt-16 mb-28">
        <Pagination total={100} />
      </div>
    </div>
  );
};

export default NewsPageContainer;
