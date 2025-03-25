import React from "react";
import PropTypes from "prop-types";

import { useDropzoneContext } from "../../Dropzone.context";

import { FileItem } from "../FileItem/FileItem";

import { Styles } from "../../Dropzone.styles";

export const FilesList = (props) => {
  const { name } = props;

  const ctx = useDropzoneContext();

  if (ctx.fileItems.length > 0) {
    return (
      <Styles.ListWrapper>
        {ctx.fileItems.map((fileItem, idx) => (
          <FileItem
            fileItem={fileItem}
            idx={idx}
            key={`dropzone-${name}-file-${idx}`}
          />
        ))}
      </Styles.ListWrapper>
    );
  }

  return null;
};

FilesList.propTypes = {
  name: PropTypes.string,
};