/**
 * @param {string} message message in the notifications of the operating system.
 */
export const useNotify = () => {
  const createNotify = (message) => {
    //? let's check if the browser supports notifications
    if (!("Notification" in window)) {
      console.warn("This browser does not support desktop notification");
    }

    //? let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      //? if it's okay let's create a notification
      new Notification(message);
    }

    //? otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
      Notification.requestPermission((permission) => {
        //? if the user accepts, let's create a notification
        if (permission === "granted") {
          new Notification(message);
        }
      });
    }

    //? at last, if the user has denied notifications, and you
    //? want to be respectful there is no need to bother them any more.
  };

  return { createNotify };
};