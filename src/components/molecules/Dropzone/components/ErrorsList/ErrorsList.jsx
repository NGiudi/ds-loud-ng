import React from "react";

import { useDropzoneContext } from "../../Dropzone.context";

import { Panel } from "../../../../../";

export const ErrorsList = () => {
  const ctx = useDropzoneContext();

  return (
    <>
      {ctx.countMaxSizeError > 0 && (
        <Panel margin="t-16" type="error">
          {ctx.countMaxSizeError} {ctx.countMaxSizeError > 1 ? "archivos superan" : "archivo supera"}  el tamaño máximo permitido.
        </Panel>
      )}

      {ctx.countErrors > 0 && (
        <Panel margin="t-8" type="error">
          {ctx.countErrors} {ctx.countErrors > 1 ? "archivos tienen" : "archivo tiene"}  un formato inváido.
        </Panel>
      )}

      {ctx.maxFileError && (
        <Panel margin="t-8" type="error">
          Se ha superado la cantidad máxima de archivos.
        </Panel>
      )}
    </>
  )
}
