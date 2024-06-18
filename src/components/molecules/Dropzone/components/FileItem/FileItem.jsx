import React from "react";

import { useDropzoneContext } from "../../Dropzone.context";

import { Flex, Icon, IconButton, Text } from "../../../../../";

import { convertBytes } from "../../../../../utils/files/files";

import { Styles } from "./FileItem.styles";

export const FileItem = (props) => {
  const { file, idx } = props;

  const ctx = useDropzoneContext();

  const handleDelete = () => {
    ctx.deleteSelectedFiles(idx);
  };

  return (
    <Styles.FileItem>
      <Flex>
        <Icon color="black_600" icon="file" margin="r-16" />

        <div>
          <Text>
            {props.file.name}
          </Text>
          
          <Text type="captionRegular">
            {convertBytes(file.size)}
          </Text>
        </div>
      </Flex>

      <IconButton icon={{ name: "close" }} onClick={handleDelete} />
    </Styles.FileItem>
  )
}
