import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

import { validateSizeFile, validateTypeFile } from "../../../utils/files/files";

const DropzoneContext = createContext({});

export const useDropzoneContext = () => useContext(DropzoneContext);

export const DropzoneProvider = (props) => {
  const { accept, children, maxCount, maxSize } = props;

  const [selectedFiles, setSelectedFiles] = useState([]);

  const [countMaxSizeError, setCountMaxSizeError] = useState(0);
  const [maxFileError, setMaxFileError] = useState(false);
  const [countErrors, setCountErrors] = useState(0);

  const updateSelectedFiles = (files) => {
    setSelectedFiles((prevFiles) => {
      files = Array.from(files);
      
      const filesFiltered = files.filter((file) => validateTypeFile(file, accept));
      const countTypeError = files.length - filesFiltered.length;

      const filesFiltered2 = files.filter((file) => validateSizeFile(file, maxSize));
      const countMaxSizeError = filesFiltered.length - filesFiltered2.length;

      let allFiles = [...prevFiles, ...filesFiltered2]; 
      
      //? set errors
      setCountErrors(countTypeError);
      setCountMaxSizeError(countMaxSizeError);

      if (maxCount > 0) {
        setMaxFileError(allFiles.length > maxCount);
        allFiles = allFiles.slice(0, maxCount);
      }

      return allFiles;
    });
  }

  const deleteSelectedFiles = (idx) => {
    //? set errors
    setCountErrors(0);
    setMaxFileError(false);
    setCountMaxSizeError(0);

    setSelectedFiles((prevFiles) => {
      if (idx > -1 && idx < prevFiles.length) {
        prevFiles.splice(idx, 1);
      }

      return [...prevFiles];
    });
  }

  const handleDrop = (e) => {
    e.preventDefault();
    updateSelectedFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileChange = (e) => {
    updateSelectedFiles(e.target.files);
  };

  return (
    <DropzoneContext.Provider
      value={{
        countErrors,
        countMaxSizeError,
        deleteSelectedFiles,
        handleDragOver,
        handleDrop,
        handleFileChange,
        maxFileError,
        selectedFiles,
      }}
    >
      {children}
    </DropzoneContext.Provider>
  );
};

DropzoneProvider.propTypes = {
  children: PropTypes.node,
};
