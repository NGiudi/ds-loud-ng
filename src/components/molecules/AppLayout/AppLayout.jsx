import React from "react";
import PropTypes from "prop-types";

import { OfflineBadge, ProfileAvatar, SideBar } from "./components";
import { Flex } from "../../../";

import { ContentBox, MainContent, TopBar } from "./AppLayout.styles";

const DEFAULT_PROPS = {
  children: null,
  sidebar: null,
  topbar: null,
};

export const AppLayout = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const sidebarButtons = attrs.sidebar ? attrs.sidebar.buttons : null;

  return (
    <>
      <TopBar $padding="x-24 y-8">
        {attrs.topbar && (
          <Flex hAlign="space-between">
            <div>{attrs.topbar.startContent}</div>

            <div>
              {attrs.topbar.endContent}

              <ProfileAvatar {...attrs.topbar.avatarProps} pos="right" />
            </div>
          </Flex>
        )}

        <OfflineBadge />
      </TopBar>

      <MainContent>
        <SideBar buttons={sidebarButtons} />

        <ContentBox>{props.children}</ContentBox>
      </MainContent>
    </>
  );
};

//TODO: usar las propTypes de los componentes internos para los botones, etc.
AppLayout.propTypes = {
  children: PropTypes.node,
  sidebar: PropTypes.shape({
    buttons: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
          .isRequired,
        label: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
      }),
    ),
  }),
  topbar: PropTypes.shape({
    avatarProps: PropTypes.object,
    endContent: PropTypes.node,
    startContent: PropTypes.node,
  }),
};