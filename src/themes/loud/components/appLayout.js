const borderWidth = 1; // px
const buttonXPadding = 12; // px
const bottomContentPadding = 2; // px
const contentHeight = 20; // px

const bottomHeight =
  contentHeight + buttonXPadding * 2 + borderWidth + bottomContentPadding * 2;

const content = {
  padding: "a-20",
};

const scroll = {
  width: "8px",
  radious: "4px",
};

const sidebar = {
  border: {
    width: `${borderWidth}px`,
  },
  bottomContent: {
    padding: `y-${bottomContentPadding}`,
  },
  content: {
    height: `${bottomHeight}px`,
  },
  button: {
    padding: `l-18 y-${buttonXPadding}`,
  },
  width: {
    contracted: "56px",
    expanded: "240px",
  },
};

const topbar = {
  height: "56px",
};

export const appLayout = {
  content,
  scroll,
  sidebar,
  topbar,
};
