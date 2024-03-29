import React from "react";
import PropTypes from "prop-types";

import { OfflineBadge } from "./components/OfflineBadge/OfflineBadge";
import { SideBar } from "./components/SideBar/SideBar";

import { ContentBox, MainContent, TopBar } from "./AppLayout.styles";

export const AppLayout = (props) => {
  const { sidebar, topbar } = props;

  const sidebarButtons = sidebar ? sidebar.buttons : null;

  return (
    <>
      <TopBar $padding="x-24 y-8">
        {topbar ? topbar.content : null}

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
    content: PropTypes.node,
  }),
};

AppLayout.defaultProps = {
  children: null,
  sidebar: null,
  topbar: null,
};
