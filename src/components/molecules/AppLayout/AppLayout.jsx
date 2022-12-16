import React from "react";
import PropTypes from "prop-types";

/* import components */
import { OfflineBadge } from "./components/OfflineBadge/OfflineBadge";
import { SideBar } from "./components/SideBar/SideBar";

/* import styles */
import { ContentBox, MainContent, TopBar } from "./AppLayout.styles";

export const AppLayout = (props) => {
  const { sidebar } = props;

  const sidebarButtons = sidebar ? sidebar.buttons : null;

  return (
    <>
      <TopBar padding="y-8 l-24">
        Logotipo
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
      })
    ),
  }),
};

AppLayout.defaultProps = {
  children: null,
  sidebar: null,
};
