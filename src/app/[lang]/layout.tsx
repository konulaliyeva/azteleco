import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import Footer from "@/ui/containers/Footer";
import Header from "@/ui/containers/Header";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import localFont from "next/font/local";
import NextTopLoader from "nextjs-toploader";
import { StoreProvider } from "@/core/providers/store.provider";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: {
    default: "Azteleco",
    template: "%s | Azteleco",
  },
  description: "Azteleco - Your Car Buying Platform",
  keywords: "car, buy, vehicles, automotive, marketplace, cars",
  robots: {
    follow: true,
    index: true,
  },
  twitter: {
    card: "summary_large_image",
    site: "@Azteleco",
    title: {
      default: "Azteleco",
      template: "%s Azteleco",
    },
    description: "Azteleco - Your Car Buying Platform",
  },
  publisher: "Azteleco Inc.",
  authors: {
    name: "Konul Aliyeva",
    url: "https://Azteleco.com/",
  },
  applicationName: "Azteleco",
  icons: "/favicon",
  openGraph: {
    url: "https://Azteleco.com/",
    title: "Azteleco",
    description: "Azteleco",
    siteName: "Azteleco",
    type: "website",
  },
};
const baiJamjuree = localFont({
  src: "../../data/assets/fonts/bai-jamjuree/BaiJamjuree-Regular.ttf",
  variable: "--font-bai-jamjuree",
  display: "swap",
});

const inter = localFont({
  src: "../../data/assets/fonts/Inter/static/regular.ttf",
  // variable: "--font-inter",
  // display: "swap",
});

const baskerville = localFont({
  src: "../../data/assets/fonts/baskerville/Baskerville.otf",
  variable: "--font-baskerville",
  display: "swap",
});

export default async function MainLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(routing.locales, lang)) {
    notFound();
  }
  console.log("lang", lang);
  return (
    <html lang={lang}>
      <body
        className={`${inter.className}  antialiased vsc-initialized`}
        cz-shortcut-listen="true"
      >
        <NextIntlClientProvider>
          <NextTopLoader
            color="#4B47FF"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            template='<div class="bar" role="bar"><div class="peg"></div></div> 
                <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            zIndex={1600}
            showAtBottom={false}
          />
          <StoreProvider>
            <Header />
            {children}
            <Footer />
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              pauseOnHover
              theme="light"
            />
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
