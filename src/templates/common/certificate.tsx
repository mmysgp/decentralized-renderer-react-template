import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
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

export type TemplateParam = Readonly<{
  logo: string
  left: boolean
}>

export default (param?: TemplateParam) => ({document})=> (
<div css={style} className="center" id="custom-template">
      <div>
        <h1>logo: {param?.logo}   left: {String(param?.left)}</h1>
        <h1>{document?.foo?.title ?? "Default title"}</h1>
        <pre>{JSON.stringify(document, null, 2)}</pre>
      </div>
</div>
);