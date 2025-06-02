'use client';
import { ButtonVariantsEnum } from '@/data/enum/button_variants.enum'
import Button from '@/ui/shared/Button'
import { useTranslations } from 'next-intl';
import React from 'react'
import { CopySVG } from "@public/vectors";

const CopyButtonComponent = () => {
      const t = useTranslations("CareersPage");
      const linkToCopy =
        "www.aztelco.az/news/many desktop publishing packages and web page editors";
    
      const handleCopy = () => {
        navigator.clipboard.writeText(linkToCopy);
      };
  return (
           <Button
                variant={ButtonVariantsEnum.EMPTY}
                onClick={handleCopy}
                className="flex items-center gap-x-1 text-16px600 text-[#0C0C0C] rounded-full"
              >
                {t("copyLink")}
                <CopySVG className="shrink-0" />
              </Button>
  )
}

export default CopyButtonComponent