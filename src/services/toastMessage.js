import { toast } from "react-toastify";

export const toastMessage = (msg, type) => {
  if (type === "error") {
    toast.error(msg, {
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
    return;
  } else if (type === "success") {
    toast.success(msg, {
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
  } else if (type === "info") {
    toast.info(msg, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
};
