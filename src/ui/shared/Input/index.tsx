import { InputType } from "./input.type";
import { InputVM } from "./Input.vm";

const Input = ({
  label,
  leading,
  trailing,
  name,
  type,
  isDebounce = false,
  placeholder,
  onChange,
  onDebounce,
  ...props
}: InputType) => {
  const { reg, hasMethods, methods, keyDownHandler, changeHandler } = InputVM({
    name,
    type,
    isDebounce,
    onDebounce,
    onChange,
  });

  return (
    <div className="w-full">
    <div
      className={[
        `font-inter group relative cursor-pointer flex items-center gap-x-4 px-4 border h-14 border-solid rounded-xl bg-gray-50 focus-within:border-gray-400 ${
          props?.disabled ? "bg-gray-100" : "bg-gray-50 text-black hover:bg-gray-100"
        }`,
        (hasMethods && methods.formState.errors[name])
          ? "border-red"
          : "border-softBlack",
      ].join(" ")}
    >
      {leading}
      <div className="relative h-full flex-grow">
        <input
          aria-label={name}
          id={name}
          type={type}
          placeholder={label ? " " : placeholder}
          className={[
            "w-full h-full peer text-16px500 bg-transparent font-inter placeholder-gray-500 group-hover:placeholder-black",
            label ? "pt-3" : "",
          ].join(" ")}
          onKeyDown={keyDownHandler}
          onChange={changeHandler}
          {...props}
          {...reg}
        />
  
        {label && (
          <label
            htmlFor={name}
            className="absolute text-16px500 text-gray-500 duration-300 font-inter transform -translate-y-1/2 scale-75 top-4 -left-0.5 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2  peer-placeholder-shown:-translate-y-1/2 peer-focus:top-4 peer-focus:scale-75"
          >
            {label}
          </label>
        )}
      </div>
      {trailing}
    </div>
    {hasMethods && methods.formState.errors[name] && (
      <span role="alert" className="text-red-500 text-14px400">
        {methods.formState.errors[name]!.message as string}
      </span>
    )}
  </div>
  
  );
};

export default Input;