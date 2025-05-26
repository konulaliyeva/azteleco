import ContactCard from "@/ui/components/ContactCard";
import ContactUsForm from "@/ui/features/ContactUsForm";
import Layer from "@public/images/layer.png";

import {
  EmailIconSVG,
  FbSVG,
  InstaSVG,
  LinkedinSVG,
  LocationSVG,
  PhoneIconSVG,
  TgSVG,
} from "@public/vectors";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactDetailsPage = () => {
  const t = useTranslations("ContactPage");
  const contactInfo = [
    {
      title: t("email"),
      detail: "info@aztelco.az",
      icon: <EmailIconSVG />,
    },
    {
      title: t("phone"),
      detail: <>012 311 20 12</>,
      icon: <PhoneIconSVG />,
    },
    {
      title: t("office"),
      detail: t("address"),
      icon: <LocationSVG />,
    },
  ];
  const socialLinks = [
    {
      name: "Linkedin",
      href: " https://www.linkedin.com/company/aztelco-group-llc/",
      icon: <LinkedinSVG />,
    },
    // {
    //   name: "Instagram",
    //   href: "https://www.instagram.com",
    //   icon: <InstaSVG />,
    // },
    // {
    //   name: "Telegram",
    //   href: "https://t.me/yourtelegram",
    //   icon: <TgSVG />,
    // },
    // {
    //   name: "Facebook",
    //   href: "https://www.facebook.com",
    //   icon: <FbSVG />,
    // },
  ];

  return (
    <div className="min-h-screen bg-white  px-4 md:px-20 mb-36">
      <div className="relative hidden md:block">
        <Image
          src={Layer}
          alt="Background"
          className="absolute right-0 top-0 h-auto z-0 pointer-events-none"
          objectFit="contain"
          priority
        />
      </div>

      <div className="relative z-10 py-10">
        <h1 className="text-64px700 font-bai text-gray-800 mb-16">
          {t("title")}
        </h1>
        {/* <p className="text-gray-500 font-inter text-20px500 mb-16">
        {t("description")}
      </p> */}
        <div className="bg-white rounded-2xl w-full flex-col gap-y-10 flex md:hidden">
          <h2 className="text-30px600 text-black font-inter">
            {t("contactUs")}
          </h2>
          <ContactUsForm />
        </div>
        <div className="grid grid-cols-1 desktopMd:grid-cols-2 desktopLg:grid-cols-2  gap-6 z-1">
          <div className="bg-white rounded-2xl border w-full p-10 flex-col gap-y-10 hidden md:flex">
            <h2 className="text-30px600 text-black font-inter">
              {t("contactUs")}
            </h2>
            <ContactUsForm />
          </div>
        
          <div className="relative w-full">
            {/* Map */}
            <div className="w-full h-[500px] desktopMd:h-full desktopLg:h-full bg-gray-100 rounded-xl overflow-hidden mt-10 desktopMd:mt-0 desktopLg:mt-0">
              <iframe
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                src="https://maps.google.com/maps?q=Bak%C4%B1%2C+Heyd%C9%99r+%C6%8Fliyev+pr.+152%2C+AZ1029%2C+%C3%87inar+Plaza&output=embed"
              ></iframe>
            </div>

            {/* Contact Card (absolute on desktop, static on mobile) */}
            <div className="w-[80%] desktopMd:w-[400px] desktopLg:w-[400px] bg-white rounded-2xl shadow-md p-6 space-y-6 mx-auto mt-10 desktopMd:mt-0 desktopLg:mt-0  absolute top-4 left-[5%] desktopMd:top-12 desktopLg:top-12 desktopMd:left-10 desktopLg:left-10 z-10">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex flex-col gap-y-2 font-inter">
                  <p className="text-sm text-gray-500">{item.title}</p>
                  <p className="text-lg font-semibold text-gray-800">
                    {item.detail}
                  </p>
                </div>
              ))}

              <div className="flex flex-col gap-y-3">
                <h2 className="text-sm text-gray-500 font-inter">
                  {t("socialMedia")}
                </h2>
                <div className="flex gap-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      target="_blank"
                      className="bg-brand-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-brand-600"
                      aria-label={item.name}
                    >
                      {item.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsPage;
