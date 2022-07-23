import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates as customTemplate } from "./customTemplate";
import styled from "@emotion/styled";
import { CustomTemplate } from "./customTemplate/customTemplate";
import { templates as NP_AA2018_MAIN_Template } from "./NP-AA2018-MAIN";

export const registry: TemplateRegistry<any> = {
  custom: customTemplate,
  red: [
    {
      id: "custom-red",
      label: "Red Custom Template",
      template: styled(CustomTemplate)`
        color: red;
      `
    }
  ],
  NP_AA2018_MAIN: NP_AA2018_MAIN_Template
};
