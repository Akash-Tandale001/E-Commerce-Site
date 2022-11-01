import { toast, ToastContainer } from "react-toastify";

export const showToastMessage = (messageType, message) => {
  // return toast[messageType](message, {
  //   position: "top-right",
  //   autoClose: 8000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  // });
  return toast(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  // return (
  //   <ToastContainer
  //     position="top-right"
  //     autoClose={5000}
  //     hideProgressBar={false}
  //     newestOnTop={false}
  //     closeOnClick
  //     rtl={false}
  //     pauseOnFocusLoss
  //     draggable
  //     pauseOnHover
  //     theme="light"
  //   >
  //   {
  //     message
  //   }
  //   <ToastContainer />;
  //   );
}
