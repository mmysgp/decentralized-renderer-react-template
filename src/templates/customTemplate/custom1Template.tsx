import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { Custom1TemplateCertificate } from "../samples/custom1TemplateSample";
import { Certificate} from "../common/certificate";

const style = css`
  pre {
    background-color: lightgray;
    overflow-wrap: anywhere;
    white-space: break-spaces;
  }
`;

export const Custom1Template: FunctionComponent<TemplateProps<Custom1TemplateCertificate>> = Certificate({
  logo: "test",
  left: true
});