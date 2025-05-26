import { toast } from "react-toastify";

import { EToastNotification } from "../../data/enum/toastNotificationEnum";
import { ErrorToastIconSVG, InfoToastIconSVG, SuccessToastIconSVG, WarningToastInfoIconSVG } from "@public/vectors";

const handleToast = (
  status: string,
  message: string,
  options: Record<string, any> = {
    icon: handleIcon(status),
  }
) => {
  toast.dismiss();

  const statusToast = {
    [EToastNotification.SUCCESS]: "success",
    [EToastNotification.ERROR]: "error",
    [EToastNotification.WARNING]: "warning",
    [EToastNotification.INFO]: "info",
  };

  const toastType =
    statusToast[status as EToastNotification] || EToastNotification.INFO;

  return toast[toastType as EToastNotification](message, options);
};
const handleIcon = (key: string) => {
  const statusKey = {
    [EToastNotification.SUCCESS]: (
      <SuccessToastIconSVG className="text-success-300" />
    ),
    [EToastNotification.ERROR]: <ErrorToastIconSVG className="text-error-300" />,
    [EToastNotification.WARNING]: (
      <WarningToastInfoIconSVG className="text-warning-300" />
    ),
    [EToastNotification.INFO]: <InfoToastIconSVG className="text-blue-500" />,
    default: null,
  };
  return statusKey[key as EToastNotification];
};
export const toastNotification = (
  status: string,
  message: string,
  options?: Record<string, any>
) => {
  return handleToast(status, message, options);
};
