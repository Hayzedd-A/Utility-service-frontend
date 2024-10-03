import { NotificationManager } from "react-notifications";

import "react-notifications/lib/notifications.css";

function Notification(status, text, timeout = 5000) {
  //   const createNotification = (type) => {
  return () => {
    switch (status) {
      case "info":
        NotificationManager.info(text.body);
        break;
      case "success":
        NotificationManager.success(text.body, text.title, timeout);
        break;
      case "warning":
        NotificationManager.warning(text.body, text.title, 6000);
        break;
      case "error":
        NotificationManager.error(text.body, text.title, 7000);
        break;
    }
  };
}
export default Notification;
