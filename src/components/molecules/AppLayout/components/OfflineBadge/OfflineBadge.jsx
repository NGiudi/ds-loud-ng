import React from "react";

/* import hooks */
import { useOnlineStatus } from "../../../../../hooks/useOnlineStatus";

/* import components */
import { Icon, Text } from "../../../../../";

/* import styles */
import { Wrapper } from "./OfflineBadge.styles.js";

export const OfflineBadge = () => {
  const online = useOnlineStatus();

  return (
    <>
      {!online ? (
        <Wrapper>
          <Icon icon="circle-exclamation" margin="r-4" size="sm" />

          <Text size="sm" weight="semibold">
            Sin internet
          </Text>
        </Wrapper>
      ) : null}
    </>
  );
};
