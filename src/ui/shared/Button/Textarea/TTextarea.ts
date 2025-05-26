import { ReactNode, TextareaHTMLAttributes } from "react";
import { UseFormRegister, FieldError } from "react-hook-form";

export type TTextarea = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "value" | "onChange"
> & {
  rows?: number;
  label?: string;
  placeholder?: string;
  leading?: ReactNode;
  trailing?: ReactNode;
  name: string;
  value?: string;
  register?: UseFormRegister<any>;
  error?: FieldError;
  type?: string;
  isDebounce?: boolean;
  inputClassName?: string;
  className?: string;
  onChange?: (value: string) => void;
  onDebounce?: (val: string) => void;
};
