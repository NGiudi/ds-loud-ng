import React from "react";
import PropTypes from "prop-types";

import { DropzoneProvider } from "./Dropzone.context";

import { UploadFileBox } from "./components/UploadFileBox/UploadFileBox";
import { FilesList } from "./components/FilesList/FilesList";

import { Styles } from "./Dropzone.styles";

const DEFAULT_PROPS = {
  accept: [],
  margin: "a-0",
  maxCount: 0,
  maxSize: 0,
  name: "",
};

export const Dropzone = (props) => {
  const attrs = Object.assign({}, DEFAULT_PROPS, props);

  return (
    <DropzoneProvider
      accept={attrs.accept}
      maxCount={attrs.maxCount}
      maxSize={attrs.maxSize}
      name={attrs.name}
    >
      <Styles.Wraper $margin={attrs.margin}>
        <UploadFileBox accept={attrs.accept} maxSize={attrs.maxSize} />

        <FilesList name={attrs.name} />
      </Styles.Wraper>
    </DropzoneProvider>
  );
};

Dropzone.propTypes = {
  accept: PropTypes.array,
  margin: PropTypes.string,
  maxCount: PropTypes.number,
  maxSize: PropTypes.number,
  name: PropTypes.string,
};
