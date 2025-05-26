import { toastNotification } from "@/core/utils/toastNotification";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const ContactUsFormVM = () => {
const [isPending, startTransition] = useTransition();
  const methods = useForm<any>({
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form data submitted:", data);
   startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Sorğunuz göndərildi");
      methods.reset();
    })
  };

  const submitHandler = methods.handleSubmit(onSubmit);

  return {
    methods,
    submitHandler,
    isPending
  };
};
