import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates as customTemplate } from "./customTemplate";
import styled from "@emotion/styled";
import { CustomTemplate } from "./customTemplate/customTemplate";
import { templates as NP_AA2018_MAIN_Template } from "./NP-AA2018-MAIN";
import { templates as V2_NP_AA2022_FT_MAIN_Template } from "./V2_NP_AA2022_FT_MAIN";
import { templates as V2_NP_AA2022_PLP_Template } from "./V2_NP_AA2022_PLP";

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
  NP_AA2018_MAIN: NP_AA2018_MAIN_Template,
  V2_NP_AA2022_FT_MAIN: V2_NP_AA2022_FT_MAIN_Template,
  V2_NP_AA2022_PLP: V2_NP_AA2022_PLP_Template
};
