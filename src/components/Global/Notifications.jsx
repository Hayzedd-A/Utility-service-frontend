// import { NotificationManager } from "react-notifications";

// import "react-notifications/lib/notifications.css";

// function Notification(status, text, timeout = 5000) {
//   //   const createNotification = (type) => {
//   return () => {
//     switch (status) {
//       case "info":
//         NotificationManager.info(text.body);
//         break;
//       case "success":
//         NotificationManager.success(text.body, text.title, timeout);
//         break;
//       case "warning":
//         NotificationManager.warning(text.body, text.title, 6000);
//         break;
//       case "error":
//         NotificationManager.error(text.body, text.title, 7000);
//         break;
//     }
//   };
// }
// export default Notification;

import React from "react";
import toast from "react-hot-toast";

function Notify(status, text, timeout = 5000) {
  const content = (
    <span>
      <h4 style={{ textTransform: "uppercase" }}>{text.title}</h4>
      <i>{text.body}</i>
    </span>
  );
  return () => {
    switch (status) {
      case "success":
        toast.success(content);
        break;
      case "info":
        toast(content);
        break;
      case "error":
        toast.error(content);
        break;
      case "warning":
        toast.warning(content);
        break;
      default:
        toast(content);
        break;
    }
  };
}
export default Notify;
