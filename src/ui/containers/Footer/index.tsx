import { Link } from '@/i18n/routing';
import { AztelecoSVG, FbSVG, InstaSVG, LogoSVG, TgSVG } from '@public/vectors';
import { useTranslations } from 'next-intl';
import React from 'react';

const Footer = () => {
    const t = useTranslations("Footer");
  
  const leftLinks = [
    // { label: t("navigation.about"), href: '#' },
    { label: t("navigation.services"), href: '/services' },
    { label: t("navigation.news"), href: '/' },
  ];

  const rightLinks = [
    { label: t("navigation.career"), href: '/careers' },
    { label: t("navigation.contact"), href: '/contact' },
  ];

  const socialLinks = [
    { href: '#', icon: <FbSVG /> },
    { href: '#', icon: <InstaSVG /> },
    { href: '#', icon: <TgSVG /> },
  ];

  return (
  <>
    <footer className="relative bg-[#4B47FF] text-white py-10 px-20 overflow-hidden hidden md:block">
      <div className="absolute top-0 left-0 w-full h-full bg-black/10" />

      <div className="relative z-10">
        <div className="flex justify-center mb-16 pt-20 ml-20">
          <AztelecoSVG />
        </div>

        <div className="mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
          {/* Left Section */}
          <div className="mb-6 md:mb-0">
            <ul className="mb-28">
              {leftLinks.map(({ label, href }, idx) => (
                <li key={idx} className="mb-2 last:mb-0">
                  <Link href={href as typeof Link.prototype.href} className="text-18px600 font-inter hover:underline">{label}</Link>
                </li>
              ))}
            </ul>
            <div className="text-white text-16px500 font-inter">
              <p className="opacity-[64%]">{t("copyright")}</p>
              <p>© 2025</p>
            </div>
          </div>

          {/* Center Section */}
          <div className="text-center mb-6 md:mb-0">
            <p className="mb-2">
              <Link href={"mailto:info@aztelco.az" as typeof Link.prototype.href} className="text-20px500 font-inter opacity-[64%] hover:underline">info@aztelco.az</Link>
            </p>
            <p className="text-48px700 font-bai my-4">+994 12 345 67 89</p>
            <p className="text-20px500 font-inter opacity-[64%]">{t("address")}</p>
            <div className="flex justify-center mt-16 space-x-4">
              {socialLinks.map(({ href, icon }, idx) => (
                <Link
                  key={idx}
                  href={href as typeof Link.prototype.href }
                  className="flex justify-center items-center border border-[#FFFFFF29] p-4 rounded-full hover:bg-white/10"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-start">
            <ul className="text-right mb-36">
              {rightLinks.map(({ label, href }, idx) => (
                <li key={idx} className="mb-2 last:mb-0">
                  <Link href={href as typeof Link.prototype.href} className="font-inter text-18px600 hover:underline">{label}</Link>
                  </li>
              ))}
            </ul>
            <div className="text-white text-16px500 font-inter mt-4">
              <p className="opacity-[48%]">Designed by</p>
              <p>AzSoftware</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
      <footer className="md:hidden relative bg-[#4B47FF] text-white py-10 px-6 text-center">
      <div className="absolute top-0 left-0 w-full h-full bg-black/10" />
      <div className="relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <AztelecoSVG />
        </div>

        {/* Contact Info */}
        <div className="mb-6">
          <Link
            href={"mailto:info@aztelco.az" as typeof Link.prototype.href}
            className="block text-sm font-inter text-white opacity-[64%] hover:underline mb-2"
          >
            info@aztelco.az
          </Link>
          <p className="text-24px700 font-bai">+994 12 345 67 89</p>
          <p className="text-sm font-inter opacity-[64%] mt-2">
            Bakı, Xətai pr.34, Luxen Plaza,<br />15-ci mərtəbə
          </p>
        </div>

        {/* Navigation & Social Links */}
        <div className="flex justify-between items-start mt-8">
          {/* Navigation Links */}
          <ul className="space-y-2 text-left">
            {[...leftLinks,...rightLinks].map(({ label, href }, idx) => (
              <li key={idx}>
                <Link href={href as typeof Link.prototype.href} className="text-base font-inter hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons Vertically */}
          <div className="flex flex-col items-center space-y-3 ml-4">
            {socialLinks.map(({ href, icon }, idx) => (
              <Link
                key={idx}
                href={href as typeof Link.prototype.href}
                className="p-3 border border-[#FFFFFF29] rounded-full hover:bg-white/10"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-10 text-14px font-inter text-white">
          <p className="opacity-[64%]">{t("copyright")}</p>
          <p>© 2025</p>
          <p className="opacity-[48%] mt-1">Designed by</p>
          <p className="text-white">AzSoftware</p>
        </div>
      </div>
    </footer>
  </>
  );
};

export default Footer;
