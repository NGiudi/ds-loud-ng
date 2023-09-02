import React from "react";

import { Button, ThemeDS } from "../../";

import { createNotify } from "../../utils/services/notificacions";

const story = { title: "Test/Notification" };

export const NotificationExample = () => {
  const handleClick = () => {
    createNotify("Esta es la mejor notificación del mundo");
  };

  return (
    <ThemeDS>
      <Button onClick={handleClick}>Notificar</Button>
    </ThemeDS>
  );
};

export default story;
