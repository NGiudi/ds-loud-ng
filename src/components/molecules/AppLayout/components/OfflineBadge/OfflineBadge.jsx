import React from "react";

import { useOnlineStatus } from "../../../../../hooks/useOnlineStatus";

import { Icon, Text } from "../../../../../";

import { Wrapper } from "./OfflineBadge.styles.js";

export const OfflineBadge = () => {
  const online = useOnlineStatus();

  return (
    <>
      {!online ? (
        <Wrapper>
          <Icon icon="circle-exclamation" margin="r-4" size="sm" />

          <Text type="captionSemibold">Sin internet</Text>
        </Wrapper>
      ) : null}
    </>
  );
};
