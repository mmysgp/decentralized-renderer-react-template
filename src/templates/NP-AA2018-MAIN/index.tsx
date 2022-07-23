import styled from "@emotion/styled";
import { CertrificateTemplate } from "./certificate";
import { TranscriptTemplate } from "./transcript";

export const templates = [
  {
    id: "certificate",
    label: "Certificate",
    template: CertrificateTemplate
  },
  {
    id: "transcript",
    label: "Transcript",
    template: TranscriptTemplate
  }
];

