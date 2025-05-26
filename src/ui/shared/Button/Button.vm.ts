import { ButtonVariantsEnum } from "@/data/enum/button_variants.enum";
import React, { useCallback } from "react";

export const ButtonVM = () => {
  const variants: Record<ButtonVariantsEnum, string> = {
    [ButtonVariantsEnum.FILLED]:
      "bg-brand-600 text-18px600 font-inter border-2 border-white text-white rounded-[40px] h-14",
    [ButtonVariantsEnum.OUTLINED]:
      "bg-white/10 border-2 border-[#FFFFFF1F] text-white rounded-[40px] h-14",
      [ButtonVariantsEnum.EMPTY]:
      "bg-white border-2 border-white text-black rounded-[40px] h-14",
  };

  const rippleEffect = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    let rect = e.currentTarget.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    let circle = document.createElement("span");
    const diameter = Math.max(
      e.currentTarget.clientWidth,
      e.currentTarget.clientHeight
    );

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = x + "px";
    circle.style.top = y + "px";
    e.currentTarget.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 600);
  }, []);

  return { variants, rippleEffect };
};
