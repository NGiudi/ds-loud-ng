import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";

import { useFormikContext } from "formik";

import { isValidSizeFile, isValidTypeFile } from "../../../utils/files/files";

const DropzoneContext = createContext({});

export const useDropzoneContext = () => React.useContext(DropzoneContext);

const DELETE_FILE = "delete_file";
const ADD_FILE = "add_file";

const INITIAL_STATE = {
  fileItems: [],
  successCount: 0,
};

export const DropzoneProvider = (props) => {
  const { accept, children, maxCount, maxSize, name } = props;

  const { setFieldValue } = useFormikContext();

  const fileReducer = (state, action) => {
    let res = { ...state };

    switch (action.type) {
      case ADD_FILE:
        if (!isValidTypeFile(action.payload, accept)) {
          //? type error.
          res.fileItems = [
            ...state.fileItems,
            {
              code: 1,
              file: action.payload,
              status: "error",
            },
          ];
        } else if (!isValidSizeFile(action.payload, maxSize)) {
          //? size error.
          res.fileItems = [
            ...state.fileItems,
            {
              code: 2,
              file: action.payload,
              status: "error",
            },
          ];
        } else if (state.successCount >= maxCount) {
          //? items error.
          res.fileItems = [
            ...state.fileItems,
            {
              code: 3,
              file: action.payload,
              status: "error",
            },
          ];
        } else {
          //? success.
          res.fileItems = [
            {
              code: 0,
              file: action.payload,
              status: "success",
            },
            ...state.fileItems,
          ];

          res.successCount += 1;
        }

        return res;

      case DELETE_FILE:
        if (action.payload > -1 && action.payload < state.fileItems.length) {
          let deletedFiles = res.fileItems.splice(action.payload, 1);

          if (deletedFiles[0].status === "success") {
            res.successCount -= 1;
          }
        }

        return res;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fileReducer, INITIAL_STATE);

  React.useEffect(() => {
    const successfulFiles = state.fileItems.slice(0, state.successCount);
    setFieldValue(name, successfulFiles);
  }, [state.fileItems, state.successCount]);

  const updateSelectedFiles = (files) => {
    files = Array.from(files);

    files.forEach((file) => {
      dispatch({ payload: file, type: ADD_FILE });
    });
  };

  const deleteSelectedFiles = (idx) => {
    dispatch({ payload: idx, type: DELETE_FILE });
  };

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
        deleteSelectedFiles,
        handleDragOver,
        handleDrop,
        handleFileChange,
        fileItems: state.fileItems,
      }}
    >
      {children}
    </DropzoneContext.Provider>
  );
};

DropzoneProvider.propTypes = {
  accept: PropTypes.array,
  children: PropTypes.node,
  maxCount: PropTypes.number,
  maxSize: PropTypes.number,
  name: PropTypes.string,
};
