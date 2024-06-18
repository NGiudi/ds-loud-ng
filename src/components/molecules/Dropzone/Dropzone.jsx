import React from 'react';
import PropTypes from "prop-types";

import { DropzoneProvider } from './Dropzone.context';

import { UploadFileBox } from "./components/UploadFileBox/UploadFileBox";
import { ErrorsList } from "./components/ErrorsList/ErrorsList";
import { FilesList } from "./components/FilesList/FilesList";

import { Styles } from "./Dropzone.styles";

const defaultProps = {
  accept: [],
  margin: "a-0",
  maxCount: 0,
  maxSize: 0,
  name: "",
  validTypes: [],
};

export const Dropzone = (props) => {
  const attrs = {
    ...defaultProps,
    ...props,
  };
  
  return (
    <DropzoneProvider
      accept={attrs.accept}
      maxCount={attrs.maxCount}
      maxSize={attrs.maxSize}
    >
      <Styles.Wraper $margin={attrs.margin}>
        <UploadFileBox accept={attrs.accept} maxSize={attrs.maxSize} />

        <ErrorsList />

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