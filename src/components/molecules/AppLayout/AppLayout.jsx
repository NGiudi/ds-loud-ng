import React from "react";
import PropTypes from "prop-types";

import { OfflineBadge, ProfileAvatar, SideBar } from "./components";
import { Flex } from "../../../";

import { ContentBox, MainContent, TopBar } from "./AppLayout.styles";

export const AppLayout = (props) => {
  const { sidebar, topbar } = props;

  const sidebarButtons = sidebar ? sidebar.buttons : null;

  return (
    <>
      <TopBar $padding="x-24 y-8">
        {topbar && (
          <Flex hAlign="space-between">
            <div>
              {topbar.startContent}
            </div>

            <div>
              {topbar.endContent}

              <ProfileAvatar pos="right">
                {topbar.avatarPanel}
              </ProfileAvatar>
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
    endContent: PropTypes.node,
    startContent: PropTypes.node,
  }),
};

AppLayout.defaultProps = {
  children: null,
  sidebar: null,
  topbar: null,
};
