"use client";
import React from "react";
import { SendSVG } from "@public/vectors";
import { ButtonVariantsEnum } from "@/data/enum/button_variants.enum";
import Input from "@/ui/shared/Input";
import Form from "@/ui/shared/Form";
import Button from "@/ui/shared/Button";
import TextArea from "@/ui/shared/Button/Textarea";
import { ContactUsFormVM } from "./contact_us.form.vm";
import { useTranslations } from "next-intl";

const ContactUsForm = () => {
  const t = useTranslations("ContactPage");
  const { methods, submitHandler, isPending } = ContactUsFormVM();

  return (
    <Form
      methods={methods}
      className="flex flex-col gap-y-4"
      onSubmit={submitHandler}
    >
      <Input name="name" placeholder={t("name")} label={t("name")} />
      <Input
        name="phone"
        placeholder={t("phoneNumber")}
        label={t("phoneNumber")}
      />
      <TextArea
        name="message"
        placeholder={t("writeYourMessage")}
        label={t("writeYourMessage")}
      />
      <Button
        variant={ButtonVariantsEnum.FILLED}
        isLoading={isPending}
        className="relative group flex items-center gap-x-2 mt-4 text-18px600 font-inter text-white"
      >
        <div className="flex items-center gap-x-2 transform group-hover:-translate-y-20 transition duration-500 ease-in-out">
          {t("send")}
          <SendSVG />
        </div>
        <div className="absolute flex items-center gap-x-2 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
          {t("send")}
          <SendSVG />
        </div>
      </Button>
    </Form>
  );
};

export default ContactUsForm;
