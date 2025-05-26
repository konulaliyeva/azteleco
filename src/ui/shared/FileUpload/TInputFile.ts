import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export type TFileUpload = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  any & {
    value: File;
    dataError: string;
    disabled?: boolean;
    onChange: (data: File | undefined) => void;
    error?: FieldError | any;
    hasView?: boolean;
  };
