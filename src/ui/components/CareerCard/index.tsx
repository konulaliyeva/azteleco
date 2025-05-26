// components/CareerCard.tsx
import React from "react";
import { CareerCompanyLogoSVG, LocationSVG, UpArrowSVG } from "@public/vectors";
import Link from "next/link";
import slugify from 'slugify';
type CareerCardProps = {
  title: string;
  location: string;
  company: string;
  type: string;
  id:number;
  logo: string;
  postedAt: string;
  category: string;
  locationType: string;
};

const CareerCard: React.FC<CareerCardProps> = ({
  title,
  id,
  location,
  company,
  type,
  logo,
  category,
  postedAt,
  locationType,
}) => {
  return (
   <Link
   key={id}
  href={`/careers/${slugify(title, {lower: true})}-${id}`}
  className="relative group border rounded-xl shadow-sm p-4 hover:shadow-md transition bg-white hover:border-brand-600"
>
  {/* Location and Category */}
  <div className="mb-2 font-inter">
    {/* Desktop Layout (flex row) */}
    <div className="hidden desktopMd:flex desktopLg:flex justify-between items-center">
      <div className="flex items-center gap-x-2 text-14px500 text-gray-800">
        <LocationSVG />
        {location}
      </div>
      <span className="text-14px500 bg-gray-100 text-gray-800 py-2 px-3 rounded-[8px]">
        {category}
      </span>
    </div>

    {/* Mobile Layout (centered and stacked) */}
    <div className="flex flex-col gap-y-2 items-center mt-6 desktopMd:hidden desktopLg:hidden">
      <div className="flex items-center gap-x-1 p-2 text-14px500 text-gray-800 mb-2">
        <LocationSVG className="text-brand-600" />
        <span>{location}</span>
      </div>
      <span className="w-full text-center text-14px500 bg-gray-100 text-gray-800 py-2 px-4 rounded-lg">
        {category}
      </span>
    </div>
  </div>

  {/* Title */}
  <h2 className="font-inter text-24px600 md:text-30px600 text-gray-800 mt-12 mb-6 group-hover:text-brand-600 truncate">
    {title}
  </h2>

  {/* Location type & Employment type */}
  <div className="flex gap-3 mb-6 font-inter">
    <div className="bg-gray-100 pl-4 pr-8 py-2 rounded-lg text-12px400 text-gray-500">
      Location type
      <br />
      <span className="text-16px500 text-gray-800">{locationType}</span>
    </div>
    <div className="bg-gray-100 pl-4 pr-8 py-2 rounded-lg text-12px400 text-gray-500">
      Employment type
      <br />
      <span className="text-16px500 text-gray-800">{type}</span>
    </div>
  </div>

  {/* Company and Arrow Button */}
  <div className="flex justify-between items-center">
    <div className="flex items-center gap-x-2 font-inter">
      <CareerCompanyLogoSVG />
      <div className="flex flex-col items-start gap-x-2">
        <p className="text-18px700 text-gray-800">{company}</p>
        <p className="text-12px400 text-gray-500">{postedAt}</p>
      </div>
    </div>

    <div className="flex items-center bg-brand-600 text-white p-2 rounded-full sm:w-auto relative group overflow-hidden">
      <div className="flex items-center gap-x-2 transform group-hover:-translate-y-10 transition duration-500 ease-in-out">
        <UpArrowSVG />
      </div>
      <div className="absolute flex items-center gap-x-2 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
        <UpArrowSVG />
      </div>
    </div>
  </div>
</Link>

  );
};

export default CareerCard;
