import React from "react";

import { useDropzoneContext } from "../../Dropzone.context";

import { Icon, Text } from "../../../../../";

import { convertBytes, fileTypesString } from "../../../../../utils/files/files";

import { Styles } from "./UploadFileBox.styles";

export const UploadFileBox = (props) => {
  const { accept, maxSize } = props;

  const ctx = useDropzoneContext();
  
  const validTypesString = (array) => {
    return array.map((type) => {
      switch(type) {
        case "image":
          return "imágenes";
        default:
          return type;
      }
    });
  };

  return (
    <Styles.UploadFileBox
      onDragOver={ctx.handleDragOver}
      onDrop={ctx.handleDrop}
    >
      <Icon
        color="black_400"
        icon="cloud-arrow-up"
        margin="b-8"
        size="xl"
      />

      <Text align="center" color="black_600" type="subtitle">
        Arrastre aquí o haga click para cargar archivos
      </Text>

      {(accept.length > 0 || maxSize !== 0) && (
        <Text margin="t-16" align="center">
          {accept.length > 0  && (
            <>
              Se aceptan:{" "}
              <Text as="span" type="bodySemibold">
                {validTypesString(accept).join(", ")}
              </Text>
            </>
          )}

          {(accept.length > 0 && maxSize !== 0) && " | "}
          
          {maxSize !== 0  && (
            <>
              Tamñano máximo:{" "}
              <Text as="span" type="bodySemibold">
                {convertBytes(maxSize)}
              </Text>
            </>
          )}
        </Text>
      )}

      <Styles.FileInput
        accept={fileTypesString(accept)}
        multiple
        onChange={ctx.handleFileChange}
        type="file"
      />
    </Styles.UploadFileBox>
  );
}
