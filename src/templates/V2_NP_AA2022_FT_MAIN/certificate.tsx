import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { FTMain22TemplateCertificate } from "../samples";
import Certificate from "../common/certificate";

const style = css`
  pre {
    background-color: lightgray;
    overflow-wrap: anywhere;
    white-space: break-spaces;
  }
`;

export const CertrificateTemplate: FunctionComponent<TemplateProps<FTMain22TemplateCertificate>> = Certificate();