import { toast } from "react-toastify";

export const toastMessage = (msg, type = "success") => {
  if (type !== "success") {
    toast.error(msg, {
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
    return;
  }

  toast.success(msg, {
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
  });
};
