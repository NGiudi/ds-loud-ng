import React from "react";
import PropTypes from "prop-types";

import { useDropzoneContext } from "../../Dropzone.context";

import { Flex, Icon, IconButton, Text } from "../../../../../";

import { convertBytes } from "../../../../../utils/files/files";

import { Styles } from "./FileItem.styles";

export const FileItem = (props) => {
  const { fileItem, idx } = props;

  const ctx = useDropzoneContext();

  const handleDelete = () => {
    ctx.deleteSelectedFiles(idx);
  };

  const convertErrorInText = () => {
    const errorsList = [
      "El formato del archivo es inválido.",
      "El tamaño del archivo supera el máximo permitido.",
      "La cantidad de archivos supera la máxima cantidad permitida.",
    ];

    return errorsList[fileItem.code - 1];
  };

  return (
    <Styles.FileItem
      $isLastItem={idx === ctx.fileItems.length - 1}
      $status={fileItem.status}
    >
      <Flex>
        <Icon color="black_600" icon="file" margin="r-16" />

        <div>
          <Text>{fileItem.file.name}</Text>

          <Text type="captionRegular">
            {fileItem.status === "error"
              ? convertErrorInText()
              : convertBytes(fileItem.file.size)}
          </Text>
        </div>
      </Flex>

      <IconButton icon={{ name: "close" }} onClick={handleDelete} />
    </Styles.FileItem>
  );
};

FileItem.propTypes = {
  fileItem: PropTypes.shape({
    code: PropTypes.number,
    file: PropTypes.object,
    status: PropTypes.string,
  }),
  idx: PropTypes.number,
};
