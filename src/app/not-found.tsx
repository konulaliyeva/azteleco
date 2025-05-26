import Breadcrumbs from '@/ui/components/BreadCrumbs';
import Footer from '@/ui/containers/Footer';
import Header from '@/ui/containers/Header';
import Link from 'next/link';
import Image from 'next/image';
import BgImage from "@public/images/bg.png"
import { HomeSVG } from '@public/vectors';
import { useTranslations } from 'next-intl';
export default function NotFound() {
const t = useTranslations("Error");
  
  const crumbs = [
    { id: 1, title: <HomeSVG />, href: "/" },
    { id: 2, title: "Error 404", href: "#" },
  ];

  return (
    <div>
      <Header />
      <div className='pt-28'>
        <Breadcrumbs crumbs={crumbs} />

        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
          
          <Image
            src={BgImage}
            alt="404 Background"
            fill
            className="object-cover z-0 opacity-[8%]"
            priority
          />

          <div className="relative z-10 p-8 mx-10 md:mx-0 font-inter bg-white rounded-2xl shadow-xl border border-brand-500 text-center max-w-[552px] h-auto w-full">
            <h1 className="text-32px700 font-bai text-gray-800 mb-2">Error</h1>
            <h2 className="text-7xl md:text-128px700 font-bai text-brand-500 mb-4">404</h2>
            <p className="text-gray-500 text-16px400 mb-10 mt-6 ">
              Diam ultrices odio ornare sollicitudin habitant viverra ornare.
              Quis amet cras suspendisse convallis fames.
            </p>
         <Link
            href="/"
            className="inline-flex items-center shrink justify-center text-nowrap gap-x-2 px-8 py-4 bg-brand-600 hover:bg-indigo-700 text-white text-18px600 rounded-full transition"
          >
            <div className="flex items-center sm:w-auto relative group overflow-hidden font-inter">
              <div className="text-16px600 font-inter flex items-center gap-x-2 transform group-hover:-translate-y-10 transition duration-500 ease-in-out">
                {t("backToHome")}{" "}
                <HomeSVG color="text-white" />
              </div>
              <div className="absolute text-16px600 font-inter flex items-center gap-x-2 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
                {t("backToHome")}{" "}
               <HomeSVG color="text-white" />
              </div>
            </div>
          </Link>
    
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
