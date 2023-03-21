import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// 🦄 Wow so easy!

export const myToast = (text) => {
  toast(text, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
