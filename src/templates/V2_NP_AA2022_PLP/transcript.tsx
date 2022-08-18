import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { FTTemplateCertificate } from "../samples/ftTemplateSample";
import Transcript from "../common/transcript";
import { IMG_LOGO_SEED } from "../common/images";

const style = css`
  pre {
    background-color: lightgray;
    overflow-wrap: anywhere;
    white-space: break-spaces;
  }
`;

export const TranscriptTemplate: FunctionComponent<TemplateProps<FTTemplateCertificate>> = Transcript({
  logo: IMG_LOGO_SEED,
  left: false
});