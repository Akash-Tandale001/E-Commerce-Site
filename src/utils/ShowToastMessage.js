import { toast } from "react-toastify";

export const showToastMessage = (messageType, message) => {
  return toast[messageType](message, {
    position: "top-right",
    autoClose: 8000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
