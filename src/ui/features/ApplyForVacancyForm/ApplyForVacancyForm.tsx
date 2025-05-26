"use client";
import React from "react";
import { Controller } from "react-hook-form";
import { SendSVG } from "@public/vectors";
import { ButtonVariantsEnum } from "@/data/enum/button_variants.enum";
import Input from "@/ui/shared/Input";
import Form from "@/ui/shared/Form";
import FileUpload from "@/ui/shared/FileUpload";
import { ApplyForVacancyFormVM } from "./ApplyForVacancyFormVM";
import Button from "@/ui/shared/Button";
import { useTranslations } from "next-intl";

const ApplyForVacancyForm = () => {
  const { methods } = ApplyForVacancyFormVM();
  const t = useTranslations("CareersPage")

  return (
    <Form methods={methods} className="flex flex-col gap-y-4 font-inter">
      <Input name="name" placeholder={t("name")} label={t("name")} />
      <Input name="surname" placeholder={t("surname")} label={t("surname")}  />
      <Input
        name="mail"
        placeholder={t("email")} 
        label={t("email")} 
      />
      <Input
        name="pone"
        placeholder={t("phoneNumber")} 
        label={t("phoneNumber")} 
      />
      <Controller
        control={methods.control}
        name="cvUpload"
        render={({ field: { value, onChange } }) => {
          return (
            <FileUpload
              dataError="cvUpload"
              // accept="application/pdf"
              value={value}
              onChange={onChange}
            />
          );
        }}
      />
      <Button
        variant={ButtonVariantsEnum.FILLED}
        className="relative group flex items-center gap-x-2 mt-4"
      >
        <div className="flex items-center gap-x-2 transform group-hover:-translate-y-20 transition duration-500 ease-in-out">
         {t("apply")}
          <SendSVG />
        </div>
        <div className="absolute flex items-center gap-x-2 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
           {t("apply")}
          <SendSVG />
        </div>
      </Button>
    </Form>
  );
};

export default ApplyForVacancyForm;
