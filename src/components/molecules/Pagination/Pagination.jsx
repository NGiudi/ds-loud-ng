import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

/* components */
import { PaginateButton } from "./components";
import { IconButton, Icon } from "../../../";

/* styles */
import { Styles } from "./Pagination.styles";

/* utiils */
import { getWrapperOptionsFilter } from "./utils/propsFilter";

import { createPaginateList } from "./utils/pages";

export const Pagination = (props) => {
  const { nButtons, onChange, page, pages } = props;

  const wrapperOptions = getWrapperOptionsFilter(props);

  const [currentPage, setCurrentPage] = useState(page);
  const [buttonsList, setButtonsList] = useState([]);

  useEffect(() => {
    //? create new buttons list.
    const buttonsList = createPaginateList(currentPage, pages, nButtons);
    setButtonsList(buttonsList);

    onChange && onChange(currentPage);
  }, [currentPage]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Styles.Wrapper {...wrapperOptions}>
      <IconButton
        disabled={currentPage === 1}
        icon={{ name: "chevron-left" }}
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
        disabled={currentPage === pages}
        icon={{ name: "chevron-right" }}
        onClick={() => setCurrentPage((prev) => prev + 1)}
      />
    </Styles.Wrapper>
  );
};

Pagination.propTypes = {
  nButtons: PropTypes.number,
  margin: PropTypes.string,
  onChange: PropTypes.func,
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
};

Pagination.defaultProps = {
  nButtons: 9,
  margin: "a-0",
  onChange: null,
  page: 1,
  pages: 1,
};
