import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { PaginateButton } from "./components";
import { IconButton, Icon } from "../../../";

import { Styles } from "./Pagination.styles";

import { createPaginateList } from "./utils/pages";

const DEFAULT_PROPS = {
  margin: "a-0",
  nButtons: 9,
  onChange: () => {},
  page: 1,
  pages: 1,
};

export const Pagination = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const [currentPage, setCurrentPage] = useState(attrs.page);
  const [buttonsList, setButtonsList] = useState([]);

  useEffect(() => {
    //? create new buttons list.
    const buttonsList = createPaginateList(
      currentPage,
      attrs.pages,
      attrs.nButtons,
    );
    setButtonsList(buttonsList);

    attrs.onChange && attrs.onChange(currentPage);
  }, [currentPage]);

  return (
    <Styles.Wrapper $margin={attrs.margin}>
      <IconButton
        disabled={currentPage === 1}
        icon={{ icon: "chevron-left" }}
        onClick={() => setCurrentPage((prev) => prev - 1)}
      />

      {buttonsList.map((button, idx) => {
        if (button === 0) {
          return (
            <Icon
              icon="ellipsis"
              key={`ellipsis-pagination-${idx}`}
              margin="x-14"
              size="sm"
            />
          );
        } else {
          return (
            <PaginateButton
              key={button}
              onClick={() => setCurrentPage(button)}
              kind={currentPage === button ? "solid" : "outlined"}
            >
              {button}
            </PaginateButton>
          );
        }
      })}

      <IconButton
        disabled={currentPage === attrs.pages}
        icon={{ icon: "chevron-right" }}
        onClick={() => setCurrentPage((prev) => prev + 1)}
      />
    </Styles.Wrapper>
  );
};

Pagination.propTypes = {
  margin: PropTypes.string,
  nButtons: PropTypes.number,
  onChange: PropTypes.func,
  page: PropTypes.number,
  pages: PropTypes.number.isRequired,
};