import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const ApplyForVacancyFormVM = () => {
  const methods = useForm<any>({
    values: "",
  });

  const onSubmit = () => {};
  const onError = () => {};

  const submitHandler = methods.handleSubmit(onSubmit, onError);

  return {
    methods,
    submitHandler,
  };
};
