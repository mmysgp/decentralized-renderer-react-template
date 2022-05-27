import React from "react";
import { css } from "@emotion/core";
export const style = css`
  pre {
    background-color: blue;
    overflow-wrap: anywhere;
    white-space: break-spaces;
  }
`;

export const renderFunction = (document) => (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-6 text-left">
          <h1>Tile rendered from a common function:  {document?.foo?.title}</h1>
        </div>
      </div>
    </div>
  );

export const Certificate = ({logo, left}) => ({ document })=> (
<div css={style} className="center" id="custom-template">
      <div>
        <h1>logo: {logo}   left: {left}</h1>
        <h1>{document?.foo?.title ?? "Default title"}</h1>
        <pre>{JSON.stringify(document, null, 2)}</pre>
      </div>
</div>
);