import React from "react";

import { useNotify } from "../hooks/useNotify";

import { Button, ThemeDS } from "..";

const meta = {
  title: "hooks/Notification",
};

export const NotificationExample = () => {
  const { createNotify } = useNotify();

  const handleClick = () => {
    createNotify("Esta es la mejor notificación del mundo");
  };

  return (
    <ThemeDS>
      <Button onClick={handleClick}>Notificar</Button>
    </ThemeDS>
  );
};

export default meta;
