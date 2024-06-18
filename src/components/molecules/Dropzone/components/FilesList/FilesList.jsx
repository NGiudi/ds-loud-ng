import React from "react";

import { useDropzoneContext } from '../../Dropzone.context';

import { FileItem } from "../FileItem/FileItem";

export const FilesList = (props) => {
  const { name } = props;

  const ctx = useDropzoneContext();

  if (ctx.selectedFiles.length > 0) {
    return (
      <>
        {ctx.selectedFiles.map((file, idx) => (
          <FileItem file={file} idx={idx} key={`dropzone-${name}-file-${idx}`}/>
        ))}
      </>
    );
  }
  
  return null;
}
