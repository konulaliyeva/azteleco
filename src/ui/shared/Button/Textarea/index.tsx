import { ChangeEvent, useState } from "react";
import { TTextarea } from "./TTextarea";
import { useDebounce } from "@/core/hooks/useDebounce";
import { useUpdateEffect } from "@/core/hooks/useUpdateEffect";
import { twMerge } from "tailwind-merge";
import { useFormContext } from "react-hook-form";

const TextArea = ({
  label,
  leading,
  trailing,
  name,
  placeholder,
  rows,
  value,
  className,
  isDebounce = true,
  onChange,
  onDebounce,
  ...props
}: TTextarea) => {
  const methods: any = useFormContext();

  const [innerValue, setInnerValue] = useState<string | null>(null);
  const [dirty, setDirty] = useState(false);
  const debouncedValue = useDebounce<string>(innerValue!, 500);
  const reg = !!methods ? { ...methods.register?.(name) } : undefined;
  const hasMethods = methods && methods.formState;

  useUpdateEffect(() => {
    dirty && isDebounce && onDebounce?.(innerValue!);
  }, [debouncedValue]);
  return (
    <div className="w-full mb-2">
      <textarea
        rows={rows}
        aria-label={name}
        id={name}
        {...props}
        {...reg}
        // value={value}
        placeholder={placeholder}
        className={twMerge(
          `border rounded-xl w-full px-4 pt-4 h-40 peer text-15px400 resize-none font-inter bg-gray-50
           placeholder-gray-500 hover:bg-gray-100 hover:placeholder-black
           ${hasMethods && Boolean(methods.formState.errors[name]) && "border-red-500"}`,
          className
        )}
        
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
          isDebounce && setInnerValue(e.target.value);
          !dirty && setDirty(true);
          // setValue(e.target.value)
          onChange?.(e.target.value);
        }}
      />
      {hasMethods && methods.formState.errors[name] && (
        <span role="alert" className="text-error-500 text-14px400">
          {methods.formState.errors[name].message}
        </span>
      )}
    </div>
  );
};

export default TextArea;
